type MarkdownFileObject = {
  title?: string
  slug?: string
  content?: string
  [x: string]: any
}

type CarouselImage = {
  alt: string
  source: string
}

type CarouselCard = {
  title: string
  description: string
  images: CarouselImage[]
}
