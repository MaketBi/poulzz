import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Politique LCB-FT - Yonima - Poulzz",
  description:
    "Politique de lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB-FT) de Yonima.",
};

export default function LcbFtPage() {
  return (
    <LegalPageShell
      title="Politique de lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB-FT)"
      appLabel="Yonima - Conformite"
      version="1.0"
      lastUpdated="2026-07-21"
      otherVersions={[
        { href: "/legal/kyc", label: "Politique de connaissance client (KYC)" },
        { href: "/legal/securite-transactions", label: "Politique de securite des transactions" },
        { href: "/legal/charte-utilisation", label: "Charte d'utilisation responsable" },
        { href: "/legal/mentions-legales", label: "Mentions legales" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Engagement de Yonima" },
        { id: "chapitre-2", label: "2. Cadre reglementaire" },
        { id: "chapitre-3", label: "3. Role de Yonima comme operateur de plateforme" },
        { id: "chapitre-4", label: "4. Recours a des PSP agrees" },
        { id: "chapitre-5", label: "5. Mesures de vigilance a l'egard du Client (KYC)" },
        { id: "chapitre-6", label: "6. Surveillance des transactions atypiques" },
        { id: "chapitre-7", label: "7. Gel, blocage et signalement" },
        { id: "chapitre-8", label: "8. Cooperation avec les autorites" },
        { id: "chapitre-9", label: "9. Referent conformite" },
        { id: "chapitre-10", label: "10. Conservation des enregistrements" },
        { id: "chapitre-11", label: "11. Formation et sensibilisation" },
        { id: "chapitre-12", label: "12. Revision de la Politique" },
      ]}
    >
      <p className="text-sm text-[#1F492E]/60 italic">
        Document valide en interne par le PO et les equipes Yonima. Une
        validation juridique externe par un avocat senegalais est prevue avant
        le lancement public V1.
      </p>

      <h2 id="preambule">Preambule</h2>
      <p>
        La presente Politique decrit l&apos;engagement et les mesures de{" "}
        <strong>POULZZ - SUARL</strong> (ci-apres &laquo; <strong>Yonima</strong>{" "}
        &raquo; ou &laquo; <strong>Nous</strong> &raquo;), editrice de
        l&apos;application mobile Yonima (ci-apres l&apos;<strong>Application</strong>),
        en matiere de <strong>lutte contre le blanchiment de capitaux et le
        financement du terrorisme</strong> (ci-apres &laquo;{" "}
        <strong>LCB-FT</strong> &raquo;).
      </p>
      <p>
        Pour les informations legales detaillees de la societe (RCCM, NINEA,
        siege, gerant), se referer aux <a href="/legal/mentions-legales">mentions legales</a>.
        Les mesures d&apos;identification des Utilisateurs sont detaillees dans la{" "}
        <a href="/legal/kyc">Politique de connaissance client (KYC)</a>, et le
        traitement des donnees personnelles dans la{" "}
        <a href="/privacy">Politique de confidentialite</a>.
      </p>

      <h2 id="chapitre-1">1. Engagement de Yonima</h2>
      <p>
        Yonima s&apos;engage a ce que l&apos;Application ne soit <strong>pas
        utilisee</strong> a des fins de blanchiment de capitaux, de financement
        du terrorisme ou de toute autre operation illicite.
      </p>
      <p>A cette fin, Yonima :</p>
      <ul>
        <li>met en oeuvre des mesures d&apos;<strong>identification</strong> et de <strong>vigilance</strong> proportionnees a son activite ;</li>
        <li>s&apos;appuie sur des <strong>prestataires de services de paiement (PSP) agrees</strong> qui operent les controles bancaires et la conformite des flux financiers ;</li>
        <li>surveille les <strong>transactions atypiques</strong> susceptibles de reveler un usage anormal du service ;</li>
        <li><strong>coopere</strong> avec les autorites competentes dans les conditions prevues par la loi.</li>
      </ul>

      <h2 id="chapitre-2">2. Cadre reglementaire</h2>
      <p>
        La presente Politique s&apos;inscrit dans le cadre de la reglementation
        applicable au Senegal en matiere de LCB-FT, notamment la reglementation{" "}
        <strong>UEMOA / BCEAO</strong> transposee en droit senegalais.
      </p>
      <p>
        Yonima applique cette reglementation de maniere <strong>prudente et
        proportionnee</strong> a la nature de son activite - une plateforme de
        mise en relation et de livraison de repas - et aux montants en jeu, qui
        restent limites au regard des seuils habituellement retenus pour les
        operations a risque.
      </p>
      <p>
        La presente Politique s&apos;articule avec la{" "}
        <a href="/legal/kyc">Politique KYC</a> de Yonima et avec les obligations
        de conformite portees par les PSP partenaires.
      </p>

      <h2 id="chapitre-3">3. Role de Yonima comme operateur de plateforme</h2>
      <p>
        Yonima est un <strong>operateur de plateforme de mise en relation</strong>{" "}
        entre des Clients et des Vendeurs (restaurants partenaires), assortie
        d&apos;un service de livraison. Yonima <strong>n&apos;est pas un
        etablissement financier</strong> et <strong>n&apos;exerce pas
        d&apos;activite de teneur de compte de paiement</strong>.
      </p>
      <p>A ce titre :</p>
      <ul>
        <li>Yonima <strong>ne detient pas</strong> de fonds pour le compte de tiers en dehors du strict traitement des Commandes ;</li>
        <li>Yonima <strong>ne manipule ni ne stocke</strong> de donnees de carte bancaire ou d&apos;identifiants de paiement en clair ;</li>
        <li>l&apos;<strong>encaissement</strong> et le <strong>reglement</strong> des flux de paiement electroniques sont operes par des <strong>PSP agrees</strong>.</li>
      </ul>
      <p>
        Le role de Yonima consiste a appliquer des mesures de{" "}
        <strong>connaissance client</strong> et de <strong>vigilance sur les
        transactions</strong> au niveau de la Plateforme, en complement des
        controles reglementaires assures par les PSP.
      </p>

      <h2 id="chapitre-4">4. Recours a des prestataires de services de paiement agrees</h2>
      <p>
        Les paiements electroniques realises via l&apos;Application sont operes
        par des <strong>PSP agrees</strong>, notamment :
      </p>
      <ul>
        <li><strong>PayDunya</strong>, prestataire technique qui traite notamment les paiements par <strong>carte bancaire</strong> (via un checkout heberge securise) ainsi que certains flux mobile money ;</li>
        <li><strong>Wave</strong> (mobile money) ;</li>
        <li><strong>Orange Money / Maxit</strong> (mobile money).</li>
      </ul>
      <p>
        Ces prestataires, en leur qualite d&apos;acteurs regules, operent les{" "}
        <strong>controles bancaires</strong> et les <strong>obligations de
        conformite</strong> applicables aux flux financiers qu&apos;ils traitent
        (verifications relatives aux moyens de paiement, detection des operations
        frauduleuses, dispositifs LCB-FT propres a leur statut).
      </p>
      <p>
        Yonima s&apos;appuie sur ces dispositifs comme <strong>premiere ligne de
        controle</strong> des flux de paiement, tout en conservant une vigilance
        propre au niveau de la Plateforme.
      </p>

      <h2 id="chapitre-5">5. Mesures de vigilance a l&apos;egard du Client (KYC)</h2>
      <p>
        La connaissance du Client constitue la mesure de vigilance de premier
        niveau. Elle repose sur :
      </p>
      <ul>
        <li>l&apos;<strong>identification</strong> du Client par un numero de telephone <strong>verifie par code OTP</strong> ;</li>
        <li>le principe <strong>&laquo; pas de commande ni de paiement sans compte verifie &raquo;</strong> ;</li>
        <li>le <strong>rattachement nominatif</strong> de chaque paiement au Compte a l&apos;origine de la transaction.</li>
      </ul>
      <p>
        L&apos;ensemble de ces mesures est decrit dans la{" "}
        <a href="/legal/kyc">Politique de connaissance client (KYC)</a>, a
        laquelle la presente Politique renvoie.
      </p>

      <h2 id="chapitre-6">6. Surveillance des transactions atypiques</h2>
      <p>
        Yonima met en oeuvre une surveillance proportionnee destinee a detecter
        les <strong>transactions atypiques</strong>, c&apos;est-a-dire les
        operations qui s&apos;ecartent de l&apos;usage normal du service.
        Constituent notamment des signaux de vigilance :
      </p>
      <ul>
        <li>des <strong>montants inhabituels</strong> au regard du panier moyen, en particulier a l&apos;approche du plafond de vigilance de <strong>~100 000 FCFA</strong> applique aux commandes groupees ;</li>
        <li>une <strong>frequence anormale</strong> de commandes ou de tentatives de paiement sur un meme Compte ou depuis un meme appareil ;</li>
        <li>l&apos;utilisation de <strong>moyens de paiement suspects</strong> ou signales comme tels par un PSP (par exemple, indices de moyen de paiement frauduleux ou vole) ;</li>
        <li>des <strong>incoherences</strong> repetees entre les informations declarees et l&apos;usage reel du Compte ;</li>
        <li>des schemas manifestement destines a <strong>fractionner</strong> artificiellement des operations.</li>
      </ul>
      <p>
        Le <strong>montant minimum de commande de 1 500 FCFA</strong> et le{" "}
        <strong>seuil de vigilance de ~100 000 FCFA</strong> constituent des
        reperes operationnels encadrant la detection des operations a risque.
      </p>

      <h2 id="chapitre-7">7. Gel, blocage et signalement</h2>
      <p>
        Lorsqu&apos;une transaction ou un Compte presente un <strong>risque
        serieux</strong> au regard de la LCB-FT, Yonima peut, de maniere
        proportionnee :
      </p>
      <ul>
        <li><strong>mettre en attente</strong> ou <strong>bloquer</strong> une transaction en cours ;</li>
        <li><strong>suspendre</strong> ou <strong>cloturer</strong> le Compte concerne (cf. <a href="/terms">CGU/CGV &sect;3.5</a> et <a href="/legal/kyc">Politique KYC</a>) ;</li>
        <li><strong>conserver</strong> les elements utiles a l&apos;analyse du dossier.</li>
      </ul>
      <p>
        En presence d&apos;un soupcon caracterise, Yonima procede aux{" "}
        <strong>signalements</strong> requis aupres des <strong>autorites
        competentes</strong>, conformement a la reglementation UEMOA/BCEAO et
        senegalaise applicable. Les PSP partenaires effectuent, pour leur part,
        les declarations relevant de leurs propres obligations.
      </p>

      <h2 id="chapitre-8">8. Cooperation avec les autorites</h2>
      <p>
        Yonima <strong>coopere</strong> avec les autorites judiciaires,
        administratives et de controle competentes dans le cadre de leurs
        missions, et repond aux demandes legales dument justifiees qui lui sont
        adressees.
      </p>
      <p>
        Les communications de donnees a ces autorites s&apos;effectuent dans le
        respect de la <a href="/privacy">Politique de confidentialite</a> et de
        la loi senegalaise n&deg; 2008-12 sur la protection des donnees a
        caractere personnel.
      </p>

      <h2 id="chapitre-9">9. Referent conformite</h2>
      <p>
        Yonima designe un <strong>referent conformite</strong> charge de
        superviser la mise en oeuvre de la presente Politique, de traiter les
        alertes de vigilance et d&apos;assurer la relation avec les autorites
        competentes.
      </p>
      <p>
        En V1, cette fonction est assuree par defaut par le <strong>gerant,
        Mamadou Diop</strong>. Un referent dedie pourra etre designe des que le
        volume d&apos;activite le justifiera.
      </p>

      <h2 id="chapitre-10">10. Conservation des enregistrements</h2>
      <p>
        Yonima conserve les <strong>enregistrements</strong> relatifs aux
        mesures de vigilance et aux transactions (notamment les donnees
        d&apos;identification et l&apos;historique des Commandes) pendant les
        durees prevues par la <a href="/privacy">Politique de confidentialite</a>{" "}
        et par les obligations legales applicables, afin de permettre les
        controles et de repondre aux demandes des autorites.
      </p>

      <h2 id="chapitre-11">11. Formation et sensibilisation</h2>
      <p>
        Yonima veille a la <strong>sensibilisation</strong> des membres de son
        equipe amenes a traiter les Commandes, les paiements et les alertes, afin
        qu&apos;ils sachent identifier et remonter les situations atypiques. Le
        niveau de formation est adapte a la taille de l&apos;equipe et a
        l&apos;evolution de l&apos;activite.
      </p>

      <h2 id="chapitre-12">12. Revision de la Politique</h2>
      <p>
        Yonima se reserve le droit de <strong>reviser</strong> la presente
        Politique a tout moment, notamment pour tenir compte de l&apos;evolution
        de la reglementation UEMOA/BCEAO applicable au Senegal, des exigences des
        PSP partenaires ou de l&apos;evolution de son activite.
      </p>
      <p>
        La version en vigueur, identifiee par un numero et une date, est
        conservee par POULZZ - SUARL et, le cas echeant, mise a disposition des
        autorites et partenaires concernes.
      </p>
    </LegalPageShell>
  );
}
