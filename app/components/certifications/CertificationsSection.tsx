"use client"

import { educationData, certificationsData} from "@/app/data/certificationsData"
import CertificationCard from "./CertificationCard"
import styles from "./certifications.module.css"

import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/i18n/translations"
  
export default function CertificationsSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="certifications">
      <h2 className={styles.heading}>
        {t.certifications.title}
      </h2>

      <div className={styles.row}>
        <div className={styles.column}>
          <h3 className={styles.title}>{t.certifications.education}</h3>

          <div className={styles.box}>
            {educationData.map((item) => (
              <CertificationCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>{t.certifications.certifications}</h3>

          <div className={styles.box}>
            {certificationsData.map((item) => (
              <CertificationCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
