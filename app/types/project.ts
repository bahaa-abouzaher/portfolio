export interface Project {
  id: number
  title: string
  subtitle: {
    en: string
    de: string
  }
  type: {
    en: string
    de: string
  }
  description: {
    en: string
    de: string
  }
  longDescription: {
    en: string
    de: string
  }
  features: {
    en: string[]
    de: string[]
  }
  tech: string[]
  duration: string
  github?: string
}
