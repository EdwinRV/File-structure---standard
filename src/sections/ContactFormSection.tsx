"use client";

import ContactForm from "@/components/ContactForm";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./ContactFormSection.module.css";

export default function ContactFormSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLDivElement>();
  const metaRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div ref={headerRef} className={`${styles.header} reveal-fade`}>
          <span className={styles.badge}>Project intake</span>
          <h2 className={styles.heading}>Let&apos;s shape your next website launch</h2>
          <p className={styles.subtext}>
            Tell us where you are now, where you want to go, and what success
            should look like. We&apos;ll respond with a practical direction.
          </p>
        </div>

        <div className={styles.grid}>
          <div
            ref={formRef}
            className={`${styles.formCol} reveal-left`}
            style={{ "--delay": "80ms" } as React.CSSProperties}
          >
            <ContactForm />
          </div>

          <aside
            ref={metaRef}
            className={`${styles.metaCol} reveal-right`}
            style={{ "--delay": "160ms" } as React.CSSProperties}
          >
            <h3 className={styles.metaHeading}>What happens after submit?</h3>
            <ul className={styles.metaList}>
              <li className={styles.metaItem}>Response in under 24 hours</li>
              <li className={styles.metaItem}>Quick fit check for your goals and timeline</li>
              <li className={styles.metaItem}>Clear proposal with deliverables and milestones</li>
            </ul>

            <div className={styles.metaCard}>
              <p className={styles.metaLabel}>Best for</p>
              <p className={styles.metaValue}>Startups, agencies, and service teams scaling their web presence</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
