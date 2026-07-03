import type { Metadata } from "next";
import HeaderNav from "@/common/HeaderNav";
import FooterNav from "@/common/FooterNav";
import ContactFormSection from "@/sections/ContactFormSection";
import ContactPageHero from "./ContactPageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — we'd love to hear about your project and how we can help.",
};

export default function ContactPage() {
  return (
    <>
      <HeaderNav />
      <main>
        <ContactPageHero />
        <ContactFormSection />
      </main>
      <FooterNav />
    </>
  );
}
