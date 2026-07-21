import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Charte d'utilisation responsable - Yonima - Poulzz",
  description:
    "Charte d'utilisation responsable de Yonima : regles de bon usage de l'Application, comportements interdits et signalement d'abus.",
};

export default function CharteUtilisationPage() {
  return (
    <LegalPageShell
      title="Charte d'utilisation responsable"
      appLabel="Yonima - Conformite"
      version="1.0"
      lastUpdated="2026-07-21"
      otherVersions={[
        { href: "/legal/kyc", label: "Politique de connaissance client (KYC)" },
        { href: "/legal/lcb-ft", label: "Politique LCB-FT" },
        { href: "/legal/securite-transactions", label: "Politique de securite des transactions" },
        { href: "/legal/mentions-legales", label: "Mentions legales" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Objet et engagement mutuel" },
        { id: "chapitre-2", label: "2. Usages autorises de l'Application" },
        { id: "chapitre-3", label: "3. Comportements interdits" },
        { id: "chapitre-4", label: "4. Usage loyal du service de livraison" },
        { id: "chapitre-5", label: "5. Consequences des manquements" },
        { id: "chapitre-6", label: "6. Signalement d'un abus" },
        { id: "chapitre-7", label: "7. Acceptation de la Charte" },
      ]}
    >
      <p className="text-sm text-[#1F492E]/60 italic">
        Document valide en interne par le PO et les equipes Yonima. Une
        validation juridique externe par un avocat senegalais est prevue avant
        le lancement public V1.
      </p>

      <h2 id="preambule">Preambule</h2>
      <p>
        La presente <strong>Charte d&apos;utilisation responsable</strong>{" "}
        (ci-apres la &laquo; <strong>Charte</strong> &raquo;) enonce les regles
        de bon usage de l&apos;application mobile <strong>Yonima</strong>{" "}
        (ci-apres l&apos;<strong>Application</strong>), editee par{" "}
        <strong>POULZZ - SUARL</strong> (ci-apres &laquo; <strong>Yonima</strong>{" "}
        &raquo; ou &laquo; <strong>Nous</strong> &raquo;).
      </p>
      <p>
        Pour les informations legales detaillees de la societe (RCCM, NINEA,
        siege, gerant), se referer aux <a href="/legal/mentions-legales">mentions legales</a>.
        La Charte complete les <a href="/terms">CGU/CGV</a>, auxquelles elle
        renvoie pour les definitions et les consequences contractuelles des
        manquements.
      </p>

      <h2 id="chapitre-1">1. Objet et engagement mutuel</h2>
      <p>
        La presente Charte a pour objet de garantir un usage <strong>loyal, sur
        et respectueux</strong> de l&apos;Application, dans l&apos;interet de
        l&apos;ensemble de ses parties prenantes : les Clients, les Vendeurs, les
        Livreurs et les equipes Yonima.
      </p>
      <p>
        En utilisant l&apos;Application, le Client s&apos;engage a respecter la
        presente Charte. En contrepartie, Yonima s&apos;engage a mettre a
        disposition un service fiable, a traiter les Commandes et les paiements
        avec diligence et a appliquer la presente Charte de maniere{" "}
        <strong>proportionnee et equitable</strong>.
      </p>
      <p>
        La presente Charte est centree sur le <strong>Client</strong>, la{" "}
        <strong>Commande</strong> et le <strong>paiement</strong>.
      </p>

      <h2 id="chapitre-2">2. Usages autorises de l&apos;Application</h2>
      <p>
        L&apos;Application est destinee a permettre au Client, de <strong>bonne
        foi</strong> et pour son usage personnel :
      </p>
      <ul>
        <li>de <strong>decouvrir</strong> les Vendeurs partenaires et leurs offres ;</li>
        <li>de <strong>composer un panier</strong> et de <strong>passer des Commandes</strong> ;</li>
        <li>de <strong>payer</strong> ses Commandes par les moyens de paiement proposes ;</li>
        <li>de <strong>suivre</strong> la preparation et la livraison de ses Commandes ;</li>
        <li>d&apos;<strong>evaluer</strong> le service apres reception, de maniere objective et respectueuse ;</li>
        <li>de <strong>contacter le support</strong> pour toute question ou reclamation.</li>
      </ul>

      <h2 id="chapitre-3">3. Comportements interdits</h2>
      <p>Sont notamment <strong>strictement interdits</strong> :</p>
      <ul>
        <li>la <strong>fraude</strong> sous toutes ses formes (paiement frauduleux, fausses reclamations, contournement d&apos;un mode de paiement) ;</li>
        <li>l&apos;<strong>usurpation d&apos;identite</strong> ou la fourniture d&apos;informations manifestement fausses ;</li>
        <li>l&apos;utilisation de <strong>moyens de paiement voles, frauduleux ou non autorises</strong> ;</li>
        <li>la <strong>creation abusive de comptes multiples</strong>, notamment pour beneficier indument d&apos;offres promotionnelles destinees a un seul Client ;</li>
        <li>les <strong>commandes fictives, factices ou abusives</strong> (annulations en serie, fausses adresses, commandes passees sans intention de reception) ;</li>
        <li>le <strong>harcelement</strong>, les insultes ou tout comportement menacant envers les <strong>Livreurs</strong>, les <strong>Vendeurs</strong> ou le personnel Yonima ;</li>
        <li>toute tentative de <strong>contournement de la Plateforme</strong> visant a traiter en direct avec un Vendeur ou un Livreur pour echapper aux mecanismes de l&apos;Application ;</li>
        <li>toute action visant a <strong>perturber le fonctionnement technique</strong> de l&apos;Application (contournement des mecanismes de securite, alteration, extraction non autorisee de donnees).</li>
      </ul>

      <h2 id="chapitre-4">4. Usage loyal du service de livraison</h2>
      <p>
        Le Client s&apos;engage a faire un usage <strong>loyal</strong> du
        service de livraison, notamment :
      </p>
      <ul>
        <li>fournir une <strong>adresse de livraison exacte</strong> et un numero de telephone joignable ;</li>
        <li>se <strong>rendre disponible</strong> pour la reception de la Commande dans les conditions prevues par les CGU/CGV ;</li>
        <li><strong>communiquer le code de livraison</strong> au Livreur uniquement au moment de la remise effective ;</li>
        <li>en cas de paiement en especes, <strong>prevoir le montant du</strong> ;</li>
        <li>ne pas detourner le service a des fins autres que la commande et la reception de produits.</li>
      </ul>
      <p>
        Les consequences d&apos;une absence a la livraison ou d&apos;un refus non
        motive sont precisees dans les <a href="/terms">CGU/CGV (&sect;8)</a>.
      </p>

      <h2 id="chapitre-5">5. Consequences des manquements</h2>
      <p>
        En cas de manquement a la presente Charte, Yonima peut, de maniere
        proportionnee et <strong>sans que cela n&apos;ouvre droit a
        compensation</strong> :
      </p>
      <ul>
        <li>adresser un <strong>avertissement</strong> au Client ;</li>
        <li><strong>annuler</strong> une Commande ;</li>
        <li><strong>suspendre temporairement</strong> le Compte ;</li>
        <li><strong>resilier definitivement</strong> le Compte ;</li>
        <li><strong>engager toute procedure</strong> appropriee en cas de fraude caracterisee.</li>
      </ul>
      <p>
        Ces mesures s&apos;exercent dans les conditions prevues par les{" "}
        <a href="/terms">CGU/CGV (&sect;3.5 et &sect;15)</a> et, le cas echeant,
        la <a href="/legal/kyc">Politique KYC</a> et la{" "}
        <a href="/legal/lcb-ft">Politique LCB-FT</a>.
      </p>

      <h2 id="chapitre-6">6. Signalement d&apos;un abus</h2>
      <p>
        Tout Client peut <strong>signaler</strong> un abus, un comportement
        inapproprie ou un dysfonctionnement en contactant le <strong>support
        Yonima</strong> :
      </p>
      <ul>
        <li><strong>Email</strong> : <a href="mailto:contact@poulzz.com">contact@poulzz.com</a></li>
        <li><strong>WhatsApp</strong> : +221 76 295 70 97</li>
      </ul>
      <p>
        Yonima examine les signalements recus et prend, le cas echeant, les
        mesures appropriees.
      </p>

      <h2 id="chapitre-7">7. Acceptation de la Charte</h2>
      <p>
        L&apos;utilisation de l&apos;Application vaut <strong>acceptation</strong>{" "}
        de la presente Charte, qui fait partie integrante du cadre contractuel
        liant le Client a Yonima, aux cotes des CGU/CGV et des politiques
        associees.
      </p>
      <p>
        Yonima se reserve le droit de <strong>modifier</strong> la presente
        Charte a tout moment. La version en vigueur, identifiee par un numero et
        une date, est consultable depuis l&apos;ecran <strong>A propos &gt;
        Legal</strong> de l&apos;Application, les modifications substantielles
        etant portees a la connaissance des Utilisateurs conformement aux
        CGU/CGV.
      </p>
    </LegalPageShell>
  );
}
