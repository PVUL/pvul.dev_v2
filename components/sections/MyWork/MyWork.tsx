import { motion } from 'framer-motion'

import { textVariant } from '../../../utils/motion'
import { CarouselCard } from '../../new/CarouselCard'
import { works } from '../../../data'
import styles from './MyWork.module.scss'

export const MyWork = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'some' }}
      id="work"
    >
      <section className={styles.myWork}>
        <motion.h2 variants={textVariant(0.2)} className={styles.header}>
          My Work
        </motion.h2>
        <div className="flex flex-col items-center gap-6 md:w-full lg:grid-cols-1 xl:gap-x-12">
          {works.map((work) => (
            <CarouselCard
              key={work.title}
              title={work.title}
              category={work.category}
              description={work.description}
              images={work.images}
              technologies={work.technologies}
            />
          ))}
        </div>
      </section>
    </motion.div>
  )
}
