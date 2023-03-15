type MarkdownFileBase = {
  title: string
  slug?: string
  content?: string
  [x: string]: any // can I remove this?
}

interface PostObjectBase extends MarkdownFileBase {
  author: string
  publishedAt: string
  excerpt: string
  coverImage: string
}

interface AuthorObjectBase extends MarkdownFileBase {
  image: string
  twitter: string
  shortBio: string
}

interface NestedPostObject extends PostObjectBase {
  author: AuthorObjectBase
  category: MarkdownFileBase
  tags?: MarkdownFileBase[]
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
