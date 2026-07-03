"use client";

import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Founder, Bloom Studio",
    quote:
      "Delivered exactly what I envisioned — on time and within budget. The code quality was outstanding and the handoff was seamless.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "CEO, NexaConsult",
    quote:
      "Our new site loads in under a second and looks incredible on every device. Clients constantly compliment it. Worth every penny.",
    rating: 5,
  },
  {
    name: "Lucia R.",
    role: "Marketing Director, Orion Agency",
    quote:
      "The attention to detail is unmatched. They took our rough brief and turned it into a polished, professional website we're proud of.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <span className={styles.badge}>Client Stories</span>
          <h2 className={styles.heading}>Loved by businesses worldwide</h2>
          <p className={styles.subtext}>
            Don&apos;t just take our word for it — here&apos;s what our clients
            say about working with us.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`${styles.grid} reveal`}
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={styles.star}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className={styles.author}>
                <span className={styles.authorName}>{t.name}</span>
                <span className={styles.authorRole}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
