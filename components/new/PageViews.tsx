import useSWR from 'swr'

interface PageViewsProps {
  slug: string
}

const fetcher = async (input: RequestInfo) => {
  const res: Response = await fetch(input)
  return await res.json()
}

export const PageViews: React.FC<PageViewsProps> = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)

  let pageViews = ''
  if (data?.total) {
    pageViews = `${data.total} view`
    if (data.total !== 1) pageViews += 's'
  }

  return <>{pageViews}</>
}
