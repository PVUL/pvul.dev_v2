import { motion } from 'framer-motion'
import { sectionVariant, textVariant } from '../../../utils/motion'
import { Heading } from '../../new/Heading'
import { ServiceCard } from '../../new/ServiceCard'
import { services } from '../../../data'
import styles from './MyServices.module.scss'

export const MyServices = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 'some' }}
      id="services"
      className={styles.myServices}
    >
      <Heading text="What I Do" />
      <motion.p
        variants={textVariant(0.25)}
        className="py-8 w-[70vw] max-w-3xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et
        malesuada. Nunc congue nisi vitae suscipit tellus mauris a diam. Nec dui
        nunc mattis enim ut tellus.
      </motion.p>
      <div className={styles.main}>
        {services.map((service) => (
          <ServiceCard key={service.alt} service={service} />
        ))}
      </div>
    </motion.div>
  )
}
