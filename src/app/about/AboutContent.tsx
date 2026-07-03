"use client";

import Link from "next/link";
import { Users, Target, Lightbulb } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./page.module.css";

export default function AboutContent() {
  const heroRef = useScrollReveal<HTMLDivElement>();
  const missionRef = useScrollReveal<HTMLDivElement>();
  const valuesRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div
          ref={heroRef}
          className={`${styles.heroContainer} reveal`}
        >
          <span className={styles.badge}>Our Story</span>
          <h1 className={styles.heroHeading}>
            We build websites <br />
            <span className={styles.highlight}>people love to use.</span>
          </h1>
          <p className={styles.heroSub}>
            We are a small team of designers and developers passionate about
            crafting fast, beautiful, and accessible web experiences for
            businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className={styles.missionGrid}>
          <div
            ref={missionRef}
            className={`${styles.missionText} reveal-left`}
          >
            <h2 className={styles.sectionHeading}>Our Mission</h2>
            <p className={styles.bodyText}>
              We believe every business — no matter its size — deserves a
              professional online presence. Our mission is to make that
              accessible, affordable, and straightforward.
            </p>
            <p className={styles.bodyText}>
              From one-page portfolios to multi-page agency sites, we deliver
              clean code, pixel-perfect design, and a seamless handoff so you
              can take ownership confidently.
            </p>
            <Link href="#contact" className={styles.cta}>
              Work With Us
            </Link>
          </div>
          <div className={`${styles.missionStats} reveal-right`}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>5★</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>48h</span>
              <span className={styles.statLabel}>Avg. Response Time</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div
          ref={valuesRef}
          className={`${styles.valuesContainer} reveal`}
        >
          <h2 className={styles.sectionHeadingCenter}>What We Stand For</h2>
          <div className={styles.valuesList}>
            <div className={styles.valueCard}>
              <Users size={32} className={styles.valueIcon} aria-hidden="true" />
              <h3 className={styles.valueTitle}>Client-First</h3>
              <p className={styles.valueText}>
                Your goals drive every decision. We keep communication clear,
                revisions easy, and deliverables on time.
              </p>
            </div>
            <div className={styles.valueCard}>
              <Target size={32} className={styles.valueIcon} aria-hidden="true" />
              <h3 className={styles.valueTitle}>Quality Code</h3>
              <p className={styles.valueText}>
                We write clean, typed TypeScript and follow best practices so
                your codebase stays maintainable long after delivery.
              </p>
            </div>
            <div className={styles.valueCard}>
              <Lightbulb size={32} className={styles.valueIcon} aria-hidden="true" />
              <h3 className={styles.valueTitle}>Modern Stack</h3>
              <p className={styles.valueText}>
                Next.js, React 19, Tailwind CSS v4 — cutting-edge tools that
                keep your site fast, accessible, and future-proof.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
