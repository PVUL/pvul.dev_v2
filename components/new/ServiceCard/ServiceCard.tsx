import styles from './ServiceCard.module.scss'

interface Props {
  service: {
    title: string
    icon: string
    alt: string
    technologies: string[]
  }
}

export const ServiceCard = ({
  service: { title, icon, alt, technologies },
}: Props) => (
  <div className={styles.serviceCard}>
    <div className={styles.circle}>
      <img className={styles.icon} src={icon} alt={alt} />
    </div>
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.list}>
        {technologies && technologies.map((tech) => <li key={tech}>{tech}</li>)}
      </ul>
    </div>
  </div>
)
