import {
  educationData,
  certificationsData
} from "@/app/data/certificationsData"
import CertificationCard from "./CertificationCard"
import styles from "./certifications.module.css"

export default function CertificationsSection() {
  return (
    <section id="certifications">
      <h2 className={styles.heading}>
        Certifications
      </h2>

      <div className={styles.row}>
        <div className={styles.column}>
          <h3 className={styles.title}>Education</h3>

          <div className={styles.box}>
            {educationData.map((item) => (
              <CertificationCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Certifications</h3>

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
