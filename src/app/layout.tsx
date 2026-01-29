import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poulzz - Connecting Senegal through technology",
  description:
    "Poulzz builds digital solutions to connect local vendors, delivery partners, and customers across Senegal. Discover Yonima Plus, Yonima Rider, and Yonima Vendeur.",
  keywords: [
    "Poulzz",
    "Yonima",
    "delivery",
    "Senegal",
    "Dakar",
    "food delivery",
    "logistics",
  ],
  authors: [{ name: "Poulzz" }],
  openGraph: {
    title: "Poulzz - Connecting Senegal through technology",
    description:
      "Building digital solutions for the next generation of Senegalese commerce.",
    url: "https://poulzz.sn",
    siteName: "Poulzz",
    locale: "fr_SN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
