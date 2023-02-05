import {
  RiGithubFill as GithubIcon,
  RiLinkedinBoxFill as LinkedinIcon,
  RiTwitterFill as TwitterIcon,
} from 'react-icons/ri'
import styles from './Footer.module.scss'

export const Footer = () => (
  <div className={styles.footer}>
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
    <img className={styles.logo} src="pvul-logo.png" alt="logo" />
    <p className={styles.text}>
      Made with {'<3'} <br />
      by Paul Yun
    </p>
    <p className={styles.text}>©2023</p>
  </div>
)
