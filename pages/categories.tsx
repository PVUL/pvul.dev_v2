import type { GetStaticProps } from 'next'
import Link from 'next/link'

import { getCategories } from './api/categories'

interface ObjectWithPosts extends MarkdownFileBase {
  posts: NestedPostObject[]
}

/**
 * `/categories`
 */
export default function CategoriesPage({
  categories,
}: {
  categories: ObjectWithPosts[]
}) {
  return (
    <section>
      {categories.map(
        (category) =>
          category?.posts?.length > 0 && (
            <div key={category.slug} className="p-4 mb-4 bg-pink-100">
              <h2>{category.title}</h2>
              <p>{`/${category.slug}`}</p>
              <p>{category.content}</p>
            </div>
          )
      )}
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = getCategories()

  return {
    props: { categories },
  }
}
