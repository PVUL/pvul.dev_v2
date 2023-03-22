import Link from 'next/link'
import Image from 'next/image'
import styles from './Blog.module.scss'
import { useState } from 'react'
import { getFormattedDate, getUploadCareUrl } from '../../../utils'

interface Props {
  posts: NestedPostObject[]
}

// to do- need to handle catagory types of '_'
// which is the same as 'general'
export const Blog = ({ posts }: Props) => {
  const intialNumberOfPostsToShow = 5
  const numberOfPostsToShowPerLoad = 5
  const [displayPosts, setDisplayPosts] = useState(
    posts.slice(0, intialNumberOfPostsToShow)
  )
  const totalNumberOfPosts = posts.length
  const loadMore = () => {
    setDisplayPosts(
      posts.slice(0, displayPosts.length + numberOfPostsToShowPerLoad)
    )
  }

  return (
    <div className={styles.blog}>
      <h1 className={styles.heading}>Mind the Paul.</h1>
      <p className={styles.subheading}>
        Welcome to my blog. I usually write topics about coding, art, and the
        pursuit of happiness.
      </p>
      <ul className={styles.posts}>
        {displayPosts.map((post, i) => {
          const postCategory =
            post.category?.title === '_' ? '' : post.category?.title
          const postDate = getFormattedDate(post.postDate, 'photoStyle')

          // @see https://uploadcare.com/docs/transformations/image/resize-crop/#operation-smart-crop

          const isFirstPost = i === 0
          const imageDims = isFirstPost ? '1000x500' : '500x250'
          const width = isFirstPost ? 1000 : 500
          const height = isFirstPost ? 500 : 250
          const postImage = getUploadCareUrl(post.image?.url, imageDims)

          // this should probably move into it's own function
          const postName = post.title.replaceAll(' ', '-').toLowerCase()
          const postLink = `/posts/${postName}`

          return (
            <Link href={postLink} key={post.title}>
              <li className={styles.postPreview}>
                <div className={styles.imageContainer}>
                  <div className={styles.date}>{postDate}</div>
                  {post.image && (
                    <Image
                      src={postImage}
                      alt={post.title}
                      className={styles.image}
                      width={width}
                      height={height}
                      placeholder={post.image?.placeholder ? 'blur' : undefined}
                      blurDataURL={post.image?.placeholder}
                    />
                  )}
                </div>
                <div className={styles.body}>
                  <div className={styles.category}>{postCategory}</div>
                  <div className={styles.title}>{post.title}</div>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                </div>
              </li>
            </Link>
          )
        })}
      </ul>

      <button
        className={styles.loadMore}
        onClick={loadMore}
        disabled={displayPosts.length === totalNumberOfPosts}
      >
        {displayPosts.length < totalNumberOfPosts
          ? 'load more'
          : '｡･:*:･ﾟFin ｡･:*:･ﾟ'}
      </button>
    </div>
  )
}
