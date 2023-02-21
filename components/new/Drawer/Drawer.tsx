import clsx from 'clsx'
import styles from './Drawer.module.scss'

interface Props {
  children?: React.ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const Drawer = ({ children, isOpen, setIsOpen }: Props) => {
  return (
    <main
      className={clsx(styles.drawer, {
        [styles.isOpen]: isOpen,
        [styles.isNotOpen]: !isOpen,
      })}
    >
      <section
        className={
          ' w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className="relative flex flex-col w-screen h-full max-w-lg pb-10 space-y-6 overflow-y-scroll">
          <header className="p-4 text-lg font-bold">Header</header>
          {children}
          test
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false)
        }}
      ></section>
    </main>
  )
}
