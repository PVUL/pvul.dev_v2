import { motion } from 'framer-motion'
import { sectionVariant } from '../../../utils/motion'

import styles from './Values.module.scss'

export const Values = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'some' }}
      variants={sectionVariant(0.1)}
      className={styles.values}
    >
      <h2 className={styles.header}>Values</h2>
      <p>Treat people with respect</p>
      <p>Spread positivity</p>
      <p>Appreciates feedback</p>
      <p>Clear honest, communication</p>
      <p>High quality work</p>
    </motion.div>
  )
}
