"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./HeroBannerSection.module.css";

export default function HeroBannerSection() {
  const badgeRef = useScrollReveal<HTMLDivElement>();
  const headingRef = useScrollReveal<HTMLHeadingElement>();
  const subRef = useScrollReveal<HTMLParagraphElement>();
  const actionsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.contentCol}>
            <div
              ref={badgeRef}
              className={`${styles.badge} reveal-left`}
              style={{ "--delay": "0ms" } as React.CSSProperties}
            >
              Studio quality for growing brands
            </div>
            <h1
              ref={headingRef}
              className={`${styles.heading} reveal-left`}
              style={{ "--delay": "80ms" } as React.CSSProperties}
            >
              Build a website <br />
              <span className={styles.highlight}>that actually converts.</span>
            </h1>
            <p
              ref={subRef}
              className={`${styles.subheading} reveal-left`}
              style={{ "--delay": "160ms" } as React.CSSProperties}
            >
              Strategic design, clean code, and launch-ready execution for
              teams that want more than a basic brochure site.
            </p>
            <div
              ref={actionsRef}
              className={`${styles.actions} reveal-left`}
              style={{ "--delay": "240ms" } as React.CSSProperties}
            >
              <Link href="/contact" className={styles.primaryCta}>
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link href="#services" className={styles.secondaryCta}>
                Explore Services
              </Link>
            </div>
          </div>

          <aside className={`${styles.metricsCard} reveal-right`}>
            <p className={styles.metricsKicker}>Why teams pick Standard</p>
            <ul className={styles.metricsList}>
              <li className={styles.metricItem}>
                <span className={styles.metricValue}>3x</span>
                <span className={styles.metricLabel}>More layout depth than Basic tier</span>
              </li>
              <li className={styles.metricItem}>
                <span className={styles.metricValue}>3 pages</span>
                <span className={styles.metricLabel}>Home, About, and Contact architecture</span>
              </li>
              <li className={styles.metricItem}>
                <span className={styles.metricValue}>Brand-first</span>
                <span className={styles.metricLabel}>Section rhythm built for storytelling</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
