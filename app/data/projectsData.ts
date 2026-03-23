import { Project } from "@/app/types/project"

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Dressify",

    subtitle: {
      en: "E-Commerce Web Application",
      de: "E-Commerce Webanwendung"
    },

    type: {
      en: "Full-Stack App",
      de: "Full-Stack Anwendung"
    },

    description: {
      en: "Full-stack e-commerce app with product browsing, cart, wishlist, and a complete checkout flow.",
      de: "Full-Stack E-Commerce-Anwendung mit Produktsuche, Warenkorb, Wunschliste und einem vollständigen Checkout-Prozess."
    },

    longDescription: {
      en: "Built a full-stack e-commerce web application for clothing products with a responsive storefront, product discovery, cart and wishlist flows, checkout experience, and an admin area for managing inventory.",
      de: "Entwicklung einer Full-Stack E-Commerce-Webanwendung für Kleidung mit responsivem Frontend, Produktsuche, Warenkorb- und Wunschlisten-Funktionalität, Checkout-Prozess sowie Admin-Bereich zur Verwaltung des Inventars."
    },

    duration: "Nov 2025 - Mar 2026",

    tech: ["React", "Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "CSS"],

    features: {
      en: [
        "Product discovery with category navigation, search, filtering, sorting, and pagination",
        "Dynamic product pages with variants, stock handling, sale pricing, and photo gallery",
        "Persistent cart with quantity controls and save-for-later wishlist flow",
        "Supabase authentication with email/password and Google provider login",
        "Account area with profile management, wishlist, and order history",
        "Admin Page to upload new products and delete existing products"
      ],
      de: [
        "Produktsuche mit Kategorienavigation, Suche, Filterung, Sortierung und Pagination",
        "Dynamische Produktseiten mit Varianten, Lagerverwaltung, Preisaktionen und Bildergalerie",
        "Persistenter Warenkorb mit Mengensteuerung und Wunschlistenfunktion",
        "Authentifizierung mit Supabase (E-Mail/Passwort und Google Login)",
        "Benutzerbereich mit Profilverwaltung, Wunschliste und Bestellverlauf",
        "Admin-Seite zum Hinzufügen und Löschen von Produkten"
      ]
    },

    github: "https://github.com/bahaa-abouzaher/dressify"
  }
]
