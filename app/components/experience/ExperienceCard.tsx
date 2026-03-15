import { Experience } from "@/app/types/experience"
import { calcDuration } from "@/app/utils/calcExpDuration"
import styles from "./Experience.module.css"

import { FaLocationDot } from "react-icons/fa6"
import { FaRegCalendarAlt } from "react-icons/fa"
import { FaRegClock } from "react-icons/fa"

interface Props {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {

  const duration = calcDuration(
    experience.startDate,
    experience.endDate
  )

  return (
<div className={styles.card}>

  <div className={styles.jobInfo}>

    <span
      className={`${styles.badge} ${
        styles[experience.type.toLowerCase().replace("-", "")]
      }`}
    >
      {experience.type}
    </span>

    <h3 className={styles.role}>
      {experience.role}
    </h3>

    <p className={styles.company}>
      {experience.company}
    </p>

    <div className={styles.meta}>
      <span className={styles.metaItem}>
        <FaLocationDot className={styles.icon}/>
        {experience.location}
      </span>

      <span className={styles.metaItem}>
        <FaRegCalendarAlt className={styles.icon}/>
        {experience.startDate} - {experience.endDate}
      </span>

      <span className={styles.metaItem}>
        <FaRegClock className={styles.icon}/>
        {duration}
      </span>
    </div>

  </div>
  
  <div className={styles.listContainer}>
    <h4 className={styles.respTitle}>Key Responsibilities</h4>
    <ul className={styles.list}>
      {experience.description.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>

</div>
  )
}