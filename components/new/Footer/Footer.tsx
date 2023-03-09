import {
  RiGithubFill as GithubIcon,
  RiLinkedinBoxFill as LinkedinIcon,
  RiTwitterFill as TwitterIcon,
} from 'react-icons/ri'
import Link from 'next/link'

import styles from './Footer.module.scss'

export const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.logo}>
      <span className={styles.logoPrimary}>PAUL YUN</span>
      <span className={styles.logoSecondary}>Portfolio</span>
    </div>
    <ul className={styles.links}>
      <li>
        <Link href="/#work">WORK</Link>
      </li>
      <li>
        <Link href="/about">ABOUT</Link>
      </li>
      <li>
        <Link href="/blog">BLOG</Link>
      </li>
      <li>
        <Link href="#contact">CONTACT</Link>
      </li>
    </ul>
    <p className={styles.quote}>
      A meaningful life is not being rich, being popular, being highly educated
      or being perfect. It is about being real, being humble, being able to
      share ourselves and touch the lives of others. It is only then that we
      could have a full, happy, and contented life.
    </p>

    <div className={styles.socials}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/pvul"
        className="transition-opacity hover:opacity-75"
        aria-label="github"
      >
        <GithubIcon className={styles.icon} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/__pvul"
        className="transition-opacity hover:opacity-75"
        aria-label="github"
      >
        <TwitterIcon className={styles.icon} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://linkedin.com/in/yunpaul"
        className="transition-opacity hover:opacity-75"
        aria-label="linkedin"
      >
        <LinkedinIcon className={styles.icon} />
      </a>
    </div>

    <p className={styles.text}>
      Made with {'<3'} by Paul Yun
      <br />
    </p>
    <p className={styles.text}>©2023</p>
  </div>
)
