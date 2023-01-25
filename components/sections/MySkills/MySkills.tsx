import { motion } from 'framer-motion'

import styles from './MySkills.module.scss'
import { Heading } from '../../new/Heading'

export const MySkills = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'some' }}
    >
      <section className={styles.mySkills}>
        <Heading text="My Skills" />
      </section>
    </motion.div>
  )
}
