import { IconType } from "react-icons"

import { FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiReact, SiNextdotjs, SiSupabase, SiPostgresql, SiTypescript } from "react-icons/si"
import { BiCodeAlt } from "react-icons/bi"

export interface Skill {
  name: string
  icon: IconType
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript  },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs }
    ]
  },

  {
    title: "Backend & APIs",
    skills: [
      { name: "Next.js API Routes", icon: FaNodeJs },
      { name: "REST APIs", icon: BiCodeAlt },
      { name: "Authentication", icon: BiCodeAlt }
    ]
  },

  {
    title: "Database",
    skills: [
      { name: "Supabase", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql }
    ]
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
    ]
  }
]
