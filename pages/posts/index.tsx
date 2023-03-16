import type { GetStaticProps } from 'next'

import Layout from '../../components/layout'
import { Contact } from '../../components/sections/Contact'
import { getPosts } from '../api/posts'
import { Blog } from '../../components/sections/Blog'
import { getPlaiceholder } from 'plaiceholder'

const BlogPage = ({ posts }: { posts: NestedPostObject[] }) => {
  return (
    <Layout>
      <Blog posts={posts} />
      <Contact />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: any[] = []

  await Promise.all(
    getPosts().map(async (post) => {
      const placeholderImage = await getPlaiceholder(post.coverImage)
      posts.push({ ...post, placeholderImage })
    })
  )

  return {
    props: { posts },
  }
}

export default BlogPage
