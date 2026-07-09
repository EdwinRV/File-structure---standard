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
        <div className={styles.copyCol}>
          <Zap size={34} className={styles.icon} aria-hidden="true" />
          <h2 className={styles.heading}>Ready for a serious website upgrade?</h2>
          <p className={styles.subtext}>
            Collaborate with a focused team to launch a conversion-ready website
            with a stronger visual system and clearer business messaging.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Book Discovery Call
            </Link>
            <Link href="/about" className={styles.ctaSecondary}>
              See Our Process
            </Link>
          </div>
        </div>

        <div className={styles.metaCol}>
          <p className={styles.metaTitle}>Included in Standard</p>
          <ul className={styles.metaList}>
            <li className={styles.metaItem}>Multi-page structure and stronger content flow</li>
            <li className={styles.metaItem}>Social proof sections and enhanced trust signals</li>
            <li className={styles.metaItem}>Brand-forward visuals with polished motion</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
