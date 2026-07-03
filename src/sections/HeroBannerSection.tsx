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
        <div
          ref={badgeRef}
          className={`${styles.badge} reveal`}
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          Available for new projects
        </div>
        <h1
          ref={headingRef}
          className={`${styles.heading} reveal`}
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          Build a website <br />
          <span className={styles.highlight}>that stands out.</span>
        </h1>
        <p
          ref={subRef}
          className={`${styles.subheading} reveal`}
          style={{ "--delay": "160ms" } as React.CSSProperties}
        >
          Clean, fast, and modern web experiences for portfolios, small
          businesses, and personal brands. No templates — built just for you.
        </p>
        <div
          ref={actionsRef}
          className={`${styles.actions} reveal`}
          style={{ "--delay": "240ms" } as React.CSSProperties}
        >
          <Link href="/contact" className={styles.primaryCta}>
            Get Started <ArrowRight size={18} />
          </Link>
          <Link href="#services" className={styles.secondaryCta}>
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
