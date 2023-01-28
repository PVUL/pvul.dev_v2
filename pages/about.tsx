import { AboutMe } from '../components/new/AboutMe'
import Layout from '../components/layout'
import { Contact } from '../components/sections/Contact'
import { GradientBackground } from '../components/new/GradientBackground'

const About = () => {
  return (
    <Layout>
      <AboutMe />
      <Contact />
    </Layout>
  )
}

export default About