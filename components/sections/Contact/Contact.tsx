import { motion } from 'framer-motion'
import { ContactForm } from '../../new/ContactForm'
import { textVariant, sectionVariant } from '../../../utils/motion'

export const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <section className="my-24">
        <motion.h2
          variants={textVariant(0.5)}
          className="mb-6 text-3xl font-bold text-center"
        >
          Let's get in touch.
        </motion.h2>
        <motion.div variants={sectionVariant(0.75)}>
          <ContactForm />
        </motion.div>
      </section>
    </motion.div>
  )
}
