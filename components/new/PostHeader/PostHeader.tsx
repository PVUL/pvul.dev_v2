import Image from 'next/image'

import styles from './PostHeader.module.scss'
import { getUploadCareUrl } from '../../../utils'

interface Props {
  frontmatter: PostObjectBase
}

export const PostHeader = ({
  frontmatter: { title, publishedAt, excerpt, coverImage },
}: Props) => {
  const imageSrc = getUploadCareUrl(coverImage, '1000x500')
  return (
    <div className={styles.postHeader}>
      <Image
        className={styles.image}
        src={imageSrc}
        width={1000}
        height={500}
      />

      <h1 className={styles.title}>{title}</h1>
      <div className={styles.excerpt}>{excerpt}</div>
      <div className={styles.date}>{publishedAt}</div>
    </div>
  )
}
