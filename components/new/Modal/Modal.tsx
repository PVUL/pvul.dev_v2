import { useEffect, ReactNode, useRef, LegacyRef } from 'react'
import { createPortal } from 'react-dom'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

import styles from './Modal.module.scss'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal = ({ isOpen, onClose, children }: Props) => {
  let ref = useRef<HTMLElement>(null)

  const escHandler = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    isOpen
      ? disableBodyScroll(ref as unknown as HTMLElement)
      : enableBodyScroll(ref as unknown as HTMLElement)

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => {
        escHandler(e)
      })
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', (e) => {
          escHandler(e)
        })
      }
      clearAllBodyScrollLocks()
    }
  }, [isOpen])

  if (typeof document !== 'undefined') {
    return createPortal(
      <div
        ref={ref as LegacyRef<HTMLDivElement>}
        className={`fixed inset-0 ${isOpen ? '' : 'pointer-events-none'}`}
      >
        <div
          className={`fixed inset-0 bg-black ${
            isOpen ? 'opacity-50' : 'pointer-events-none opacity-0'
          } transition-opacity duration-300 ease-in-out`}
          onClick={onClose}
        />

        <div
          className={`${styles.modalBox} ${
            isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          } `}
        >
          {children}
        </div>
      </div>,
      document.body
    )
  } else {
    return null
  }
}
