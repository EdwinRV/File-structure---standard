import type { Metadata } from "next";
import HeaderNav from "@/common/HeaderNav";
import FooterNav from "@/common/FooterNav";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about who we are, what we do, and why we build modern web experiences.",
};

export default function AboutPage() {
  return (
    <>
      <HeaderNav />
      <main>
        <AboutContent />
      </main>
      <FooterNav />
    </>
  );
}
