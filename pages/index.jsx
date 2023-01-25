import Head from 'next/head'

import Container from '../components/container'
// import Intro from '../components/intro'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import { Contact } from '../components/sections/Contact'
import { getPosts } from './api/posts'
import { Hero } from '../components/new/Hero'
import { AboutMe } from '../components/new/AboutMe'
import { MyWork } from '../components/sections/MyWork'
import { MySkills } from '../components/sections/MySkills'
import { GradientBackground } from '../components/new/GradientBackground'

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
          <Hero />
          <AboutMe />
          {/* <MySkills /> */}
          <MyWork />
          <Contact />
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
