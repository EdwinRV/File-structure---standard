"use client";

import { Mail, Clock, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./page.module.css";

export default function ContactPageHero() {
  const heroRef = useScrollReveal<HTMLDivElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.hero}>
      <div ref={heroRef} className={`${styles.heroContainer} reveal`}>
        <span className={styles.badge}>Let&apos;s Talk</span>
        <h1 className={styles.heroHeading}>
          Start your <span className={styles.highlight}>project today.</span>
        </h1>
        <p className={styles.heroSub}>
          Tell us about your idea and we&apos;ll get back to you within 24 hours
          with a clear plan and no-pressure quote.
        </p>
      </div>

      <div
        ref={cardsRef}
        className={`${styles.infoCards} reveal`}
        style={{ "--delay": "120ms" } as React.CSSProperties}
      >
        <div className={styles.infoCard}>
          <Mail size={28} className={styles.infoIcon} aria-hidden="true" />
          <h3 className={styles.infoTitle}>Email Us</h3>
          <p className={styles.infoText}>hello@yourbrand.com</p>
        </div>
        <div className={styles.infoCard}>
          <Clock size={28} className={styles.infoIcon} aria-hidden="true" />
          <h3 className={styles.infoTitle}>Response Time</h3>
          <p className={styles.infoText}>Within 24 hours</p>
        </div>
        <div className={styles.infoCard}>
          <MessageSquare
            size={28}
            className={styles.infoIcon}
            aria-hidden="true"
          />
          <h3 className={styles.infoTitle}>Free Consultation</h3>
          <p className={styles.infoText}>No commitment required</p>
        </div>
      </div>
    </section>
  );
}
