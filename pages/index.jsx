import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import { getAllPosts } from '../lib/api'

export default function Index({ posts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog.</title>
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