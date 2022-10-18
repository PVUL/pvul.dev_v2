import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { useRouter } from 'next/router'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'

import { getAuthorDetails, postFilePaths, POSTS_PATH } from '../../lib/api'
import Container from '../../components/container'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import { components } from '../../lib/mdx-components'

export default function Post({ source, frontMatter, preview }) {
  const router = useRouter()

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {frontMatter.title} | Code Hike Scrollycoding Preview
                </title>
              </Head>
              <PostHeader
                title={frontMatter.title}
                coverImage={frontMatter.coverImage}
                publishedAt={frontMatter.publishedAt}
                author={frontMatter.author}
              />
              <MDXRemote {...source} components={components} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.md`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)
  // get author

  const mdxSource = await serialize(content, {
    components,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        ...data,
        author: getAuthorDetails(data.author),
      },
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
