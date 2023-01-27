import { motion } from 'framer-motion'
import { ContactForm } from '../../new/ContactForm'
import { textVariant, sectionVariant } from '../../../utils/motion'
import { GradientBackground } from '../../new/GradientBackground'

export const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 'some' }}
      className="flex flex-col justify-center h-screen mb-4"
      id="contact"
    >
      {/* <GradientBackground variation={1} /> */}
      <motion.div variants={textVariant(0.2)} className="mb-6 text-center">
        <h2 className="mb-2 text-xl font-light">
          Want to build something amazing?
        </h2>
        <p className="text-5xl font-semibold">Let's get in touch.</p>
      </motion.div>
      <motion.div variants={sectionVariant(0.3)}>
        <ContactForm />
      </motion.div>
    </motion.div>
  )
}
