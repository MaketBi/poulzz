"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, GraduationCap } from "lucide-react";
import {
  useScrollAnimation,
  useCounterAnimation,
} from "@/hooks/useScrollAnimation";

export default function HomePage() {
  const heroRef = useScrollAnimation();
  const productsRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const visionRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const livraisons = useCounterAnimation(100000, 2000, "+");
  const restaurants = useCounterAnimation(500, 2000, "+");
  const utilisateurs = useCounterAnimation(200000, 2000, "+");
  const ecoles = useCounterAnimation(50, 2000, "+");

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="fade-in-section pt-28 lg:pt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F492E]">
              La tech s&eacute;n&eacute;galaise qui simplifie votre quotidien
            </h1>
            <p className="mt-6 text-lg text-[#1F492E]/60 max-w-xl">
              Un &eacute;cosyst&egrave;me de solutions num&eacute;riques
              con&ccedil;ues au S&eacute;n&eacute;gal, pour le
              S&eacute;n&eacute;gal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="#produits"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#D4500A] rounded-full hover:bg-[#B8440A] transition-colors"
              >
                D&eacute;couvrir nos produits
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#1F492E] border border-[#1F492E] rounded-full hover:bg-[#1F492E]/5 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section
        id="produits"
        ref={productsRef}
        className="fade-in-section py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Yonima Card */}
            <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/app-yonima-plus.png"
                  alt="Yonima Plus"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-2xl object-contain"
                />
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#31CC71]/10">
                  <Truck className="w-6 h-6 text-[#1F492E]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1F492E]">
                Yonima — La livraison r&eacute;invent&eacute;e
              </h3>
              <p className="mt-3 text-[#1F492E]/60 leading-relaxed">
                Un &eacute;cosyst&egrave;me de 3 apps pour transformer le
                commerce et la livraison au S&eacute;n&eacute;gal. Client,
                livreur, vendeur — tout le monde y gagne.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Yonima Plus", "Yonima Rider", "Yonima Vendeur"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#31CC71]/10 text-[#1F492E]"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
              <Link
                href="/apps"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#D4500A] hover:underline"
              >
                D&eacute;couvrir Yonima
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Skoolbi Card */}
            <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#7C3AED]/10 mb-6">
                <GraduationCap className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F492E]">
                Skoolbi — L&apos;&eacute;cole, enfin bien g&eacute;r&eacute;e
              </h3>
              <p className="mt-3 text-[#1F492E]/60 leading-relaxed">
                L&apos;ERP scolaire tout-en-un qui digitalise la gestion des
                &eacute;coles. Bulletins, paiements, pr&eacute;sences, emploi du
                temps — tout en une seule plateforme.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Bulletins",
                  "Paiement Wave/OM",
                  "WhatsApp",
                  "Certificats QR",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#7C3AED]/10 text-[#7C3AED]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <Link
                href="/skoolbi"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#7C3AED] hover:underline"
              >
                D&eacute;couvrir Skoolbi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="fade-in-section py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div ref={livraisons.ref} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-[#D4500A]">
                {livraisons.value}
              </p>
              <p className="mt-2 text-xs font-medium text-[#1F492E]/50 tracking-wider">
                LIVRAISONS COMPL&Eacute;T&Eacute;ES
              </p>
            </div>
            <div ref={restaurants.ref} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-[#D4500A]">
                {restaurants.value}
              </p>
              <p className="mt-2 text-xs font-medium text-[#1F492E]/50 tracking-wider">
                RESTAURANTS PARTENAIRES
              </p>
            </div>
            <div ref={utilisateurs.ref} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-[#D4500A]">
                {utilisateurs.value}
              </p>
              <p className="mt-2 text-xs font-medium text-[#1F492E]/50 tracking-wider">
                UTILISATEURS ACTIFS
              </p>
            </div>
            <div ref={ecoles.ref} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-[#D4500A]">
                {ecoles.value}
              </p>
              <p className="mt-2 text-xs font-medium text-[#1F492E]/50 tracking-wider">
                &Eacute;COLES EN TEST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        ref={visionRef}
        className="fade-in-section bg-[#1F492E] text-white py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Construire la tech africaine, depuis Dakar
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed text-lg">
              Poulzz d&eacute;veloppe des solutions num&eacute;riques
              adapt&eacute;es aux r&eacute;alit&eacute;s du
              S&eacute;n&eacute;gal : connectivit&eacute; instable, paiement
              mobile, usage smartphone-first.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed text-lg">
              Nos produits ne sont pas des copies — ils sont pens&eacute;s ici,
              pour ici.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="fade-in-section py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F492E]">
            Pr&ecirc;t &agrave; rejoindre l&apos;aventure ?
          </h2>
          <p className="mt-4 text-[#1F492E]/60 max-w-xl mx-auto">
            Que vous soyez une &eacute;cole, un commer&ccedil;ant ou un talent
            tech — contactez-nous.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#D4500A] rounded-full hover:bg-[#B8440A] transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
