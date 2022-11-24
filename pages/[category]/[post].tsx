import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { components } from '../../lib/mdx-components'
import { getPosts, getPostSource } from '../api/posts'

interface Props {
  source: MDXRemoteSerializeResult
  frontmatter: { [key: string]: any }
}

const Post = ({ source, frontmatter }: Props) => {
  return (
    <>
      <div>
        <p>Category: {frontmatter.category}</p>
      </div>
      {/* @ts-ignore */}
      <MDXRemote {...source} components={components} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getPosts()

  return {
    paths: posts.map((post) => ({
      params: {
        post: post.slug,
        category: post.category.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context

  if (params?.post) {
    return {
      props: await getPostSource(params.post.toString()),
    }
  }

  return {
    props: {},
  }
}

export default Post
