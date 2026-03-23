"use client"

import { useState, useEffect } from "react"
import ToggleTheme from "./ToggleTheme"
import styles from "./navbar.module.css"
import ToggleLanguage from "./ToggleLanguage"
import { useLanguage } from "@/app/context/LanguageContext"
import { translations } from "@/app/i18n/translations"


type NavbarProps = {
  theme: string
}

export default function Navbar({ theme }:NavbarProps) {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })

      },
      {
        // threshold: 0.4,
        rootMargin: "-20% 0px -40% 0px"
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const handleClick = (
    id: string
  ) => {

    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
    }
  }

  return (
    <header className={`${styles.header}`}>
      <a href="#" className={styles.logo}>
        <span>Bahaa</span> Abou Zaher
      </a>
      
      <nav className={styles.navbar}>
        <button
          onClick={() => handleClick("hero")}
          className={activeSection === "hero" ? styles.active : ""}
        >
          {t.navbar.home}
        </button>

        <button
          onClick={() => handleClick("skills")}
          className={activeSection === "skills" ? styles.active : ""}
        >
          {t.navbar.skills}
        </button>

        <button
          onClick={() => handleClick("experience")}
          className={activeSection === "experience" ? styles.active : ""}
        >
          {t.navbar.experience}
        </button>

        <button
          onClick={() => handleClick("projects")}
          className={activeSection === "projects" ? styles.active : ""}
        >
          {t.navbar.projects}
        </button>

        <button
          onClick={() => handleClick("certifications")}
          className={activeSection === "certifications" ? styles.active : ""}
        >
          {t.navbar.certifications}
        </button>

        <button
          onClick={() => handleClick("contact")}
          className={activeSection === "contact" ? styles.active : ""}
        >
          {t.navbar.contact}
        </button>

      </nav>

      <div className={styles.togglesContainer}>
        <ToggleLanguage />
        <ToggleTheme initialTheme={theme} />
      </div>

    </header>
  )
}
