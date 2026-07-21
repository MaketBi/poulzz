import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Politique de securite des transactions - Yonima - Poulzz",
  description:
    "Politique de securite des transactions de Yonima : paiements, PSP agrees, carte bancaire 3D Secure et mesures anti-fraude.",
};

export default function SecuriteTransactionsPage() {
  return (
    <LegalPageShell
      title="Politique de securite des transactions"
      appLabel="Yonima - Conformite"
      version="1.0"
      lastUpdated="2026-07-21"
      otherVersions={[
        { href: "/legal/kyc", label: "Politique de connaissance client (KYC)" },
        { href: "/legal/lcb-ft", label: "Politique LCB-FT" },
        { href: "/legal/charte-utilisation", label: "Charte d'utilisation responsable" },
        { href: "/legal/mentions-legales", label: "Mentions legales" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Objet" },
        { id: "chapitre-2", label: "2. Principes de securite des paiements" },
        { id: "chapitre-3", label: "3. Recours a des PSP agrees" },
        { id: "chapitre-4", label: "4. Paiement par carte bancaire - checkout heberge et 3D Secure" },
        { id: "chapitre-5", label: "5. Chiffrement des echanges" },
        { id: "chapitre-6", label: "6. Authentification du Client" },
        { id: "chapitre-7", label: "7. Mesures anti-fraude" },
        { id: "chapitre-8", label: "8. Gestion des incidents, litiges et impayes" },
        { id: "chapitre-9", label: "9. Signalement d'une fraude par le Client" },
        { id: "chapitre-10", label: "10. Remboursements" },
        { id: "chapitre-11", label: "11. Repartition des responsabilites" },
        { id: "chapitre-12", label: "12. Revision" },
        { id: "chapitre-13", label: "13. Contact" },
      ]}
    >
      <p className="text-sm text-[#1F492E]/60 italic">
        Document valide en interne par le PO et les equipes Yonima. Une
        validation juridique externe par un avocat senegalais est prevue avant
        le lancement public V1.
      </p>

      <h2 id="preambule">Preambule</h2>
      <p>
        La presente Politique decrit les mesures mises en oeuvre par{" "}
        <strong>POULZZ - SUARL</strong> (ci-apres &laquo; <strong>Yonima</strong>{" "}
        &raquo; ou &laquo; <strong>Nous</strong> &raquo;), editrice de
        l&apos;application mobile Yonima (ci-apres l&apos;<strong>Application</strong>),
        pour assurer la <strong>securite des transactions</strong> realisees via
        l&apos;Application et proteger les Clients lors du paiement de leurs
        Commandes.
      </p>
      <p>
        Pour les informations legales detaillees de la societe (RCCM, NINEA,
        siege, gerant), se referer aux <a href="/legal/mentions-legales">mentions legales</a>.
        Les modalites de remboursement sont decrites dans les{" "}
        <a href="/terms">CGU/CGV (&sect;9)</a> et le traitement des donnees
        personnelles dans la <a href="/privacy">Politique de confidentialite</a>.
      </p>

      <h2 id="chapitre-1">1. Objet</h2>
      <p>La presente Politique a pour objet de preciser :</p>
      <ul>
        <li>les <strong>principes de securite</strong> applicables aux paiements realises sur l&apos;Application ;</li>
        <li>le <strong>role des prestataires de services de paiement (PSP)</strong> agrees ;</li>
        <li>les mesures <strong>anti-fraude</strong> et de protection des transactions ;</li>
        <li>la <strong>repartition des responsabilites</strong> entre le Client, Yonima et les PSP ;</li>
        <li>les modalites de <strong>signalement</strong> d&apos;une fraude par le Client.</li>
      </ul>

      <h2 id="chapitre-2">2. Principes de securite des paiements</h2>
      <p>
        Yonima applique les principes suivants a l&apos;ensemble des paiements
        realises via l&apos;Application :
      </p>
      <ul>
        <li><strong>Aucun paiement sans compte verifie</strong> : toute transaction est rattachee a un Compte identifie par un numero de telephone verifie par code OTP (cf. <a href="/legal/kyc">Politique KYC</a>).</li>
        <li><strong>Non-conservation des donnees sensibles de paiement</strong> : Yonima ne stocke aucune donnee de carte bancaire ni identifiant de paiement en clair.</li>
        <li><strong>Recours a des PSP agrees</strong> pour l&apos;encaissement et le traitement des flux financiers.</li>
        <li><strong>Chiffrement</strong> de l&apos;ensemble des echanges entre l&apos;Application et les serveurs.</li>
        <li><strong>Tracabilite</strong> de chaque transaction, rattachee nominativement au Compte a l&apos;origine de la Commande.</li>
      </ul>

      <h2 id="chapitre-3">3. Recours a des prestataires de services de paiement agrees</h2>
      <p>
        L&apos;encaissement et le traitement des paiements electroniques sont
        operes par des <strong>PSP agrees</strong>, notamment{" "}
        <strong>PayDunya</strong>, <strong>Wave</strong> et{" "}
        <strong>Orange Money / Maxit</strong>.
      </p>
      <p>
        Ces prestataires regules operent les <strong>controles bancaires</strong>{" "}
        et les <strong>obligations de conformite</strong> applicables aux flux
        qu&apos;ils traitent. Yonima s&apos;appuie sur leurs dispositifs de
        securite comme premiere ligne de controle des paiements.
      </p>
      <p>
        Les moyens de paiement <strong>mobile money</strong> (Wave, Orange Money
        / Maxit) constituent le <strong>canal principal</strong> de paiement sur
        l&apos;Application. Le paiement par <strong>carte bancaire</strong>{" "}
        constitue un <strong>canal secondaire</strong>, destine notamment aux
        Clients presents physiquement au Senegal ne disposant pas d&apos;un
        compte mobile money local (par exemple, membres de la diaspora en sejour
        ou touristes).
      </p>

      <h2 id="chapitre-4">4. Paiement par carte bancaire - checkout heberge et 3D Secure</h2>
      <p>
        Le paiement par <strong>carte bancaire</strong> est traite via un{" "}
        <strong>checkout heberge</strong> opere par le PSP{" "}
        <strong>PayDunya</strong>. Concretement :
      </p>
      <ul>
        <li>le Client est redirige vers une <strong>page de paiement securisee</strong> hebergee par le PSP ;</li>
        <li>la saisie des donnees de carte s&apos;effectue <strong>exclusivement</strong> sur cette page, hors de l&apos;environnement applicatif de Yonima ;</li>
        <li>le paiement est protege par le protocole d&apos;authentification renforcee <strong>3D Secure</strong>, qui confirme l&apos;identite du porteur de la carte aupres de sa banque.</li>
      </ul>

      <h3>4.1. Non-stockage des donnees de carte</h3>
      <p>
        Yonima <strong>ne collecte, ne traite et ne stocke aucune donnee de
        carte bancaire</strong> :
      </p>
      <ul>
        <li>pas de numero de carte (<strong>PAN</strong>) ;</li>
        <li>pas de cryptogramme visuel (<strong>CVV</strong>) ;</li>
        <li>pas de date d&apos;expiration ni de donnees d&apos;authentification.</li>
      </ul>
      <p>
        La <strong>conformite PCI-DSS</strong> relative au traitement des
        donnees de carte est <strong>portee par le PSP PayDunya</strong>, en sa
        qualite d&apos;acteur habilite a traiter ces donnees.
      </p>

      <h2 id="chapitre-5">5. Chiffrement des echanges</h2>
      <p>
        L&apos;ensemble des echanges entre l&apos;Application, les serveurs de
        Yonima et les PSP est <strong>chiffre</strong> au moyen des protocoles{" "}
        <strong>HTTPS / TLS</strong>. Les donnees sensibles cote Yonima (jetons,
        secrets techniques) sont protegees au repos conformement a la{" "}
        <a href="/privacy">Politique de confidentialite (&sect;8)</a>.
      </p>

      <h2 id="chapitre-6">6. Authentification du Client</h2>
      <p>
        L&apos;acces au Compte et l&apos;initiation d&apos;une transaction
        supposent une <strong>authentification</strong> du Client par{" "}
        <strong>code OTP</strong> transmis sur son numero de telephone verifie.
        Ce mecanisme, assorti de mesures de protection contre les abus (duree de
        validite limitee, nombre de tentatives plafonne, limitation de
        frequence), est decrit dans les <a href="/terms">CGU/CGV (&sect;3.2)</a>{" "}
        et la <a href="/legal/kyc">Politique KYC</a>.
      </p>
      <p>
        Toute Commande passee depuis un Compte est reputee provenir de son
        titulaire, sauf signalement immediat d&apos;un usage frauduleux (cf.
        article 9).
      </p>

      <h2 id="chapitre-7">7. Mesures anti-fraude</h2>
      <p>
        Yonima met en oeuvre plusieurs mesures destinees a prevenir la fraude sur
        les transactions :
      </p>
      <ul>
        <li><strong>Montant minimum de Commande</strong> de <strong>1 500 FCFA</strong>, faisant office de plancher ;</li>
        <li><strong>Seuil de vigilance</strong> de <strong>~100 000 FCFA</strong> au-dela duquel une attention renforcee est portee aux commandes groupees (cf. <a href="/legal/lcb-ft">Politique LCB-FT</a>) ;</li>
        <li><strong>Controles operes par les PSP</strong> sur les moyens de paiement et les flux ;</li>
        <li><strong>Authentification 3D Secure</strong> pour les paiements par carte bancaire ;</li>
        <li><strong>Rattachement nominatif</strong> de chaque paiement a un Compte verifie, assurant la tracabilite ;</li>
        <li><strong>Surveillance des transactions atypiques</strong> (montants inhabituels, frequence anormale, moyens de paiement suspects), conformement a la <a href="/legal/lcb-ft">Politique LCB-FT</a>.</li>
      </ul>
      <p>
        Ces mesures permettent, le cas echeant, la mise en attente d&apos;une
        transaction, la restriction temporaire de certaines fonctions ou la
        suspension d&apos;un Compte.
      </p>

      <h2 id="chapitre-8">8. Gestion des incidents, litiges et impayes</h2>

      <h3>8.1. Incidents de paiement</h3>
      <p>
        En cas d&apos;echec de paiement (refus operateur, solde insuffisant,
        expiration de la session, echec de l&apos;authentification 3D Secure), la
        Commande est <strong>annulee automatiquement</strong> et aucune somme
        n&apos;est due par le Client au titre de cette tentative.
      </p>

      <h3>8.2. Litiges et contestations (chargebacks)</h3>
      <p>
        En cas de <strong>contestation</strong> d&apos;une transaction par carte
        bancaire (&laquo; chargeback &raquo;) initiee aupres de la banque du
        Client, le traitement de la contestation releve des <strong>procedures
        du PSP</strong> et des regles bancaires applicables. Yonima coopere a
        l&apos;instruction de ces contestations en fournissant les elements de
        tracabilite utiles (reference de Commande, historique, statut de
        livraison).
      </p>

      <h3>8.3. Incidents de securite</h3>
      <p>
        En cas d&apos;incident de securite affectant les donnees personnelles
        associees aux transactions, Yonima applique les mesures et obligations de
        notification decrites dans la{" "}
        <a href="/privacy">Politique de confidentialite (&sect;8)</a>.
      </p>

      <h2 id="chapitre-9">9. Signalement d&apos;une fraude par le Client</h2>
      <p>
        Le Client qui constate une transaction suspecte, un debit non reconnu ou
        un usage frauduleux de son Compte doit en informer{" "}
        <strong>immediatement</strong> Yonima via le <strong>support WhatsApp</strong>{" "}
        (cf. coordonnees ci-dessous), et, s&apos;agissant d&apos;un paiement par
        carte, se rapprocher egalement de sa <strong>banque</strong>.
      </p>
      <p>
        Yonima procede alors aux verifications utiles et peut, a titre
        conservatoire, restreindre l&apos;acces au Compte ou aux fonctions de
        paiement le temps de l&apos;analyse.
      </p>

      <h2 id="chapitre-10">10. Remboursements</h2>
      <p>
        Les modalites de <strong>remboursement</strong> (cas ouvrant droit a
        remboursement, delais, moyen de remboursement) sont definies dans les{" "}
        <a href="/terms">CGU/CGV (&sect;9)</a>, auxquelles la presente Politique
        renvoie. En synthese, le Client beneficie d&apos;un <strong>remboursement
        integral</strong> en cas de refus, d&apos;annulation ou de non-conformite
        imputable a Yonima ou au Vendeur, sur reclamation formee dans les 48
        heures, le remboursement etant effectue vers le moyen de paiement
        d&apos;origine.
      </p>

      <h2 id="chapitre-11">11. Repartition des responsabilites</h2>
      <ul>
        <li><strong>Le Client</strong> est responsable de la confidentialite de l&apos;acces a son Compte, de l&apos;usage de ses moyens de paiement et du signalement immediat de toute anomalie.</li>
        <li><strong>Yonima</strong> est responsable de la securite de la Plateforme, du chiffrement des echanges, de l&apos;authentification par OTP et de la mise en oeuvre des mesures anti-fraude decrites ci-dessus, dans le cadre d&apos;une <strong>obligation de moyens</strong> (cf. <a href="/terms">CGU/CGV &sect;16</a>).</li>
        <li><strong>Les PSP</strong> (PayDunya, Wave, Orange Money / Maxit) sont responsables de l&apos;encaissement et du traitement securise des flux de paiement, ainsi que, pour PayDunya, de la <strong>conformite PCI-DSS</strong> relative aux donnees de carte bancaire.</li>
      </ul>

      <h2 id="chapitre-12">12. Revision</h2>
      <p>
        Yonima se reserve le droit de <strong>reviser</strong> la presente
        Politique a tout moment, notamment pour tenir compte de l&apos;evolution
        des moyens de paiement, des exigences des PSP ou du cadre reglementaire
        applicable. La version en vigueur, identifiee par un numero et une date,
        est consultable depuis l&apos;ecran <strong>A propos &gt; Legal</strong>{" "}
        de l&apos;Application.
      </p>

      <h2 id="chapitre-13">13. Contact</h2>
      <ul>
        <li><strong>Support et signalement de fraude</strong> : <a href="mailto:contact@poulzz.com">contact@poulzz.com</a> - WhatsApp +221 76 295 70 97</li>
        <li><strong>Adresse postale</strong> : POULZZ - SUARL, Bene Baraque, Ainoumady 2, Dakar 11000, Senegal</li>
      </ul>
    </LegalPageShell>
  );
}
