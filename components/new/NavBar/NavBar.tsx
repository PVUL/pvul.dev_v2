import Link from 'next/link'
import {
  RiGithubFill as GithubIcon,
  RiLinkedinBoxFill as LinkedinIcon,
} from 'react-icons/ri'
import styles from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <div className="flex flex-col drawer-content">
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
        <div className="hidden xl:flex">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/pvul"
            className="transition-opacity hover:opacity-75"
          >
            <GithubIcon className={styles.icon} />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/yunpaul"
            className="transition-opacity hover:opacity-75"
          >
            <LinkedinIcon className={styles.icon} />
          </a>
        </div>
      </header>
    </div>
  )
}
