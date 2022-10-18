import Container from '../components/container'
import PostList from '../components/post-list'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ posts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Code Hike Scrollycoding Preview</title>
        </Head>
        <Container>
          <Intro />
          <PostList posts={posts} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'publishedAt',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags',
  ])

  return {
    props: { posts },
  }
}
