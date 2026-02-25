import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileLeadBar from "@/components/layout/MobileLeadBar";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Gogaala Weddings | Boutique Wedding Planner Mumbai",
  description:
    "Premium boutique wedding planning in Mumbai for families hosting high-investment, design-led celebrations.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen pb-20 pt-24 md:pb-0 md:pt-28">{children}</main>
        <MobileLeadBar />
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
