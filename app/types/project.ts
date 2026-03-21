export interface Project {
  id: number
  title: string
  subtitle: string
  type: string
  description: string
  longDescription: string
  features: string[]
  tech: string[]
  duration: string
  github?: string
}
