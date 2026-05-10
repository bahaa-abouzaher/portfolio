"use client"

import { useLanguage } from "@/app/context/LanguageContext"
import styles from "./navbar.module.css"

export default function ToggleLanguage() {
  const { lang, setLang } = useLanguage()
  return (
      <button
        onClick={() => setLang(lang === "en" ? "de" : "en")}
        className={styles.langToggle}
      >
        {lang === "en" ? "EN" : "DE"}
      </button>


  )
}
