type MarkdownFileObject = {
  title?: string
  slug?: string
  content?: string
  [x: string]: any
}

type MarkdownFileBase = {
  title: string
  slug: string
  content: string
}

interface ImageObject {
  url: string
  alt: string
  placeholder: string
}

interface PostObjectBase extends MarkdownFileBase {
  author: string
  status: string
  postDate: string
  excerpt: string
  keywords?: string
  image: ImageObject
}

interface AuthorObjectBase {
  name: string
  image: string
  twitter: string
  shortBio: string
  content: string
}

interface NestedPostObject extends PostObjectBase {
  author: AuthorObjectBase
  category: MarkdownFileBase
  tags?: MarkdownFileBase[]
}

interface ObjectWithPosts extends MarkdownFileBase {
  posts: NestedPostObject[]
}

type CarouselImage = {
  alt: string
  source: string
}

type CarouselCard = {
  title: string
  description: string
  images: CarouselImage[]
  technologies: string
}
