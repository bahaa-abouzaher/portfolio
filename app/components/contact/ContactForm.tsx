"use client"

import toast from "react-hot-toast"
import styles from "./contact.module.css"
import { sendContactEmail } from "@/app/_lib/actions"

import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/i18n/translations"


export default function ContactForm() {
  const { lang } = useLanguage();
  const t = translations[lang];

  async function clientAction(formData: FormData) {
    const res = await sendContactEmail(formData)

    if (res?.ok) {
      toast.success(t.contact.form.success)
    } else {
      toast.error(t.contact.form.error)
    }
  }

  return (

    <form className={styles.form} action={clientAction}>
      <div className={styles.field}>
        <label>{t.contact.form.name}</label>
        <input 
          type="text" 
          placeholder={t.contact.form.namePlaceholder}
          name="name" 
          required
        />
      </div>

      <div className={styles.field}>
        <label>{t.contact.form.email}</label>
        <input 
          type="email" 
          placeholder={t.contact.form.emailPlaceholder}
          name="email" 
          required
        />
      </div>

      <div className={styles.field}>
        <label>{t.contact.form.message}</label>
        <textarea 
          rows={6} 
          placeholder={t.contact.form.messagePlaceholder}
          name="message"
          required
        ></textarea>
      </div>

      <button type="submit" className={styles.button}>
        {t.contact.form.submit}
      </button>
    </form>
  )
}