import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CareerDNA — AI Career Prediction & Guidance",
  description:
    "Unlock personalized career insights using birth-based analysis and AI intelligence to discover professions aligned with your natural strengths and future potential.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
