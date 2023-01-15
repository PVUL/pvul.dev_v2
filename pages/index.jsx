import Head from 'next/head'

import Container from '../components/container'
// import Intro from '../components/intro'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import { ContactForm } from '../components/new/ContactForm'
import { getPosts } from './api/posts'
import { AboutMe } from '../components/new/AboutMe'

export default function Index({ posts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>PVUL.dev</title>
        </Head>
        <Container>
          {/* <Intro /> */}
          {/* <PostList posts={posts} /> */}
          <AboutMe />
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = getPosts()

  return {
    props: { posts },
  }
}
