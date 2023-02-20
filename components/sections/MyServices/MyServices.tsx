import { motion } from 'framer-motion'
import { sectionVariant, textVariant } from '../../../utils/motion'
import { Heading } from '../../new/Heading'
import { ServiceCard } from '../../new/ServiceCard'
import { services } from '../../../data'
import styles from './MyServices.module.scss'
import { GradientBackground } from '../../new/GradientBackground'

export const MyServices = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'some' }}
      id="services"
      className={styles.myServices}
    >
      {/* <GradientBackground variation={2} /> */}
      <Heading text="What I Do" />
      <motion.p
        variants={textVariant(0.2)}
        className="py-8 w-[70vw] max-w-3xl text-lg"
      >
        Whether your creative needs are digital or physical, I take a holistic
        approach for either- I listen to your needs, conceptualize, propose
        ideas, put in the work, and deliver. I'm dedicated to delivering high
        quality work only.
      </motion.p>
      <motion.div variants={sectionVariant(0.3)} className={styles.main}>
        {services.map((service) => (
          <ServiceCard key={service.alt} service={service} />
        ))}
      </motion.div>
    </motion.div>
  )
}
