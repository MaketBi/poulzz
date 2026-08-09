import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

/**
 * Liens des stores — SOURCE DE VERITE UNIQUE pour l'app Yonima Rider.
 *
 * Cette page sert de bouton « Télécharger l'app » dans les invitations
 * WhatsApp des nouveaux livreurs : l'URL envoyée ne change JAMAIS, seuls
 * les liens ci-dessous sont a mettre a jour si un store change.
 *
 * Bundle IDs de prod : iOS com.yonima.rider · Android com.yonima.rider
 *
 * ATTENTION — aucune des deux fiches n'est publiee a ce jour :
 *   - Play  com.yonima.rider  -> 404
 *   - App Store (bundle com.yonima.rider) -> introuvable
 * Les valeurs ci-dessous sont donc a renseigner depuis Play Console /
 * App Store Connect des que les apps sont en ligne. Tant qu'elles sont
 * nulles, la page affiche le fallback sans bouton mort.
 */
const STORE_LINKS = {
  ios: null as string | null,
  android: null as string | null,
} as const satisfies { ios: string | null; android: string | null };

export const metadata: Metadata = {
  title: "Télécharger Yonima Rider — Poulzz",
  description:
    "Téléchargez l'application Yonima Rider pour effectuer vos livraisons au Sénégal. Disponible sur App Store et Google Play.",
  robots: { index: false, follow: false },
};

// La detection depend du User-Agent de la requete : jamais mise en cache.
export const dynamic = "force-dynamic";

type Platform = "ios" | "android" | "other";

function detectPlatform(userAgent: string): Platform {
  const ua = userAgent.toLowerCase();
  // iPad recents se declarent en "Macintosh" + ecran tactile ; on couvre les
  // marqueurs iOS classiques. Android est teste avant, car certains UA Android
  // contiennent aussi "mobile".
  if (/android/.test(ua)) return "android";
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  return "other";
}

export default async function GetRiderPage() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const platform = detectPlatform(userAgent);

  // Mobile : redirection serveur instantanee, aucun flash de page.
  // Si le lien du store n'est pas encore connu, on tombe sur le fallback.
  if (platform === "ios" && STORE_LINKS.ios) redirect(STORE_LINKS.ios);
  if (platform === "android" && STORE_LINKS.android)
    redirect(STORE_LINKS.android);

  // Desktop / autres / store pas encore publie : page de fallback.
  return (
    <div className="pt-28 lg:pt-32 min-h-screen bg-[#F8FAFC]">
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <p className="text-sm font-medium text-[#2E6A3B] tracking-wider uppercase">
          Application Livreur
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-[#1F492E]">
          Téléchargez <span className="gradient-text">Yonima Rider</span>
        </h1>
        <p className="mt-6 text-lg text-[#1F492E]/60 max-w-xl mx-auto">
          Recevez vos courses, suivez vos livraisons et gérez vos revenus depuis
          votre téléphone. Choisissez votre boutique ci-dessous.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {STORE_LINKS.ios && (
            <a
              href={STORE_LINKS.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-[#1F492E] text-white font-medium rounded-2xl hover:bg-[#1F492E]/90 transition-colors cursor-pointer w-full sm:w-auto justify-center"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-xs opacity-70">Télécharger sur</span>
                <span className="text-base font-semibold">App Store</span>
              </span>
            </a>
          )}

          {STORE_LINKS.android && (
            <a
              href={STORE_LINKS.android}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-[#1F492E] text-white font-medium rounded-2xl hover:bg-[#1F492E]/90 transition-colors cursor-pointer w-full sm:w-auto justify-center"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-xs opacity-70">Disponible sur</span>
                <span className="text-base font-semibold">Google Play</span>
              </span>
            </a>
          )}
        </div>

        {!STORE_LINKS.ios && !STORE_LINKS.android && (
          <p className="mt-10 text-base text-[#1F492E]/70">
            L&apos;application Yonima Rider n&apos;est pas encore disponible sur
            les stores. Votre responsable vous transmettra le lien dès sa
            publication.
          </p>
        )}
      </section>
    </div>
  );
}
