import { MDXRemote } from 'next-mdx-remote'
import { PostHeader } from '../../new/PostHeader'
import styles from './Post.module.scss'

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
