import { motion } from 'framer-motion'
import Image from 'next/image'

import { sectionVariant } from '../../../utils/motion'
import styles from './AboutMe.module.scss'
import imageSrc from '../../../public/paul-yun.png'
import { GradientBackground } from '../GradientBackground'

export const AboutMe = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'some' }}
      variants={sectionVariant(0.2)}
      className={styles.aboutMe}
    >
      {/* <GradientBackground /> */}
      <div className="flex justify-center mx-auto text-center lg:text-left">
        <div className="flex flex-col items-center max-w-5xl lg:max-w-6xl lg:flex-row md:px-28">
          <motion.div
            variants={sectionVariant(0.3)}
            className="justify-end max-w-xs"
          >
            <img
              src="paul-yun.png"
              height={400}
              width={400}
              className={styles.image}
            ></img>
          </motion.div>
          <div className="mb-12 lg:mb-0">
            <div
              className={styles.card}
              style={{
                background: 'rgba(255, 255, 255, .35)',
                backdropFilter: 'blur(30px)',
              }}
            >
              <h2 className="mb-6 text-3xl font-bold">
                Hi I’m Paul. I bring ideas to life through web and product
                design.
              </h2>
              <p className="pb-2 mb-6 text-gray-800 lg:pb-0">
                I’ve spent the last 15+ years working across different areas of
                design- web and app development, industrial design, packaging
                and graphic design. I've worked with startups to big tech
                companies, fashion to manufacturing industries, and B2B to
                retail environments.
              </p>

              <p className="mb-6 text-gray-800">
                I care deeply about helping my clients with their creative needs
                and I treat every project as if it’s my own, with love and care.
                I am currently taking on new clients.
              </p>

              <p className="mb-0 text-gray-800">
                Outside of work, you can catch me cruising on my skateboard,
                tinkering with widgets using my 3d printer, and becoming a
                professional home chef.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
