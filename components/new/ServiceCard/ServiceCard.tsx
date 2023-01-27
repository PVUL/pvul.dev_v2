import styles from './ServiceCard.module.scss'

interface Props {
  service: {
    title: string
    description: string
    icon: string
    alt: string
    technologies: string[]
  }
}

export const ServiceCard = ({
  service: { title, description, icon, alt, technologies },
}: Props) => (
  <div className={styles.serviceCard}>
    <div className={styles.circle}>
      <img className={styles.icon} src={icon} alt={alt} />
    </div>
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <hr className={styles.divider} />
      <ul className={styles.list}>
        {technologies && technologies.map((tech) => <li key={tech}>{tech}</li>)}
      </ul>
    </div>
  </div>
)
