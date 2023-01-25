import { motion } from 'framer-motion'
import { textVariant } from '../../../utils/motion'
import styles from './Heading.module.scss'

interface Props {
  text: string
  delay?: number
}

export const Heading = ({ text, delay = 0.5 }: Props) => (
  <motion.h2 variants={textVariant(delay)} className={styles.heading}>
    {text}
  </motion.h2>
)
