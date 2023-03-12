import Link from 'next/link'
import styles from './Blog.module.scss'
import { useState } from 'react'

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
      <h1 className={styles.heading}>Blog Posts</h1>
      <ul className={styles.posts}>
        {displayPosts.map((post) => {
          const postCategory =
            post.category.title === '_' ? '' : post.category.title
          const postDate = new Date(post.publishedAt).toLocaleDateString()
          // @see https://uploadcare.com/docs/transformations/image/resize-crop/#operation-smart-crop
          const imageDims = '300x300'
          const postImage = `${post.coverImage}-/scale_crop/${imageDims}/smart/`

          // this should probably move into it's own function
          const postName = post.title.replaceAll(' ', '-').toLowerCase()
          const postLink = `/posts/${postName}`

          return (
            <Link href={postLink} key={post.title}>
              <li className={styles.postPreview}>
                <div className={styles.topRow}>
                  <div className={styles.category}>{postCategory}</div>
                  <div className={styles.date}>{postDate}</div>
                </div>
                <img
                  src={postImage}
                  alt={post.title}
                  className={styles.image}
                />
                <div className={styles.title}>{post.title}</div>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </li>
            </Link>
          )
        })}
      </ul>

      {/* display end of posts message */}
      {displayPosts.length === totalNumberOfPosts && (
        <div>- end of posts -</div>
      )}

      <button
        className={styles.loadMore}
        onClick={loadMore}
        disabled={displayPosts.length === totalNumberOfPosts}
      >
        load more
      </button>
    </div>
  )
}
