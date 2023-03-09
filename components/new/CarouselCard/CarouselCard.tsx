import { motion } from 'framer-motion'

import { Carousel } from '../Carousel'
import { sectionVariant } from '../../../utils/motion'
import styles from './CarouselCard.module.scss'

interface Props {
  images: CarouselImage[]
  title: string
  category: string
  description: string
  technologies: string
}

export const CarouselCard = ({
  images,
  title,
  category,
  description,
  technologies,
}: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'some' }}
      variants={sectionVariant(0.15)}
      className={styles.carouselCard}
    >
      <div className="relative block bg-white">
        <div className={styles.imageContainer}>
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <Carousel images={images} />
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className="max-w-sm px-2 pt-10 sm:max-w-lg md:max-w-xl lg:max-w-3xl 2xl:max-w-5xl">
            <h3 className={styles.category}>{category}</h3>
            <h4 className="mb-3 text-lg font-bold">{title}</h4>
            <p
              className="pb-2 mb-4"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <p className="pb-2 mb-4 italic text-gray-500">
              Technologies: {technologies}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
