import {
  RiGithubFill as GithubIcon,
  RiLinkedinBoxFill as LinkedinIcon,
  RiTwitterFill as TwitterIcon,
  RiInstagramFill as InstagramIcon,
  RiYoutubeFill as YoutubeIcon,
} from 'react-icons/ri'

import styles from './SocialLinks.module.scss'

export const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
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
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://instagram.com/paulyuntv"
        className="transition-opacity hover:opacity-75"
        aria-label="instagram"
      >
        <InstagramIcon className={styles.icon} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.youtube.com/@paulyuntv"
        className="transition-opacity hover:opacity-75"
        aria-label="youtube"
      >
        <YoutubeIcon className={styles.icon} />
      </a>
    </div>
  )
}
