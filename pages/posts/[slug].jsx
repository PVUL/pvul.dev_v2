import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/container'
import Layout from '../../components/layout'
import { Post } from '../../components/sections/Post'
import PostTitle from '../../components/post-title'
import { components } from '../../lib/mdx-components'
import { getPosts, getPostSource } from '../api/posts'
import { getUploadCareUrl } from '../../utils'
import { BASE_URL, OG_IMAGE_DIMS } from '../../utils/constants'

export default function PostPage(props) {
  const {
    source: { compiledSource },
    frontmatter,
  } = props
  const router = useRouter()
  const {
    query: { slug },
  } = router

  const imageUrl = getUploadCareUrl(frontmatter.image.url, OG_IMAGE_DIMS)

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>{frontmatter.title}</title>
              <meta name="description" content={frontmatter.excerpt} />
              <meta name="keywords" content="" />
              <meta property="og:url" content={BASE_URL + slug} />
              <meta property="og:title" content={frontmatter.title} />
              <meta property="og:description" content={frontmatter.excerpt} />
              <meta property="og:image" content={imageUrl} />
              <meta property="og:image:url" content={imageUrl} />
              <meta property="twitter:image" content={imageUrl} />
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
        category: post.category.slug,
      },
    })),
    fallback: false,
  }
}
