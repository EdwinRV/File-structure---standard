import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "YourBrand — Modern Web Solutions",
    template: "%s | YourBrand",
  },
  description:
    "Professional multi-page websites for startups, agencies, and consultants.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
