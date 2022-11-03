// note this can be replaced by pages/api/posts/index

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = join(process.cwd(), '_content/posts')

export function getPostSlugs() {
  return fs.readdirSync(POSTS_PATH)
}

const AUTHORS_PATH = join(process.cwd(), '_content/authors')
export const getAuthorDetails = (authorSlug) => {
  // we can probably create a generic function that encapsulates the below

  const fullPath = join(AUTHORS_PATH, `${authorSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  return {
    name: data.title,
    twitter: data.twitter,
    image: data.image,
    shortBio: data.shortBio,
  }
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(POSTS_PATH, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const post = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      post[field] = realSlug
    }
    if (field === 'content') {
      post[field] = content
    }

    if (data[field]) {
      post[field] = data[field]
    }

    if (field === 'author') {
      post[field] = getAuthorDetails(data.author)
    }
  })

  return post
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by publishedAt in descending order
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))
  return posts
}

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))
