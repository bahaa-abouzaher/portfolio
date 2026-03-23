"use client"

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import styles from "./contact.module.css";
import ContactForm from "./ContactForm";

import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/i18n/translations"

export default function ContactSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="contact" className={styles.contact}>
        <h2>{t.contact.title}</h2>


      <div className={styles.wrapper}>
        {/* LEFT - FORM */}
        <ContactForm />

        {/* RIGHT - INFO */}
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <FiMail />
            </div>
            <div>
              <p className={styles.infoTitle}>{t.contact.info.email}</p>
              <p>bahaa.abouzahr@gmail.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <FiPhone />
            </div>
            <div>
              <p className={styles.infoTitle}>{t.contact.info.phone}</p>
              <p>+49 17677931353</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <FiMapPin />
            </div>
            <div>
              <p className={styles.infoTitle}>{t.contact.info.location}</p>
              <p>Dortmund, Germany</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
