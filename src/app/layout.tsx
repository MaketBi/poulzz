import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Poulzz — La tech sénégalaise qui simplifie votre quotidien",
  description:
    "Poulzz développe des solutions numériques adaptées aux réalités du Sénégal. Découvrez Yonima (livraison) et Skoolbi (gestion scolaire).",
  keywords: [
    "Poulzz",
    "Yonima",
    "Skoolbi",
    "delivery",
    "livraison",
    "ERP scolaire",
    "gestion école",
    "éducation",
    "Senegal",
    "Dakar",
    "food delivery",
    "logistics",
  ],
  authors: [{ name: "Poulzz" }],
  openGraph: {
    title: "Poulzz — La tech sénégalaise qui simplifie votre quotidien",
    description:
      "Un écosystème de solutions numériques conçues au Sénégal, pour le Sénégal. Yonima (livraison) et Skoolbi (gestion scolaire).",
    url: "https://poulzz.com",
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
      <body className={`${outfit.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
