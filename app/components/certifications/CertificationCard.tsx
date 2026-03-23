import { FiCalendar } from "react-icons/fi"
import styles from "./certifications.module.css"

import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/i18n/translations"

type LocalizedString = {
  en: string
  de: string
}

type BaseCardItem = {
  id: number
  date: string
  title: string | LocalizedString
  description?: string
}


type EducationCardItem = BaseCardItem & {
  institution: string
}

type CertificationCardItemData = BaseCardItem & {
  issuer?: LocalizedString
}


type CertificationCardProps = {
  item: EducationCardItem | CertificationCardItemData
}


export default function CertificationCard({ item }: CertificationCardProps) {
  const { lang } = useLanguage();
  const t = translations[lang];

  const subText =  "institution" in item ? item.institution : item.issuer?.[lang] || ""

  return (
    <div className={styles.item}>
      <div className={styles.itemInner}>
        <div className={styles.year}>
          <FiCalendar />
          <span>{item.date}</span>
        </div>

        <h3>{typeof item.title === "object"
          ? item.title[lang]
          : item.title}
        </h3>
        <p>
          {subText}
        </p>
        {item.description && <p>{item.description}</p>}
      </div>
    </div>
  )
}
