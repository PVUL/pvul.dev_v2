import fs from 'fs'
import { join } from 'path'

import matter from 'gray-matter'
import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'next-mdx-remote/serialize'

// import { getAuthorBySlug } from '../authors'
// import { getCategoryBySlug } from '../categories'
// import { getTagBySlug } from '../tags'

// const md = require('markdown-it')()

export const postsDirectory = join(process.cwd(), '_content/posts')
const authorsDirectory = join(process.cwd(), '_content/authors')
const categoriesDirectory = join(process.cwd(), '_content/categories')
const tagsDirectory = join(process.cwd(), '_content/tags')

// maybe break out into authors api
const getAuthor = (authorSlug: string) => {
  // we can probably create a generic function that encapsulates the below

  const fullPath = join(authorsDirectory, `${authorSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  return {
    name: data.title,
    twitter: data.twitter,
    image: data.image,
    shortBio: data.shortBio,
    slug: authorSlug,
  }
}

// maybe break out into categories api
const getCategory = (categorySlug: string) => {
  const fullPath = join(categoriesDirectory, `${categorySlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  return {
    ...data,
    // title: data.title,
    slug: categorySlug,
  }
}

const getTag = (tagSlug: string) => {
  const fullPath = join(tagsDirectory, `${tagSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  return {
    ...data,
    // title: data.title,
    slug: tagSlug,
  }
}

export const getPostSource = async (slug: string) => {
  const fullPath = join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const mdxSource = await serialize(content)

  return {
    source: mdxSource,
    frontmatter: data,
  }
}

export const getPost = (
  slug: string,
  fields: string[] | undefined = undefined,
  nested = false
) => {
  const realSlug = slug.replace(/\.md$/, '')

  const fullPath = join(postsDirectory, `${realSlug}.md`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

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
    slug: realSlug,
    author,
    category,
    tags,
    content,
  }

  if (fields !== undefined && fields.length) {
    const filteredPost: { [x: string]: any } = { slug: realSlug }

    fields.forEach((field) => {
      if (field !== slug && post[field]) {
        filteredPost[field] = post[field]
      }
    })

    return filteredPost
  }

  return post
}

// focus on this function
export function getPosts(fields: string[] | undefined = undefined) {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const slugs = fs.readdirSync(postsDirectory)

  return slugs
    .map((slug) => getPost(slug, fields, true))
    .sort((a, b) => (a.published_at > b.published_at ? -1 : 1))
}

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
