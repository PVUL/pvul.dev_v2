import Image from 'next/image'
import { IGetPlaiceholderReturn } from 'plaiceholder'

import styles from './PostHeader.module.scss'
import { getFormattedDate, getUploadCareUrl } from '../../../utils'

interface Props {
  frontmatter: PostObjectBase
  placeholderImage: IGetPlaiceholderReturn
}

export const PostHeader = ({
  frontmatter: { title, publishedAt, excerpt, coverImage },
  placeholderImage,
}: Props) => {
  const imageSrc = getUploadCareUrl(coverImage, '1000x500')
  return (
    <div className={styles.postHeader}>
      <Image
        className={styles.image}
        src={imageSrc}
        placeholder="blur"
        blurDataURL={placeholderImage.base64}
        width={1000}
        height={500}
        alt={imageSrc} // we need alt text
      />

      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.excerpt}>{excerpt}</div>
        <div className={styles.date}>{getFormattedDate(publishedAt)}</div>
      </div>
    </div>
  )
}
