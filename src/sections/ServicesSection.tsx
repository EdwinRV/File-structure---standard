"use client";

import { Monitor, Smartphone, Search, BarChart2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Pixel-perfect, brand-aligned designs that leave a lasting impression across every device and screen size.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    description:
      "Responsive interfaces built with Next.js and Tailwind CSS — fast, accessible, and buttery smooth on any device.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Structured metadata, semantic HTML, and performance tuning so your site ranks and loads at full speed.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Growth",
    description:
      "Set up analytics, track conversions, and get insights that help you understand and grow your audience.",
  },
];

export default function ServicesSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <span className={styles.badge}>What We Do</span>
          <h2 className={styles.heading}>Services built for results</h2>
          <p className={styles.subtext}>
            Everything you need to launch a professional web presence — from
            design and development to SEO and analytics.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`${styles.grid} reveal`}
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={styles.card}
              style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
            >
              <div className={styles.iconWrapper}>
                <service.icon size={28} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
