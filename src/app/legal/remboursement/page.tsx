import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Conditions de remboursement - Yonima - Poulzz",
  description:
    "Conditions de remboursement Yonima : cas ouvrant droit a remboursement, cas exclus, delais et moyen de remboursement selon le mode de paiement.",
};

export default function RemboursementPage() {
  return (
    <LegalPageShell
      title="Conditions de remboursement"
      appLabel="Yonima - Conformite"
      version="1.0"
      lastUpdated="2026-10-13"
      otherVersions={[
        { href: "/legal/annulation", label: "Conditions d'annulation" },
        { href: "/legal/retour", label: "Conditions de retour" },
        { href: "/legal/reclamations", label: "Politique de remboursement et reclamations" },
        { href: "/terms/client", label: "CGU/CGV Yonima Plus (Client) - §9" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Principe general" },
        { id: "chapitre-2", label: "2. Cas donnant droit a remboursement" },
        { id: "chapitre-3", label: "3. Moyen et delai de remboursement" },
        { id: "chapitre-4", label: "4. Cas ne donnant pas lieu a remboursement" },
        { id: "chapitre-5", label: "5. Comment demander un remboursement" },
        { id: "chapitre-6", label: "6. Desaccord persistant" },
      ]}
    >
      <p className="text-sm text-[#1F492E]/60 italic">
        Document valide en interne par le PO et les equipes Yonima. Une
        validation juridique externe par un avocat senegalais est prevue avant
        le lancement public V1.
      </p>

      <h2 id="preambule">Preambule</h2>
      <p>
        Les presentes <strong>Conditions de remboursement</strong> precisent les
        modalites selon lesquelles le Client peut obtenir le remboursement
        d&apos;une Commande passee via l&apos;application mobile{" "}
        <strong>Yonima</strong> (ci-apres l&apos;<strong>Application</strong>),
        editee par <strong>POULZZ - SUARL</strong> (ci-apres &laquo;{" "}
        <strong>Yonima</strong> &raquo; ou &laquo; <strong>Nous</strong> &raquo;).
      </p>
      <p>
        Le present document <strong>reprend et detaille</strong> le &sect;9 des{" "}
        <a href="/terms/client">CGU/CGV Yonima Plus (Client)</a>, qui demeure la
        source contractuelle de reference. En cas de divergence
        d&apos;interpretation, les CGU/CGV prevalent. Pour les informations
        legales de la societe (RCCM, NINEA, siege, gerant), se referer aux{" "}
        <a href="/legal/mentions-legales">mentions legales</a>.
      </p>
      <p>
        Les conditions d&apos;<a href="/legal/annulation">annulation</a> et de{" "}
        <a href="/legal/retour">retour</a> font l&apos;objet de documents
        dedies, de meme que la{" "}
        <a href="/legal/reclamations">procedure de reclamation</a>.
      </p>

      <h2 id="chapitre-1">1. Principe general</h2>
      <p>
        En cas de <strong>manquement avere</strong> de Yonima ou du Vendeur
        (refus du Vendeur apres paiement, annulation a l&apos;initiative de
        Yonima, echec technique de prise en charge, articles non conformes,
        articles impropres a la consommation), le Client est{" "}
        <strong>rembourse integralement</strong> des sommes encaissees par la
        Plateforme.
      </p>
      <p>
        <strong>Note transitoire V1</strong> : tant que l&apos;API Payout
        (remboursement automatique vers Wave / Maxit) n&apos;est pas deployee,
        les remboursements sont effectues <strong>manuellement</strong> par les
        operations Yonima dans un delai <strong>24-48 heures ouvrees</strong>{" "}
        apres validation. Une fois l&apos;API Payout en place, le remboursement
        deviendra <strong>automatique</strong> et instantane.
      </p>

      <h2 id="chapitre-2">2. Cas donnant droit a remboursement</h2>
      <p>
        Un remboursement (total ou partiel) est accorde dans les cas suivants :
      </p>
      <ol>
        <li><strong>Refus de la Commande par le Vendeur apres paiement.</strong></li>
        <li><strong>Annulation de la Commande a l&apos;initiative de Yonima ou du Vendeur</strong> (rupture de stock impossible a anticiper, fermeture imprevue, indisponibilite de Livreurs malgre nos meilleurs efforts, suspicion de fraude).</li>
        <li><strong>Articles non conformes</strong> a la Commande passee (mauvais articles, articles manquants).</li>
        <li><strong>Articles dans un etat impropre a la consommation</strong> (temperature anormale, emballage casse visible, hygiene manifestement non respectee), justifie par photos et constat a la livraison.</li>
        <li><strong>Erreur d&apos;adresse manifeste</strong> de la part du Vendeur ou du Livreur.</li>
      </ol>

      <h2 id="chapitre-3">3. Moyen et delai de remboursement</h2>
      <p>
        Le mode de remboursement depend de <strong>qui a encaisse</strong> les
        sommes :
      </p>
      <ul>
        <li><strong>Paiement par carte bancaire</strong> (encaisse via notre prestataire de services de paiement agree) : remboursement <strong>sur la carte ayant servi au paiement</strong>, sans autre moyen possible. Le delai de restitution effective sur le compte depend de la banque emettrice du Client.</li>
        <li><strong>Paiement Wave / Maxit / Orange Money</strong> (encaisse par la Plateforme) : remboursement <strong>vers le compte d&apos;origine</strong> sous <strong>24-48h ouvrees</strong> (manuel V1, automatique post-API Payout).</li>
        <li><strong>Paiement en especes</strong> (encaisse par le Vendeur ou le Livreur) : la situation est traitee au cas par cas avec le Vendeur. Yonima peut proposer un <strong>avoir Yonima</strong> valable 6 mois sur l&apos;Application en compensation immediate, le temps que la situation soit regularisee avec le Vendeur.</li>
      </ul>
      <p>
        Le remboursement est effectue <strong>exclusivement vers le moyen de
        paiement d&apos;origine</strong>. Aucun remboursement n&apos;est
        effectue vers un compte, une carte ou un numero tiers.
      </p>
      <p>
        Les modalites techniques de securite applicables aux paiements et aux
        contestations bancaires sont decrites dans la{" "}
        <a href="/legal/securite-transactions">politique de securite des transactions</a>.
      </p>

      <h2 id="chapitre-4">4. Cas ne donnant pas lieu a remboursement</h2>
      <p>Le Client <strong>n&apos;est pas</strong> rembourse dans les cas suivants :</p>
      <ul>
        <li>L&apos;Utilisateur a <strong>change d&apos;avis</strong> apres commande.</li>
        <li>L&apos;Utilisateur <strong>n&apos;aime pas le gout</strong> du plat (sauf article impropre a la consommation, cf. &sect;2.4).</li>
        <li>L&apos;Utilisateur etait <strong>absent a la livraison</strong> sans motif valable.</li>
        <li>L&apos;Utilisateur a <strong>fourni une adresse incorrecte</strong>.</li>
        <li>Le delai de livraison estime a ete depasse sans annulation prealable.</li>
        <li>Article entame, partiellement consomme ou modifie par le Client (sauf si le defaut justifiait l&apos;arret de consommation).</li>
        <li>Reclamation deposee <strong>plus de 48 heures</strong> apres la livraison.</li>
        <li>Reclamation manifestement <strong>abusive, frauduleuse ou non etayee</strong> par des elements objectifs.</li>
      </ul>

      <h2 id="chapitre-5">5. Comment demander un remboursement</h2>
      <p>
        Toute demande de remboursement passe par la{" "}
        <a href="/legal/reclamations">procedure de reclamation</a> : contacter le{" "}
        <strong>support Yonima sur WhatsApp</strong> au plus tard{" "}
        <strong>dans les 48 heures</strong> suivant la livraison, en fournissant
        le numero de Commande, une description precise du probleme et des photos
        quand applicable.
      </p>
      <p>
        <strong>Sans reclamation dans ce delai de 48h, aucun remboursement ne
        sera accorde.</strong>
      </p>

      <h2 id="chapitre-6">6. Desaccord persistant</h2>
      <p>
        En cas de desaccord persistant entre le Client et Yonima sur un
        remboursement, les parties s&apos;engagent a rechercher une{" "}
        <strong>solution amiable</strong> avant toute procedure judiciaire (cf.{" "}
        <a href="/terms/client">CGU/CGV &sect;18</a>). A defaut, le tribunal
        competent sera celui du siege social de Yonima.
      </p>
    </LegalPageShell>
  );
}
