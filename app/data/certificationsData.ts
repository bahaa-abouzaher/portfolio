import { CertificationItem, EducationItem } from "@/app/types/certifications"

export const educationData: EducationItem[] = [
  {
    id: 1,
    date: "2010 - 2013",
    title: {
      en: "Bachelor of Science in Computer and Communication Engineering",
      de: "Bachelor of Science in Computer- und Kommunikationstechnik"
    },
    institution: "Rafic Hariri University - Lebanon",
  }
]

export const certificationsData: CertificationItem[] = [
  {
    id: 1,
    date: "April 2018",
    title: "Ethical Hacking and Penetration Testing",
  },
  {
    id: 2,
    date: "December 2016",
    title: "Customized Customer Service",

  },
  {
    id: 3,
    date: "March 2015",
    title: "MCSA Windows Server 2012",
    issuer: {
      en: "Certified from Microsoft",
      de: "Zertifiziert von Microsoft"
    }
  },
  {
    id: 4,
    date: "March 2015",
    title: "MCSE Exchange Server 2013",
    issuer: {
      en: "Certified from Microsoft",
      de: "Zertifiziert von Microsoft"
    }
  },
  {
    id: 5,
    date: "July 2014",
    title: "A+ Computer Maintenance",

  }
]
