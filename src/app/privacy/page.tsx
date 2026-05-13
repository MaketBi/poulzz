import Link from "next/link";

export const metadata = {
  title: "Politiques de confidentialite - Poulzz",
  description:
    "Politiques de confidentialite des applications Yonima Plus, Yonima Business et Yonima Rider.",
};

const versions = [
  {
    href: "/privacy/client",
    eyebrow: "Application Client",
    title: "Yonima Plus",
    description:
      "Politique de confidentialite applicable aux clients commandant via l'application Yonima Plus.",
  },
  {
    href: "/privacy/business",
    eyebrow: "Application Vendeur",
    title: "Yonima Business",
    description:
      "Politique de confidentialite applicable aux restaurants et vendeurs partenaires utilisant l'application Yonima Business.",
  },
  {
    href: "/privacy/rider",
    eyebrow: "Application Livreur",
    title: "Yonima Rider",
    description:
      "Politique de confidentialite applicable aux livreurs partenaires utilisant l'application Yonima Rider.",
  },
];

export default function PrivacyHubPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1F492E]">
          Politiques de confidentialite
        </h1>
        <p className="mt-4 text-[#1F492E]/70 text-lg">
          Chaque application Yonima dispose d&apos;une politique de
          confidentialite dediee. Selectionnez la version qui correspond a
          votre usage.
        </p>

        <div className="mt-12 grid gap-4">
          {versions.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className="block p-6 bg-white border border-[#1F492E]/15 rounded-2xl hover:border-[#D4500A] transition-colors"
            >
              <p className="text-sm font-medium text-[#D4500A] uppercase tracking-wider">
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
          Pour toute question relative aux donnees personnelles :{" "}
          <a
            href="mailto:contact@poulzz.com"
            className="text-[#D4500A] hover:underline"
          >
            contact@poulzz.com
          </a>{" "}
          (objet : &laquo; Donnees personnelles &raquo;).
        </p>
      </div>
    </div>
  );
}
