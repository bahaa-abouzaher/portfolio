import { Project } from "@/app/types/project"

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Dressify",
    subtitle: "E-Commerce Web Application",
    type: "Full-Stack App",
    description:
      "Full-stack e-commerce app with product browsing, cart, wishlist, and secure checkout.",
    longDescription:
      "Built a full-stack e-commerce web application for clothing products with a responsive storefront, product discovery, cart and wishlist flows, checkout experience, and an admin area for managing inventory.",
    duration: "Nov 2025 - Mar 2026",
    tech: ["React", "Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "CSS"],
    features: [
      "Product discovery with category navigation, search, filtering, sorting, and pagination",
      "Dynamic product pages with variants, stock handling, sale pricing, and photo gallery",
      "Persistent cart with quantity controls and save-for-later wishlist flow",
      "Supabase authentication with email/password and Google provider login",
      "Account area with profile management, wishlist, and order history",
      "Admin Page to upload new products and delete existing products",
    ],
    github: "https://github.com/bahaa-abouzaher/dressify"
  }
]
