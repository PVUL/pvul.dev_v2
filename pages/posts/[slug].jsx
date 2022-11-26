import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import PostHeader from '../../components/post-header'
import PostTitle from '../../components/post-title'
import { components } from '../../lib/mdx-components'
import { getPosts, getPostSource } from '../api/posts'

export default function Post(props) {
  const { source, frontmatter, preview } = props

  const router = useRouter()

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article className="mb-32">
            <Head>
              <title>{frontmatter.title}</title>
            </Head>
            <PostHeader
              title={frontmatter.title}
              coverImage={frontmatter.coverImage}
              publishedAt={frontmatter.publishedAt}
              author={frontmatter.author}
            />
            <MDXRemote {...source} components={components} />
          </article>
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
