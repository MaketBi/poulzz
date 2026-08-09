import Link from "next/link";

export const metadata = {
  title: "Conditions d'utilisation - Poulzz",
  description:
    "Conditions d'utilisation des applications Yonima Plus, Yonima Business et Yonima Rider.",
};

const versions = [
  {
    href: "/terms/client",
    eyebrow: "Application Client",
    title: "Yonima Plus",
    description:
      "Conditions Generales d'Utilisation et de Vente applicables aux clients utilisant Yonima Plus.",
  },
  {
    href: "/terms/business",
    eyebrow: "Application Vendeur",
    title: "Yonima Business",
    description:
      "Conditions Generales d'Utilisation et Contrat de Referencement applicables aux vendeurs partenaires.",
  },
  {
    href: "/terms/rider",
    eyebrow: "Application Livreur",
    title: "Yonima Rider",
    description:
      "Conditions Generales d'Utilisation et Contrat de Prestation applicables aux livreurs partenaires.",
  },
];

export default function TermsHubPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1F492E]">
          Conditions d&apos;utilisation
        </h1>
        <p className="mt-4 text-[#1F492E]/70 text-lg">
          Chaque application Yonima dispose de conditions dediees. Selectionnez
          la version qui correspond a votre usage.
        </p>

        <div className="mt-12 grid gap-4">
          {versions.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className="block p-6 bg-white border border-[#1F492E]/15 rounded-2xl hover:border-[#2E6A3B] transition-colors"
            >
              <p className="text-sm font-medium text-[#2E6A3B] uppercase tracking-wider">
                {v.eyebrow}
              </p>
              <h2 className="mt-2 text-xl font-bold text-[#1F492E]">
                {v.title}
              </h2>
              <p className="mt-2 text-[#1F492E]/70">{v.description}</p>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-sm text-[#1F492E]/60">
          Pour toute question relative a ces conditions :{" "}
          <a
            href="mailto:contact@poulzz.com"
            className="text-[#2E6A3B] hover:underline"
          >
            contact@poulzz.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
