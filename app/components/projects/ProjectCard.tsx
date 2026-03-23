import { Project } from "@/app/types/project"
import { FaGithub } from "react-icons/fa"
import { FiCalendar } from "react-icons/fi"
import styles from "./projects.module.css"
import { BsThreeDots } from "react-icons/bs"
import { useState } from "react"

import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/i18n/translations"

type ProjectCardProps = {
  project: Project
  onOpen: () => void
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { lang } = useLanguage();
  const t = translations[lang];
  
  const [displayAllTech, setDisplayAllTech] = useState(false);

  const visibleTech = displayAllTech ? project.tech : project.tech.slice(0, 6);
  const remainingCount = project.tech.length - visibleTech.length

  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardStatus}>
          <span className={styles.statusDot}></span>
          <span>Active Project</span>
        </div>
        <h3 className={styles.cardTitle}>{project.subtitle[lang]}</h3>
        <button className={styles.cardDots} onClick={onOpen}>
          <BsThreeDots />
        </button>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <div className={styles.cardIconBox}>
            <FaGithub className={styles.cardIcon} />
          </div>

          <div>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardSubtitle}>{project.type[lang]}</p>
          </div>
        </div>

        <p className={styles.cardDescription}>{project.description[lang]}</p>

        <div className={styles.cardMeta}>
          <FiCalendar />
          <span>{project.duration}</span>
        </div>

        <div className={styles.techList}>
          {visibleTech.map((item: string) => (
            <span key={item} className={styles.techBadge}>
              {item}
            </span>
          ))}

          {remainingCount > 0 && (
            <button className={styles.techMore} onClick={() => setDisplayAllTech(true)}>
              + {remainingCount}
            </button>
          )}
        </div>

        <div className={styles.cardFooter}>
          <button type="button" className={styles.detailsButton} onClick={onOpen}>
            {t.projects.details} →
          </button>
        </div>
      </div>
    </article>
  )
}
