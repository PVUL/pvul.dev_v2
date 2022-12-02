import cntl from 'cntl'
import Link from 'next/link'

const styles = {
  header: cntl`
    fixed
    flex
    flex-row
    justify-between
    w-screen
    bg-white
    border-b
    border-black
    border-solid
    items-center
    px-7
    py-2
    z-10

    md:flex-col
    md:h-screen
    md:left-0
    md:top-0
    md:border-solid
    md:border-black
    md:border-b-0
    md:border-r
    md:w-64
  `,
}

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="transition-colors hover:bg-black hover:text-white">
        <Link href="/">PVUL.dev</Link>
      </div>
      <ul className="hidden cursor-default md:block">
        <li>software engineer</li>
        <li>mechanical engineer</li>
        <li>creative technologist</li>
        <li>product designer</li>
      </ul>
      <div className="transition-colors hover:bg-black hover:text-white">
        <Link href="https://github.com/pvul">github</Link>
      </div>
    </header>
  )
}
