import { motion } from 'framer-motion'

import { Carousel } from '../Carousel'
import { sectionVariant } from '../../../utils/motion'
import styles from './CarouselCard.module.scss'

interface Props {
  images: CarouselImage[]
  title: string
  description: string
  technologies: string
}

export const CarouselCard = ({
  images,
  title,
  description,
  technologies,
}: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 'some' }}
      variants={sectionVariant(0.25)}
      className={styles.carouselCard}
    >
      <div className="relative block bg-white rounded-lg">
        <div className={styles.imageContainer}>
          <div
            className="relative -mt-4 overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <Carousel images={images} />
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className="max-w-sm px-2 pt-10 sm:max-w-lg md:max-w-xl lg:max-w-3xl 2xl:max-w-5xl">
            <h5 className="mb-3 text-lg font-bold">{title}</h5>
            <p className="pb-2 mb-4">{description}</p>
            <p className="pb-2 mb-4 italic text-gray-500">
              Technologies: {technologies}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
