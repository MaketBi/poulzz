import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Types de services et produits vendus - Yonima - Poulzz",
  description:
    "Nature des services et des produits proposes sur Yonima : restauration et alimentaire livres a domicile, categories de produits, et produits et services exclus de la plateforme.",
};

export default function ProduitsServicesPage() {
  return (
    <LegalPageShell
      title="Types de services et produits vendus"
      appLabel="Yonima - Conformite"
      version="1.0"
      lastUpdated="2026-10-13"
      otherVersions={[
        { href: "/legal/remboursement", label: "Conditions de remboursement" },
        { href: "/legal/retour", label: "Conditions de retour" },
        { href: "/legal/annulation", label: "Conditions d'annulation" },
        { href: "/terms/client", label: "CGU/CGV Yonima Plus (Client)" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Nature du service Yonima" },
        { id: "chapitre-2", label: "2. Produits proposes a la vente" },
        { id: "chapitre-3", label: "3. Categories de produits" },
        { id: "chapitre-4", label: "4. Services associes" },
        { id: "chapitre-5", label: "5. Produits et services exclus" },
        { id: "chapitre-6", label: "6. Controle des Vendeurs et du catalogue" },
        { id: "chapitre-7", label: "7. Zone geographique" },
        { id: "chapitre-8", label: "8. Prix et devise" },
        { id: "chapitre-9", label: "9. Evolution du catalogue" },
      ]}
    >
      <p className="text-sm text-[#1F492E]/60 italic">
        Document valide en interne par le PO et les equipes Yonima. Une
        validation juridique externe par un avocat senegalais est prevue avant
        le lancement public V1.
      </p>

      <h2 id="preambule">Preambule</h2>
      <p>
        Le present document decrit la <strong>nature des services et des
        produits</strong> proposes via l&apos;application mobile{" "}
        <strong>Yonima</strong> (ci-apres l&apos;<strong>Application</strong>),
        editee par <strong>POULZZ - SUARL</strong> (ci-apres &laquo;{" "}
        <strong>Yonima</strong> &raquo; ou &laquo; <strong>Nous</strong> &raquo;).
      </p>
      <p>
        Il complete les <a href="/terms/client">CGU/CGV Yonima Plus (Client)</a>{" "}
        et les <a href="/terms/business">CGU Business (Vendeur)</a>, auxquelles
        il renvoie pour les definitions et les obligations contractuelles. Pour
        les informations legales de la societe (RCCM, NINEA, siege, gerant), se
        referer aux <a href="/legal/mentions-legales">mentions legales</a>.
      </p>

      <h2 id="chapitre-1">1. Nature du service Yonima</h2>
      <p>
        Yonima est une <strong>plateforme de mise en relation et de
        livraison</strong>. Yonima <strong>n&apos;est pas le vendeur</strong> des
        produits proposes : la vente est conclue entre le{" "}
        <strong>Client</strong> et le <strong>Vendeur</strong>, Yonima
        intervenant comme intermediaire technique, comme operateur de
        l&apos;encaissement et comme organisateur de la livraison.
      </p>
      <p>
        Le service repose sur trois applications distinctes : l&apos;application{" "}
        <strong>Client</strong> (commande), l&apos;application{" "}
        <strong>Vendeur</strong> (gestion du catalogue et des commandes) et
        l&apos;application <strong>Livreur</strong> (execution de la livraison).
      </p>

      <h2 id="chapitre-2">2. Produits proposes a la vente</h2>
      <p>
        Le catalogue Yonima est compose <strong>exclusivement de produits
        alimentaires</strong>, proposes par des <strong>restaurants et
        etablissements de restauration</strong> partenaires.
      </p>
      <p>
        Il s&apos;agit pour l&apos;essentiel de <strong>plats prepares</strong>{" "}
        et de produits alimentaires destines a une{" "}
        <strong>consommation immediate ou rapide</strong>, livres en circuit
        court dans un delai de quelques dizaines de minutes apres la commande.
      </p>

      <h2 id="chapitre-3">3. Categories de produits</h2>
      <p>
        Les produits du catalogue sont rattaches a un{" "}
        <strong>referentiel de categories</strong> tenu par Yonima :
      </p>
      <ul>
        <li><strong>Entrees</strong></li>
        <li><strong>Plats principaux</strong></li>
        <li><strong>Accompagnements</strong></li>
        <li><strong>Sauces</strong></li>
        <li><strong>Pain</strong></li>
        <li><strong>Petit-dejeuner</strong></li>
        <li><strong>Snacks</strong></li>
        <li><strong>Desserts</strong></li>
        <li><strong>Boissons</strong></li>
      </ul>
      <p>
        Le Vendeur rattache ses produits a ces categories. Yonima peut{" "}
        <strong>recategoriser</strong> un produit mal classe, dans les conditions
        prevues par les <a href="/terms/business">CGU Business &sect;4.4</a>.
      </p>

      <h2 id="chapitre-4">4. Services associes</h2>
      <p>
        Outre la mise en relation, Yonima fournit les services suivants :
      </p>
      <ul>
        <li><strong>Livraison a domicile</strong>, assuree par des Livreurs independants ou par les moyens propres du Vendeur selon le mode de livraison retenu.</li>
        <li><strong>Encaissement du paiement</strong> pour les paiements electroniques, via des prestataires de services de paiement agrees (cf. <a href="/legal/securite-transactions">politique de securite des transactions</a>).</li>
        <li><strong>Support client</strong> et traitement des reclamations (cf. <a href="/legal/reclamations">politique de remboursement et reclamations</a>).</li>
        <li><strong>Programme de fidelite</strong>, dans les conditions prevues par les <a href="/terms/client">CGU/CGV &sect;10</a>.</li>
      </ul>
      <p>
        Les frais applicables (frais de livraison, frais de service) sont
        affiches au Client <strong>avant la confirmation</strong> de sa commande.
      </p>
      <p>
        Le Client regle sa commande soit par <strong>paiement
        electronique</strong> (carte bancaire, Wave, Orange Money / Maxit), soit
        en <strong>especes a la livraison</strong>. Les moyens de paiement
        acceptes et leurs restrictions sont detailles aux{" "}
        <a href="/terms/client">CGU/CGV &sect;7</a>.
      </p>

      <h2 id="chapitre-5">5. Produits et services exclus</h2>
      <p>
        Les categories suivantes <strong>ne sont pas proposees</strong> sur
        Yonima, et leur mise en vente par un Vendeur constitue un manquement
        entrainant le <strong>retrait du produit</strong> et, le cas echeant, la{" "}
        <strong>suspension du compte Vendeur</strong> :
      </p>
      <ul>
        <li><strong>Medicaments et produits pharmaceutiques</strong>, soumis ou non a prescription medicale.</li>
        <li><strong>Produits du tabac</strong>, cigarettes electroniques et produits assimiles.</li>
        <li><strong>Armes</strong>, munitions et objets dangereux.</li>
        <li><strong>Produits stupefiants</strong> et substances illicites.</li>
        <li><strong>Jeux d&apos;argent</strong>, paris, loteries et jeux de hasard.</li>
        <li><strong>Contenus et produits pour adultes</strong>.</li>
        <li><strong>Produits dematerialises</strong> : recharges telephoniques, cartes prepayees, cartes-cadeaux, codes et abonnements numeriques, crypto-actifs.</li>
        <li><strong>Services financiers</strong> : transfert d&apos;argent, change manuel, vente de devises, credit et instruments monetaires.</li>
        <li><strong>Animaux vivants</strong>.</li>
        <li><strong>Produits contrefaits</strong> ou portant atteinte a des droits de propriete intellectuelle.</li>
        <li><strong>Tout produit dont la vente ou la livraison est interdite</strong> par la reglementation senegalaise applicable.</li>
      </ul>
      <p>
        Yonima ne propose par ailleurs <strong>aucune prestation de
        service</strong> autre que celles decrites au &sect;4 : la plateforme
        n&apos;intermedie ni services a la personne, ni prestations techniques,
        ni location de biens.
      </p>
      <p>
        Les comportements et usages interdits sur l&apos;Application sont par
        ailleurs enonces par la{" "}
        <a href="/legal/charte-utilisation">charte d&apos;utilisation responsable</a>.
      </p>

      <h2 id="chapitre-6">6. Controle des Vendeurs et du catalogue</h2>
      <p>
        Tout Vendeur fait l&apos;objet d&apos;une{" "}
        <strong>verification a l&apos;onboarding</strong> avant activation de son
        compte, dans les conditions prevues par la{" "}
        <a href="/legal/kyc">politique de connaissance client (KYC)</a>.
      </p>
      <p>
        Le Vendeur est <strong>responsable de l&apos;exactitude</strong> des
        informations publiees sur ses produits (denomination, composition, prix,
        disponibilite) et du respect de la reglementation applicable a son
        activite, notamment en matiere d&apos;<strong>hygiene et de securite
        alimentaire</strong>. Yonima peut <strong>retirer un produit</strong> ou{" "}
        <strong>suspendre un compte Vendeur</strong> en cas de manquement, dans
        les conditions des <a href="/terms/business">CGU Business</a>.
      </p>

      <h2 id="chapitre-7">7. Zone geographique</h2>
      <p>
        Le service est disponible dans les <strong>zones de livraison
        ouvertes</strong> par Yonima, au <strong>Senegal</strong>. La
        disponibilite d&apos;un Vendeur depend de la distance separant son
        etablissement de l&apos;adresse de livraison du Client. Les modalites
        sont precisees aux <a href="/terms/client">CGU/CGV &sect;4.2</a>.
      </p>

      <h2 id="chapitre-8">8. Prix et devise</h2>
      <p>
        Les prix sont affiches en <strong>francs CFA (XOF)</strong>, toutes taxes
        comprises. Ils sont fixes par le Vendeur, qui demeure libre de sa
        politique tarifaire. Les modalites de prix, de promotions et de
        modification figurent aux <a href="/terms/client">CGU/CGV &sect;6</a>.
      </p>

      <h2 id="chapitre-9">9. Evolution du catalogue</h2>
      <p>
        Yonima pourra <strong>elargir</strong> les categories de produits et de
        services proposes. Toute evolution fera l&apos;objet d&apos;une{" "}
        <strong>mise a jour du present document</strong>, identifiee par un
        numero de version et une date, ainsi que, le cas echeant, des politiques
        de conformite associees.
      </p>
    </LegalPageShell>
  );
}
