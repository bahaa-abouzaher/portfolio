"use client"

import { useLanguage } from "@/app/context/LanguageContext"

export default function ToggleLanguage() {
  const { lang, setLang } = useLanguage()
  return (
      <button
        onClick={() => setLang(lang === "en" ? "de" : "en")}
        style={{ fontWeight:  "bold" }}
      >
        {lang === "en" ? "EN" : "DE"}
      </button>


  )
}
