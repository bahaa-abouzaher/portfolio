import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./hero.module.css"

export default function HeroSection() {
  return (
    <section className={styles.home} id="hero">
      <div className={styles.homeContent}>
        <div className={styles.textAnimate}>
            <h3>Fullstack Developer</h3>
        </div>
        <div>
          <p>
            IT professional with 10 years of experience in IT support, system administration,
            and infrastructure management. Skilled in managing Windows servers, Active Directory, and leading IT operations. 
          </p>
          <p>
            Currently building full-stack web applications with Next.js, React, and JavaScript, 
            applying my IT background to create practical and reliable solutions.
          </p>
        </div>

        <div className={styles.btnBox} >
            <a href="/files/Bahaa Abou Zaher - CV - English.pdf" className={styles.btnCv} download>
              <span>Download CV</span>
              <span>English</span>
            </a>
            <a href="/files/Bahaa Abou Zaher - CV - Deutsch.pdf" className={styles.btnCv} download>
              <span>Download CV</span>
              <span>Deutsch</span>
            </a>
        </div>
      
        <div className={styles.homeSci}>

            <a 
              href="https://www.linkedin.com/in/bahaa-abou-zaher-84257b103/"
              target="_blank" rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/bahaa-abouzaher"
              target="_blank" rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
        </div>
      </div>
        
      <div className={styles.myimageContainer }>
        <div className={styles.myimage }>
          <Image
            src="/images/me.png"
            width={400}
            height={400}
            alt="me"
          />
        </div>
      </div>
      <span className="bg-red-400"></span>


    </section>
  );
}