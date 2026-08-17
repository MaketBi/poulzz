"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  CheckCircle,
  BarChart3,
  Wallet,
  Users,
  ScanLine,
  CalendarDays,
  ShieldCheck,
  Briefcase,
  BookOpen,
  Heart,
  Check,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react";
import {
  useScrollAnimation,
  useCounterAnimation,
} from "@/hooks/useScrollAnimation";

const whyItems = [
  "Bulletins générés en 30 secondes",
  "Parents informés en temps réel via WhatsApp",
  "Paiements Wave et Orange Money intégrés",
  "Certificats avec QR code anti-fraude",
  "Emploi du temps sans conflits",
  "Zéro installation — accessible depuis un téléphone",
];

const features = [
  {
    icon: BarChart3,
    title: "Bulletins & Notes",
    description:
      "Saisie des notes par les professeurs. Calcul automatique des moyennes et rangs. Bulletin PDF professionnel en un clic. Envoi par WhatsApp aux parents.",
  },
  {
    icon: Wallet,
    title: "Paiement Mobile",
    description:
      "QR code Wave et Orange Money. Parents paient depuis leur téléphone. Preuve de paiement avec capture d'écran. Validation par le directeur en un clic.",
  },
  {
    icon: Users,
    title: "Portail Parents",
    description:
      "Notes en temps réel. Suivi des absences et retards. Emploi du temps de l'enfant. Messagerie avec l'école.",
  },
  {
    icon: ScanLine,
    title: "Présences & Billets",
    description:
      "Badgeuse QR ou NFC. Billets d'entrée/sortie. Marquage automatique des retards. Historique complet par élève.",
  },
  {
    icon: CalendarDays,
    title: "Emploi du temps",
    description:
      "Génération automatique sans conflits. Vue mobile pour profs et élèves. Gestion des remplacements. Cahier de textes chronologique.",
  },
  {
    icon: ShieldCheck,
    title: "Certificats QR",
    description:
      "Certificat de scolarité, inscription, réussite. QR code d'authenticité sur chaque document. Vérification instantanée par scan. Fini les faux certificats.",
  },
];

const portals = [
  {
    icon: Briefcase,
    title: "Directeur",
    description: "Tableau de bord, finance, RH, paramétrage",
  },
  {
    icon: BookOpen,
    title: "Professeur",
    description: "Notes, présences, emploi du temps, cours",
  },
  {
    icon: Heart,
    title: "Parent",
    description: "Notes, absences, paiements, messagerie",
  },
  {
    icon: GraduationCap,
    title: "Élève",
    description: "Notes, emploi du temps, demandes, documents",
  },
];

const pricingFeatures = [
  "Tous les modules",
  "Portails directeur, prof, parent, élève",
  "Chatbot WhatsApp",
  "Support technique",
  "Mises à jour continues",
];

const faqItems = [
  {
    question: "Est-ce que ça marche sur téléphone ?",
    answer: "Oui, Skoolbi est 100% mobile. Pas besoin d'ordinateur.",
  },
  {
    question: "Comment les parents paient ?",
    answer:
      "Via QR code Wave ou Orange Money, directement depuis leur téléphone.",
  },
  {
    question: "Combien de temps pour mettre en place ?",
    answer:
      "Votre école est opérationnelle en 24h. On s'occupe de tout.",
  },
  {
    question: "Et si je n'ai pas une bonne connexion internet ?",
    answer:
      "Skoolbi est conçu pour les connexions instables. Ultra-léger, tourne en 3G.",
  },
  {
    question: "C'est sécurisé ?",
    answer:
      "Oui. Données chiffrées, accès par rôle, certificats avec QR anti-fraude.",
  },
];

const testimonials = [
  {
    quote:
      "Skoolbi a transformé notre gestion. Les parents reçoivent les bulletins par WhatsApp en 30 secondes.",
    author: "Directeur d'école, Dakar",
  },
  {
    quote:
      "Je suis mes enfants depuis mon téléphone. C'est simple et rapide.",
    author: "Parent d'élève",
  },
];

export default function SkoolbiPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const heroRef = useScrollAnimation();
  const whyRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const portalsRef = useScrollAnimation();
  const pricingRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero Section */}
      <section ref={heroRef} className="fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[#7C3AED] bg-[#7C3AED]/10 rounded-full px-3.5 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              ERP SCOLAIRE
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-bold tracking-[-0.045em] leading-[0.98] text-[#1F492E] mb-6">
              L&apos;école, enfin bien{" "}
              <span className="text-[#2E6A3B]">
                gérée<span className="text-[#31CC71]">.</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-light text-[#1F492E]/70 max-w-[520px] mb-9">
              Notes, paiements, présences et communication parents — une seule
              plateforme pour toute l&apos;école.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3.5">
              <a
                href="https://azyflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-[30px] py-[17px] bg-[#2E6A3B] hover:bg-[#006D36] text-white text-base font-semibold rounded-[14px] transition-colors"
              >
                Essai 30 jours ↗
              </a>
              <a
                href="https://azyflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-[30px] py-[17px] bg-white border border-[#E4E9E6] text-[#1A1A1A] text-base font-semibold rounded-[14px] hover:border-[#2E6A3B]/40 transition-colors"
              >
                Voir une démo
              </a>
            </div>
          </div>
          <div className="bg-[#E4E9E6] rounded-[26px] h-[300px] lg:h-[360px] flex items-center justify-center text-[13px] font-medium text-[#A8ADAA] px-6 text-center">
            <span className="flex flex-col items-center gap-3">
              <GraduationCap className="w-10 h-10 text-[#7C3AED]/50" />
              Capture — tableau de bord Skoolbi
            </span>
          </div>
        </div>
      </section>

      {/* Pourquoi Skoolbi */}
      <section ref={whyRef} className="fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F492E] mb-4">
              Pourquoi Skoolbi ?
            </h2>
            <p className="text-lg text-[#1F492E]/70 mb-8 max-w-3xl">
              Vous gérez encore votre école avec des cahiers, des tableaux Excel
              et des appels téléphoniques ? Skoolbi remplace tout ça.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#31CC71] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F492E] text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F492E] text-center mb-12">
            Tout ce dont votre école a besoin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-[#7C3AED]/10 hover:shadow-md transition"
                >
                  <div className="bg-[#7C3AED]/10 rounded-xl p-3 w-fit mb-4">
                    <Icon className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F492E] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#1F492E]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section ref={portalsRef} className="fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F492E] text-center mb-12">
            Un accès pour chaque rôle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portals.map((portal, index) => {
              const Icon = portal.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-[#7C3AED]/10 text-center"
                >
                  <div className="bg-[#7C3AED]/10 rounded-xl p-3 w-fit mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F492E] mb-2">
                    {portal.title}
                  </h3>
                  <p className="text-[#1F492E]/70">{portal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 max-w-lg mx-auto shadow-sm border border-[#7C3AED]/20 text-center">
            <h2 className="text-3xl font-bold text-[#1F492E] mb-2">
              Tarification simple et transparente
            </h2>
            <div className="my-6">
              <span className="text-5xl font-bold text-[#7C3AED]">
                1 000 F CFA
              </span>
              <span className="text-[#1F492E]/60 text-lg ml-2">
                / élève / mois
              </span>
            </div>
            <p className="text-[#1F492E]/70 mb-8">
              Essai gratuit 30 jours — sans engagement
            </p>
            <div className="text-left space-y-3 mb-8">
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#31CC71] flex-shrink-0" />
                  <span className="text-[#1F492E]">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="https://azyflow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-8 py-3 bg-[#2E6A3B] hover:bg-[#006D36] text-white font-semibold rounded-full transition-colors"
            >
              Commencer l&apos;essai gratuit
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F492E] text-center mb-12">
            Ce qu&apos;ils en disent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm relative"
              >
                <span className="text-6xl font-serif text-[#7C3AED]/20 absolute top-4 left-6 leading-none">
                  &ldquo;
                </span>
                <p className="text-[#1F492E] text-lg mt-8 mb-4 leading-relaxed">
                  {testimonial.quote}
                </p>
                <p className="text-[#1F492E]/60 font-medium">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F492E] text-center mb-12">
            Questions fréquentes
          </h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-[#1F492E] font-semibold text-lg pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7C3AED] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-[#1F492E]/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-[#1F492E] text-white rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Prêt à digitaliser votre école ?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://azyflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-full transition-colors"
              >
                Essai gratuit 30 jours
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+221 76 295 70 97</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>contact@poulzz.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
