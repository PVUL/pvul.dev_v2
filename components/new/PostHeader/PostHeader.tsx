import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import styles from './PostHeader.module.scss'
import { getFormattedDate, getUploadCareUrl } from '../../../utils'
import { PageViews } from '../../new/PageViews'

interface Props {
  frontmatter: NestedPostObject
}

export const PostHeader = ({
  frontmatter: { title, postDate, excerpt, image, author },
}: Props) => {
  const {
    query: { slug },
  } = useRouter()

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST',
    })
  }, [slug])

  const imageSrc = getUploadCareUrl(image.url, '1000x500')

  return (
    <div className={styles.postHeader}>
      <Image
        className={styles.image}
        src={imageSrc}
        placeholder="blur"
        blurDataURL={image.placeholder}
        width={1000}
        height={500}
        alt={imageSrc} // we need alt text
      />

      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.excerpt}>{excerpt}</div>
        <div className={styles.bottomInfo}>
          <div>
            <div className={styles.date}>{getFormattedDate(postDate)}</div>
            <div className={styles.author}>BY {author.name}</div>
          </div>
          <div className={styles.views}>
            <PageViews slug={slug as string} />
          </div>
        </div>
      </div>
    </div>
  )
}
