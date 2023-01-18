import Head from 'next/head'

import Container from '../components/container'
// import Intro from '../components/intro'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import { ContactForm } from '../components/new/ContactForm'
import { getPosts } from './api/posts'
import { AboutMe } from '../components/new/AboutMe'
import { MyWork } from '../components/sections/MyWork'

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
          <MyWork />
          <section className="my-24">
            <h2 className="mb-6 text-3xl font-bold text-center">
              Let's get in touch.
            </h2>
            <ContactForm />
          </section>
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
