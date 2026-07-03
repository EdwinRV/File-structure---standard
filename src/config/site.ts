export const siteConfig = {
  name: "YourBrand",
  tagline: "Build something great.",
  description:
    "Professional multi-page websites for startups, agencies, and consultants.",
  email: "hello@yourbrand.com",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
  ],
  socialLinks: [
    { label: "Twitter / X", href: "https://twitter.com/yourbrand", icon: "twitter" },
    { label: "LinkedIn", href: "https://linkedin.com/company/yourbrand", icon: "linkedin" },
    { label: "Instagram", href: "https://instagram.com/yourbrand", icon: "instagram" },
  ],
} as const;
