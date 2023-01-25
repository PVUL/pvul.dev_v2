import Link from 'next/link'

import styles from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <header className={styles.navBar}>
      <div className="transition-colors hover:bg-black hover:text-white">
        <Link href="/">PAUL YUN</Link>
      </div>
      <ul className="hidden text-center cursor-default xl:block">
        <li>
          <Link href="/#work">WORK</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="#contact">CONTACT</Link>
        </li>
      </ul>
      <div className="transition-colors hover:bg-black hover:text-white">
        <Link href="https://github.com/pvul">GITHUB</Link>{' '}
        <Link href="https://github.com/pvul">LINKEDIN</Link>
      </div>
    </header>
  )
}
