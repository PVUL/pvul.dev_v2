import fs from 'fs'
import matter from 'gray-matter'
import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { join } from 'path'
import { getPlaiceholder } from 'plaiceholder'

// import { getAuthorDetails } from '../../../lib/api'

export const postsDirectory = join(process.cwd(), '_content/posts')
const authorsDirectory = join(process.cwd(), '_content/authors')
const categoriesDirectory = join(process.cwd(), '_content/categories')
const tagsDirectory = join(process.cwd(), '_content/tags')

/**
 * Returns a list of posts sub-directories located at `_content/posts/`.
 *
 * @returns string[]
 */
const getPostsSubDirectories = () => fs.readdirSync(postsDirectory)

/**
 * Returns frontmatter data from a filepath.
 *
 * @param path
 * @returns frontmatter
 */
const getFrontmatterFromPath = (path: string) => {
  const fileContents = fs.readFileSync(path, 'utf-8')
  return matter(fileContents)
}

/**
 * Returns author info given an author slug.
 *
 * @param authorSlug
 * @returns {}
 */
const getAuthor = (authorSlug: string) => {
  const { data } = getFrontmatterFromPath(
    join(authorsDirectory, `${authorSlug}.md`)
  )

  return {
    name: data.title,
    twitter: data.twitter,
    image: data.image,
    shortBio: data.shortBio,
    slug: authorSlug,
  }
}

/**
 * Returns category info given a category slug.
 *
 * @param categorySlug
 * @returns {}
 */
const getCategory = (categorySlug: string) => {
  const { data } = getFrontmatterFromPath(
    join(categoriesDirectory, `${categorySlug}.md`)
  )

  return {
    ...data,
    title: data.title,
    slug: categorySlug,
  }
}

/**
 * Returns tag info given a tag slug.
 *
 * @param tagSlug
 * @returns {}
 */
const getTag = (tagSlug: string) => {
  const { data } = getFrontmatterFromPath(join(tagsDirectory, `${tagSlug}.md`))

  return {
    ...data,
    title: data.title,
    slug: tagSlug,
  }
}

// @note will have to watch our for duplicate title name collisions.
// luckily, i'm the only one posting, so this shouldn't be an issue.

/**
 * Get post source, used on a post show page. Based on a slug, will
 * look for a filename match in `_content/posts/` sub-directories.
 *
 * example:
 * slug = 'test-slide'
 *
 *
 * @param slug
 * @returns {}
 */
export const getPostSource = async (slug: string) => {
  const filePath = getPostsSubDirectories()
    .reduce(
      (files, sub) =>
        files.concat(
          ...fs
            .readdirSync(join(postsDirectory, sub))
            .map((file) => join(sub, file))
        ),
      [] as string[]
    )
    .find((file) => file.endsWith(`_${slug}.mdx`))

  if (!filePath) return {}

  const { data, content } = getFrontmatterFromPath(
    join(postsDirectory, filePath)
  )
  const mdxSource = await serialize(content)

  return {
    source: mdxSource,
    frontmatter: {
      ...data,
      author: getAuthor(data.author), // was getAuthorDetails, @todo confirm this is working
      // NOTE: need to json parse and stringify, otherwise sets the value to an object not string
      publishedAt: JSON.parse(JSON.stringify(data.publishedAt)),
    },
    placeholderImage: await getPlaiceholder(data.coverImage),
  }
}

/**
 * Get the post by filename, used by getPosts().
 *
 * Note: fileName format `category/YYYY-MM-DD_name-of-post.mdx`
 *       slug format `name-of-post`
 *       url path `/posts/name-of-post
 *
 * @param fileName
 * @param fields
 * @param nested
 * @returns {}
 */
export const getPost = (
  fileName: string,
  fields: string[] | undefined = undefined,
  nested = false
) => {
  const slug = fileName
    .split('_')
    .pop()
    ?.replace(/\.mdx$/, '')

  const { data, content } = getFrontmatterFromPath(
    join(postsDirectory, fileName)
  )

  const category =
    nested &&
    data?.category &&
    (!fields || fields.length === 0 || fields.includes('category'))
      ? getCategory(data.category)
      : data.category

  const author =
    nested &&
    data?.author &&
    (!fields || fields.length === 0 || fields.includes('author'))
      ? getAuthor(data.author)
      : data.author

  const tags: MarkdownFileBase[] = []

  if (nested && data.tags && data.tags.length > 0) {
    data.tags.forEach((tag: string) => tags.push(getTag(tag)))
  } else if (data?.tags) {
    tags.push(...data.tags)
  }

  const post: { [x: string]: any } = {
    ...data,
    slug,
    author,
    category,
    tags,
    content,
    // NOTE: need to json parse and stringify, otherwise sets the value to an object not string
    publishedAt: JSON.parse(JSON.stringify(data.publishedAt)),
  }

  if (fields !== undefined && fields.length) {
    const filteredPost: { [x: string]: any } = { slug }

    fields.forEach((field) => {
      if (field !== slug && post[field]) {
        filteredPost[field] = post[field]
      }
    })

    return filteredPost
  }

  return post
}

/**
 * Get posts. Looks in `_content/posts/` sub-directories for .mdx files.
 *
 * @param fields if undefined, fields are not used for filtering
 * @returns post[]
 */
export const getPosts = (fields: string[] | undefined = undefined) => {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames: string[] = []
  getPostsSubDirectories().forEach((subDir: string) => {
    const subFiles = fs
      .readdirSync(join(postsDirectory, subDir))
      .map((file) => join(subDir, file))
    fileNames.push(...subFiles)
  })

  return fileNames
    .map((fileName) => getPost(fileName, fields, true))
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))
}

/**
 * Next handler.
 *
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const queryFields = req.query?.fields?.toString()

  const fields = []
  if (queryFields) {
    fields.push(...queryFields.split(','))
  }

  const content = getPosts(fields)
  res.status(200).json(content)
}
