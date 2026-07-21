import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Informations legales — Poulzz / Yonima",
  description:
    "Centre des informations legales de Poulzz (POULZZ SUARL) : mentions legales, CGU/CGV, confidentialite, KYC, LCB-FT, securite des transactions et charte d'utilisation.",
};

const documents = [
  {
    href: "/legal/mentions-legales",
    title: "Mentions legales",
    description:
      "Editeur, directeur de la publication, hebergeur et propriete intellectuelle.",
  },
  {
    href: "/terms",
    title: "Conditions Generales d'Utilisation et de Vente",
    description:
      "Regles d'utilisation, commandes, paiement, livraison, remboursement, responsabilite.",
  },
  {
    href: "/privacy",
    title: "Politique de confidentialite",
    description:
      "Traitement des donnees personnelles, droits de l'Utilisateur, partenaires, securite.",
  },
  {
    href: "/legal/kyc",
    title: "Politique de connaissance client (KYC)",
    description:
      "Identification des Utilisateurs, verification par OTP et niveaux de vigilance.",
  },
  {
    href: "/legal/lcb-ft",
    title: "Politique LCB-FT",
    description:
      "Lutte contre le blanchiment de capitaux et le financement du terrorisme.",
  },
  {
    href: "/legal/securite-transactions",
    title: "Politique de securite des transactions",
    description:
      "Securite des paiements, PSP agrees, carte bancaire 3D Secure et mesures anti-fraude.",
  },
  {
    href: "/legal/charte-utilisation",
    title: "Charte d'utilisation responsable",
    description: "Regles de bon usage de l'Application et signalement des abus.",
  },
];

export default function LegalPage() {
  return (
    <div className="pt-28 lg:pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#D4500A]" />
          <p className="text-xs font-semibold text-[#1F492E]/70 uppercase tracking-[0.18em]">
            POULZZ SUARL — Yonima
          </p>
        </div>
        <h1 className="text-4xl font-bold text-[#1F492E]">
          Informations legales
        </h1>
        <p className="mt-6 text-[#1F492E]/70 leading-relaxed max-w-2xl">
          Retrouvez ici l&apos;ensemble des documents legaux et politiques de
          conformite applicables a l&apos;application Yonima et au site
          poulzz.com, edites par <strong>POULZZ - SUARL</strong>.
        </p>

        {/* Documents grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {documents.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="group block rounded-2xl border border-[#1F492E]/10 bg-white/50 p-6 transition-colors hover:border-[#D4500A]/40 hover:bg-white"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-[#1F492E] group-hover:text-[#D4500A] transition-colors">
                  {doc.title}
                </h2>
                <svg
                  className="w-4 h-4 mt-1 shrink-0 text-[#D4500A]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-2 text-sm text-[#1F492E]/60 leading-relaxed">
                {doc.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Editeur summary */}
        <div className="mt-16 pt-10 border-t border-[#1F492E]/15">
          <h2 className="text-xl font-semibold text-[#1F492E] mb-4">Editeur</h2>
          <ul className="space-y-2 text-[#1F492E]/70">
            <li><strong className="text-[#1F492E]">Raison sociale :</strong> POULZZ - SUARL</li>
            <li><strong className="text-[#1F492E]">Capital social :</strong> 100 000 F CFA</li>
            <li><strong className="text-[#1F492E]">RCCM :</strong> SN DKR 2026 B 5030</li>
            <li><strong className="text-[#1F492E]">NINEA :</strong> 012814647</li>
            <li><strong className="text-[#1F492E]">Siege social :</strong> Bene Baraque, Ainoumady 2, Dakar 11000, Senegal</li>
            <li><strong className="text-[#1F492E]">Email :</strong> contact@poulzz.com</li>
            <li><strong className="text-[#1F492E]">Telephone :</strong> +221 76 295 70 97</li>
          </ul>
          <p className="mt-6 text-sm text-[#1F492E]/60">
            Pour le detail complet (directeur de la publication, hebergement,
            propriete intellectuelle), consultez les{" "}
            <Link
              href="/legal/mentions-legales"
              className="text-[#D4500A] hover:underline"
            >
              mentions legales
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
