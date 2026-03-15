import { cookies } from "next/headers";

import Navbar from "@/app/components/navbar/Navbar";
import Hero from "@/app/components/hero/HeroSection";
import Projects from "@/app/components/projects/ProjectsSection";
import Skills from "@/app/components/skills/SkillsSection";
import Contact from "@/app/components/contact/ContactSection";
import Footer from "@/app/components/Footer";
import Experience from "@/app/components/experience/ExperienceSection";
import Certifications from "./components/certifications/CertificationsSection";


export default async function Home() {
  const theme:string = (await cookies()).get("theme")?.value || "dark";  

  return (
    <main>
      <Navbar theme={theme} />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}