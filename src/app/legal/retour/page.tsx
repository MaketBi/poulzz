import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Conditions de retour - Yonima - Poulzz",
  description:
    "Conditions de retour Yonima : constat a la livraison, denrees perissables non reprises, articles non alimentaires et prise en charge du retour.",
};

export default function RetourPage() {
  return (
    <LegalPageShell
      title="Conditions de retour"
      appLabel="Yonima - Conformite"
      version="1.0"
      lastUpdated="2026-10-13"
      otherVersions={[
        { href: "/legal/remboursement", label: "Conditions de remboursement" },
        { href: "/legal/annulation", label: "Conditions d'annulation" },
        { href: "/legal/reclamations", label: "Politique de remboursement et reclamations" },
        { href: "/terms/client", label: "CGU/CGV Yonima Plus (Client) - §9" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Nature des produits livres" },
        { id: "chapitre-2", label: "2. Constat au moment de la livraison" },
        { id: "chapitre-3", label: "3. Denrees alimentaires et produits perissables" },
        { id: "chapitre-4", label: "4. Articles non alimentaires" },
        { id: "chapitre-5", label: "5. Articles non repris" },
        { id: "chapitre-6", label: "6. Frais et modalites de retour" },
        { id: "chapitre-7", label: "7. Lien avec le remboursement" },
      ]}
    >
      <p className="text-sm text-[#1F492E]/60 italic">
        Document valide en interne par le PO et les equipes Yonima.
      </p>

      <h2 id="preambule">Preambule</h2>
      <p>
        Les presentes <strong>Conditions de retour</strong> precisent dans
        quelles situations un article livre via l&apos;application mobile{" "}
        <strong>Yonima</strong> (ci-apres l&apos;<strong>Application</strong>),
        editee par <strong>POULZZ - SUARL</strong>, peut etre reprise, et selon
        quelles modalites.
      </p>
      <p>
        Le present document <strong>reprend et detaille</strong> le &sect;9 des{" "}
        <a href="/terms/client">CGU/CGV Yonima Plus (Client)</a>, qui demeure la
        source contractuelle de reference. En cas de divergence
        d&apos;interpretation, les CGU/CGV prevalent.
      </p>

      <h2 id="chapitre-1">1. Nature des produits livres</h2>
      <p>
        Yonima est une plateforme de mise en relation et de livraison dont le
        catalogue est majoritairement compose de{" "}
        <strong>denrees alimentaires preparees et de produits perissables</strong>{" "}
        (plats prepares, boulangerie, epicerie), livres en circuit court dans un
        delai de quelques dizaines de minutes.
      </p>
      <p>
        Par nature, ces produits <strong>ne peuvent pas faire l&apos;objet
        d&apos;un retour apres acceptation a la livraison</strong>, pour des
        raisons d&apos;hygiene et de securite alimentaire. Le traitement des
        anomalies repose donc sur un <strong>constat au moment de la
        livraison</strong> plutot que sur une reprise differee de la
        marchandise.
      </p>

      <h2 id="chapitre-2">2. Constat au moment de la livraison</h2>
      <p>
        Le Client est invite a <strong>verifier sa Commande en presence du
        Livreur</strong>. Si un article est manquant, non conforme a la Commande
        passee, ou dans un etat manifestement impropre a la consommation
        (temperature anormale, emballage casse visible, hygiene manifestement
        non respectee), le Client peut :
      </p>
      <ol>
        <li><strong>Refuser l&apos;article concerne</strong> ou la totalite de la Commande au moment de la livraison ;</li>
        <li><strong>Constater l&apos;anomalie par photos</strong> et saisir le support.</li>
      </ol>
      <p>
        Le refus du Client a la livraison et la conduite a tenir par le Livreur
        sont encadres par les{" "}
        <a href="/terms/rider">CGU Rider (Livreur)</a>.
      </p>

      <h2 id="chapitre-3">3. Denrees alimentaires et produits perissables</h2>
      <p>
        Les denrees alimentaires et produits perissables{" "}
        <strong>ne sont pas repris</strong> une fois la livraison acceptee par le
        Client. L&apos;anomalie eventuelle est traitee par voie de{" "}
        <strong>remboursement total ou partiel</strong>, et non par reprise de
        la marchandise, dans les conditions prevues par les{" "}
        <a href="/legal/remboursement">conditions de remboursement</a>.
      </p>
      <p>
        Lorsque l&apos;article est impropre a la consommation, le Client est
        invite a <strong>ne pas le consommer</strong> et a le conserver, si cela
        est possible sans risque, le temps du traitement de sa reclamation.
      </p>

      <h2 id="chapitre-4">4. Articles non alimentaires</h2>
      <p>
        Le catalogue Yonima comporte egalement des articles{" "}
        <strong>non alimentaires</strong>. Pour ces articles, lorsqu&apos;ils
        sont livres <strong>non conformes a la Commande</strong>, defectueux ou
        endommages, une <strong>reprise</strong> peut etre organisee avec le
        Vendeur concerne, sur reclamation formee dans le delai de{" "}
        <strong>48 heures</strong>.
      </p>
      <p>
        L&apos;article doit alors etre restitue <strong>dans son etat
        d&apos;origine</strong>, non utilise, avec son emballage et ses
        accessoires lorsqu&apos;ils existent. La reprise est organisee par le
        support Yonima, en lien avec le Vendeur.
      </p>

      <h2 id="chapitre-5">5. Articles non repris</h2>
      <p>Aucune reprise n&apos;est possible dans les cas suivants :</p>
      <ul>
        <li><strong>Denrees alimentaires et produits perissables</strong> apres acceptation de la livraison (cf. &sect;3).</li>
        <li><strong>Article entame, partiellement consomme ou modifie</strong> par le Client, sauf si le defaut justifiait l&apos;arret de la consommation.</li>
        <li><strong>Simple changement d&apos;avis</strong> du Client apres commande.</li>
        <li><strong>Article non apprecie</strong> (gout, preference personnelle), hors cas d&apos;article impropre a la consommation.</li>
        <li><strong>Reclamation formee plus de 48 heures</strong> apres la livraison.</li>
        <li><strong>Demande manifestement abusive, frauduleuse ou non etayee</strong> par des elements objectifs.</li>
      </ul>

      <h2 id="chapitre-6">6. Frais et modalites de retour</h2>
      <p>
        Lorsque le retour est <strong>imputable a Yonima, au Vendeur ou au
        Livreur</strong> (article non conforme, manquant, defectueux ou
        endommage), la reprise est organisee{" "}
        <strong>sans frais pour le Client</strong>.
      </p>
      <p>
        Aucun retour ne doit etre expedie ou remis spontanement par le Client
        sans accord prealable du support Yonima : les retours{" "}
        <strong>non valides au prealable</strong> ne peuvent pas etre traites, la
        marchandise etant detenue par le Vendeur et non par Yonima.
      </p>

      <h2 id="chapitre-7">7. Lien avec le remboursement</h2>
      <p>
        Un retour valide ouvre droit a un remboursement dans les conditions et
        selon les delais prevus par les{" "}
        <a href="/legal/remboursement">conditions de remboursement</a>. La
        demande suit la{" "}
        <a href="/legal/reclamations">procedure de reclamation</a>, a former dans
        les <strong>48 heures</strong> suivant la livraison.
      </p>
    </LegalPageShell>
  );
}
