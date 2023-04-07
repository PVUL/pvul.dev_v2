import { MDXRemote } from 'next-mdx-remote'

import styles from './Post.module.scss'
import { PostHeader } from '../../new/PostHeader'

interface Props {
  frontmatter: NestedPostObject
  compiledSource: string
  components: Record<string, React.ReactNode>
}

// @see https://github.com/hashicorp/next-mdx-remote#apis

export const Post = ({ frontmatter, compiledSource, components }: Props) => {
  return (
    <section className={styles.post}>
      <PostHeader frontmatter={frontmatter} />
      <article className={styles.body}>
        <MDXRemote compiledSource={compiledSource} components={components} />
      </article>
    </section>
  )
}
