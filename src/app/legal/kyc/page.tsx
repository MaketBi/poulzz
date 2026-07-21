import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Politique de connaissance client (KYC) - Yonima - Poulzz",
  description:
    "Politique de connaissance client (KYC) de Yonima : identification des Utilisateurs, verification par OTP et niveaux de vigilance.",
};

export default function KycPage() {
  return (
    <LegalPageShell
      title="Politique de connaissance client (KYC)"
      appLabel="Yonima - Conformite"
      version="1.0"
      lastUpdated="2026-07-21"
      otherVersions={[
        { href: "/legal/lcb-ft", label: "Politique LCB-FT" },
        { href: "/legal/securite-transactions", label: "Politique de securite des transactions" },
        { href: "/legal/charte-utilisation", label: "Charte d'utilisation responsable" },
        { href: "/legal/mentions-legales", label: "Mentions legales" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Objet et champ d'application" },
        { id: "chapitre-2", label: "2. Cadre legal et de reference" },
        { id: "chapitre-3", label: "3. Identification du Client" },
        { id: "chapitre-4", label: "4. Pas de commande ni de paiement sans compte verifie" },
        { id: "chapitre-5", label: "5. Verification des Vendeurs a l'onboarding" },
        { id: "chapitre-6", label: "6. Niveaux de vigilance" },
        { id: "chapitre-7", label: "7. Conservation des donnees d'identification" },
        { id: "chapitre-8", label: "8. Motifs de refus, de suspension ou de cloture de Compte" },
        { id: "chapitre-9", label: "9. Mise a jour de la Politique" },
      ]}
    >
      <p className="text-sm text-[#1F492E]/60 italic">
        Document valide en interne par le PO et les equipes Yonima. Une
        validation juridique externe par un avocat senegalais est prevue avant
        le lancement public V1.
      </p>

      <h2 id="preambule">Preambule</h2>
      <p>
        La presente <strong>Politique de connaissance client</strong> (en
        anglais <em>Know Your Customer</em>, ci-apres &laquo;{" "}
        <strong>Politique KYC</strong> &raquo;) decrit les principes et les
        mesures mis en oeuvre par <strong>POULZZ - SUARL</strong> (ci-apres
        &laquo; <strong>Yonima</strong> &raquo; ou &laquo; <strong>Nous</strong>{" "}
        &raquo;), editrice de l&apos;application mobile Yonima (ci-apres
        l&apos;<strong>Application</strong>), pour identifier les Utilisateurs
        de l&apos;Application et prevenir les usages frauduleux ou illicites du
        service.
      </p>
      <p>
        Pour les informations legales detaillees de la societe (RCCM, NINEA,
        siege, gerant), se referer aux <a href="/legal/mentions-legales">mentions legales</a>.
        Le detail des traitements de donnees personnelles est decrit dans la{" "}
        <a href="/privacy">Politique de confidentialite</a>.
      </p>

      <h2 id="chapitre-1">1. Objet et champ d&apos;application</h2>

      <h3>1.1. Objet</h3>
      <p>La presente Politique KYC a pour objet de definir :</p>
      <ul>
        <li>les modalites d&apos;<strong>identification</strong> des Utilisateurs (Clients) de l&apos;Application ;</li>
        <li>le <strong>principe de verification prealable</strong> conditionnant l&apos;acces aux fonctions de commande et de paiement ;</li>
        <li>les <strong>niveaux de vigilance</strong> appliques selon la nature des transactions ;</li>
        <li>les <strong>motifs</strong> de refus, de suspension ou de cloture d&apos;un Compte.</li>
      </ul>

      <h3>1.2. Champ d&apos;application</h3>
      <p>
        La presente Politique s&apos;applique a <strong>tout Utilisateur</strong>{" "}
        creant un Compte sur l&apos;Application en vue de passer des Commandes.
        Elle concerne egalement, dans une mesure adaptee, la verification des{" "}
        <strong>Vendeurs</strong> partenaires lors de leur onboarding (cf.
        article 5).
      </p>
      <p>
        La presente Politique est centree sur le <strong>Client</strong>,
        principal utilisateur du service de commande et de paiement.
      </p>

      <h2 id="chapitre-2">2. Cadre legal et de reference</h2>
      <p>La presente Politique KYC s&apos;inscrit dans le cadre :</p>
      <ul>
        <li>de la <strong>loi senegalaise n&deg; 2008-12 du 25 janvier 2008</strong> sur la protection des donnees a caractere personnel, qui encadre la collecte et le traitement des donnees d&apos;identification ;</li>
        <li>de la reglementation <strong>UEMOA / BCEAO</strong> en vigueur au Senegal en matiere de lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB-FT), declinee dans la <a href="/legal/lcb-ft">Politique de lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB-FT)</a> de Yonima ;</li>
        <li>des recommandations de la <strong>Commission de Protection des Donnees Personnelles (CDP) du Senegal</strong>.</li>
      </ul>
      <p>
        La collecte des donnees d&apos;identification est limitee a ce qui est{" "}
        <strong>strictement necessaire</strong> aux finalites poursuivies,
        conformement au principe de minimisation des donnees.
      </p>

      <h2 id="chapitre-3">3. Identification du Client</h2>

      <h3>3.1. Donnees d&apos;identification collectees</h3>
      <p>
        Lors de la creation de son Compte, le Client fournit les donnees
        d&apos;identification suivantes :
      </p>
      <ul>
        <li><strong>Numero de telephone</strong> (obligatoire), qui constitue l&apos;identifiant principal du Compte ;</li>
        <li><strong>Nom</strong> (et, le cas echeant, prenom) ;</li>
        <li><strong>Adresse(s) de livraison</strong> renseignee(s) par le Client.</li>
      </ul>
      <p>
        L&apos;adresse email est <strong>optionnelle</strong>. Aucune donnee
        bancaire ni aucun document d&apos;identite officiel n&apos;est collecte
        par Yonima dans le cadre du fonctionnement standard de l&apos;Application
        (cf. article 4 pour la verification et article 6 pour la vigilance
        renforcee).
      </p>

      <h3>3.2. Verification du numero de telephone par code OTP</h3>
      <p>
        L&apos;identite declarative du Client est <strong>verifiee</strong> par
        l&apos;envoi d&apos;un <strong>code a usage unique (OTP)</strong>{" "}
        transmis par SMS (ou message equivalent) sur le numero de telephone
        renseigne. Le Client doit saisir ce code pour finaliser la creation de
        son Compte et pour toute connexion ulterieure.
      </p>
      <p>Ce mecanisme garantit que :</p>
      <ul>
        <li>le Client est effectivement <strong>titulaire du numero</strong> de telephone associe au Compte ;</li>
        <li>le Compte est <strong>rattache de maniere unique</strong> a un numero verifie.</li>
      </ul>
      <p>
        Les modalites techniques de l&apos;OTP (duree de validite, nombre de
        tentatives, protection contre les abus) sont decrites dans les{" "}
        <a href="/terms">CGU/CGV (&sect;3.2)</a> et la{" "}
        <a href="/legal/securite-transactions">Politique de securite des transactions</a>.
      </p>

      <h3>3.3. Exactitude et mise a jour des donnees</h3>
      <p>
        Le Client s&apos;engage a fournir des <strong>informations exactes et a
        jour</strong> et a les corriger si necessaire. Yonima peut demander la
        mise a jour ou la confirmation de ces informations lorsque des elements
        objectifs le justifient.
      </p>

      <h2 id="chapitre-4">4. Principe : pas de commande ni de paiement sans compte verifie</h2>
      <p>
        Aucune Commande et aucun paiement ne peuvent etre realises sur
        l&apos;Application sans un <strong>Compte prealablement cree et
        verifie</strong> par code OTP.
      </p>
      <p>En pratique :</p>
      <ul>
        <li>l&apos;acces aux fonctions de commande et de paiement est <strong>conditionne</strong> a la verification du numero de telephone ;</li>
        <li>le paiement est <strong>nominativement rattache</strong> au Compte verifie a l&apos;origine de la Commande ;</li>
        <li>ce rattachement permet la <strong>tracabilite</strong> de chaque transaction et constitue la premiere mesure de vigilance a l&apos;egard du Client.</li>
      </ul>
      <p>
        Ce principe est <strong>non negociable</strong> et s&apos;applique a
        l&apos;ensemble des moyens de paiement proposes par l&apos;Application
        (mobile money, carte bancaire, especes a la livraison lorsque le Vendeur
        l&apos;accepte).
      </p>

      <h2 id="chapitre-5">5. Verification des Vendeurs a l&apos;onboarding</h2>
      <p>
        Les <strong>Vendeurs</strong> (restaurants partenaires en V1) font
        l&apos;objet d&apos;une <strong>verification prealable</strong> au
        moment de leur integration sur l&apos;Application (onboarding), avant
        activation de leur fiche et de leur capacite a recevoir des Commandes.
      </p>
      <p>Cette verification porte notamment sur :</p>
      <ul>
        <li>les <strong>informations d&apos;entreprise</strong> du Vendeur (denomination, coordonnees, activite) ;</li>
        <li>l&apos;<strong>identite du responsable</strong> de l&apos;etablissement.</li>
      </ul>
      <p>
        Un Vendeur dont les informations ne peuvent etre verifiees, ou dont
        l&apos;activite est manifestement incompatible avec les regles de
        l&apos;Application, n&apos;est <strong>pas active</strong>. Yonima peut a
        tout moment demander une mise a jour de ces informations et suspendre un
        Vendeur qui ne s&apos;y conforme pas.
      </p>
      <p>
        Le perimetre de la presente Politique restant centre sur le Client, les
        modalites contractuelles applicables aux Vendeurs sont regies par les
        conditions partenaires qui leur sont propres.
      </p>

      <h2 id="chapitre-6">6. Niveaux de vigilance</h2>
      <p>
        Yonima applique une <strong>approche par les risques</strong>, en
        modulant l&apos;intensite de la vigilance selon la nature des
        transactions.
      </p>

      <h3>6.1. Vigilance standard</h3>
      <p>
        Pour la tres grande majorite des Commandes - d&apos;un montant compris
        entre le <strong>minimum de 1 500 FCFA</strong> et un niveau usuel au
        regard du panier moyen - la vigilance repose sur :
      </p>
      <ul>
        <li>l&apos;<strong>identification</strong> du Client par numero verifie (OTP) ;</li>
        <li>le <strong>rattachement nominatif</strong> de chaque paiement au Compte ;</li>
        <li>les controles operes par les <strong>prestataires de services de paiement (PSP)</strong> agrees lors du traitement des flux.</li>
      </ul>

      <h3>6.2. Vigilance renforcee</h3>
      <p>
        Une <strong>vigilance renforcee</strong> peut etre declenchee en
        presence de transactions ou de comportements atypiques, notamment :
      </p>
      <ul>
        <li>des montants de commande <strong>inhabituellement eleves</strong> au regard du panier moyen, en particulier a l&apos;approche du plafond de vigilance de <strong>~100 000 FCFA</strong> applique aux commandes groupees ;</li>
        <li>une <strong>frequence anormale</strong> de commandes ou de tentatives de paiement ;</li>
        <li>des <strong>incoherences</strong> repetees entre les donnees declarees et l&apos;usage reel du Compte ;</li>
        <li>l&apos;utilisation de <strong>moyens de paiement presentant un risque</strong> ou signales comme suspects par un PSP.</li>
      </ul>
      <p>
        Dans ces cas, Yonima peut mettre en oeuvre des mesures proportionnees :
        demande d&apos;informations complementaires, mise en attente d&apos;une
        transaction, restriction temporaire de certaines fonctions, ou
        transmission du dossier au dispositif de vigilance decrit dans la{" "}
        <a href="/legal/lcb-ft">Politique LCB-FT</a>.
      </p>

      <h2 id="chapitre-7">7. Conservation des donnees d&apos;identification</h2>
      <p>
        Les donnees d&apos;identification collectees dans le cadre de la
        presente Politique sont conservees pendant les durees decrites dans la{" "}
        <a href="/privacy">Politique de confidentialite</a>, dans le respect des
        obligations comptables, fiscales et de lutte anti-fraude applicables.
      </p>
      <p>
        Yonima ne conserve <strong>aucune donnee de carte bancaire</strong> ni
        aucun identifiant de paiement en clair : ces elements sont traites
        exclusivement par les PSP partenaires (cf.{" "}
        <a href="/legal/securite-transactions">Politique de securite des transactions</a>).
      </p>

      <h2 id="chapitre-8">8. Motifs de refus, de suspension ou de cloture de Compte</h2>
      <p>
        Yonima peut <strong>refuser</strong> la creation d&apos;un Compte,{" "}
        <strong>suspendre</strong> ou <strong>cloturer</strong> un Compte
        existant, sans que cela n&apos;ouvre droit a compensation, dans les cas
        suivants :
      </p>
      <ul>
        <li><strong>impossibilite de verifier</strong> le numero de telephone (echec persistant de l&apos;OTP) ;</li>
        <li>fourniture d&apos;informations <strong>manifestement fausses</strong> ou d&apos;une identite usurpee ;</li>
        <li><strong>soupcon serieux de fraude</strong> au paiement ou d&apos;usage de moyens de paiement frauduleux ;</li>
        <li>transactions <strong>atypiques non justifiees</strong> malgre une demande d&apos;information ;</li>
        <li><strong>multiplication abusive de Comptes</strong> pour un meme Client ;</li>
        <li><strong>manquement grave ou repete</strong> aux CGU/CGV ou a la <a href="/legal/charte-utilisation">Charte d&apos;utilisation responsable</a>.</li>
      </ul>
      <p>
        Les consequences operationnelles de la suspension ou de la resiliation
        d&apos;un Compte (Commandes en cours, donnees conservees) sont precisees
        dans les <a href="/terms">CGU/CGV (&sect;3.5)</a>.
      </p>

      <h2 id="chapitre-9">9. Mise a jour de la Politique</h2>
      <p>
        Yonima se reserve le droit de <strong>modifier</strong> la presente
        Politique KYC a tout moment, notamment pour tenir compte de
        l&apos;evolution de la reglementation UEMOA/BCEAO, des recommandations de
        la CDP ou des moyens de paiement proposes.
      </p>
      <p>
        La version en vigueur, identifiee par un numero et une date, est
        consultable depuis l&apos;ecran <strong>A propos &gt; Legal</strong> de
        l&apos;Application. Toute modification substantielle est portee a la
        connaissance des Utilisateurs conformement aux modalites prevues par les
        CGU/CGV.
      </p>
    </LegalPageShell>
  );
}
