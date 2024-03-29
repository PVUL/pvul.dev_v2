import fs from 'fs'
import matter from 'gray-matter'
import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { join } from 'path'
import { getPlaiceholder } from 'plaiceholder'
import { STATUS } from '../../../utils/constants'

export const postsDirectory = join(process.cwd(), '_content/posts')
export const categoriesDirectory = join(process.cwd(), '_content/categories')
export const tagsDirectory = join(process.cwd(), '_content/tags')
const authorsDirectory = join(process.cwd(), '_content/authors')

/**
 * Returns a list of posts sub-directories located at `_content/posts/`.
 *
 * @returns string[] list of subdirectory folder names
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
      author: getAuthor(data.author),
      // NOTE: need to json parse and stringify, otherwise sets the value to an object not string
      postDate: JSON.parse(JSON.stringify(data.postDate)),
      image: {
        ...data.image,
        placeholder: (await getPlaiceholder(data.image.url)).base64,
      },
    },
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

  const tags: MarkdownFileObject[] = []

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
    postDate: JSON.parse(JSON.stringify(data.postDate)),
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

export const getPostsByTag = (
  tag: string,
  fields: string[] | undefined = undefined
) => {
  const updatedFields = fields && fields.length > 0 ? [...fields, 'tags'] : []
  const posts = getPosts(updatedFields)

  for (let i = posts.length - 1; i >= 0; i--) {
    const post = posts[i]

    if (!post.tags) continue

    if (typeof (post.tags as string[])[0] === 'string') {
      if (!(post.tags as string[]).includes(tag)) {
        posts.splice(i, 1)
      } else {
        // delete post.tags
      }
    } else {
      let hasTag = false

      for (let i = 0; i < post.tags.length; i++) {
        const element = post.tags[i]

        if (element.slug === tag) {
          hasTag = true
          break
        }
      }

      if (!hasTag) {
        posts.splice(i, 1)
      } else {
        // delete post.tags
      }
    }
  }

  return posts
}

/**
 * Returns a list of posts file names from the posts sub-directories
 *
 * @returns [] list of file names
 */
const getPostsFileNames = () => {
  const fileNames: string[] = []
  if (fs.existsSync(postsDirectory)) {
    getPostsSubDirectories().forEach((subDir: string) => {
      const subFiles = fs
        .readdirSync(join(postsDirectory, subDir))
        .map((file) => join(subDir, file))
      fileNames.push(...subFiles)
    })
  }
  return fileNames
}

/**
 * Get posts. Looks in `_content/posts/` sub-directories for .mdx files.
 *
 * @param fields if undefined, fields are not used for filtering
 * @returns post[]
 */
export const getPosts = (fields: string[] | undefined = undefined) =>
  getPostsFileNames()
    .map((fileName) => getPost(fileName, fields, true))
    .filter(
      (post) =>
        post.status === STATUS.POSTED || process.env.NODE_ENV === 'development'
    )
    .sort((a, b) => (a.postDate > b.postDate ? -1 : 1))

/**
 * Get posts with placeholder images. This is work around due to getPlaiceholder using promises.
 *
 * @param fields
 * @returns [] posts
 */
export const getPostsWithPlaceholderImages = async (
  fields: string[] | undefined = undefined
) => {
  const posts: any[] = []
  await Promise.all(
    getPosts(fields).map(async (post) => {
      const placeholder = (await getPlaiceholder(post.image.url)).base64
      posts.push({ ...post, image: { ...post.image, placeholder } })
    })
  )

  return posts
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
