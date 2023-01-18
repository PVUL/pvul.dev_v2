import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import {
  SlArrowLeft as LeftNav,
  SlArrowRight as RightNav,
} from 'react-icons/sl'
import clsx from 'clsx'

import styles from './Carousel.module.scss'

interface Props {
  images: CarouselImage[]
}

export const Carousel = ({ images }: Props) => {
  const [isHovering, setIsHovering] = useState(false)
  const navPrevRef = useRef(null)
  const navNextRef = useRef(null)

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation={{
          prevEl: navPrevRef.current,
          nextEl: navNextRef.current,
        }}
        effect="fade"
        speed={600}
        slidesPerView={1}
        loop
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image.source} alt="" />
          </SwiperSlide>
        ))}

        <div
          className={clsx(styles.navPrev, {
            ['opacity-40']: isHovering,
            ['opacity-0']: !isHovering,
          })}
          ref={navPrevRef}
        >
          <LeftNav className={styles.icon} />
        </div>
        <div
          className={clsx(styles.navNext, {
            ['opacity-40']: isHovering,
            ['opacity-0']: !isHovering,
          })}
          ref={navNextRef}
        >
          <RightNav className={styles.icon} />
        </div>
      </Swiper>
    </div>
  )
}
