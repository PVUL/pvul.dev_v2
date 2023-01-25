import { motion } from 'framer-motion'
import { ContactForm } from '../../new/ContactForm'
import { textVariant, sectionVariant } from '../../../utils/motion'

export const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'some' }}
      className="py-20 pb-40"
    >
      <motion.h2
        variants={textVariant(0.6)}
        className="mb-6 text-3xl font-bold text-center"
      >
        Hello Beautiful, let's get in touch.
      </motion.h2>
      <motion.div variants={sectionVariant(0.75)}>
        <ContactForm />
      </motion.div>
    </motion.div>
  )
}
