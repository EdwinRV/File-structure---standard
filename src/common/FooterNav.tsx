import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";
import styles from "./FooterNav.module.css";

const socialIcons: Record<string, React.ReactNode> = {
  twitter: <Twitter size={18} aria-hidden="true" />,
  linkedin: <Linkedin size={18} aria-hidden="true" />,
  instagram: <Instagram size={18} aria-hidden="true" />,
};

export default function FooterNav() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>{siteConfig.name}</span>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          {/* Social media links */}
          <div className={styles.socials}>
            {siteConfig.socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          {siteConfig.footerLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={styles.link}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
