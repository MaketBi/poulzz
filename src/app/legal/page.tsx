import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Poulzz",
  description: "Mentions légales de Poulzz SUARL, entreprise technologique basée à Dakar, Sénégal.",
};

export default function LegalPage() {
  return (
    <div className="pt-28 lg:pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-4xl font-bold text-[#1F492E]">Mentions legales</h1>

        <div className="mt-12 space-y-10 text-[#1F492E]/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#1F492E] mb-4">
              Editeur du site
            </h2>
            <p>
              Le site poulzz.com est edite par :
            </p>
            <ul className="mt-4 space-y-2">
              <li><strong className="text-[#1F492E]">Raison sociale :</strong> Poulzz SUARL</li>
              <li><strong className="text-[#1F492E]">Forme juridique :</strong> Societe Unipersonnelle a Responsabilite Limitee</li>
              <li><strong className="text-[#1F492E]">Siege social :</strong> Dakar, Senegal</li>
              <li><strong className="text-[#1F492E]">NINEA :</strong> 012814647</li>
              <li><strong className="text-[#1F492E]">RC :</strong> SN DKR 2026 B 5030</li>
              <li><strong className="text-[#1F492E]">Email :</strong> contact@poulzz.com</li>
              <li><strong className="text-[#1F492E]">Telephone :</strong> +221 76 295 70 97</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F492E] mb-4">
              Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication est le representant legal de Poulzz SUARL.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F492E] mb-4">
              Hebergement
            </h2>
            <p>
              Le site est heberge par Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, Etats-Unis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F492E] mb-4">
              Propriete intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos,
              graphismes, icones) est la propriete exclusive de Poulzz SUARL,
              sauf mention contraire. Toute reproduction, representation,
              modification ou exploitation, partielle ou totale, des contenus
              du site, par quelque procede que ce soit, sans l&apos;autorisation
              prealable et ecrite de Poulzz SUARL, est interdite et constitue
              une contrefacon au sens du code de la propriete intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F492E] mb-4">
              Donnees personnelles
            </h2>
            <p>
              Les informations relatives au traitement de vos donnees
              personnelles sont detaillees dans notre{" "}
              <a href="/privacy" className="text-[#D4500A] hover:underline">
                politique de confidentialite
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F492E] mb-4">
              Droit applicable
            </h2>
            <p>
              Les presentes mentions legales sont soumises au droit senegalais.
              En cas de litige, les tribunaux de Dakar seront seuls competents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1F492E] mb-4">
              Contact
            </h2>
            <p>
              Pour toute question relative aux presentes mentions legales,
              vous pouvez nous contacter a l&apos;adresse{" "}
              <a href="mailto:contact@poulzz.com" className="text-[#D4500A] hover:underline">
                contact@poulzz.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
