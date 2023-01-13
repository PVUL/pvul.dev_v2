import { clsx } from 'clsx'
import toast, { Toast } from 'react-hot-toast'
import { MdOutlineClose } from 'react-icons/md'

import styles from './Toaster.module.scss'

interface Props {
  t: Toast
  message: string
}

export const Toaster = ({ t, message }: Props) => (
  <div className={clsx(styles.toaster, t.visible ? 'top-0' : '-top-96')}>
    <div className={styles.contentWrapper}>
      <p>{message}</p>
    </div>
    <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
      <MdOutlineClose />
    </div>
  </div>
)
