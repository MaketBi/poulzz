import Link from "next/link";
import { ArrowRight, Store, Truck, Smartphone } from "lucide-react";

const values = [
  {
    icon: Store,
    title: "Autonomiser les commercants locaux",
    description:
      "Outils digitaux et visibilite pour les boutiques de quartier afin de prosperer dans un marche mondialise.",
  },
  {
    icon: Truck,
    title: "Livraison fluide",
    description:
      "Un reseau logistique optimise garantissant fraicheur et rapidite a travers la region metropolitaine de Dakar.",
  },
  {
    icon: Smartphone,
    title: "Accessibilite technologique",
    description:
      "Applications intuitives et adaptees aux faibles debits, concues specifiquement pour les besoins de notre communaute locale.",
  },
];

const team = [
  {
    name: "Moussa Diop",
    role: "FONDATEUR & CEO",
    avatar: "MD",
  },
  {
    name: "Fatou Sarr",
    role: "DIRECTRICE DES OPERATIONS",
    avatar: "FS",
  },
  {
    name: "Amadou Kane",
    role: "DIRECTEUR TECHNIQUE",
    avatar: "AK",
  },
  {
    name: "Khadija Tall",
    role: "DIRECTRICE PRODUIT",
    avatar: "KT",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-gray-900">Nous construisons une</span>
              <br />
              <span className="text-gray-900">logistique </span>
              <span className="text-[#F4541D]">responsable</span>
              <span className="text-gray-900"> pour</span>
              <br />
              <span className="text-gray-900">la nouvelle generation du</span>
              <br />
              <span className="text-gray-900">commerce senegalais.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl">
              L&apos;histoire de Poulzz est celle de l&apos;autonomisation locale a
              travers des solutions digitales de pointe.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aspect-[21/9] bg-gray-200 rounded-2xl overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-lg">Image de l&apos;equipe ou du bureau</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm font-medium text-[#F4541D] tracking-wider uppercase">
                NOTRE ORIGINE
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                De la vision a la realite
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Poulzz est ne d&apos;une vision simple : combler le fosse entre les
                commercants locaux et l&apos;economie digitale croissante au Senegal.
              </p>
              <p className="text-gray-500">
                Ce qui a commence comme une simple idee pour des services de
                livraison plus efficaces s&apos;est transforme en un ecosysteme
                digital complet. Nous avons reconnu que pour que le Senegal
                prospere vraiment a l&apos;ere moderne, la logistique devait etre
                fluide, accessible et profondement integree a la culture
                commerciale locale. Aujourd&apos;hui, nous autonomisons des milliers
                de vendeurs et apportons de la joie aux foyers de Dakar chaque
                jour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium text-[#F4541D] tracking-wider uppercase">
              NOTRE MISSION
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              Infrastructure pour evoluer.
              <br />
              Service pour les gens.
            </h2>
            <p className="mt-4 text-gray-500">
              Nous construisons l&apos;infrastructure qui permet aux entreprises
              senegalaises de se developper et aux consommateurs de profiter
              d&apos;un service de classe mondiale.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF4F0] flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-[#F4541D]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#F4541D] tracking-wider uppercase">
                LEADERSHIP
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                L&apos;equipe derriere l&apos;histoire
              </h2>
            </div>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center text-[#F4541D] text-sm font-medium hover:underline"
            >
              Voir toutes les offres
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-400">
                    {member.avatar}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-xs text-[#F4541D] tracking-wider">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center text-[#F4541D] text-sm font-medium hover:underline"
            >
              Voir toutes les offres
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Pret a collaborer sur l&apos;avenir
            <br />
            de la logistique ?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#F4541D] rounded-full hover:bg-[#E04A15] transition-colors"
            >
              Devenir partenaire
            </Link>
            <Link
              href="/contact"
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
