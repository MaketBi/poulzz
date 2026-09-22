import type { Metadata } from "next";
import Image from "next/image";
import styles from "./scan.module.css";

/**
 * /scan — page ouverte par le QR code UNIQUE imprime sur tous les supports
 * (badges, cartes de visite, flyers restaurants, flyers clients).
 *
 * Le QR (public/qr-yonima-scan.*) encode https://www.poulzz.com/scan et ne
 * change JAMAIS. Cette page est un hub : les 3 apps + WhatsApp + reseaux.
 * Design : direction « 1B · Immersion verte » validee par l'utilisateur,
 * contrainte forte = tout tient dans une hauteur d'ecran, sans defilement.
 */

const WHATSAPP_NUMBER = "221777433516";
const WHATSAPP_TEXT = "Bonjour Yonima+, je viens de scanner votre QR code.";

const LINKS = {
  plus: "/get",
  business: "/get/business",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`,
  // Handle unique @yonimaplus sur les trois reseaux (livre avec le design).
  instagram: "https://www.instagram.com/yonimaplus",
  tiktok: "https://www.tiktok.com/@yonimaplus",
  facebook: "https://www.facebook.com/yonimaplus",
} as const;

export const metadata: Metadata = {
  title: "Yonima+ — Tu commandes. On assure.",
  description:
    "Choisissez votre application Yonima+ : Yonima Plus pour commander, Yonima Business pour votre restaurant ou commerce. Écrivez-nous sur WhatsApp.",
  // openGraph n'est PAS fusionne avec celui du layout : tout redeclarer ici.
  openGraph: {
    title: "Yonima+ — Tu commandes. On assure.",
    description:
      "Repas, courses et essentiels livrés dans tout Dakar. Choisissez votre app et écrivez-nous sur WhatsApp.",
    url: "https://www.poulzz.com/scan",
    siteName: "Poulzz",
    locale: "fr_SN",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function ScanPage() {
  return (
    <div className={styles.page}>
      <div className={styles.col}>
        <header className={styles.brand}>
          <Image
            src="/images/logo-yonima-plus-electric.svg"
            alt="Yonima+"
            width={462}
            height={136}
            priority
            className={styles.logo}
          />
          <h1 className={styles.slogan}>
            Tu
            <br />
            commandes.
            <br />
            <em>On assure.</em>
          </h1>
          <p className={styles.sub}>
            Repas, courses et essentiels livrés dans tout Dakar. Suivi GPS,
            paiement Wave.
          </p>
        </header>

        <section className={styles.sheet} aria-label="Choisis ton app">
          <div className={styles.label}>Choisis ton app</div>

          <a href={LINKS.plus} className={styles.card}>
            <Image
              src="/images/icon-yonima-plus.svg"
              alt=""
              width={48}
              height={48}
              className={styles.icon}
            />
            <span className={styles.cardText}>
              <span className={styles.cardTitle}>Yonima Plus</span>
              <span className={styles.cardSub}>Je veux commander</span>
            </span>
            <span className={styles.chevron} aria-hidden="true">
              ›
            </span>
          </a>

          <a href={LINKS.business} className={styles.card}>
            <Image
              src="/images/icon-yonima-business.svg"
              alt=""
              width={48}
              height={48}
              className={styles.icon}
            />
            <span className={styles.cardText}>
              <span className={styles.cardTitle}>Yonima Business</span>
              <span className={styles.cardSub}>
                J&apos;ai un restaurant ou un commerce
              </span>
            </span>
            <span className={styles.chevron} aria-hidden="true">
              ›
            </span>
          </a>

          <div className={`${styles.card} ${styles.cardSoon}`} aria-disabled="true">
            <Image
              src="/images/icon-yonima-rider.svg"
              alt=""
              width={48}
              height={48}
              className={styles.icon}
            />
            <span className={styles.cardText}>
              <span className={styles.cardTitle}>Yonima Rider</span>
              <span className={styles.cardSub}>Je veux livrer</span>
            </span>
            <span className={styles.soon}>Bientôt</span>
          </div>

          <nav className={styles.socials} aria-label="Réseaux sociaux">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
            <a
              href={LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6Z" />
              </svg>
              TikTok
            </a>
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.4V21h3.1Z" />
              </svg>
              Facebook
            </a>
          </nav>

          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-4.2-1L3 20l1.2-4.5A8.4 8.4 0 1 1 21 11.5Z" />
              <path d="M9 10.5c0 2.5 2 4.5 4.5 4.5l1-1.5-1.8-.8-.7.7a3 3 0 0 1-1.4-1.4l.7-.7L10.5 9.5Z" />
            </svg>
            Parler à l&apos;équipe sur WhatsApp
          </a>

          <div className={styles.foot}>
            <span>www.poulzz.com</span>
            <span>@yonimaplus</span>
          </div>
        </section>
      </div>
    </div>
  );
}
