import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Conditions d'annulation - Yonima - Poulzz",
  description:
    "Conditions d'annulation d'une Commande Yonima : annulation par le Client, par le Vendeur ou par Yonima, et consequences financieres.",
};

export default function AnnulationPage() {
  return (
    <LegalPageShell
      title="Conditions d'annulation"
      appLabel="Yonima - Conformite"
      version="1.0"
      lastUpdated="2026-10-13"
      otherVersions={[
        { href: "/legal/remboursement", label: "Conditions de remboursement" },
        { href: "/legal/retour", label: "Conditions de retour" },
        { href: "/legal/reclamations", label: "Politique de remboursement et reclamations" },
        { href: "/terms/client", label: "CGU/CGV Yonima Plus (Client) - §9" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Cycle de vie d'une Commande" },
        { id: "chapitre-2", label: "2. Annulation a l'initiative du Client" },
        { id: "chapitre-3", label: "3. Annulation par le Vendeur" },
        { id: "chapitre-4", label: "4. Annulation par Yonima" },
        { id: "chapitre-5", label: "5. Consequences financieres" },
        { id: "chapitre-6", label: "6. Comment annuler" },
      ]}
    >
      <p className="text-sm text-[#1F492E]/60 italic">
        Document valide en interne par le PO et les equipes Yonima. Une
        validation juridique externe par un avocat senegalais est prevue avant
        le lancement public V1.
      </p>

      <h2 id="preambule">Preambule</h2>
      <p>
        Les presentes <strong>Conditions d&apos;annulation</strong> precisent
        qui peut annuler une Commande passee via l&apos;application mobile{" "}
        <strong>Yonima</strong> (ci-apres l&apos;<strong>Application</strong>),
        editee par <strong>POULZZ - SUARL</strong>, a quel moment, et avec
        quelles consequences financieres.
      </p>
      <p>
        Le present document <strong>reprend et detaille</strong> le &sect;9 des{" "}
        <a href="/terms/client">CGU/CGV Yonima Plus (Client)</a>, qui demeure la
        source contractuelle de reference. En cas de divergence
        d&apos;interpretation, les CGU/CGV prevalent.
      </p>

      <h2 id="chapitre-1">1. Cycle de vie d&apos;une Commande</h2>
      <p>
        Une Commande passe par plusieurs etapes : constitution du Panier,
        confirmation et paiement par le Client, puis{" "}
        <strong>acceptation ou refus par le Vendeur</strong>, preparation,
        affectation a un Livreur et livraison. Les possibilites
        d&apos;annulation dependent de l&apos;etape atteinte, car une fois la
        preparation engagee, les produits concernes sont mobilises par le
        Vendeur.
      </p>

      <h2 id="chapitre-2">2. Annulation a l&apos;initiative du Client</h2>
      <p>
        Le Client peut demander l&apos;annulation de sa Commande{" "}
        <strong>avant acceptation par le Vendeur</strong>. Dans ce cas, les
        sommes encaissees par la Plateforme lui sont{" "}
        <strong>integralement remboursees</strong> selon les modalites des{" "}
        <a href="/legal/remboursement">conditions de remboursement</a>.
      </p>
      <p>
        <strong>Apres acceptation par le Vendeur</strong>, la Commande est
        engagee et la preparation peut avoir debute : l&apos;annulation
        n&apos;est plus de droit. Un <strong>simple changement d&apos;avis</strong>{" "}
        apres commande ne donne pas lieu a remboursement. Le Client peut
        neanmoins contacter le support, qui apprecie la situation au cas par cas
        avec le Vendeur.
      </p>

      <h2 id="chapitre-3">3. Annulation par le Vendeur</h2>
      <p>
        Le Vendeur peut <strong>refuser une Commande</strong> ou l&apos;annuler
        apres acceptation, notamment en cas de rupture de stock impossible a
        anticiper ou de fermeture imprevue. Lorsque la Commande a deja ete
        payee, le Client est <strong>integralement rembourse</strong>.
      </p>
      <p>
        Les obligations du Vendeur en matiere de delai de reponse et de refus de
        Commande sont detaillees dans les{" "}
        <a href="/terms/business">CGU Business (Vendeur)</a>.
      </p>

      <h2 id="chapitre-4">4. Annulation par Yonima</h2>
      <p>
        Yonima peut annuler une Commande dans les cas suivants :
      </p>
      <ul>
        <li><strong>Echec technique de prise en charge</strong> de la Commande.</li>
        <li><strong>Indisponibilite de Livreurs</strong> malgre nos meilleurs efforts.</li>
        <li><strong>Suspicion de fraude</strong> sur la Commande, le Compte ou le moyen de paiement, dans les conditions prevues par la <a href="/legal/securite-transactions">politique de securite des transactions</a> et la <a href="/legal/lcb-ft">politique LCB-FT</a>.</li>
        <li><strong>Manquement a la <a href="/legal/charte-utilisation">charte d&apos;utilisation responsable</a></strong>.</li>
      </ul>
      <p>
        Toute annulation a l&apos;initiative de Yonima portant sur une Commande
        payee donne lieu a un <strong>remboursement integral</strong>, sauf
        lorsque l&apos;annulation resulte d&apos;une fraude imputable au Client.
      </p>

      <h2 id="chapitre-5">5. Consequences financieres</h2>
      <ul>
        <li><strong>Annulation avant acceptation du Vendeur</strong> : remboursement integral des sommes encaissees par la Plateforme.</li>
        <li><strong>Annulation par le Vendeur ou par Yonima</strong> sur une Commande payee : remboursement integral.</li>
        <li><strong>Changement d&apos;avis du Client apres acceptation</strong> : pas de remboursement de droit (cf. <a href="/legal/remboursement">conditions de remboursement &sect;4</a>).</li>
        <li><strong>Client absent a la livraison sans motif valable</strong> ou <strong>adresse incorrecte fournie</strong> : pas de remboursement.</li>
      </ul>
      <p>
        Le moyen et le delai de restitution des sommes sont ceux decrits au{" "}
        <a href="/legal/remboursement">&sect;3 des conditions de remboursement</a>,
        et varient selon que le paiement a ete effectue par carte bancaire,
        par paiement mobile ou en especes.
      </p>

      <h2 id="chapitre-6">6. Comment annuler</h2>
      <p>
        Pour annuler une Commande ou signaler un probleme, le Client contacte le{" "}
        <strong>support Yonima sur WhatsApp</strong> en indiquant le{" "}
        <strong>numero de Commande</strong>. Les coordonnees sont accessibles
        depuis la page <a href="/support">Aide &amp; Support</a>.
      </p>
      <p>
        Toute demande de remboursement consecutive a une annulation suit la{" "}
        <a href="/legal/reclamations">procedure de reclamation</a>, dans le
        delai de <strong>48 heures</strong> qui y est prevu.
      </p>
    </LegalPageShell>
  );
}
