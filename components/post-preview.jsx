import Link from 'next/link'

import Avatar from './avatar'

export default function PostPreview({ post }) {
  const { title, excerpt, author, slug, publishedAt, tags } = post

  return (
    <div className="mt-24 mb-10">
      <h3 className="mb-3 text-3xl font-bold leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">{publishedAt}</div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author.name} picture={author.image} />

      {/* tags example */}
      {tags && (
        <ul>
          {tags.map((tag) => (
            <li key={tag.slug}>{tag}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
