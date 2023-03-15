import Link from 'next/link'
import styles from './Blog.module.scss'
import { useState } from 'react'
import { getUploadCareUrl } from '../../../utils'

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
            post.category.title === '_' ? '' : post.category.title
          const splitDate = new Date(post.publishedAt)
            .toLocaleDateString(
              'en-US',
              // date format: `m/d/yy`
              { year: '2-digit', month: 'numeric', day: 'numeric' }
            )
            .split('/')

          // format to: `m d 'yy` - vintage photograph style datestamp
          const postDate = `${splitDate[0]} ${splitDate[1]} '${splitDate[2]}`

          // @see https://uploadcare.com/docs/transformations/image/resize-crop/#operation-smart-crop

          const isFirstPost = i === 0
          const imageDims = isFirstPost ? '1400x700' : '500x250'
          const postImage = getUploadCareUrl(post.coverImage, imageDims)

          // this should probably move into it's own function
          const postName = post.title.replaceAll(' ', '-').toLowerCase()
          const postLink = `/posts/${postName}`

          return (
            <Link href={postLink} key={post.title}>
              <li className={styles.postPreview}>
                <div className={styles.imageContainer}>
                  <div className={styles.date}>{postDate}</div>
                  <img
                    src={postImage}
                    alt={post.title}
                    className={styles.image}
                  />
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
