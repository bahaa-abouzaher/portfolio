import { experiences } from "@/app/data/experienceData"
import ExperienceCard from "./ExperienceCard"
import styles from "./Experience.module.css"

export default function ExperienceSection() {
  return (
    <section id="experience">

      <h2>Professional Experience</h2>

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