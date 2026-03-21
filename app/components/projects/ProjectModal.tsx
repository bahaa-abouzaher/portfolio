import { Project } from "@/app/data/projectsData"
import { FaGithub } from "react-icons/fa"
import { FiCalendar } from "react-icons/fi"
import styles from "./projects.module.css"
import { IoIosCloseCircleOutline } from "react-icons/io"

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {

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
          <p className={styles.modalIntro}>{project.description}</p>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.modalMeta}>
            <FiCalendar className={styles.metaIcon} />
            <div>
              <p className={styles.metaLabel}>Duration</p>
              <p className={styles.metaValue}>{project.duration}</p>
            </div>
          </div>

          <div className={styles.modalBlock}>
            <div className={styles.blockHeading}>
              <span className={styles.blockBar}></span>
              <h4>Project Description</h4>
            </div>
            <p className={styles.blockText}>{project.longDescription}</p>
          </div>

          <div className={styles.modalBlock}>
            <div className={styles.blockHeading}>
              {/* <span className={styles.blockBar}></span> */}
              <h4>Key Features</h4>
            </div>

            <ul className={styles.featuresList}>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.modalBlock}>
            <div className={styles.blockHeading}>
              <span className={styles.blockBar}></span>
              <h4>Technology Stack</h4>
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
              <span>View Repository</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
