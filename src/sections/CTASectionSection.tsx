"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./CTASectionSection.module.css";

export default function CTASectionSection() {
  const containerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div ref={containerRef} className={`${styles.container} reveal`}>
        <Zap size={40} className={styles.icon} aria-hidden="true" />
        <h2 className={styles.heading}>Ready to launch your project?</h2>
        <p className={styles.subtext}>
          From concept to deployment — get a professional, mobile-ready website
          delivered in days, not months.
        </p>
        <Link href="/contact" className={styles.cta}>
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}
