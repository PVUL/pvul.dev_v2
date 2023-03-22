import { GetStaticProps, GetStaticPaths } from 'next'

import { getCategories, getCategoryBySlug } from '../api/categories'
import { Blog } from '../../components/sections/Blog'

export default function Category({ category }: { category: ObjectWithPosts }) {
  return (
    <section>
      <Blog posts={category?.posts} />
    </section>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getCategories()

  return {
    paths: categories.map((category) => ({
      params: {
        category: category.slug as string,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const categorySlug = context.params?.category?.toString()
  let category: MarkdownFileObject

  if (categorySlug) {
    category = getCategoryBySlug(categorySlug, [], true)
  } else {
    category = {}
  }

  return {
    props: { category },
  }
}
