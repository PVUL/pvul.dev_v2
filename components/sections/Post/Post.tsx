import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { MDXRemote } from 'next-mdx-remote'

import styles from './Post.module.scss'
import { PostHeader } from '../../new/PostHeader'
import { PageViews } from '../../new/PageViews'

interface Props {
  frontmatter: NestedPostObject
  compiledSource: string
  components: Record<string, React.ReactNode>
}

// @see https://github.com/hashicorp/next-mdx-remote#apis

export const Post = ({ frontmatter, compiledSource, components }: Props) => {
  const router = useRouter()
  const {
    query: { slug },
  } = router

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST',
    })
  }, [slug])

  return (
    <section className={styles.post}>
      <PostHeader frontmatter={frontmatter} />
      <div>
        <PageViews slug={slug as string} />
      </div>
      <article className={styles.body}>
        <MDXRemote compiledSource={compiledSource} components={components} />
      </article>
    </section>
  )
}
