import { motion } from 'framer-motion'
import { sectionVariant } from '../../../utils/motion'
import { TextBlock } from '../../new/TextBlock'

import styles from './Values.module.scss'
import Link from 'next/link'

export const Values = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'some' }}
      variants={sectionVariant(0.3)}
      className={styles.values}
    >
      <h2 className={styles.header}>My Values</h2>
      <div className={styles.blocks}>
        <TextBlock
          title="Treat People Right"
          body="We are all humans trying to find our purpose, and we should keep that in mind through kindness, generosity, and grace."
        />
        <TextBlock
          title="Be a Positive Force"
          body="I strive to make a positive impact and bring joy to people's lives and businesses through my work."
        />
        <TextBlock
          title="Growth Mindset"
          body="I welcome feedback to grow in my personal and professional life and share my knowledge with others."
        />
        <TextBlock
          title="Clear & Honest Communication"
          body="It's important to be transparent so we can help each other to the best of our abilities."
        />
        <TextBlock
          title="High Quality Work"
          body="I treat all projects as if their my own, and I am dedicated to delivering the best quality of work."
        />
      </div>
      <p className={styles.description}>
        I do my best work when I work with clients who understand where I'm
        coming from and align with my core values. <br />
        <br />
        If this resonates with you, I would love to hear from you!
      </p>
    </motion.div>
  )
}
