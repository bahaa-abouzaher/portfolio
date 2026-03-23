"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Lang = "en" | "de"

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null
    if (saved) setLangState(saved)
  }, [])

  function setLang(newLang: Lang){
    localStorage.setItem("lang", newLang)
    setLangState(newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider")
  return context
}
