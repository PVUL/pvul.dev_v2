import { motion } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax'

import { sectionVariant, textVariant } from '../../../utils/motion'
import styles from './Hero.module.scss'

export const Hero = () => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 'some' }}
    variants={sectionVariant(0.2)}
    className={styles.hero}
  >
    <ParallaxBanner
      layers={[{ image: 'banner.png', speed: -25 }]}
      className={styles.banner}
    >
      <motion.div
        variants={textVariant(0.3)}
        className="absolute inset-0 flex flex-col justify-center p-32 text-right"
      >
        <h1 className="mb-8 font-thin leading-none text-white text-7xl">
          I design to make people's dreams come true.
        </h1>
        <p className={styles.text}>
          / web design <br /> / app development <br />/ product design
        </p>
      </motion.div>
    </ParallaxBanner>
  </motion.div>
)
