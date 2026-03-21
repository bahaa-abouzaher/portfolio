"use client"

import { useState } from "react"
import { projectsData } from "@/app/data/projectsData"
import { Project } from "@/app/types/project"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import styles from "./projects.module.css"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
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
