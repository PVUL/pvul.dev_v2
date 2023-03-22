import { GetStaticProps, GetStaticPaths } from 'next'

// import FeedItem from 'components/FeedItem'
// import PageLayout from 'components/PageLayout'
// import { getCategoryBySlug } from 'pages/api/categories'
// import site from 'site.config'
import { getCategories, getCategoryBySlug } from '../api/categories'
import { Blog } from '../../components/sections/Blog'

export default function Category({ category }: { category: ObjectWithPosts }) {
  return (
    <section>
      <Blog posts={category?.posts} />
    </section>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const categories = getCategories()

  return {
    paths: categories.map((category) => {
      // question- what about '_'
      return {
        params: {
          category: category.slug as string,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params
  const categorySlug = params?.category?.toString()

  let category: MarkdownFileObject

  if (categorySlug) {
    category = getCategoryBySlug(categorySlug, [], true)
  } else {
    category = {}
  }

  console.log(category)

  return {
    props: { category },
  }
}
