"use client"

import { useState } from "react";
import styles from "./navbar.module.css"

import { FiSun, FiMoon } from "react-icons/fi";

export default function ToggleTheme({ initialTheme }: { initialTheme: string }) {
  const [theme, setTheme] = useState(initialTheme)

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.cookie = `theme=${next}; path=/; max-age=31536000`;
  }

  return (
    <button 
      onClick={toggle} 
      className={styles.themeToggle}
      aria-label="Toggle theme"
    >
     {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
}