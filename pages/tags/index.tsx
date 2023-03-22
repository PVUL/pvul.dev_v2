import { GetStaticProps } from 'next'
import { getTags } from '../api/tags'

export default function Tags({ tags }: { tags: ObjectWithPosts[] }) {
  return (
    <section>
      {tags.map((tag) => tag?.posts?.length > 0 && <div>{tag.title}</div>)}
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = getTags()

  return {
    props: { tags },
  }
}
