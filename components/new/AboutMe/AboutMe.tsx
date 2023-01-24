import { motion } from 'framer-motion'
import Image from 'next/image'

import { sectionVariant } from '../../../utils/motion'
import styles from './AboutMe.module.scss'
import imageSrc from '../../../public/paul-yun.png'

export const AboutMe = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'some' }}
      variants={sectionVariant(0.2)}
      className={styles.aboutMe}
    >
      <div className="flex justify-center mx-auto text-center xl:px-29 lg:text-left">
        <div className="flex flex-col items-center max-w-5xl lg:flex-row md:px-28">
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
              className="block max-w-5xl px-12 py-12 -mt-5 shadow-lg md:rounded-lg md:px-16 lg:-ml-5"
              style={{
                background: 'rgba(0, 0, 0, 0.04)',
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
                and graphic design.
              </p>

              <p className="mb-6 text-gray-800">
                I care deeply about helping my clients with their creative needs
                and I treat every project as if it’s my own, with love and care.
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
