import {
  RiGithubFill as GithubIcon,
  RiLinkedinBoxFill as LinkedinIcon,
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
    <p className={styles.text}>Made with {'<3'} by Paul Yun.</p>
    <p className={styles.text}>©2023.</p>
  </div>
)
