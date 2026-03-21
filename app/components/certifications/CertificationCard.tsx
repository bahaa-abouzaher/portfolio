import { FiCalendar } from "react-icons/fi"
import styles from "./certifications.module.css"

type BaseCardItem = {
  id: number
  date: string
  title: string
  description?: string
}

type EducationCardItem = BaseCardItem & {
  institution: string
}

type CertificationCardItemData = BaseCardItem & {
  issuer: string
}

type CertificationCardProps = {
  item: EducationCardItem | CertificationCardItemData
}

export default function CertificationCard({ item }: CertificationCardProps) {
  const subText = "institution" in item ? item.institution : item.issuer

  return (
    <div className={styles.item}>
      <div className={styles.itemInner}>
        <div className={styles.year}>
          <FiCalendar />
          <span>{item.date}</span>
        </div>

        <h3>{item.title}</h3>
        <p>{subText}</p>
        {item.description && <p>{item.description}</p>}
      </div>
    </div>
  )
}
