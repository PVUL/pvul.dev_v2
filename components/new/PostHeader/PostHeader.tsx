import Image from 'next/image'

import styles from './PostHeader.module.scss'

interface Props {
  frontmatter: PostObjectBase
}

export const PostHeader = ({
  frontmatter: { title, publishedAt, coverImage },
}: Props) => {
  const imageSrc = coverImage
  return (
    <div className={styles.postHeader}>
      <Image
        className={styles.image}
        src={imageSrc}
        width={1000}
        height={500}
      />

      <h1 className={styles.title}>{title}</h1>
      <div className={styles.date}>{publishedAt}</div>
    </div>
  )
}
