"use client";

import { useState } from "react";
import type { ContactFormData } from "@/types";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  function validate(): boolean {
    const newErrors: Partial<ContactFormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // TODO(client): Wire up form submission before delivery.
    // Set NEXT_PUBLIC_FORM_ENDPOINT in .env.local (see .env.example).
    // Options: Formspree endpoint URL, EmailJS service ID, or a /api/contact route.
    if (!process.env.NEXT_PUBLIC_FORM_ENDPOINT) {
      console.warn("[ContactForm] NEXT_PUBLIC_FORM_ENDPOINT is not set. See .env.example.");
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success} role="alert">
        <h3>Message sent!</h3>
        <p>
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
          placeholder="Jane Smith"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />
        {errors.name && (
          <span className={styles.error} role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
          placeholder="jane@example.com"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
        {errors.email && (
          <span className={styles.error} role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
          placeholder="Tell us about your project..."
          rows={5}
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && (
          <span className={styles.error} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className={styles.submit}>
        Send Message
      </button>
    </form>
  );
}
