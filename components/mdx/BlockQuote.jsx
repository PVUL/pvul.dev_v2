import React from 'react'

export const BlockQuote = ({ children }) => (
  <blockquote className="relative p-10 pb-8 m-auto text-xl italic w-96 text-neutral-600 bg-slate-100">
    <div
      className="absolute top-0 mt-4 leading-none text-8xl text-neutral-300"
      aria-hidden="true"
    >
      &ldquo;
    </div>
    <div className="mt-10">{children}</div>
  </blockquote>
)

export default BlockQuote
