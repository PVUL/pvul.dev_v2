import { useEffect, useRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import styles from './Drawer.module.scss'
import { HamburgerButton } from '../HamburgerButton'
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'

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

  // close when clicked outside of drawer (needs work)
  // useEffect(() => {
  //   const checkIfClickedOutside = (e) => {}

  //   document.addEventListener('click', checkIfClickedOutside)

  //   return () => {
  //     document.removeEventListener('click', checkIfClickedOutside)
  //   }
  // }, [isOpen, setIsOpen])

  // close drawer on escape key press
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'escape') {
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
      <ul className={styles.menuLinks}>
        <li className={styles.menuLink}>
          <Link href="/#work">
            <span onClick={() => setIsOpen(false)}>WORK</span>
          </Link>
        </li>
        <li className={styles.menuLink}>
          <Link href="/about">
            <span onClick={() => setIsOpen(false)}>ABOUT</span>
          </Link>
        </li>
        <li className={styles.menuLink}>
          <Link href="/blog">
            <span onClick={() => setIsOpen(false)}>BLOG</span>
          </Link>
        </li>
        <li className={styles.menuLink}>
          <Link href="#contact">
            <span onClick={() => setIsOpen(false)}>CONTACT</span>
          </Link>
        </li>
      </ul>
    </aside>
  )
}
