import Link from 'next/link'

import { AboutMe } from '../components/new/AboutMe'
import Layout from '../components/layout'
import { Contact } from '../components/sections/Contact'
import { Values } from '../components/sections/Values'

/**
 * `/about`
 */
const AboutPage = () => {
  return (
    <Layout>
      <AboutMe />
      <div className="mb-24 text-lg text-center">
        I also blog sometimes.{' '}
        <span className="text-pink-400 underline transition-all ease-in-out hover:opacity-75">
          <Link href="/posts">See my blog</Link>
        </span>
        .
      </div>
      <Values />
      <Contact />
    </Layout>
  )
}

export default AboutPage
