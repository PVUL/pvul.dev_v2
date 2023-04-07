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

  return <>{data?.total ? `${data.total} views` : ``}</>
}
