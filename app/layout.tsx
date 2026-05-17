import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CareerDNA — Discover the Career You're Naturally Built For",
  description:
    "Your birth patterns, personality, and hidden drives — decoded through astrology, numerology, and AI. Begin your personalized career reading today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
