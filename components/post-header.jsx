import Avatar from './avatar'
import PostTitle from './post-title'

export default function PostHeader({ title, author, publishedAt }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex items-center justify-between">
        <div className="block mb-6">
          <Avatar name={author.name} picture={author.image} />
        </div>
        <div className="mb-6 text-lg">{publishedAt}</div>
      </div>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div> */}
    </>
  )
}