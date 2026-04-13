import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, CreditCard, BarChart3, Route, Package, TrendingUp } from "lucide-react";

const apps = [
  {
    id: "yonima-plus",
    name: "Yonima Plus",
    category: "APPLICATION CLIENT",
    tagline: "Commandez facilement, recevez rapidement",
    description:
      "L'experience de livraison reinventee pour le consommateur senegalais moderne. Commandez vos repas, courses et produits essentiels en toute simplicite avec un suivi en temps reel.",
    features: [
      {
        icon: MapPin,
        title: "Suivi GPS en temps reel",
        description: "Suivez votre commande du restaurant jusqu'a votre porte avec une precision metrique.",
      },
      {
        icon: CreditCard,
        title: "Paiements multi-canaux",
        description: "Integration native avec Orange Money, Wave et les reseaux bancaires locaux.",
      },
    ],
    bgColor: "bg-[#EED6A4]/30",
    image: "/images/app-yonima-plus.png",
    storeLinks: {
      appStore: "#",
      playStore: "https://play.google.com/store/apps/details?id=com.poulzz.yonima.client&pcampaignid=web_share",
    },
  },
  {
    id: "yonima-rider",
    name: "Yonima Rider",
    category: "APPLICATION LIVREUR",
    tagline: "Livrez, gagnez, evoluez",
    description:
      "Donnez les moyens a des milliers de livreurs independants avec des outils professionnels pour maximiser leur impact quotidien et leurs revenus.",
    features: [
      {
        icon: BarChart3,
        title: "Tableau de bord des gains",
        description: "Acces instantane a vos revenus quotidiens, commissions, pourboires et performances.",
      },
      {
        icon: Route,
        title: "Routage optimise",
        description: "Planification intelligente des itineraires pour eviter le trafic et livrer plus rapidement.",
      },
    ],
    bgColor: "bg-[#31CC71]/10",
    image: "/images/app-yonima-rider.png",
    storeLinks: {
      appStore: "#",
      playStore: "#",
    },
  },
  {
    id: "yonima-vendeur",
    name: "Yonima Vendeur",
    category: "APPLICATION COMMERCANT",
    tagline: "Developpez votre activite numeriquement",
    description:
      "Transformez votre commerce traditionnel en puissance digitale. Gerez vos stocks, suivez vos ventes et atteignez des milliers de nouveaux clients.",
    features: [
      {
        icon: Package,
        title: "Gestion des stocks",
        description: "Suivi automatise des stocks sur tous les canaux de livraison.",
      },
      {
        icon: TrendingUp,
        title: "Analyses marche",
        description: "Donnees comportementales pour comprendre les heures de pointe et les articles populaires.",
      },
    ],
    bgColor: "bg-[#1F492E]/5",
    image: "/images/app-yonima-vendeur.png",
    storeLinks: {
      appStore: "#",
      playStore: "#",
    },
  },
];

const testimonials = [
  {
    quote:
      "Yonima Plus a change ma facon de commander mon dejeuner au Plateau. C'est rapide, fiable, et j'adore pouvoir payer avec Wave.",
    author: "Awa Diop",
    role: "CLIENTE",
    avatar: "A",
  },
  {
    quote:
      "L'app est tres facile a utiliser. Je peux voir exactement combien j'ai gagne chaque jour, ce qui m'aide a planifier pour ma famille.",
    author: "Moussa Fall",
    role: "LIVREUR",
    avatar: "M",
  },
  {
    quote:
      "Integrer notre boulangerie avec Yonima Vendeur etait la meilleure decision. Nos commandes ont augmente de 40% depuis.",
    author: "Fatou Ndiaye",
    role: "COMMERCANTE",
    avatar: "F",
  },
];

export default function AppsPage() {
  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#1F492E]/50 tracking-wider uppercase">
              CONSTRUIT POUR LE SENEGAL
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-[#1F492E]">Le Coeur de la</span>
              <br />
              <span className="gradient-text">Logistique</span>
              <br />
              <span className="gradient-text">Senegalaise</span>
            </h1>
            <p className="mt-6 text-lg text-[#1F492E]/60 max-w-xl">
              Un ecosysteme de plateformes interconnectees qui transforme
              l&apos;avenir du commerce et de la livraison en Afrique de
              l&apos;Ouest.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#yonima-plus"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-[#D4500A] rounded-full hover:bg-[#B8440A] transition-colors cursor-pointer"
              >
                Explorer l&apos;ecosysteme
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-[#1F492E] border border-[#1F492E]/30 rounded-full hover:bg-[#1F492E]/5 transition-colors cursor-pointer"
              >
                Devenir partenaire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Sections */}
      {apps.map((app, index) => (
        <section
          key={app.id}
          id={app.id}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? "bg-white" : "bg-[#F5F1EB]"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-sm font-medium text-[#D4500A] tracking-wider">
                  {app.category}
                </p>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#1F492E]">
                  {app.name}
                </h2>
                <p className="mt-2 text-xl text-[#1F492E]/70">{app.tagline}</p>
                <p className="mt-4 text-[#1F492E]/60">{app.description}</p>

                {/* Features */}
                <div className="mt-8 space-y-6">
                  {app.features.map((feature) => (
                    <div key={feature.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#D4500A]/10 flex items-center justify-center">
                        <feature.icon className="h-5 w-5 text-[#D4500A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1F492E]">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#1F492E]/60">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Store Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={app.storeLinks.appStore}
                    target={app.storeLinks.appStore !== "#" ? "_blank" : undefined}
                    rel={app.storeLinks.appStore !== "#" ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F492E] text-white text-sm font-medium rounded-lg hover:bg-[#1F492E]/90 transition-colors cursor-pointer"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    App Store
                  </a>
                  <a
                    href={app.storeLinks.playStore}
                    target={app.storeLinks.playStore !== "#" ? "_blank" : undefined}
                    rel={app.storeLinks.playStore !== "#" ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F492E] text-white text-sm font-medium rounded-lg hover:bg-[#1F492E]/90 transition-colors cursor-pointer"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Google Play
                  </a>
                </div>
              </div>

              {/* App Icon */}
              <div className={`${app.bgColor} rounded-3xl aspect-square flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={app.image}
                  alt={app.name}
                  width={400}
                  height={400}
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F492E]">
              Impact de confiance
            </h2>
            <p className="mt-4 text-[#1F492E]/60">
              Temoignages de notre communaute a travers l&apos;ecosysteme Yonima.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-[#F5F1EB] rounded-2xl p-6"
              >
                <p className="text-[#1F492E]/70 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4500A] flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F492E]">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-[#1F492E]/40">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
