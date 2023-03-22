import type { GetStaticProps } from 'next'
import { useEffect, useRef, useState } from 'react'
import { getSearch } from './api/search'

export default function Search({ search }: { search: SearchResult[] }) {
  const [searchValue, setSearchValue] = useState('')
  const [searchItems, setSearchItems] = useState(search)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const value = searchValue.toLocaleLowerCase()

    const filteredItems = search.filter((item) => {
      if (item.title && item.title.toLocaleLowerCase().includes(value))
        return true
      if (item.excerpt && item.excerpt.toLocaleLowerCase().includes(value))
        return true
    })

    setSearchItems(filteredItems)
  }, [search, searchValue])

  return (
    <>
      <span>Search: </span>
      <input
        id="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        ref={inputRef}
        autoComplete="off"
      />
      <section>
        {searchItems.map((search, i) => (
          <div key={i} className="p-6 mb-4 bg-pink-100">
            <h2>{search.type}</h2>
            <h3>{search.title}</h3>
          </div>
        ))}
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const search = getSearch()

  return {
    props: { search },
  }
}
