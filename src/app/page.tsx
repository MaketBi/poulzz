import Link from "next/link";
import { ArrowRight } from "lucide-react";

const apps = [
  {
    name: "Yonima Plus",
    category: "APPLICATION CLIENT",
    description:
      "L'experience de livraison reinventee pour le consommateur moderne. Commandez repas, courses et essentiels en quelques clics.",
    image: "/images/app-yonima-plus.jpg",
    href: "/apps#yonima-plus",
  },
  {
    name: "Yonima Rider",
    category: "LOGISTIQUE",
    description:
      "Donnez les moyens a des milliers de livreurs avec un routage efficace et des tableaux de bord de gains en temps reel.",
    image: "/images/app-yonima-rider.jpg",
    href: "/apps#yonima-rider",
  },
  {
    name: "Yonima Vendeur",
    category: "OUTIL COMMERCANT",
    description:
      "Systeme robuste de gestion des stocks et des commandes concu pour le commercant africain moderne.",
    image: "/images/app-yonima-vendeur.jpg",
    href: "/apps#yonima-vendeur",
  },
];

const stats = [
  { value: "100k+", label: "LIVRAISONS COMPLETEES" },
  { value: "500+", label: "RESTAURANTS PARTENAIRES" },
  { value: "200k+", label: "UTILISATEURS ACTIFS" },
];

export default function HomePage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gray-900">Connecter le Senegal</span>
              <br />
              <span className="gradient-text">a travers chaque</span>
              <br />
              <span className="gradient-text">livraison</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-xl">
              Un ecosysteme de plateformes interconnectees qui transforme
              l&apos;avenir du commerce et de la livraison en Afrique de
              l&apos;Ouest.
            </p>
            <div className="mt-8">
              <Link
                href="/apps"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
              >
                Decouvrir nos apps
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Grid Section */}
      <section className="bg-[#F5F7FA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Nos Applications
            </h2>
            <p className="mt-4 text-gray-500">
              Un ecosysteme de produits concu pour fluidifier le commerce et la
              livraison a travers la region.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {apps.map((app, index) => (
              <Link
                key={app.name}
                href={app.href}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                  index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="aspect-[4/3] relative bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <div className="w-24 h-24 rounded-2xl bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">
                        {app.name === "Yonima Plus"
                          ? "+"
                          : app.name === "Yonima Rider"
                          ? "R"
                          : "V"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {app.name}
                    </h3>
                    <span className="text-xs font-medium text-gray-400 tracking-wider">
                      {app.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {app.description}
                  </p>
                  <div className="mt-4 flex items-center text-[#F4541D] text-sm font-medium">
                    En savoir plus
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4541D]">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium text-gray-400 tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Pret a rejoindre l&apos;aventure ?
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Que vous soyez un commercant local qui souhaite se developper ou un
            talent pret a avoir un impact, contactez-nous.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#F4541D] rounded-full hover:bg-[#E04A15] transition-colors"
            >
              Devenir partenaire
            </Link>
            <Link
              href="/about#team"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
            >
              Voir les opportunites
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
