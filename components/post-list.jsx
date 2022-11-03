import PostPreview from './post-preview'

export default function PostList({ posts }) {
  return (
    <section>
      <div className="mb-32">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
