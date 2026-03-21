import { cookies } from "next/headers";

import Navbar from "@/app/components/navbar/Navbar";
import Hero from "@/app/components/hero/HeroSection";
import Skills from "@/app/components/skills/SkillsSection";
import Experience from "@/app/components/experience/ExperienceSection";
import Projects from "@/app/components/projects/ProjectsSection";
import Certifications from "@/app/components/certifications/CertificationsSection";
import Contact from "@/app/components/contact/ContactSection";
import Footer from "@/app/components/Footer";


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