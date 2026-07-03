import type { Metadata } from "next";
import HeaderNav from "@/common/HeaderNav";
import FooterNav from "@/common/FooterNav";
import HeroBannerSection from "@/sections/HeroBannerSection";
import ServicesSection from "@/sections/ServicesSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import CTASectionSection from "@/sections/CTASectionSection";
import ContactFormSection from "@/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Clean, modern websites for portfolios, small businesses, and personal brands.",
};

export default function Home() {
  return (
    <>
      <HeaderNav />
      <main>
        <HeroBannerSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASectionSection />
        <ContactFormSection />
      </main>
      <FooterNav />
    </>
  );
}
