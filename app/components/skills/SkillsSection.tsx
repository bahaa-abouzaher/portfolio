import { skillsData } from "@/app/data/skillsData"
import SkillCategory from "./SkillCategory"
import styles from "./skills.module.css"

export default function SkillsSection() {

  return (
    <section id="skills">
      <h2 className={styles.title}>Skills & Technologies</h2>

      <div className={styles.grid}>
        {skillsData.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  )
}