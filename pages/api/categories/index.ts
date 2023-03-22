import fs from 'fs'
import matter from 'gray-matter'
import type { NextApiRequest, NextApiResponse } from 'next'
import { join } from 'path'

import { getPosts, categoriesDirectory } from '../posts'

export function getPostsByCategory(
  category: string,
  fields: string[] | undefined = undefined
) {
  const updatedFields =
    fields && fields.length > 0 ? [...fields, 'category'] : []

  const posts = getPosts(updatedFields)

  // this looks like a bandaid fix to filter non-category posts
  // look into refactoring this
  for (let i = posts.length - 1; i >= 0; i--) {
    const post = posts[i]
    if (post.category !== category && post.category.slug !== category) {
      posts.splice(i, 1)
    } else {
      delete post.category
    }
  }

  return posts
}

export function getCategoryBySlug(
  slug: string,
  fields: string[] | undefined = undefined,
  nested = false
) {
  const categorySlug = slug.replace(/\.md$/, '')
  const fullPath = join(categoriesDirectory, `${categorySlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const posts =
    nested && (!fields || fields.length === 0 || fields.includes('posts'))
      ? getPostsByCategory(categorySlug, [
          'title',
          'category',
          'excerpt',
          'thumbnail',
        ])
      : undefined

  const category: { [x: string]: unknown } = {
    ...data,
    posts,
    slug: categorySlug,
    content,
  }

  if (fields !== undefined && fields.length) {
    const filteredCategory: { [x: string]: unknown } = { slug: realSlug }

    fields.forEach((field) => {
      if (field !== slug && category[field]) {
        filteredCategory[field] = category[field]
      }
    })
    return filteredCategory
  }

  return category
}

export function getCategories(fields: string[] | undefined = undefined) {
  if (!fs.existsSync(categoriesDirectory)) {
    return []
  }

  const slugs = fs.readdirSync(categoriesDirectory)
  const categories = slugs
    .map((slug) => getCategoryBySlug(slug, fields, true))
    .sort((a, b) => {
      if (
        a.title &&
        b.title &&
        typeof a.title === 'string' &&
        typeof b.title === 'string'
      ) {
        return a.title > b.title ? -1 : 1
      }
      return 0
    })

  return categories
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const queryFields = req.query?.fields?.toString()

  const fields: string[] = []

  if (queryFields) {
    fields.push(...queryFields.split(','))
  }

  const content = getCategories(fields)
  res.status(200).json(content)
}
