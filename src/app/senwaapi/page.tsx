"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  Webhook,
  ShieldCheck,
  Zap,
  Bot,
  CreditCard,
  Globe,
  Lock,
  Check,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import {
  useScrollAnimation,
} from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: MessageSquare,
    title: "Messages WhatsApp",
    description:
      "Envoyez texte, image, video, document, vocal, contact et localisation par simple appel HTTP.",
  },
  {
    icon: Lock,
    title: "OTP / 2FA par WhatsApp",
    description:
      "Codes OTP par WhatsApp, sans onboarding Meta BSP ni templates a faire approuver.",
  },
  {
    icon: Webhook,
    title: "Webhooks signes HMAC",
    description:
      "Recevez messages et evenements de livraison en temps reel avec signature HMAC SHA-256.",
  },
  {
    icon: ShieldCheck,
    title: "Multi-comptes",
    description:
      "Chaque compte a sa propre cle API et sa session WhatsApp liee. Dashboard avec journaux d'audit.",
  },
  {
    icon: Bot,
    title: "Serveur MCP officiel",
    description:
      "Premiere API WhatsApp avec un serveur MCP. Les agents IA comme Claude appellent WhatsApp directement.",
  },
  {
    icon: Zap,
    title: "Rate limiting integre",
    description:
      "Anti-spam et limites par session pour proteger vos comptes WhatsApp automatiquement.",
  },
];

const highlights = [
  "Un Bearer token, quatre endpoints, pas de SDK obligatoire",
  "Compatible Node, Python, PHP, n8n, Make, Zapier",
  "Dashboard multi-compte avec journaux d'audit",
  "Webhooks signes en HMAC SHA-256",
  "Serveur MCP officiel (npm senwaapi-mcp)",
  "Heberge en UE, conforme RGPD/CNIL",
];

const plans = [
  {
    name: "Starter",
    price: "4,99",
    period: "/ mois",
    features: [
      "1 session WhatsApp",
      "Envois illimites",
      "5 webhooks",
      "Journaux d'audit",
      "Support e-mail",
    ],
  },
  {
    name: "Pro",
    price: "9,99",
    period: "/ mois",
    popular: true,
    features: [
      "3 sessions WhatsApp",
      "Envois illimites",
      "Webhooks illimites",
      "Support e-mail prioritaire",
      "Dashboard multi-compte",
    ],
  },
];

const wavePacks = [
  { plan: "Starter", sessions: 1, duration: "1 mois", price: "3 000", saving: "" },
  { plan: "Starter", sessions: 1, duration: "3 mois", price: "8 000", saving: "~11 %" },
  { plan: "Starter", sessions: 1, duration: "9 mois", price: "22 000", saving: "~19 %" },
  { plan: "Starter", sessions: 1, duration: "12 mois", price: "27 000", saving: "~25 %", best: true },
  { plan: "Pro", sessions: 3, duration: "1 mois", price: "6 500", saving: "" },
  { plan: "Pro", sessions: 3, duration: "3 mois", price: "17 000", saving: "~13 %" },
  { plan: "Pro", sessions: 3, duration: "9 mois", price: "45 000", saving: "~23 %" },
  { plan: "Pro", sessions: 3, duration: "12 mois", price: "58 000", saving: "~26 %", best: true },
];

const faqItems = [
  {
    question: "Faut-il un compte Meta Business pour utiliser SenWaAPI ?",
    answer:
      "Non. SenWaAPI fonctionne sans onboarding Meta BSP et sans templates a faire valider. Vous connectez votre numero WhatsApp et c'est parti.",
  },
  {
    question: "Comment fonctionne l'essai gratuit ?",
    answer:
      "15 jours gratuits, sans carte bancaire. Vous avez acces a 1 session WhatsApp avec toutes les fonctionnalites : envois illimites, webhooks, journaux d'audit.",
  },
  {
    question: "Quels modes de paiement sont acceptes ?",
    answer:
      "Carte bancaire via Stripe (EUR, monde entier) ou mobile money via Wave (XOF, Afrique de l'Ouest). Choisissez ce qui vous convient.",
  },
  {
    question: "Comment integrer SenWaAPI dans mon projet ?",
    answer:
      "Un Bearer token et quatre endpoints REST. Compatible avec tout ce qui parle HTTP : Node, Python, PHP, n8n, Make, Zapier. Demarrage en 30 secondes.",
  },
  {
    question: "Qu'est-ce que le serveur MCP ?",
    answer:
      "Le serveur MCP (Model Context Protocol) permet aux agents IA comme Claude Desktop et Claude Code d'envoyer des messages WhatsApp directement. Installez le package npm senwaapi-mcp et c'est pret.",
  },
];

export default function SenWaAPIPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [pricingTab, setPricingTab] = useState<"eur" | "wave">("eur");

  const heroRef = useScrollAnimation();
  const highlightsRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const pricingRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero Section */}
      <section ref={heroRef} className="fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[#1F492E] bg-[#25d366]/10 rounded-full px-3.5 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25d366]" />
              API WHATSAPP
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-bold tracking-[-0.045em] leading-[0.98] text-[#1F492E] mb-6">
              Déployez WhatsApp{" "}
              <span className="text-[#2E6A3B]">
                tranquillement<span className="text-[#31CC71]">.</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-light text-[#1F492E]/70 max-w-[520px] mb-3">
              Messages transactionnels, codes OTP et webhooks — une API simple,
              facturée en FCFA ou en euros.
            </p>
            <p className="text-sm text-[#1F492E]/50 mb-9">
              REST, Webhooks et serveur MCP.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3.5">
              <a
                href="https://senwaapi.com/register"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center px-[30px] py-[17px] bg-[#2E6A3B] hover:bg-[#006D36] text-white text-base font-semibold rounded-[14px] transition-colors"
              >
                Créer un compte ↗
              </a>
              <a
                href="https://senwaapi.com"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center px-[30px] py-[17px] bg-white border border-[#E4E9E6] text-[#1A1A1A] text-base font-semibold rounded-[14px] hover:border-[#2E6A3B]/40 transition-colors"
              >
                Lire la doc
              </a>
            </div>
            <p className="mt-6 text-sm text-[#1F492E]/40">
              Essai gratuit 15 jours, sans carte bancaire
            </p>
          </div>
          {/* Terminal — exemple curl OTP */}
          <div className="bg-[#0B0F0C] rounded-[26px] p-7 lg:p-8 font-mono text-[13.5px] leading-[1.9] text-white/85 overflow-x-auto">
            <div className="flex gap-[7px] mb-[18px]">
              <span className="w-[11px] h-[11px] rounded-full bg-white/20" />
              <span className="w-[11px] h-[11px] rounded-full bg-white/20" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#31CC71]" />
            </div>
            <div>
              <span className="text-[#31CC71]">curl</span> -X POST
              https://senwaapi.com/api/send \
            </div>
            <div>
              {"  "}-H{" "}
              <span className="text-[#BEEBD1]">
                &quot;Authorization: Bearer $TOKEN&quot;
              </span>{" "}
              \
            </div>
            <div>
              {"  "}-d{" "}
              <span className="text-[#BEEBD1]">
                &apos;&#123;&quot;to&quot;:&quot;+221762957097&quot;,
              </span>
            </div>
            <div>
              {"    "}
              <span className="text-[#BEEBD1]">
                &quot;template&quot;:&quot;otp&quot;,&quot;code&quot;:&quot;4821&quot;&#125;&apos;
              </span>
            </div>
            <div className="mt-4 text-white/45">→ 200 OK · délivré en 1,2 s</div>
          </div>
        </div>
      </section>

      {/* Highlights — Pourquoi SenWaAPI */}
      <section ref={highlightsRef} className="fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F492E] mb-4">
              Pourquoi SenWaAPI ?
            </h2>
            <p className="text-lg text-[#1F492E]/70 mb-8 max-w-3xl">
              Une API WhatsApp pensee pour les developpeurs qui veulent aller
              vite, sans la bureaucratie Meta.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#25d366] flex-shrink-0 mt-0.5" />
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
            Tout ce qu&apos;il faut pour WhatsApp
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-[#25d366]/10 hover:shadow-md transition"
                >
                  <div className="bg-[#25d366]/10 rounded-xl p-3 w-fit mb-4">
                    <Icon className="w-6 h-6 text-[#25d366]" />
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

      {/* Pricing Section */}
      <section ref={pricingRef} className="fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F492E] text-center mb-4">
            Tarification simple
          </h2>
          <p className="text-center text-[#1F492E]/60 mb-8 max-w-xl mx-auto">
            Essai gratuit 15 jours sans carte. Payez ensuite par carte ou
            mobile money.
          </p>

          {/* Tabs */}
          <div className="flex items-center justify-center mb-10">
            <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setPricingTab("eur")}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  pricingTab === "eur"
                    ? "bg-[#25d366] text-white"
                    : "text-[#1F492E]/60 hover:text-[#1F492E]"
                }`}
              >
                <CreditCard className="w-4 h-4" />
                Carte (EUR)
              </button>
              <button
                onClick={() => setPricingTab("wave")}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  pricingTab === "wave"
                    ? "bg-[#25d366] text-white"
                    : "text-[#1F492E]/60 hover:text-[#1F492E]"
                }`}
              >
                <Image
                  src="/images/logo-wave.png"
                  alt="Wave"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
                Wave (FCFA)
              </button>
            </div>
          </div>

          {/* EUR Plans */}
          {pricingTab === "eur" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`bg-white rounded-3xl p-8 shadow-sm text-center ${
                    plan.popular
                      ? "border-2 border-[#25d366] relative"
                      : "border border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#25d366] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Populaire
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#1F492E] mb-2">
                    {plan.name}
                  </h3>
                  <div className="my-4">
                    <span className="text-4xl font-bold text-[#25d366]">
                      {plan.price} &euro;
                    </span>
                    <span className="text-[#1F492E]/60 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <div className="text-left space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[#25d366] flex-shrink-0" />
                        <span className="text-[#1F492E]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://senwaapi.com/register"
                    target="_blank"
                    rel="noopener"
                    className={`inline-flex items-center justify-center w-full px-8 py-3 font-semibold rounded-full transition-colors ${
                      plan.popular
                        ? "bg-[#25d366] hover:bg-[#1fb855] text-white"
                        : "border-2 border-[#25d366] text-[#25d366] hover:bg-[#25d366]/5"
                    }`}
                  >
                    Commencer
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Wave Packs */}
          {pricingTab === "wave" && (
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Starter Packs */}
                <div>
                  <h3 className="text-lg font-bold text-[#1F492E] mb-1">
                    Starter
                  </h3>
                  <p className="text-sm text-[#1F492E]/50 mb-4">
                    1 session WhatsApp
                  </p>
                  <div className="space-y-3">
                    {wavePacks
                      .filter((p) => p.plan === "Starter")
                      .map((pack) => (
                        <div
                          key={pack.duration}
                          className={`bg-white rounded-2xl p-4 shadow-sm border ${
                            pack.best
                              ? "border-[#25d366] ring-1 ring-[#25d366]/20"
                              : "border-gray-200"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-semibold text-[#1F492E]">
                                {pack.duration}
                              </span>
                              {pack.best && (
                                <span className="ml-2 text-xs font-semibold text-[#25d366] bg-[#25d366]/10 px-2 py-0.5 rounded-full">
                                  Meilleur prix
                                </span>
                              )}
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-[#1F492E]">
                                {pack.price} FCFA
                              </span>
                              {pack.saving && (
                                <span className="block text-xs text-[#25d366] font-medium">
                                  Economie {pack.saving}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Pro Packs */}
                <div>
                  <h3 className="text-lg font-bold text-[#1F492E] mb-1">Pro</h3>
                  <p className="text-sm text-[#1F492E]/50 mb-4">
                    3 sessions WhatsApp
                  </p>
                  <div className="space-y-3">
                    {wavePacks
                      .filter((p) => p.plan === "Pro")
                      .map((pack) => (
                        <div
                          key={pack.duration}
                          className={`bg-white rounded-2xl p-4 shadow-sm border ${
                            pack.best
                              ? "border-[#25d366] ring-1 ring-[#25d366]/20"
                              : "border-gray-200"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-semibold text-[#1F492E]">
                                {pack.duration}
                              </span>
                              {pack.best && (
                                <span className="ml-2 text-xs font-semibold text-[#25d366] bg-[#25d366]/10 px-2 py-0.5 rounded-full">
                                  Meilleur prix
                                </span>
                              )}
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-[#1F492E]">
                                {pack.price} FCFA
                              </span>
                              {pack.saving && (
                                <span className="block text-xs text-[#25d366] font-medium">
                                  Economie {pack.saving}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://senwaapi.com/register"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#25d366] hover:bg-[#1fb855] text-white font-semibold rounded-full transition-colors"
                >
                  <Image
                    src="/images/logo-wave.png"
                    alt="Wave"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain brightness-0 invert"
                  />
                  Commencer avec Wave
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <p className="mt-3 text-sm text-[#1F492E]/40">
                  Paiement unique via Wave — sans reconduction automatique
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <div className="inline-flex items-center gap-2 text-sm text-[#1F492E]/50">
              <CreditCard className="w-4 h-4" />
              <span>Carte (Stripe, EUR)</span>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-[#1F492E]/50">
              <Image
                src="/images/logo-wave.png"
                alt="Wave"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
              <span>Mobile money (Wave, XOF)</span>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-[#1F492E]/50">
              <Globe className="w-4 h-4" />
              <span>Heberge en UE, conforme RGPD</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F492E] text-center mb-12">
            Questions frequentes
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
                    className={`w-5 h-5 text-[#25d366] flex-shrink-0 transition-transform duration-300 ${
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pret a deployer WhatsApp ?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Essai gratuit 15 jours, sans carte bancaire. Demarrez en 30
              secondes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://senwaapi.com/register"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#25d366] hover:bg-[#1fb855] text-white font-semibold rounded-full transition-colors"
              >
                Essayer gratuitement
                <ArrowRight className="w-4 h-4 ml-2" />
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
