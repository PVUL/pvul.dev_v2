import { AboutMe } from '../components/new/AboutMe'
import Layout from '../components/layout'
import { Contact } from '../components/sections/Contact'
import { Values } from '../components/sections/Values'

const About = () => {
  return (
    <Layout>
      <AboutMe />
      <Values />
      <Contact />
    </Layout>
  )
}

export default About
