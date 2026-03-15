import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./hero.module.css"

export default function HeroSection() {
  return (
    <section className={styles.home} id="hero">
      <div className={styles.homeContent}>
        <h1>Hi, I&apos;m <span>Bahaa Abou Zaher</span></h1>
        <div className={styles.textAnimate}>
            <h3>Fullstack Developer</h3>
        </div>
        <p>Professional IT Support Engineer with 10 years of practical experience
            in the IT field. Possessing a proven ability to administer the operation,
            configuration and maintenance of computer-based information systems
        </p>

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
              href="https://github.com/bahaa-abouzahr"
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


    </section>
  );
}