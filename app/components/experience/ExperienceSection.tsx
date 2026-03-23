"use client" 

import { experiences } from "@/app/data/experienceData"
import ExperienceCard from "./ExperienceCard"
import styles from "./Experience.module.css"
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/i18n/translations"

export default function ExperienceSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="experience">

      <h2>{t.experience.title}</h2>

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className={styles.timelineItem}
          >
            <div className={styles.marker}>
              <span className={styles.dot}></span>
              <span className={styles.line}></span>
            </div>

            <ExperienceCard experience={exp} />
          </div>
        ))}
      </div>

    </section>
  )
}