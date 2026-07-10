import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "CGV Vendeur - Yonima - Poulzz",
  description:
    "Conditions Generales de Vente Vendeur de Yonima : commission plateforme de 15 %, modalites de calcul, reversement et obligations du Vendeur.",
};

export default function CgvVendeurPage() {
  return (
    <LegalPageShell
      title="Conditions Generales de Vente Vendeur"
      appLabel="Yonima - Relation Vendeur"
      version="1.0"
      lastUpdated="2026-07-10"
      otherVersions={[
        { href: "/terms/business", label: "CGU Business (Vendeur)" },
        { href: "/terms/client", label: "CGU/CGV - Yonima Plus (Client)" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Definitions" },
        { id: "chapitre-2", label: "2. Role de Yonima" },
        { id: "chapitre-3", label: "3. Commission" },
        { id: "chapitre-4", label: "4. Reversement au Vendeur" },
        { id: "chapitre-5", label: "5. Obligations du Vendeur" },
        { id: "chapitre-6", label: "6. Acceptation et modification" },
        { id: "chapitre-7", label: "7. Versionnage" },
      ]}
    >
      <h2 id="preambule">Preambule</h2>
      <p>
        Les presentes <strong>Conditions Generales de Vente Vendeur</strong>{" "}
        (ci-apres les &laquo; <strong>CGV Vendeur</strong> &raquo; ou &laquo;{" "}
        <strong>Conditions</strong> &raquo;) regissent les relations entre{" "}
        <strong>POULZZ - SUARL</strong>, societe senegalaise editrice de
        l&apos;application <strong>Yonima</strong> (ci-apres &laquo;{" "}
        <strong>Yonima</strong> &raquo; ou la &laquo; <strong>Plateforme</strong>{" "}
        &raquo;), et tout <strong>Vendeur</strong> partenaire reference sur la
        Plateforme.
      </p>
      <p>
        Ce document est <strong>distinct des CGU/CGV Client</strong> : il
        concerne exclusivement la relation Yonima &harr; Vendeur, et notamment
        la commission d&apos;intermediation (cf. article 3).
      </p>
      <p>
        Les informations legales detaillees de POULZZ - SUARL (RCCM, NINEA,
        siege social, capital, gerant) figurent sur{" "}
        <a href="/legal">poulzz.com/legal</a>.
      </p>
      <p>
        L&apos;inscription d&apos;un Vendeur sur la Plateforme et son
        utilisation continue valent <strong>acceptation</strong> des presentes
        CGV Vendeur.
      </p>

      <h2 id="chapitre-1">1. Definitions</h2>
      <ul>
        <li>
          <strong>Vendeur</strong> : etablissement partenaire (restaurant,
          commerce) reference sur Yonima, qui prepare et vend ses produits aux
          Clients via la Plateforme.
        </li>
        <li>
          <strong>Client</strong> : utilisateur final qui commande des produits
          aupres d&apos;un Vendeur via l&apos;Application.
        </li>
        <li>
          <strong>Plateforme</strong> / <strong>Yonima</strong> : le service
          technique d&apos;intermediation exploite par POULZZ - SUARL.
        </li>
        <li>
          <strong>Prix de vente</strong> : le prix affiche au Client pour un
          produit, tel qu&apos;il figure sur la fiche du Vendeur dans
          l&apos;Application.
        </li>
        <li>
          <strong>Prix net Vendeur</strong> : le montant que le Vendeur percoit
          pour un produit, apres deduction de la Commission (voir article 3).
        </li>
        <li>
          <strong>Commission</strong> : la remuneration de Yonima au titre de
          son service d&apos;intermediation, prelevee sur chaque vente (voir
          article 3).
        </li>
      </ul>

      <h2 id="chapitre-2">2. Role de Yonima</h2>
      <p>
        Yonima agit comme <strong>intermediaire technique</strong> mettant en
        relation les Vendeurs et les Clients, et comme prestataire de services
        associes (referencement, prise de commande, encaissement via
        partenaires de paiement, dispatch de livraison).
      </p>
      <p>
        <strong>Yonima n&apos;est pas le vendeur des produits.</strong> Le
        contrat de vente est conclu directement entre le Client et le Vendeur.
        La qualite, la conformite et la securite alimentaire des produits
        relevent de la <strong>responsabilite exclusive du Vendeur</strong>.
      </p>

      <h2 id="chapitre-3">3. Commission</h2>

      <h3>3.1. Principe et taux</h3>
      <p>
        En contrepartie du service d&apos;intermediation fourni par la
        Plateforme, Yonima preleve une <strong>Commission</strong> sur chaque
        vente realisee via l&apos;Application.
      </p>
      <p>
        Le taux de Commission standard est fixe a{" "}
        <strong>quinze pour cent (15 %)</strong> du Prix de vente de chaque
        produit vendu.
      </p>

      <h3>3.2. Modalite de calcul</h3>
      <p>
        La Commission est calculee sur le <strong>Prix de vente</strong> affiche
        au Client. Le <strong>Prix net Vendeur</strong> percu par le Vendeur
        correspond au Prix de vente diminue de la Commission.
      </p>
      <p>
        Le Vendeur saisit dans l&apos;Application le Prix net qu&apos;il
        souhaite percevoir ; la Plateforme calcule et affiche le Prix de vente
        correspondant, Commission incluse. Le Vendeur a ainsi une visibilite
        directe sur le montant qu&apos;il percevra pour chaque produit.
      </p>

      <h3>3.3. Modification du taux</h3>
      <p>
        <strong>
          Yonima se reserve le droit de modifier le taux de Commission a tout
          moment, a sa seule discretion.
        </strong>{" "}
        Toute modification prend <strong>effet immediat des sa notification</strong>{" "}
        au Vendeur, effectuee par l&apos;un des moyens suivants : notification
        dans l&apos;Application, ecran dedie a l&apos;ouverture de
        l&apos;Application, message electronique ou tout autre canal juge
        approprie par Yonima.
      </p>
      <p>
        La poursuite de l&apos;utilisation de la Plateforme par le Vendeur apres
        la notification vaut <strong>acceptation du nouveau taux de Commission</strong>.
      </p>
      <p>
        Le taux de Commission applicable a une vente est celui en vigueur au
        moment de la confirmation de la Commande.
      </p>

      <h3>3.4. Cas particulier du paiement en especes</h3>
      <p>
        Pour les Commandes reglees <strong>en especes</strong> directement
        encaissees par le Vendeur, les modalites de perception de la Commission
        par Yonima sont precisees separement et peuvent faire l&apos;objet
        d&apos;un decompte distinct.
      </p>

      <h2 id="chapitre-4">4. Reversement au Vendeur</h2>
      <p>
        Le Prix net Vendeur, apres deduction de la Commission, est reverse au
        Vendeur selon la periodicite et les moyens de paiement en vigueur
        communiques par Yonima. Les modalites operationnelles de reversement
        (frequence, seuil minimal, canal) peuvent evoluer et sont notifiees au
        Vendeur.
      </p>

      <h2 id="chapitre-5">5. Obligations du Vendeur</h2>
      <ul>
        <li>Tenir a jour le catalogue, les prix et la disponibilite de ses produits.</li>
        <li>
          Respecter les normes d&apos;hygiene, de securite alimentaire et la
          reglementation applicable.
        </li>
        <li>Honorer les Commandes acceptees dans les delais annonces.</li>
        <li>Fournir des informations exactes sur son etablissement et ses produits.</li>
      </ul>

      <h2 id="chapitre-6">6. Acceptation et modification des presentes CGV</h2>
      <p>
        L&apos;inscription et l&apos;utilisation continue de la Plateforme
        valent acceptation des presentes CGV Vendeur. Yonima peut modifier les
        presentes Conditions ; les modifications sont notifiees au Vendeur et
        l&apos;usage continu apres notification vaut acceptation.
      </p>
      <blockquote>
        <strong>Note :</strong> la modification du <strong>taux de Commission</strong>{" "}
        releve du regime specifique decrit a l&apos;article 3.3 (effet immediat
        sur notification), qui prevaut sur les modalites generales du present
        article.
      </blockquote>

      <h2 id="chapitre-7">7. Versionnage</h2>
      <p>
        Chaque version des presentes CGV Vendeur est identifiee par un numero et
        une date, figurant en tete du present document.
      </p>
    </LegalPageShell>
  );
}
