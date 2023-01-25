import Link from 'next/link'

import styles from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <header className={styles.navBar}>
      <div className="transition-colors hover:bg-black hover:text-white">
        <Link href="/">PAUL YUN</Link>
      </div>
      <ul className={styles.menuLinks}>
        <li className={styles.menuLink}>
          <Link href="/#work">WORK</Link>
        </li>
        <li className={styles.menuLink}>
          <Link href="/about">ABOUT</Link>
        </li>
        <li className={styles.menuLink}>
          <Link href="#contact">CONTACT</Link>
        </li>
      </ul>
      <div className="hidden transition-colors hover:bg-black hover:text-white xl:block">
        <Link href="https://github.com/pvul">GITHUB</Link>{' '}
        <Link href="https://github.com/pvul">LINKEDIN</Link>
      </div>
    </header>
  )
}
