import Head from 'next/head'

import Container from '../components/container'
import Layout from '../components/layout'
import { Contact } from '../components/sections/Contact'
import { Hero } from '../components/new/Hero'
import { MyWork } from '../components/sections/MyWork'
import { MyServices } from '../components/sections/MyServices'

/**
 * `/`
 */
export default function IndexPage() {
  return (
    <>
      <Layout>
        <Head>
          <title>Paul Yun</title>
        </Head>
        <Container>
          <Hero />
          <MyServices />
          <MyWork />
          <Contact />
        </Container>
      </Layout>
    </>
  )
}
