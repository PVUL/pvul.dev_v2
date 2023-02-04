import styles from './TextBlock.module.scss'

interface Props {
  title: string
  body: string
}

export const TextBlock = ({ title, body }: Props) => (
  <div className={styles.textBlock}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.body}>{body}</p>
  </div>
)
