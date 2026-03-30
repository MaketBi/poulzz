import Link from "next/link";
import {
  Truck,
  GraduationCap,
  Globe,
  Smartphone,
  Wifi,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    icon: Truck,
    name: "Yonima",
    description: "Ecosysteme de livraison (client + livreur + vendeur)",
    href: "/apps",
  },
  {
    icon: GraduationCap,
    name: "Skoolbi",
    description: "ERP de gestion scolaire",
    href: "/skoolbi",
    iconColor: "text-[#7C3AED]",
    iconBg: "bg-[#7C3AED]/10",
  },
];

const values = [
  {
    icon: Globe,
    label: "Concu au Senegal, pour le Senegal",
  },
  {
    icon: Smartphone,
    label: "Paiement mobile natif (Wave, Orange Money)",
  },
  {
    icon: Wifi,
    label: "Optimise pour les connexions instables",
  },
  {
    icon: MessageCircle,
    label: "Support local en francais et wolof",
  },
];

const team = [
  { initials: "MD", name: "Mamadou Diop", role: "Fondateur & CEO" },
  { initials: "FS", name: "Fatou Sall", role: "Directrice Technique" },
  { initials: "AK", name: "Amadou Kane", role: "Responsable Produit" },
  { initials: "KT", name: "Khady Toure", role: "Responsable Commercial" },
];

export default function AboutPage() {
  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F492E]">
              A propos de Poulzz
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Poulzz SUARL est une entreprise technologique fondee a Dakar.
              Notre mission : creer des solutions numeriques adaptees aux
              realites africaines.
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F492E] mb-8">
            Nos produits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${product.iconBg || "bg-[#31CC71]/10"} flex items-center justify-center`}
                >
                  <product.icon
                    className={`h-6 w-6 ${product.iconColor || "text-[#31CC71]"}`}
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#1F492E]">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {product.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[#31CC71] group-hover:underline">
                  Decouvrir
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="pb-16 lg:pb-24 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F492E] mb-8">
            Notre approche
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.label}
                className="bg-white rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-[#31CC71]/10 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-[#31CC71]" />
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  {value.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F492E] mb-12">
            Notre equipe
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.initials} className="text-center">
                <div className="w-16 h-16 bg-[#1F492E] text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold">
                  {member.initials}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-[#31CC71] font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-[#1F492E] mb-4">
              Informations legales
            </h2>
            <div className="space-y-2 text-gray-600 text-sm">
              <p className="font-medium text-gray-900">Poulzz SUARL</p>
              <p>Dakar, Senegal</p>
              <p>NINEA : 012814647</p>
              <p>RC : SN DKR 2026 B 5030</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F492E] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Rejoignez l&apos;aventure Poulzz
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[#D4500A] rounded-full hover:bg-[#B8440A] transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
