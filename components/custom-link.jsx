import Link from 'next/link'

export default function CustomLink(props) {
  const { href } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  const classes =
    'text-pink-700 underline hover:opacity-75 transition-opacity ease-in-out'
  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} className={classes} />
      </Link>
    )
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={classes}
    />
  )
}
