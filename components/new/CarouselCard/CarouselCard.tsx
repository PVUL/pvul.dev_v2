import { motion } from 'framer-motion'

import { Carousel } from '../Carousel'
import { sectionVariant } from '../../../utils/motion'
import styles from './CarouselCard.module.scss'

interface Props {
  images: CarouselImage[]
  title: string
  description: string
}

export const CarouselCard = ({ images, title, description }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariant(0.7)}
    >
      <div className={styles.carouselCard}>
        <div className="relative block bg-white rounded-lg">
          <div className={styles.imageContainer}>
            <div
              className="relative -mt-4 overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <Carousel images={images} />
              {/* <img
          src="works/almanac-1.png"
          className="w-full max-w-[600px]"
        />
        <a href="#!" onClick={() => setIsOpen(true)}>
          <div
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"
            style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
          ></div>
        </a> */}
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className="pt-10 px-2 max-w-[600px]">
              <h5 className="mb-3 text-lg font-bold">{title}</h5>
              <p className="pb-2 mb-4">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
