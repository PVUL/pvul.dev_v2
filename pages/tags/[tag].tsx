import { GetStaticProps, GetStaticPaths } from 'next'
import { getTagBySlug, getTags } from '../api/tags'
import { Blog } from '../../components/sections/Blog'

/**
 * `/tags/[name-of-tag]`
 */
export default function Tag({ tag }: { tag: ObjectWithPosts }) {
  return (
    <section>
      <h1>Tag: {tag.title}</h1>
      <Blog posts={tag.posts} />
    </section>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const tags = getTags()

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag.slug as string,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params
  const tagSlug = params?.tag?.toString()

  let tag: MarkdownFileObject

  if (tagSlug) {
    tag = getTagBySlug(tagSlug, [], true)
  } else {
    tag = {}
  }

  return {
    props: { tag },
  }
}
