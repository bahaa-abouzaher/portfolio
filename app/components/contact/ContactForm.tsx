"use client"

import toast from "react-hot-toast"
import styles from "./contact.module.css"
import { sendContactEmail } from "@/app/_lib/actions"

export default function ContactForm() {

  async function clientAction(formData: FormData) {
    const res = await sendContactEmail(formData)

    if (res?.ok) {
      toast.success("Message sent successfully")
    } else {
      toast.error("Something went wrong")
    }
  }

  return (

    <form className={styles.form} action={clientAction}>
      <div className={styles.field}>
        <label>Name</label>
        <input 
          type="text" 
          placeholder="Your name" 
          name="name" 
          required
        />
      </div>

      <div className={styles.field}>
        <label>Email</label>
        <input 
          type="email" 
          placeholder="Your email" 
          name="email" 
          required
        />
      </div>

      <div className={styles.field}>
        <label>Message</label>
        <textarea 
          rows={6} 
          placeholder="Your message"
          name="message"
          required
        ></textarea>
      </div>

      <button type="submit" className={styles.button}>
        Send Message
      </button>
    </form>
  )
}