export interface Experience {
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  type: "Full-time" | "Part-time" | "Internship" | "Contract"
  description: string[]
}
