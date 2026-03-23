type LocalizedString = {
  en: string
  de: string
}

export interface EducationItem {
  id: number
  date: string
  title: LocalizedString
  institution: string
  description?: string
}

export interface CertificationItem {
  id: number
  date: string
  title: string
  issuer?: LocalizedString
  description?: string
}
