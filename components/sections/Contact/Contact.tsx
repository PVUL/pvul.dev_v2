import { motion } from 'framer-motion'
import { ContactForm } from '../../new/ContactForm'
import { textVariant, sectionVariant } from '../../../utils/motion'

export const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 'some' }}
      className="flex flex-col justify-center h-screen"
      id="contact"
    >
      <motion.h2
        variants={textVariant(0.2)}
        className="mb-6 text-3xl font-bold text-center"
      >
        Hello Beautiful, let's get in touch.
      </motion.h2>
      <motion.div variants={sectionVariant(0.3)}>
        <ContactForm />
      </motion.div>
    </motion.div>
  )
}
