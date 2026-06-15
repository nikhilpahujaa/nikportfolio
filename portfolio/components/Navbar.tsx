"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "Bio", id: "about" },
  { href: "#projects", label: "Builds", id: "projects" },
  { href: "#experience", label: "Quests", id: "experience" },
  { href: "#skills", label: "Inventory", id: "skills" },
  { href: "#activity", label: "Grind", id: "activity" },
  { href: "#contact", label: "Camp", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("section[id]");
    let current = "home";
    sections.forEach((s) => {
      if (window.scrollY >= (s as HTMLElement).offsetTop - 200) {
        current = s.getAttribute("id") ?? current;
      }
    });
    setActiveSection(current);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className="nav-wrapper" aria-label="Primary">
      <div className="nav-pill">
        {navLinks.map((link) => {
          const active = activeSection === link.id;
          return (
            <a key={link.href} href={link.href} data-active={active} className="nav-link">
              {active && (
                <motion.span
                  layoutId="nav-active"
                  className="nav-active-indicator"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-[1]">{link.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
