import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const YONIMA_PLUS = {
  playStore:
    "https://play.google.com/store/apps/details?id=com.poulzz.yonima.client&pcampaignid=web_share",
  appStore: "https://apps.apple.com/fr/app/yonima-plus/id6756845915",
};

const testimonials = [
  {
    rating: "4,8",
    quote:
      "Mon thiébou arrive encore chaud, et je paie avec Wave sans sortir de l'app.",
    author: "Awa D.",
    role: "cliente, Yoff",
    avatar: "AD",
  },
  {
    rating: "4,9",
    quote:
      "Je vois mes gains course par course. Le retrait vers Wave prend une minute.",
    author: "Moussa S.",
    role: "livreur, Plateau",
    avatar: "MS",
  },
  {
    rating: "4,7",
    quote:
      "Mes commandes du soir ont doublé depuis que ma boutique est sur Yonima.",
    author: "Fatou N.",
    role: "commerçante, Almadies",
    avatar: "FN",
  },
];

export default function AppsPage() {
  return (
    <div className="bg-[#FCF9F8]">
      {/* Hero */}
      <section className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-[72px] pt-36 lg:pt-40 pb-12 lg:pb-[88px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[#006D36] bg-[#EAF9F0] rounded-full px-3.5 py-2 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#31CC71]" />
              CONSTRUIT POUR LE S&Eacute;N&Eacute;GAL
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.045em] leading-[0.98] text-[#1A1A1A]">
              Le c&oelig;ur de la logistique{" "}
              <span className="text-[#2E6A3B]">
                s&eacute;n&eacute;galaise<span className="text-[#31CC71]">.</span>
              </span>
            </h1>
            <p className="mt-7 max-w-[520px] text-lg sm:text-xl font-light text-[#7A7A7A] leading-relaxed">
              Une app pour commander, une pour livrer, une pour vendre — une
              seule logistique, du GPS au paiement Wave.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href="/get"
                className="inline-flex items-center justify-center gap-1.5 bg-[#2E6A3B] text-white text-base font-semibold px-7 py-4 rounded-2xl hover:bg-[#006D36] active:scale-[0.98] transition-all"
              >
                T&eacute;l&eacute;charger Yonima Plus
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white border border-[#E4E9E6] text-[#1A1A1A] text-base font-semibold px-7 py-4 rounded-2xl hover:border-[#2E6A3B]/30 transition-colors"
              >
                Devenir partenaire
              </Link>
            </div>
          </div>

          {/* Cluster d'icônes */}
          <div className="relative h-[340px] sm:h-[380px]">
            <Image
              src="/images/app-yonima-plus.png"
              alt="Yonima Plus"
              width={200}
              height={200}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-52 sm:h-52 rounded-[44px] border border-[#EDF1EF] shadow-xl z-20"
            />
            <Image
              src="/images/app-yonima-rider.png"
              alt="Yonima Rider"
              width={120}
              height={120}
              className="absolute left-[6%] top-[8%] w-28 h-28 rounded-[30px] border border-[#EDF1EF] shadow-lg -rotate-[8deg] z-10"
            />
            <Image
              src="/images/app-yonima-vendeur.png"
              alt="Yonima Vendeur"
              width={120}
              height={120}
              className="absolute right-[2%] bottom-[4%] w-28 h-28 rounded-[30px] border border-[#EDF1EF] shadow-lg rotate-[8deg] z-10"
            />
            <span className="absolute right-[12%] top-[12%] text-6xl font-bold text-[#31CC71] z-20">
              +
            </span>
          </div>
        </div>
      </section>

      {/* Bloc 1 — Yonima Plus (Client) */}
      <section className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-[72px] pb-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white border border-[#EDF1EF] rounded-[26px] overflow-hidden">
          <div className="p-8 sm:p-14 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image
                src="/images/app-yonima-plus.png"
                alt=""
                width={64}
                height={64}
                className="w-16 h-16 rounded-[18px]"
              />
              <div>
                <div className="text-[11px] font-semibold tracking-[0.12em] text-[#006D36]">
                  APPLICATION CLIENT
                </div>
                <div className="mt-1.5 text-3xl font-bold tracking-[-0.03em] text-[#1A1A1A]">
                  Yonima Plus
                </div>
              </div>
            </div>
            <p className="text-[16.5px] text-[#7A7A7A] leading-relaxed">
              Commandez facilement, recevez rapidement. Repas, courses et
              essentiels, en toute simplicit&eacute;.
            </p>

            <div className="flex flex-col gap-3">
              {[
                [
                  "Suivi GPS en temps réel",
                  "du restaurant jusqu'à votre porte, à la minute près",
                ],
                [
                  "Paiements multi-canaux",
                  "Wave, Orange Money et réseaux bancaires locaux",
                ],
              ].map(([title, sub]) => (
                <div key={title} className="flex gap-3.5 items-start">
                  <span className="w-[34px] h-[34px] flex-none rounded-full bg-[#EAF9F0] flex items-center justify-center text-[#2E6A3B]">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  <div className="text-[15.5px] font-medium text-[#1A1A1A] leading-snug">
                    {title}
                    <br />
                    <span className="font-normal text-[#7A7A7A]">{sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* QR — moyen de téléchargement principal, AU-DESSUS des stores */}
            <div className="flex items-center gap-4 sm:gap-[18px] bg-[#F2F8F4] border border-[#BEEBD1] rounded-[18px] p-[18px]">
              <Image
                src="/qr-yonima-get.png"
                alt="QR de téléchargement Yonima Plus"
                width={104}
                height={104}
                className="w-[104px] h-[104px] flex-none rounded-lg bg-white border border-[#E4E9E6] p-1.5"
              />
              <div className="text-[15px] font-medium text-[#1A1A1A] leading-snug">
                Scannez pour t&eacute;l&eacute;charger
                <br />
                <span className="font-normal text-[#7A7A7A]">
                  le moyen le plus rapide d&apos;installer l&apos;app
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={YONIMA_PLUS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2E6A3B] text-white text-sm font-semibold px-6 py-3.5 rounded-[14px] hover:bg-[#006D36] transition-colors"
              >
                App Store
              </a>
              <a
                href={YONIMA_PLUS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2E6A3B] text-white text-sm font-semibold px-6 py-3.5 rounded-[14px] hover:bg-[#006D36] transition-colors"
              >
                Google Play
              </a>
            </div>
          </div>

          <div className="bg-[#E4E9E6] min-h-[320px] lg:min-h-[520px] flex items-center justify-center text-[13px] font-medium text-[#A8ADAA] p-8 text-center">
            Capture d&apos;&eacute;cran — commande &amp; suivi Yonima Plus
          </div>
        </div>
      </section>

      {/* Bloc 2 — Yonima Rider (Livreur), image à gauche */}
      <section className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-[72px] pb-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white border border-[#EDF1EF] rounded-[26px] overflow-hidden">
          <div className="order-2 lg:order-1 bg-[#E4E9E6] min-h-[320px] lg:min-h-[440px] flex items-center justify-center text-[13px] font-medium text-[#A8ADAA] p-8 text-center">
            Photo — livreur Yonima en scooter, Dakar
          </div>
          <div className="order-1 lg:order-2 p-8 sm:p-14 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image
                src="/images/app-yonima-rider.png"
                alt=""
                width={64}
                height={64}
                className="w-16 h-16 rounded-[18px]"
              />
              <div>
                <div className="text-[11px] font-semibold tracking-[0.12em] text-[#006D36]">
                  APPLICATION LIVREUR
                </div>
                <div className="mt-1.5 text-3xl font-bold tracking-[-0.03em] text-[#1A1A1A]">
                  Yonima Rider
                </div>
              </div>
            </div>
            <p className="text-[16.5px] text-[#7A7A7A] leading-relaxed">
              Vos gains en clair, vos trajets optimis&eacute;s. Livrez quand vous
              voulez, encaissez sans friction.
            </p>
            <div className="flex flex-col gap-3">
              {[
                ["Routage intelligent", "les meilleures courses, sans détour inutile"],
                ["Gains transparents", "chaque course détaillée, retrait vers Wave"],
              ].map(([title, sub]) => (
                <div key={title} className="flex gap-3.5 items-start">
                  <span className="w-[34px] h-[34px] flex-none rounded-full bg-[#EAF9F0] flex items-center justify-center text-[#2E6A3B]">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  <div className="text-[15.5px] font-medium text-[#1A1A1A] leading-snug">
                    {title}
                    <br />
                    <span className="font-normal text-[#7A7A7A]">{sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-2.5">
              <span className="border border-[#E4E9E6] text-[#7A7A7A] text-[13px] font-semibold px-5 py-3 rounded-[14px]">
                App Store &middot; bient&ocirc;t
              </span>
              <span className="border border-[#E4E9E6] text-[#7A7A7A] text-[13px] font-semibold px-5 py-3 rounded-[14px]">
                Google Play &middot; bient&ocirc;t
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 3 — Yonima Vendeur (Commerçant) */}
      <section className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-[72px] pb-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white border border-[#EDF1EF] rounded-[26px] overflow-hidden">
          <div className="p-8 sm:p-14 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image
                src="/images/app-yonima-vendeur.png"
                alt=""
                width={64}
                height={64}
                className="w-16 h-16 rounded-[18px]"
              />
              <div>
                <div className="text-[11px] font-semibold tracking-[0.12em] text-[#006D36]">
                  APPLICATION COMMER&Ccedil;ANT
                </div>
                <div className="mt-1.5 text-3xl font-bold tracking-[-0.03em] text-[#1A1A1A]">
                  Yonima Vendeur
                </div>
              </div>
            </div>
            <p className="text-[16.5px] text-[#7A7A7A] leading-relaxed">
              La boutique dans la poche. Stocks, commandes et analyses, du
              Plateau aux Almadies.
            </p>
            <div className="flex flex-col gap-3">
              {[
                ["Gestion des stocks", "disponibilité mise à jour en un geste"],
                ["Analyses de ventes", "vos meilleures heures, vos meilleurs plats"],
              ].map(([title, sub]) => (
                <div key={title} className="flex gap-3.5 items-start">
                  <span className="w-[34px] h-[34px] flex-none rounded-full bg-[#EAF9F0] flex items-center justify-center text-[#2E6A3B]">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  <div className="text-[15.5px] font-medium text-[#1A1A1A] leading-snug">
                    {title}
                    <br />
                    <span className="font-normal text-[#7A7A7A]">{sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-2.5">
              <span className="border border-[#E4E9E6] text-[#7A7A7A] text-[13px] font-semibold px-5 py-3 rounded-[14px]">
                App Store &middot; bient&ocirc;t
              </span>
              <span className="border border-[#E4E9E6] text-[#7A7A7A] text-[13px] font-semibold px-5 py-3 rounded-[14px]">
                Google Play &middot; bient&ocirc;t
              </span>
            </div>
          </div>
          <div className="bg-[#E4E9E6] min-h-[320px] lg:min-h-[440px] flex items-center justify-center text-[13px] font-medium text-[#A8ADAA] p-8 text-center">
            Photo — commer&ccedil;ante, march&eacute; de Dakar
          </div>
        </div>
      </section>

      {/* Témoignages + CTA */}
      <section className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-[72px] py-16 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.035em] text-[#1A1A1A] mb-8">
          Ils utilisent Yonima<span className="text-[#31CC71]">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white border border-[#EDF1EF] rounded-[20px] p-7 sm:p-8 flex flex-col gap-4"
            >
              <div className="text-[15px] text-[#2E6A3B]">
                &#9733;&#9733;&#9733;&#9733;&#9733;{" "}
                <span className="text-[#7A7A7A]">{t.rating}</span>
              </div>
              <p className="text-[15.5px] text-[#1A1A1A] leading-relaxed">
                &laquo;&nbsp;{t.quote}&nbsp;&raquo;
              </p>
              <div className="mt-auto flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#EAF9F0] flex items-center justify-center text-sm font-semibold text-[#2E6A3B]">
                  {t.avatar}
                </span>
                <div className="text-sm font-semibold text-[#1A1A1A] leading-snug">
                  {t.author}
                  <br />
                  <span className="font-normal text-[#7A7A7A]">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-[#2E6A3B] rounded-[26px] px-9 sm:px-16 py-12 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.035em] text-white">
              Pr&ecirc;t &agrave; commander <span className="text-[#31CC71]">?</span>
            </h2>
            <p className="mt-3 text-[17px] font-light text-white/80">
              T&eacute;l&eacute;chargez Yonima Plus et recevez votre premi&egrave;re
              commande aujourd&apos;hui.
            </p>
          </div>
          <a
            href="/get"
            className="inline-flex items-center gap-1.5 bg-[#31CC71] text-[#006D36] text-base font-semibold px-8 py-4 rounded-2xl whitespace-nowrap hover:brightness-105 active:scale-[0.98] transition-all"
          >
            T&eacute;l&eacute;charger l&apos;app
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
