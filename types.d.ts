type MarkdownFileBase = {
  title: string
  slug?: string
  content?: string
  [x: string]: any // can I remove this?
}

interface ImageObject {
  url: string
  alt: string
  placeholder: string
}

interface PostObjectBase extends MarkdownFileBase {
  author: string
  publishedAt: string
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
