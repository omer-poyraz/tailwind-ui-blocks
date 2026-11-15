import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tailwind UI Blocks",
  description: "Free copy-paste Tailwind CSS marketing sections for Next.js — hero, feature grid, stats, testimonial, FAQ accordion and CTA blocks. Dark mode.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
