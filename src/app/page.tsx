"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  useScrollAnimation,
  useCounterAnimation,
} from "@/hooks/useScrollAnimation";
import TubesCursor from "@/components/ui/tubes-cursor";

export default function HomePage() {
  const productsRef = useScrollAnimation();
  const visionRef = useScrollAnimation();

  const livraisons = useCounterAnimation(100000, 2000, "+");
  const restaurants = useCounterAnimation(500, 2000, "+");
  const utilisateurs = useCounterAnimation(200000, 2000, "+");
  const ecoles = useCounterAnimation(50, 2000, "+");

  return (
    <div className="bg-[#FCF9F8]">
      {/* Hero — Tubes Canvas Background (animation conservée) */}
      <TubesCursor
        tubeColors={["#2E6A3B", "#31CC71", "#006D36"]}
        lightColors={["#31CC71", "#2E6A3B", "#BEEBD1", "#006D36"]}
        lightIntensity={180}
        contentClassName="min-h-[92vh] flex flex-col justify-center pt-[120px] pb-[104px]"
      >
        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-[72px]">
          <p className="text-[14px] font-semibold tracking-[0.16em] text-white/60 uppercase mb-7">
            Poulzz SUARL — Dakar, S&eacute;n&eacute;gal
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-[88px] lg:text-[112px] font-bold tracking-[-0.045em] leading-[0.95] text-white">
            La tech qui construit
            <br />
            <span className="text-[#31CC71]">le S&eacute;n&eacute;gal de demain</span>
          </h1>
          <p className="mt-9 max-w-[640px] text-xl lg:text-[24px] font-light text-white/75 leading-[1.5]">
            Des solutions num&eacute;riques pens&eacute;es ici, pour ici.
            Livraison, &eacute;ducation, API — un &eacute;cosyst&egrave;me
            adapt&eacute; aux r&eacute;alit&eacute;s locales.
          </p>
          <div className="mt-11 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="#produits"
              className="inline-flex items-center justify-center gap-2 px-[34px] py-[19px] text-[17px] font-semibold text-[#006D36] bg-[#31CC71] rounded-[16px] hover:brightness-105 active:scale-[0.98] transition-all duration-200"
            >
              D&eacute;couvrir nos produits
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[34px] py-[19px] text-[17px] font-semibold text-white border border-white/35 rounded-[16px] hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
            >
              Nous contacter
            </Link>
          </div>
          <p className="mt-12 text-[14px] text-white/40">
            Bougez la souris — cliquez pour changer les couleurs
          </p>
        </div>
      </TubesCursor>

      {/* Produits + stats */}
      <section
        id="produits"
        ref={productsRef}
        className="fade-in-section max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-[72px] py-20 lg:py-24"
      >
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-5">
          <h2 className="text-3xl sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.05] text-[#1A1A1A]">
            Trois produits, une exigence.
          </h2>
          <span className="text-[15px] text-[#7A7A7A]">
            L&apos;&eacute;cosyst&egrave;me Poulzz
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Yonima — pleine largeur */}
          <Link
            href="/apps"
            className="md:col-span-2 grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] items-center gap-6 sm:gap-8 bg-white border border-[#EDF1EF] rounded-[20px] p-8 sm:p-[34px_40px] hover:border-[#BEEBD1] transition-colors"
          >
            <Image
              src="/images/app-yonima-plus.png"
              alt="Yonima Plus"
              width={96}
              height={96}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-[26px] object-contain"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[26px] font-bold tracking-[-0.03em] text-[#2E6A3B]">
                  yonima<span className="text-[#31CC71]">+</span>
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-[#006D36] bg-[#EAF9F0] rounded-full px-[11px] py-1.5">
                  PRODUIT PHARE
                </span>
              </div>
              <p className="mt-2.5 text-base text-[#7A7A7A] leading-[1.55]">
                Commandez, suivez, recevez — GPS en temps r&eacute;el, paiement
                Wave et Orange Money. Trois apps, une logistique.
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-[#2E6A3B] text-white text-[15px] font-semibold px-[26px] py-[15px] rounded-[14px] whitespace-nowrap">
              D&eacute;couvrir <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          {/* Skoolbi */}
          <Link
            href="/skoolbi"
            className="bg-white border border-[#EDF1EF] rounded-[20px] p-[30px_34px] flex flex-col gap-3 hover:border-[#BEEBD1] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-[9px] h-[9px] rounded-full bg-[#7C3AED]" />
              <span className="text-[21px] font-bold text-[#1A1A1A]">Skoolbi</span>
              <span className="ml-auto text-xs text-[#7A7A7A]">ERP scolaire</span>
            </div>
            <p className="text-[15px] text-[#7A7A7A] leading-[1.55]">
              L&apos;&eacute;cole, enfin bien g&eacute;r&eacute;e. Notes,
              paiements, communication parents.
            </p>
          </Link>

          {/* SenWaAPI */}
          <Link
            href="/senwaapi"
            className="bg-white border border-[#EDF1EF] rounded-[20px] p-[30px_34px] flex flex-col gap-3 hover:border-[#BEEBD1] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-[9px] h-[9px] rounded-full bg-[#25d366]" />
              <span className="text-[21px] font-bold text-[#1A1A1A]">SenWaAPI</span>
              <span className="ml-auto text-xs text-[#7A7A7A]">API WhatsApp</span>
            </div>
            <p className="text-[15px] text-[#7A7A7A] leading-[1.55]">
              WhatsApp pour vos produits — messages, OTP, webhooks.
            </p>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-x-14 gap-y-8 mt-11 pt-9 border-t border-[#E4E9E6]">
          <div ref={livraisons.ref}>
            <div className="text-[34px] font-bold tracking-[-0.03em] text-[#2E6A3B]">
              {livraisons.value}
            </div>
            <div className="mt-2 text-sm text-[#7A7A7A]">livraisons</div>
          </div>
          <div ref={utilisateurs.ref}>
            <div className="text-[34px] font-bold tracking-[-0.03em] text-[#2E6A3B]">
              {utilisateurs.value}
            </div>
            <div className="mt-2 text-sm text-[#7A7A7A]">utilisateurs</div>
          </div>
          <div ref={restaurants.ref}>
            <div className="text-[34px] font-bold tracking-[-0.03em] text-[#2E6A3B]">
              {restaurants.value}
            </div>
            <div className="mt-2 text-sm text-[#7A7A7A]">restaurants</div>
          </div>
          <div ref={ecoles.ref}>
            <div className="text-[34px] font-bold tracking-[-0.03em] text-[#2E6A3B]">
              {ecoles.value}
            </div>
            <div className="mt-2 text-sm text-[#7A7A7A]">&eacute;coles</div>
          </div>
        </div>
      </section>

      {/* Conçu à Dakar */}
      <section
        ref={visionRef}
        className="fade-in-section max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-[72px] pb-20 lg:pb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] rounded-[26px] overflow-hidden">
          <div className="bg-white border border-[#EDF1EF] lg:border-r-0 rounded-t-[26px] lg:rounded-t-none lg:rounded-l-[26px] p-9 sm:p-[56px_52px]">
            <h2 className="text-3xl sm:text-[38px] font-bold tracking-[-0.035em] leading-[1.05] text-[#1A1A1A] mb-5">
              Con&ccedil;u &agrave; Dakar,
              <br />
              pour toute l&apos;Afrique.
            </h2>
            <p className="mb-7 max-w-[440px] text-lg font-light text-[#7A7A7A] leading-[1.6]">
              Nous ne traduisons pas des produits &eacute;trangers : nous
              construisons pour nos r&eacute;alit&eacute;s.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                ["Paiement mobile natif", "Wave, Orange Money"],
                ["Pensé pour le réseau réel", "connexions instables"],
                ["Support humain", "français & wolof"],
                ["Équipe locale", "basée à Dakar"],
              ].map(([title, sub]) => (
                <div
                  key={title}
                  className="border border-[#EDF1EF] rounded-[14px] px-5 py-[18px] text-[14.5px] font-medium text-[#1A1A1A] leading-[1.4]"
                >
                  {title}
                  <br />
                  <span className="font-normal text-[#7A7A7A]">{sub}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#2E6A3B] rounded-b-[26px] lg:rounded-b-none lg:rounded-r-[26px] p-9 sm:p-[56px_52px] flex flex-col justify-end">
            <div className="text-6xl lg:text-[64px] font-bold tracking-[-0.04em] leading-none text-white">
              2019<span className="text-[#31CC71]">&rarr;</span>
            </div>
            <p className="mt-4 text-[17px] font-light text-white/85 leading-[1.55]">
              Depuis Dakar, une &eacute;quipe qui livre — au sens propre comme au
              figur&eacute;.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
