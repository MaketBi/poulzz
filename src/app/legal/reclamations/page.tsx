import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Politique de remboursement et reclamations - Yonima - Poulzz",
  description:
    "Politique de remboursement et de reclamations Yonima : canal de saisine, delai de 48 heures, pieces a fournir, traitement, escalade et contestation bancaire.",
};

export default function ReclamationsPage() {
  return (
    <LegalPageShell
      title="Politique de remboursement et reclamations"
      appLabel="Yonima - Conformite"
      version="1.0"
      lastUpdated="2026-10-13"
      otherVersions={[
        { href: "/legal/remboursement", label: "Conditions de remboursement" },
        { href: "/legal/retour", label: "Conditions de retour" },
        { href: "/legal/annulation", label: "Conditions d'annulation" },
        { href: "/terms/client", label: "CGU/CGV Yonima Plus (Client) - §9" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Objet" },
        { id: "chapitre-2", label: "2. Qui peut reclamer" },
        { id: "chapitre-3", label: "3. Canal de saisine" },
        { id: "chapitre-4", label: "4. Delai de 48 heures" },
        { id: "chapitre-5", label: "5. Pieces a fournir" },
        { id: "chapitre-6", label: "6. Traitement de la reclamation" },
        { id: "chapitre-7", label: "7. Issue de la reclamation" },
        { id: "chapitre-8", label: "8. Escalade et desaccord" },
        { id: "chapitre-9", label: "9. Contestation bancaire" },
        { id: "chapitre-10", label: "10. Reclamations abusives" },
        { id: "chapitre-11", label: "11. Contact" },
      ]}
    >
      <p className="text-sm text-[#1F492E]/60 italic">
        Document valide en interne par le PO et les equipes Yonima. Une
        validation juridique externe par un avocat senegalais est prevue avant
        le lancement public V1.
      </p>

      <h2 id="preambule">Preambule</h2>
      <p>
        La presente <strong>Politique de remboursement et de reclamations</strong>{" "}
        decrit la procedure a suivre pour signaler un probleme sur une Commande
        passee via l&apos;application mobile <strong>Yonima</strong> (ci-apres
        l&apos;<strong>Application</strong>), editee par{" "}
        <strong>POULZZ - SUARL</strong>, et la maniere dont Yonima traite cette
        reclamation.
      </p>
      <p>
        Le present document <strong>reprend et detaille</strong> le &sect;9 des{" "}
        <a href="/terms/client">CGU/CGV Yonima Plus (Client)</a>, qui demeure la
        source contractuelle de reference. En cas de divergence
        d&apos;interpretation, les CGU/CGV prevalent.
      </p>

      <h2 id="chapitre-1">1. Objet</h2>
      <p>
        Cette politique couvre la <strong>procedure</strong> : qui saisir,
        comment, dans quel delai et avec quelles pieces. Les{" "}
        <strong>droits au fond</strong> relevent des documents dedies :
      </p>
      <ul>
        <li>les <a href="/legal/remboursement">conditions de remboursement</a> (cas ouvrant droit, cas exclus, moyen et delai) ;</li>
        <li>les <a href="/legal/retour">conditions de retour</a> (reprise d&apos;un article) ;</li>
        <li>les <a href="/legal/annulation">conditions d&apos;annulation</a> (annulation d&apos;une Commande).</li>
      </ul>

      <h2 id="chapitre-2">2. Qui peut reclamer</h2>
      <p>
        La reclamation est formee par le <strong>Client titulaire du
        Compte</strong> ayant passe la Commande. Les Vendeurs et les Livreurs
        disposent de canaux distincts, decrits respectivement dans les{" "}
        <a href="/terms/business">CGU Business</a> et les{" "}
        <a href="/terms/rider">CGU Rider</a>, notamment pour les litiges
        financiers.
      </p>

      <h2 id="chapitre-3">3. Canal de saisine</h2>
      <p>
        La reclamation est adressee au{" "}
        <strong>support Yonima sur WhatsApp</strong>. Les coordonnees de contact
        sont accessibles depuis la page{" "}
        <a href="/support">Aide &amp; Support</a> et rappelees dans les{" "}
        <a href="/legal/mentions-legales">mentions legales</a>.
      </p>
      <p>
        Le support constitue le <strong>point d&apos;entree unique</strong> :
        le Client n&apos;a pas a contacter directement le Vendeur ou le Livreur,
        Yonima assurant l&apos;interface entre les parties.
      </p>

      <h2 id="chapitre-4">4. Delai de 48 heures</h2>
      <p>
        La reclamation doit etre formee <strong>au plus tard dans les 48 heures
        suivant la livraison</strong>.
      </p>
      <p>
        <strong>Sans reclamation dans ce delai de 48h, aucun remboursement ne
        sera accorde.</strong> Ce delai se justifie par la nature perissable des
        produits livres, qui rend tout constat tardif impossible a etablir de
        maniere fiable.
      </p>

      <h2 id="chapitre-5">5. Pieces a fournir</h2>
      <p>A l&apos;appui de sa reclamation, le Client fournit :</p>
      <ul>
        <li>le <strong>numero de Commande</strong> ;</li>
        <li>une <strong>description precise du probleme</strong> ;</li>
        <li>des <strong>photos</strong> quand applicable (article non conforme, manquant, emballage endommage, etat du produit).</li>
      </ul>
      <p>
        Une reclamation <strong>non etayee</strong> par des elements objectifs
        peut etre rejetee.
      </p>

      <h2 id="chapitre-6">6. Traitement de la reclamation</h2>
      <p>
        Yonima procede aux <strong>verifications utiles</strong> : examen des
        elements transmis, consultation de l&apos;historique de la Commande et,
        le cas echeant, echange avec le Vendeur ou le Livreur concerne.
      </p>
      <p>
        Lorsque la reclamation est fondee et que le remboursement est valide, le
        versement intervient dans un delai de{" "}
        <strong>24-48 heures ouvrees</strong> apres validation pour les
        paiements encaisses par la Plateforme, selon les modalites du{" "}
        <a href="/legal/remboursement">&sect;3 des conditions de remboursement</a>.
        Pour un paiement par carte bancaire, le remboursement est effectue sur la
        carte d&apos;origine, le delai de restitution effective dependant de la
        banque emettrice.
      </p>

      <h2 id="chapitre-7">7. Issue de la reclamation</h2>
      <p>Une reclamation peut aboutir a :</p>
      <ul>
        <li>un <strong>remboursement integral</strong> des sommes encaissees par la Plateforme ;</li>
        <li>un <strong>remboursement partiel</strong>, limite aux articles concernes ;</li>
        <li>un <strong>avoir Yonima</strong> valable 6 mois, notamment lorsque le paiement a ete encaisse en especes par le Vendeur ou le Livreur ;</li>
        <li>une <strong>reprise de l&apos;article</strong> dans les cas prevus par les <a href="/legal/retour">conditions de retour</a> ;</li>
        <li>un <strong>rejet motive</strong>, dans les cas listes au <a href="/legal/remboursement">&sect;4 des conditions de remboursement</a>.</li>
      </ul>
      <p>
        La decision est <strong>communiquee au Client</strong> avec son motif.
      </p>

      <h2 id="chapitre-8">8. Escalade et desaccord</h2>
      <p>
        En cas de desaccord persistant entre le Client et Yonima, les parties
        s&apos;engagent a rechercher une <strong>solution amiable</strong> avant
        toute procedure judiciaire (cf.{" "}
        <a href="/terms/client">CGU/CGV &sect;18</a>). A defaut, le tribunal
        competent sera celui du siege social de Yonima.
      </p>

      <h2 id="chapitre-9">9. Contestation bancaire</h2>
      <p>
        S&apos;agissant d&apos;un paiement par <strong>carte bancaire</strong>,
        le Client peut egalement se rapprocher de sa{" "}
        <strong>banque</strong>. Yonima invite toutefois le Client a{" "}
        <strong>saisir d&apos;abord le support</strong>, un remboursement direct
        etant generalement plus rapide qu&apos;une procedure de contestation.
      </p>
      <p>
        Le traitement des contestations et des incidents de paiement, ainsi que
        le signalement d&apos;une fraude, sont decrits dans la{" "}
        <a href="/legal/securite-transactions">politique de securite des transactions</a>.
      </p>

      <h2 id="chapitre-10">10. Reclamations abusives</h2>
      <p>
        Une reclamation manifestement <strong>abusive, frauduleuse ou non
        etayee</strong> est rejetee. La reiteration de telles reclamations
        constitue un manquement a la{" "}
        <a href="/legal/charte-utilisation">charte d&apos;utilisation responsable</a>{" "}
        et peut entrainer les mesures qui y sont prevues, pouvant aller jusqu&apos;a
        la suspension du Compte.
      </p>

      <h2 id="chapitre-11">11. Contact</h2>
      <p>
        Support Yonima : voir la page{" "}
        <a href="/support">Aide &amp; Support</a>. Coordonnees de
        l&apos;editeur : voir les{" "}
        <a href="/legal/mentions-legales">mentions legales</a>.
      </p>
    </LegalPageShell>
  );
}
