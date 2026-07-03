"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import styles from "./HeaderNav.module.css";

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          {siteConfig.name}
        </Link>

        <ul
          className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}
        >
          {siteConfig.navLinks.map((link) => (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className={styles.ctaButton}>
          Get Started
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}
