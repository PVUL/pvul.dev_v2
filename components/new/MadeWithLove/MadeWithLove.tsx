import styles from './MadeWithLove.module.scss'

export const MadeWithLove = () => (
  <div className={styles.madeWithLove}>
    <p className={styles.text}>
      Made with {'<3'} by Paul Yun
      <br />
    </p>
    <p className={styles.text}>©2023</p>
  </div>
)
