import { useEffect, useRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'

import styles from './Drawer.module.scss'
import { HamburgerButton } from '../HamburgerButton'
import { SocialLinks } from '../SocialLinks'
import { MadeWithLove } from '../MadeWithLove'

interface Props {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const Drawer = ({ isOpen, setIsOpen }: Props) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    isOpen
      ? disableBodyScroll(ref as unknown as HTMLElement)
      : enableBodyScroll(ref as unknown as HTMLElement)

    return () => {
      clearAllBodyScrollLocks()
    }
  }, [isOpen])

  // close drawer on escape key press
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <aside
      className={clsx(styles.drawer, { [styles.isOpen]: isOpen })}
      ref={ref}
    >
      <div className={styles.hamburger}>
        <HamburgerButton isOpen={true} setIsOpen={setIsOpen} />
      </div>
      <div className={styles.body}>
        <ul className={styles.menuLinks}>
          <li className={styles.menuLink}>
            <Link href="/#work">
              <span onClick={() => setIsOpen(false)}>WORK</span>
            </Link>
          </li>
          <li className={styles.menuLink}>
            <Link href="/posts">
              <span onClick={() => setIsOpen(false)}>BLOG</span>
            </Link>
          </li>
          <li className={styles.menuLink}>
            <Link href="/about">
              <span onClick={() => setIsOpen(false)}>ABOUT</span>
            </Link>
          </li>
          <li className={styles.menuLink}>
            <Link href="#contact">
              <span onClick={() => setIsOpen(false)}>CONTACT</span>
            </Link>
          </li>
        </ul>
        <div>
          <SocialLinks />
          <MadeWithLove />
        </div>
      </div>
    </aside>
  )
}
