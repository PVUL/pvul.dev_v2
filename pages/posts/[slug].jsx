import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/container'
import Layout from '../../components/layout'
import { Post } from '../../components/sections/Post'
import PostTitle from '../../components/post-title'
import { components } from '../../lib/mdx-components'
import { getPosts, getPostSource } from '../api/posts'

export default function PostPage(props) {
  const {
    source: { compiledSource },
    frontmatter,
  } = props
  const router = useRouter()

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>{frontmatter.title}</title>
            </Head>
            <Post
              frontmatter={frontmatter}
              compiledSource={compiledSource}
              components={components}
            />
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const { params } = context

  if (params?.slug) {
    return {
      props: await getPostSource(params.slug.toString()),
    }
  }

  return {
    props: {},
  }
}

export const getStaticPaths = async () => {
  const posts = getPosts()

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
        catgetory: post.category.slug,
      },
    })),
    fallback: false,
  }
}
