"use client";

import ContactForm from "@/components/ContactForm";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./ContactFormSection.module.css";

export default function ContactFormSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <h2 className={styles.heading}>Get in touch</h2>
          <p className={styles.subtext}>
            Have a project in mind? Fill out the form below and we&apos;ll get
            back to you within 24 hours.
          </p>
        </div>
        <div
          ref={formRef}
          className="reveal"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
