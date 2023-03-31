import Link from 'next/link'

import styles from './Footer.module.scss'
import { SocialLinks } from '../SocialLinks'
import { MadeWithLove } from '../MadeWithLove'

export const Footer = () => (
  <div className={styles.footer}>
    <ul className={styles.links}>
      <li>
        <Link href="/#work">WORK</Link>
      </li>
      <li>
        <Link href="/about">ABOUT</Link>
      </li>
      {/* <li>
        <Link href="/blog">BLOG</Link>
      </li> */}
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

    <SocialLinks />
    <MadeWithLove />
  </div>
)
