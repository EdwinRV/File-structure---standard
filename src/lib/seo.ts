import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Generates per-page metadata with sensible defaults.
 *
 * Usage:
 *   export const metadata = buildMeta({
 *     title: "About",
 *     description: "Learn about who we are.",
 *   });
 */
export function buildMeta(overrides: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const { title, description, path = "" } = overrides;
  // TODO(client): Set NEXT_PUBLIC_SITE_URL in .env.local (see .env.example).
  // Used for canonical URLs and Open Graph tags — must match the live domain.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourbrand.com";
  const url = `${baseUrl}${path}`;

  return {
    title,
    description: description ?? siteConfig.description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description ?? siteConfig.description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: description ?? siteConfig.description,
    },
    alternates: {
      canonical: url,
    },
  };
}
