import clsx from 'clsx'
import styles from './GradientBackground.module.scss'

interface Props {
  variation?: number
}

export const GradientBackground = ({ variation = 0 }: Props) => (
  <div
    className={clsx(styles.gradientBackground, {
      [styles.variation1]: variation === 1,
    })}
  >
    <div className={styles.color1} />
    <div className={styles.color2} />
    <div className={styles.color3} />
  </div>
)
