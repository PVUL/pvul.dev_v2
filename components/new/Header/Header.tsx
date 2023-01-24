import Link from 'next/link'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="transition-colors hover:bg-black hover:text-white">
        <Link href="/">PAUL YUN</Link>
      </div>
      <ul className="hidden cursor-default xl:block">
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
