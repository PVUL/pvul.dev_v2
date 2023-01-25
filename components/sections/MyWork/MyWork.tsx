// import { useState } from 'react'

// import { Modal } from '../../new/Modal'
import { motion } from 'framer-motion'

import { sectionVariant, textVariant } from '../../../utils/motion'
import { CarouselCard } from '../../new/CarouselCard'
import { works } from '../../../data'
import styles from './MyWork.module.scss'

export const MyWork = () => {
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 'some' }}
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
              description={work.description}
              images={work.images}
              technologies={work.technologies}
            />
          ))}
        </div>
        {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <img src="works/almanac-1.png" className="w-full" />
      </Modal> */}
      </section>
    </motion.div>
  )
}
