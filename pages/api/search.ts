import type { NextApiRequest, NextApiResponse } from 'next'

import { getCategories } from './categories'
import { getPosts } from './posts'
import { getTags } from './tags'

export const getSearch = (fields: string[] | undefined = undefined) => {
  const content: SearchResult[] = []

  const processData = (
    func: (fields: string[] | undefined) => { [x: string]: unknown }[],
    type: 'category' | 'post' | 'tag'
  ) => {
    const getData = func(['title', 'category', 'excerpt'])

    for (let i = 0; i < getData.length; i++) {
      const element = getData[i]
      element['type'] = type
      content.push(element as unknown as SearchResult)
    }
  }

  if (!fields || fields.length === 0) {
    processData(getPosts, 'post')
    processData(getCategories, 'category')
    processData(getTags, 'tag')
  } else {
    if (fields.includes('post')) processData(getPosts, 'post')
    if (fields.includes('category')) processData(getCategories, 'category')
    if (fields.includes('tag')) processData(getTags, 'tag')
  }

  return content
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }
  const queryFields = req.query?.fields?.toString().split(',')
  const content = getSearch(queryFields)
  res.status(200).json(content)
}
