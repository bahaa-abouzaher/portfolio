"use client"

import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return null;
}