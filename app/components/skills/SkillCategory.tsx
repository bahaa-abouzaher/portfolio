import styles from "./skills.module.css"
import { Skill } from "@/app/data/skillsData"
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/i18n/translations";

type SkillCategoryProps = {
  title: string
  skills: Skill[]
}

export default function SkillCategory({ skills, title }: SkillCategoryProps) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className={styles.card}>
      <h3 className={styles.categoryTitle}>
        {t.skills.categories[title as keyof typeof t.skills.categories]}
      </h3>

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
