import React from 'react'
import { ImQuotesLeft as QuoteIcon } from 'react-icons/im'

// NOTE: this would be a fun custom component to create
// taking in a quote, author, and source, that way we
// don't need a separate figcaption and nested cite element
// in the mdx file, for example:
//
// > this is the quote.
//
// <figcaption>
//   —Leonardo Da Vinci,
//   <cite>Walter Issacson</cite>
// </figcaption>
//

export const BlockQuote = ({ children }) => (
  <blockquote className="relative m-auto text-xl italic sm:max-w-[40rem] text-neutral-700">
    <QuoteIcon
      className="absolute top-0 mt-5 ml-3 leading-none sm:ml-10 text-7xl text-neutral-200"
      aria-hidden="true"
    />
    <div className="relative px-8 mb-4 text-3xl pt-14 sm:px-14">{children}</div>
  </blockquote>
)

export default BlockQuote
