import { MDXRemote } from 'next-mdx-remote'
import { PostHeader } from '../../new/PostHeader'
import styles from './Post.module.scss'
import { IGetPlaiceholderReturn } from 'plaiceholder'

interface Props {
  frontmatter: PostObjectBase
  compiledSource: string
  components: Record<string, React.ReactNode>
  placeholderImage: IGetPlaiceholderReturn
}

// @see https://github.com/hashicorp/next-mdx-remote#apis

export const Post = ({
  frontmatter,
  compiledSource,
  components,
  placeholderImage,
}: Props) => {
  return (
    <section className={styles.post}>
      <PostHeader
        frontmatter={frontmatter}
        placeholderImage={placeholderImage}
      />
      <article className={styles.body}>
        <MDXRemote compiledSource={compiledSource} components={components} />
      </article>
    </section>
  )
}
