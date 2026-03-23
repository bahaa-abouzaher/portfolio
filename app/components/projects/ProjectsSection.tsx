"use client"

import { useState } from "react"
import { projectsData } from "@/app/data/projectsData"
import { Project } from "@/app/types/project"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import styles from "./projects.module.css"

import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/i18n/translations"

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects">
      <h2>{t.projects.title}</h2>
      <div className={styles.grid}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
