import { Project } from "@/app/types/project"
import { FaGithub } from "react-icons/fa"
import { FiCalendar } from "react-icons/fi"
import styles from "./projects.module.css"
import { IoIosCloseCircleOutline } from "react-icons/io"

import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/i18n/translations"

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang } = useLanguage();
  const t = translations[lang];
  
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <IoIosCloseCircleOutline />
        </button>

        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{project.title}</h3>
          <p className={styles.modalIntro}>{project.description[lang]}</p>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.modalMeta}>
            <FiCalendar className={styles.metaIcon} />
            <div>
              <p className={styles.metaLabel}>{t.projects.duration}</p>
              <p className={styles.metaValue}>{project.duration}</p>
            </div>
          </div>

          <div className={styles.modalBlock}>
            <div className={styles.blockHeading}>
              <span className={styles.blockBar}></span>
              <h4>{t.projects.description}</h4>
            </div>
            <p className={styles.blockText}>{project.longDescription[lang]}</p>
          </div>

          <div className={styles.modalBlock}>
            <div className={styles.blockHeading}>
              {/* <span className={styles.blockBar}></span> */}
              <h4>{t.projects.features}</h4>
            </div>

            <ul className={styles.featuresList}>
              {project.features[lang].map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.modalBlock}>
            <div className={styles.blockHeading}>
              <span className={styles.blockBar}></span>
              <h4>{t.projects.tech}</h4>
            </div>

            <div className={styles.techList}>
              {project.tech.map((item) => (
                <span key={item} className={styles.techBadge}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repoButton}
            >
              <FaGithub />
              <span>{t.projects.repo}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
