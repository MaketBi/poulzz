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
            {/* Glyphe officiel WhatsApp (bulle + combine) */}
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.88-9.9 9.88m8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.49-8.41" />
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
