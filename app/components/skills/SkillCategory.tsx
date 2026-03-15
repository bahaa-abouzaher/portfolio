import styles from "./skills.module.css"
import { Skill } from "@/app/data/skillsData"

type SkillCategoryProps = {
  title: string
  skills: Skill[]
}

export default function SkillCategory({ skills, title }: SkillCategoryProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.categoryTitle}>{title}</h3>

      <ul className={styles.skillList}>
        {skills.map((skill) => {
          const Icon = skill.icon

          return (
            <li key={skill.name} className={styles.skillItem}>
              <Icon className={styles.icon} />
              <span>{skill.name}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
