"use client"

import { skillsData } from "@/app/data/skillsData"
import SkillCategory from "./SkillCategory"
import styles from "./skills.module.css"
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/i18n/translations";

export default function SkillsSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="skills">
      <h2>{t.skills.title}</h2>

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