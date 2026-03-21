import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import styles from "./contact.module.css"
import { sendContactEmail } from "@/app/_lib/actions"
import toast from "react-hot-toast";
import ContactForm from "./ContactForm";


export default function ContactSection() {


  return (
    <section id="contact" className={styles.contact}>
        <h2>Let&apos;s work together</h2>


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
              <p className={styles.infoTitle}>Email</p>
              <p>bahaa.abouzahr@gmail.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <FiPhone />
            </div>
            <div>
              <p className={styles.infoTitle}>Phone</p>
              <p>+49 17677931353</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <FiMapPin />
            </div>
            <div>
              <p className={styles.infoTitle}>Location</p>
              <p>Dortmund, Germany</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
