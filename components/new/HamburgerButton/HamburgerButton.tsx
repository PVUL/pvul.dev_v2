import styles from './HamburgerButton.module.scss'

interface Props {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const HamburgerButton = ({ isOpen, setIsOpen }: Props) => {
  const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300`

  return (
    <button
      className={styles.hamburgerButton}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  )
}
