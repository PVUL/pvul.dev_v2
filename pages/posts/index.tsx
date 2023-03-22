import type { GetStaticProps } from 'next'

import Layout from '../../components/layout'
import { Contact } from '../../components/sections/Contact'
import { getPostsWithPlaceholderImages } from '../api/posts'
import { Blog } from '../../components/sections/Blog'

const BlogPage = ({ posts }: { posts: NestedPostObject[] }) => {
  return (
    <Layout>
      <Blog posts={posts} />
      <Contact />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsWithPlaceholderImages()

  return {
    props: { posts },
  }
}

export default BlogPage
