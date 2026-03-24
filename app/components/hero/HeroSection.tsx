"use client" 

import Image from "next/image";
import styles from "./hero.module.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/i18n/translations"

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className={styles.home} id="hero">
      <div className={styles.homeContent}>
        <div className={styles.textAnimate}>
            <h3>{t.hero.title}</h3>
        </div>
        <div>
          <p>{t.hero.p1}</p>
          <p>{t.hero.p2}</p>
        </div>

        <div className={styles.btnBox} >
            <a href="/files/Bahaa Abou Zaher - CV - English.pdf" className={styles.btnCv} download>
              <span>{t.hero.downloadCv}</span>
              <span>{t.hero.english}</span>
            </a>
            <a href="/files/Bahaa Abou Zaher - CV - Deutsch.pdf" className={styles.btnCv} download>
              <span>{t.hero.downloadCv}</span>
              <span>{t.hero.german}</span>
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
      


    </section>
  );
}