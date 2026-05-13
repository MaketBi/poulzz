import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "CGU/CGV - Yonima Plus (Client) - Poulzz",
  description:
    "Conditions Generales d'Utilisation et de Vente applicables aux clients utilisant l'application Yonima Plus.",
};

export default function TermsClientPage() {
  return (
    <LegalPageShell
      title="Conditions Generales d'Utilisation et de Vente"
      appLabel="Yonima Plus - Client"
      version="1.1"
      lastUpdated="2026-05-12"
      otherVersions={[
        { href: "/terms/business", label: "CGU - Yonima Business (Vendeur)" },
        { href: "/terms/rider", label: "CGU - Yonima Rider (Livreur)" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Definitions" },
        { id: "chapitre-2", label: "2. Acceptation et modification des CGU/CGV" },
        { id: "chapitre-3", label: "3. Compte utilisateur" },
        { id: "chapitre-4", label: "4. Service Yonima" },
        { id: "chapitre-5", label: "5. Commandes" },
        { id: "chapitre-6", label: "6. Prix" },
        { id: "chapitre-7", label: "7. Paiement" },
        { id: "chapitre-8", label: "8. Livraison" },
        { id: "chapitre-9", label: "9. Annulations, retours et remboursements" },
        { id: "chapitre-10", label: "10. Programme de fidelite" },
        { id: "chapitre-11", label: "11. Sponsorings et Vendeurs mis en avant" },
        { id: "chapitre-12", label: "12. Protection des donnees personnelles" },
        { id: "chapitre-13", label: "13. Geolocalisation et permissions systeme" },
        { id: "chapitre-14", label: "14. Propriete intellectuelle" },
        { id: "chapitre-15", label: "15. Comportement de l'Utilisateur et lutte anti-fraude" },
        { id: "chapitre-16", label: "16. Responsabilite" },
        { id: "chapitre-17", label: "17. Force majeure" },
        { id: "chapitre-18", label: "18. Litiges et droit applicable" },
        { id: "chapitre-19", label: "19. Dispositions generales" },
        { id: "chapitre-20", label: "20. Contact" },
      ]}
    >
      <h2 id="preambule">Preambule</h2>
      <p>
        Les presentes <strong>Conditions Generales d&apos;Utilisation et de Vente</strong>{" "}
        (ci-apres les &laquo; <strong>CGU/CGV</strong> &raquo; ou &laquo;{" "}
        <strong>Conditions</strong> &raquo;) regissent l&apos;utilisation de
        l&apos;application mobile <strong>Yonima Plus</strong> (ci-apres
        l&apos;<strong>Application</strong>), editee par <strong>POULZZ -
        SUARL</strong>, societe senegalaise dont les informations legales
        detaillees (RCCM, NINEA, siege social, capital, gerant, hebergeur) sont
        disponibles dans les <a href="/legal">mentions legales</a>.
      </p>
      <p>
        <strong>Contact rapide</strong> :
      </p>
      <ul>
        <li>Email support : <a href="mailto:contact@poulzz.com">contact@poulzz.com</a></li>
        <li>WhatsApp support : +221 76 295 70 97</li>
      </ul>
      <p>
        L&apos;Application met en relation des <strong>Utilisateurs</strong>{" "}
        (clients finaux) souhaitant commander des produits avec des{" "}
        <strong>etablissements partenaires</strong> (restaurants V1, a terme
        epiceries et autres commerces) situes a <strong>Dakar et sa proche
        banlieue (Senegal)</strong>, et organise la <strong>livraison</strong>{" "}
        des commandes via un reseau de livreurs.
      </p>
      <p>
        L&apos;utilisation de l&apos;Application implique l&apos;<strong>acceptation
        pleine et entiere</strong> des presentes CGU/CGV. A defaut d&apos;acceptation,
        l&apos;utilisateur doit s&apos;abstenir d&apos;utiliser l&apos;Application.
      </p>

      <h2 id="chapitre-1">1. Definitions</h2>
      <ul>
        <li><strong>Application</strong> : l&apos;application mobile &laquo; Yonima Plus &raquo;, disponible sur Android (Google Play) et iOS (App Store), ainsi que tout site web associe.</li>
        <li><strong>Yonima / Nous / la Plateforme</strong> : Poulzz / Yonima, l&apos;editeur de l&apos;Application et l&apos;operateur du service de mise en relation et de livraison.</li>
        <li><strong>Utilisateur</strong> / <strong>Client</strong> : toute personne physique majeure ayant cree un Compte sur l&apos;Application pour passer des Commandes.</li>
        <li><strong>Vendor</strong> / <strong>Restaurant</strong> / <strong>Vendeur</strong> : un etablissement partenaire reference sur l&apos;Application qui prepare et vend les produits commandes par les Clients via la Plateforme.</li>
        <li><strong>Livreur</strong> : personne physique ou morale chargee du transport des Commandes du Vendeur au Client. Yonima opere un <strong>pool</strong> de Livreurs (livraisons auto-dispatchees) ; certains Vendeurs disposent par ailleurs de leurs propres livreurs internes.</li>
        <li><strong>Commande</strong> : ensemble de produits selectionnes par le Client aupres d&apos;<strong>un seul Vendeur</strong> a un instant donne, payes et destines a etre livres a l&apos;adresse renseignee.</li>
        <li><strong>Panier</strong> : preparation d&apos;une Commande avant validation. Un Panier ne peut contenir des produits que d&apos;<strong>un seul Vendeur a la fois</strong>.</li>
        <li><strong>Compte</strong> : espace personnel de l&apos;Utilisateur dans l&apos;Application, accessible apres authentification par numero de telephone via OTP.</li>
        <li><strong>Livraison</strong> : remise physique de la Commande au Client a l&apos;adresse qu&apos;il a indiquee.</li>
        <li><strong>Pool only</strong> : mode de fonctionnement de Vendeur ou seul le pool Yonima assure la livraison. Les Vendeurs en mode <code>pool_only</code> n&apos;acceptent <strong>pas</strong> le paiement en especes (voir &sect;7.2).</li>
        <li><strong>Zone de livraison</strong> : perimetre geographique dans lequel les Vendeurs et Livreurs assurent la livraison. <strong>V1</strong> : agglomeration de Dakar (Pikine, Guediawaye, Rufisque, Keur Massar, Thiaroye et certains quartiers limitrophes).</li>
      </ul>

      <h2 id="chapitre-2">2. Acceptation et modification des CGU/CGV</h2>

      <h3>2.1. Acceptation initiale</h3>
      <p>
        Lors de la creation de son Compte (telephone + OTP - voir &sect;3),
        l&apos;Utilisateur valide explicitement les presentes Conditions. Sans
        cette validation, l&apos;inscription ne peut pas etre finalisee.
      </p>

      <h3>2.2. Modifications</h3>
      <p>
        Yonima se reserve le droit de modifier a tout moment les presentes
        CGU/CGV.
      </p>
      <ul>
        <li>Les modifications <strong>substantielles</strong> (paiement, remboursement, donnees personnelles) sont notifiees a l&apos;Utilisateur <strong>au moins 15 jours</strong> avant leur entree en vigueur, par notification push et/ou ecran dedie a l&apos;ouverture de l&apos;Application.</li>
        <li>L&apos;usage continu de l&apos;Application apres l&apos;entree en vigueur d&apos;une modification vaut acceptation des nouvelles Conditions.</li>
        <li>L&apos;Utilisateur qui refuse les modifications peut <strong>supprimer son Compte</strong> (voir &sect;3.4) sans frais.</li>
      </ul>

      <h3>2.3. Versionnage</h3>
      <p>
        Chaque version des CGU/CGV est identifiee par un numero et une date. La
        version en vigueur est consultable depuis l&apos;Application (<strong>Profil
        &gt; A propos &gt; Conditions d&apos;utilisation</strong>).
      </p>

      <h2 id="chapitre-3">3. Compte utilisateur</h2>

      <h3>3.1. Creation du Compte</h3>
      <p>
        L&apos;inscription sur l&apos;Application est <strong>gratuite</strong>.
        Elle se fait via le <strong>numero de telephone</strong> de
        l&apos;Utilisateur, verifie par un <strong>code OTP a 4 chiffres</strong>{" "}
        envoye par WhatsApp ou SMS.
      </p>
      <p>L&apos;Utilisateur garantit :</p>
      <ul>
        <li>avoir <strong>18 ans revolus</strong> ;</li>
        <li>etre titulaire et utilisateur effectif du numero de telephone fourni ;</li>
        <li>fournir des informations exactes et a jour (nom, adresse de livraison) ;</li>
        <li>etre juridiquement capable de contracter au sens du droit senegalais.</li>
      </ul>
      <p>
        L&apos;<strong>adresse email</strong> est optionnelle. Le{" "}
        <strong>numero de telephone</strong> est obligatoire et lie le Client a
        son Compte.
      </p>

      <h3>3.2. Mecanisme d&apos;authentification et securite du compte</h3>
      <p>
        L&apos;authentification s&apos;effectue par <strong>OTP a 4 chiffres</strong>{" "}
        envoye sur le numero de telephone fourni par le Client. Le code OTP a
        une duree de validite limitee a <strong>5 minutes</strong> et un nombre
        maximum de <strong>3 tentatives</strong>. Toute tentative repetee
        d&apos;authentification echouee pourra declencher un mecanisme de
        protection (rate limiting) bloquant temporairement les tentatives
        ulterieures.
      </p>
      <p>
        L&apos;Utilisateur est <strong>seul responsable</strong> de la
        confidentialite du telephone associe a son Compte.{" "}
        <strong>Toute Commande passee depuis le Compte est reputee provenir de
        l&apos;Utilisateur</strong>, sauf signalement immediat d&apos;un usage
        frauduleux par WhatsApp support. En cas de perte, vol ou compromission,
        l&apos;Utilisateur doit en informer immediatement Yonima.
      </p>

      <h3>3.3. Mise a jour des informations</h3>
      <p>Le Client peut renseigner ou modifier a tout moment :</p>
      <ul>
        <li>son nom complet ;</li>
        <li>une photo de profil (optionnelle) ;</li>
        <li>une ou plusieurs adresses de livraison ;</li>
        <li>ses preferences de notification ;</li>
        <li>son numero de telephone associe au Compte (sur demande au support).</li>
      </ul>

      <h3>3.4. Suppression du Compte</h3>
      <p>
        L&apos;Utilisateur peut demander la suppression de son Compte a tout
        moment depuis l&apos;Application (<strong>Profil &gt; Parametres &gt;
        Supprimer mon compte</strong>), ou via{" "}
        <a href="/delete-account">poulzz.com/delete-account</a>, ou par email a
        contact@poulzz.com.
      </p>
      <p>La suppression du Compte entraine :</p>
      <ul>
        <li>L&apos;<strong>effacement definitif</strong> des donnees de profil (nom, photo, adresses sauvegardees, numero de telephone, email) dans un delai maximum de <strong>30 jours</strong>.</li>
        <li>La <strong>desactivation immediate</strong> de l&apos;authentification (le Client ne peut plus se connecter).</li>
        <li>La conservation, conformement a la loi, des <strong>donnees necessaires aux obligations legales</strong> (facturation, comptabilite, lutte anti-fraude) pendant les durees legales applicables.</li>
        <li>La conservation des <strong>donnees de Commandes</strong> (date, montant, vendor, statut) sous forme <strong>anonymisee</strong> pendant <strong>5 ans</strong> pour repondre aux obligations comptables et fiscales senegalaises.</li>
        <li>Les <strong>Commandes en cours de traitement</strong> sont livrees normalement avant la suppression effective.</li>
        <li>Les <strong>points de fidelite</strong> non utilises sont <strong>perdus</strong> sans contrepartie.</li>
        <li>L&apos;Utilisateur peut, <strong>avant suppression</strong>, demander une <strong>copie de ses donnees</strong>.</li>
      </ul>

      <h3>3.5. Suspension ou resiliation par Yonima</h3>
      <p>
        Yonima se reserve le droit, <strong>sans preavis et sans donner lieu a
        compensation</strong>, de suspendre ou resilier un Compte en cas de :
      </p>
      <ul>
        <li>usage <strong>frauduleux</strong> ou <strong>abusif</strong> (commandes annulees en serie, fausses adresses, fausses reclamations, comportement injurieux envers Livreurs, Vendeurs ou support) ;</li>
        <li><strong>violation</strong> des presentes Conditions ;</li>
        <li><strong>impaye</strong> caracterise ;</li>
        <li><strong>suspicion serieuse de fraude</strong> au paiement.</li>
      </ul>
      <p>
        L&apos;Utilisateur est notifie par email/WhatsApp lors de la suspension.
        Les donnees restent conservees pendant la periode de litige eventuelle.
      </p>

      <h2 id="chapitre-4">4. Service Yonima</h2>

      <h3>4.1. Description</h3>
      <p>
        Yonima est une <strong>plateforme de mise en relation</strong> entre
        Utilisateurs et Restaurants partenaires, et un <strong>operateur de
        livraison</strong> organisant le transport des commandes. Yonima fournit
        le service technique et la plateforme transactionnelle qui permet aux
        Clients de :
      </p>
      <ul>
        <li>Decouvrir les Vendeurs partenaires</li>
        <li>Consulter leurs offres et leurs prix</li>
        <li>Composer un panier d&apos;articles</li>
        <li>Payer en ligne ou choisir un mode de paiement a la livraison (selon le Vendeur)</li>
        <li>Suivre la preparation et la livraison de la Commande</li>
        <li>Evaluer le service apres reception</li>
      </ul>
      <p>
        <strong>Yonima n&apos;est pas le vendeur</strong> des produits
        commercialises via l&apos;Application. Le contrat de vente est conclu
        directement entre le Client et le Vendeur. La qualite, la conformite et
        la securite alimentaire des produits relevent de la{" "}
        <strong>responsabilite exclusive du Vendeur</strong> qui les prepare.
        Yonima agit comme intermediaire technique et prestataire de services de
        paiement (via des partenaires).
      </p>

      <h3>4.2. Zone geographique</h3>
      <p>
        L&apos;Application est officiellement operee a <strong>Dakar et sa
        proche banlieue</strong>.
      </p>
      <ul>
        <li>Si la position GPS de l&apos;Utilisateur est en dehors de la Zone de livraison, un message <strong>&laquo; Zone non couverte &raquo;</strong> s&apos;affiche et la Commande ne peut pas etre validee.</li>
        <li>Yonima n&apos;a <strong>aucune obligation</strong> d&apos;elargir la Zone a la demande d&apos;un Utilisateur.</li>
      </ul>

      <h3>4.3. Disponibilite</h3>
      <p>
        L&apos;Application est accessible <strong>24h/24 et 7j/7</strong>, sous
        reserve des operations de maintenance.
      </p>
      <p>
        Les <strong>horaires d&apos;ouverture des Vendeurs</strong> sont
        indiques sur leur fiche. En dehors de ces horaires, le Vendeur apparait
        comme <strong>&laquo; ferme &raquo;</strong> et il est impossible de
        commander.
      </p>

      <h3>4.4. Continuite du service</h3>
      <p>
        Yonima fait son maximum pour assurer la disponibilite du service mais ne
        peut etre tenue pour responsable :
      </p>
      <ul>
        <li>des pannes des operateurs telecom ;</li>
        <li>des coupures de courant ;</li>
        <li>des cas de force majeure (cf. &sect;17).</li>
      </ul>

      <h2 id="chapitre-5">5. Commandes</h2>

      <h3>5.1. Constitution du Panier</h3>
      <p>
        Un Panier ne peut contenir que des produits d&apos;<strong>un seul
        Vendeur</strong>. Si l&apos;Utilisateur tente d&apos;ajouter un produit
        d&apos;un autre Vendeur, l&apos;Application propose de{" "}
        <strong>vider le Panier en cours</strong> ou d&apos;annuler
        l&apos;ajout.
      </p>

      <h3>5.2. Montant minimum de Commande</h3>
      <p>
        Chaque Vendeur definit librement un <strong>montant minimum</strong>{" "}
        pour qu&apos;une Commande soit acceptee. Ce montant est affiche dans le
        Panier. Sans atteinte du minimum, la Commande ne peut pas etre validee.
      </p>

      <h3>5.3. Disponibilite des produits</h3>
      <p>
        Les prix et la disponibilite des produits sont mis a jour par chaque
        Vendeur. <strong>Yonima ne garantit pas</strong> que tous les produits
        affiches a un instant T resteront disponibles au moment de la
        confirmation par le Vendeur.
      </p>

      <h3>5.4. Confirmation de la Commande</h3>
      <p>Pour passer une Commande, le Client doit :</p>
      <ol>
        <li>Selectionner un Vendeur dans la Zone de livraison disponible</li>
        <li>Choisir un ou plusieurs articles</li>
        <li>Completer ses informations de livraison (adresse, telephone, nom)</li>
        <li>Choisir un mode de paiement (cf. &sect;7)</li>
        <li>Confirmer la Commande</li>
      </ol>
      <p>
        La Commande devient <strong>ferme et definitive</strong> des que
        l&apos;Utilisateur a tape &laquo; <strong>Valider mon panier</strong>{" "}
        &raquo; et que le paiement a ete initie avec succes. Aucune modification
        ni annulation n&apos;est possible apres confirmation, sauf cas prevus au
        &sect;9.
      </p>

      <h3>5.5. Acceptation par le Vendeur</h3>
      <p>
        La Commande n&apos;est valablement formee qu&apos;<strong>apres
        acceptation par le Vendeur</strong>. Yonima notifie le Vendeur en temps
        reel ; ce dernier dispose d&apos;un delai limite de{" "}
        <strong>15 minutes</strong> pour accepter ou refuser la Commande, a
        defaut de quoi la Commande est automatiquement annulee et le Client
        integralement rembourse.
      </p>
      <p>
        En cas de refus du Vendeur (rupture de stock, fermeture imprevue,
        surcharge en cuisine, etc.) :
      </p>
      <ul>
        <li>Le Client est notifie immediatement</li>
        <li><strong>Aucune somme n&apos;est prelevee</strong> si le paiement avait ete pre-autorise</li>
        <li>En cas de paiement deja debite, un <strong>remboursement integral</strong> est declenche selon les modalites de l&apos;article 9</li>
      </ul>

      <h3>5.6. Buffer de fermeture anticipee</h3>
      <p>
        Pendant les <strong>15 dernieres minutes</strong> avant la fermeture du
        Vendeur, l&apos;Application bloque les nouvelles Commandes vers ce
        Vendeur (&laquo; last call &raquo;). Un Client qui demarrerait une
        Commande juste avant la fermeture sera notifie et ne pourra pas valider
        apres cette limite. Le buffer est calcule <strong>par Vendeur</strong>,
        configurable par celui-ci (default 15 min).
      </p>

      <h3>5.7. Frais de livraison</h3>
      <p>
        Les frais de livraison sont <strong>affiches clairement</strong> avant
        validation du Panier, calcules en fonction du Vendeur et de la distance.
        Ils s&apos;ajoutent au montant des produits.
      </p>

      <h3>5.8. Frais de service Yonima</h3>
      <p>
        Yonima ne preleve <strong>aucun frais de service</strong> sur le Client
        en V1. Seuls les frais de livraison definis par le Vendeur
        s&apos;ajoutent au prix des produits. Cette politique pourra evoluer ;
        toute modification fera l&apos;objet d&apos;une notification prealable
        conformement a l&apos;article 2.2.
      </p>

      <h2 id="chapitre-6">6. Prix</h2>

      <h3>6.1. Devise</h3>
      <p>
        Tous les prix sont affiches en <strong>francs CFA (XOF)</strong>,{" "}
        <strong>toutes taxes comprises (TTC)</strong>, sauf mention contraire.
      </p>

      <h3>6.2. Modification des prix</h3>
      <p>
        Les Vendeurs peuvent modifier leurs prix a tout moment. Le prix
        applicable est <strong>celui affiche au moment de la confirmation de la
        Commande</strong>.
      </p>

      <h3>6.3. Promotions et codes promo</h3>
      <ul>
        <li>Les promotions sont valables sur leur periode d&apos;application.</li>
        <li><strong>Un seul code promo par Commande</strong>, <strong>non cumulable</strong> avec d&apos;autres offres sauf mention contraire.</li>
        <li>Les codes promo sont <strong>personnels, non cessibles, non remboursables en especes</strong>.</li>
        <li>Yonima se reserve le droit de <strong>desactiver un code promo</strong> en cas d&apos;usage frauduleux.</li>
      </ul>

      <h2 id="chapitre-7">7. Paiement</h2>

      <h3>7.1. Moyens de paiement acceptes</h3>
      <p>
        L&apos;Application accepte trois moyens de paiement, dont la
        disponibilite depend du Vendeur selectionne :
      </p>
      <ul>
        <li><strong>Wave</strong> (mobile money) : paiement via l&apos;application Wave Money installee sur le telephone du Client.</li>
        <li><strong>Maxit / Orange Money</strong> (mobile money) : paiement via l&apos;application Maxit / Orange Money installee sur le telephone du Client.</li>
        <li><strong>Paiement a la livraison en especes</strong> : uniquement si le Vendeur accepte le cash. Les Vendeurs en mode <code>pool_only</code> (livraisons assurees par le pool Yonima) <strong>n&apos;acceptent pas</strong> le paiement en especes.</li>
      </ul>
      <p>
        La <strong>carte bancaire n&apos;est pas activee en V1</strong>. Cette
        possibilite pourra etre ajoutee ulterieurement.
      </p>

      <h3>7.2. Restriction Cash sur les Vendeurs &laquo; pool_only &raquo;</h3>
      <p>
        Le paiement <strong>en especes a la livraison est interdit</strong> sur
        les Restaurants operant en mode <strong>pool_only</strong> (=
        livraisons auto-dispatchees par le pool Yonima). Cette regle financiere
        est <strong>non negociable</strong>. Un filet de securite backend
        (<code>CASH_NOT_ALLOWED_POOL</code>) rejette toute tentative de Commande
        qui combine paiement cash + Vendeur pool_only.
      </p>
      <p>
        Les Vendeurs qui acceptent le cash sont identifies explicitement dans
        l&apos;Application au moment du choix du moyen de paiement.
      </p>

      <h3>7.3. Paiement mobile (Wave / Maxit)</h3>
      <p>
        Le paiement mobile est traite par notre prestataire de services de
        paiement <strong>PayDunya</strong>, partenaire technique de Yonima. A
        aucun moment Yonima ne stocke les identifiants de connexion ou les
        informations bancaires du Client. Ces informations sont gerees
        exclusivement par le PSP partenaire.
      </p>
      <p>
        Le debit est effectue des la confirmation de la Commande. En cas de
        refus du Vendeur ou d&apos;annulation, un remboursement integral est
        declenche (cf. &sect;9).
      </p>

      <h3>7.4. Paiement a la livraison</h3>
      <p>
        Le paiement a la livraison se fait en <strong>especes uniquement</strong>,
        en francs CFA, au moment de la remise de la Commande au Client. Le
        Client doit prevoir le montant exact ou un montant proche pour faciliter
        la remise.
      </p>
      <p>
        Le Vendeur ou le Livreur peut refuser la Commande si le Client
        n&apos;est pas en mesure de presenter la somme due au moment de la
        livraison. Dans ce cas, la Commande est consideree comme annulee a
        l&apos;initiative du Client, sans donner droit a compensation.
      </p>

      <h3>7.5. Echec de paiement</h3>
      <p>
        En cas d&apos;echec de paiement (refus operateur, solde insuffisant,
        timeout), la Commande est <strong>annulee automatiquement</strong> et
        le Panier reste a disposition de l&apos;Utilisateur pour relance.
      </p>

      <h3>7.6. Securite</h3>
      <p>
        Les transactions Wave / Maxit sont operees par les operateurs{" "}
        <strong>Wave Mobile Money</strong> et <strong>Free Money / Orange
        Money</strong> via le PSP. <strong>Yonima ne stocke jamais</strong> les
        donnees bancaires ou les numeros Wave/Maxit en clair.
      </p>

      <h3>7.7. Code de livraison</h3>
      <p>
        Pour securiser la remise de la Commande, un <strong>code de livraison a
        3 chiffres</strong> est genere et affiche dans l&apos;Application au
        Client. Le Client doit communiquer ce code au Livreur au moment de la
        remise, qui valide ainsi la livraison effective dans l&apos;application
        Livreur. <strong>Sans communication du code, la Commande peut ne pas
        etre consideree comme livree et le Client ne sera pas en mesure
        d&apos;accuser reception.</strong>
      </p>

      <h3>7.8. Facture</h3>
      <p>
        L&apos;Utilisateur recoit une confirmation detaillee par notification
        push et peut consulter l&apos;historique de ses Commandes depuis{" "}
        <strong>Profil &gt; Mes commandes</strong>. Une facture peut etre editee
        sur demande au support.
      </p>

      <h2 id="chapitre-8">8. Livraison</h2>

      <h3>8.1. Adresse de livraison</h3>
      <p>
        L&apos;Utilisateur fournit son adresse de livraison via la page &laquo;
        Adresse de livraison &raquo; : position GPS detectee automatiquement +
        selection eventuelle d&apos;un quartier dans le referentiel Yonima.
      </p>
      <p>
        L&apos;Utilisateur est <strong>seul responsable</strong> de
        l&apos;exactitude de l&apos;adresse fournie.
      </p>

      <h3>8.2. Delais</h3>
      <p>
        Les <strong>delais affiches</strong> (ex: &laquo; 25-35 min &raquo;)
        sont des <strong>estimations indicatives</strong> basees sur la
        distance, le trafic et la disponibilite des Livreurs au moment de la
        commande, ainsi que la meteo et l&apos;etat des voies. Yonima fait ses
        meilleurs efforts pour respecter les delais annonces mais{" "}
        <strong>ne s&apos;engage pas</strong> sur un delai garanti.
      </p>

      <h3>8.3. Statut de la Commande et suivi temps reel</h3>
      <p>
        L&apos;Utilisateur peut suivre l&apos;evolution de sa Commande en temps
        reel dans l&apos;Application. Les statuts possibles sont :
      </p>
      <ul>
        <li><strong>En attente</strong> (<code>pending</code>)</li>
        <li><strong>Confirmee par le Vendeur</strong> (<code>confirmed</code>)</li>
        <li><strong>En preparation</strong> (<code>preparing</code>)</li>
        <li><strong>Prete</strong> (<code>ready</code>)</li>
        <li><strong>Livreur assigne</strong> / <strong>En route vers le Vendeur</strong> (<code>assigned</code> / <code>picking_up</code>)</li>
        <li><strong>En livraison vers le Client</strong> (<code>delivering</code>)</li>
        <li><strong>Arrivee</strong></li>
        <li><strong>Livree</strong> (<code>delivered</code>)</li>
        <li><strong>Annulee</strong> (<code>cancelled</code>)</li>
      </ul>

      <h3>8.4. Code de livraison</h3>
      <p>
        A la remise de la Commande, le Livreur peut demander a l&apos;Utilisateur
        un <strong>code de livraison a 3 chiffres</strong> affiche dans
        l&apos;Application, pour confirmer la bonne reception. Ce code est
        nominatif et <strong>ne doit pas etre communique avant la remise
        effective</strong>.
      </p>

      <h3>8.5. Reception de la Commande</h3>
      <p>A la livraison, le Client doit :</p>
      <ul>
        <li>Verifier la conformite de la Commande (articles, quantites) avant la remise du paiement (en cas de paiement cash) ;</li>
        <li>Communiquer son <strong>code de livraison</strong> au Livreur ;</li>
        <li>Si paiement cash, remettre le montant exact ou tres proche.</li>
      </ul>

      <h3>8.6. Absence a la livraison</h3>
      <p>Si l&apos;Utilisateur est absent ou injoignable lors de la livraison :</p>
      <ul>
        <li>Le Livreur tente de joindre l&apos;Utilisateur <strong>2 fois</strong> (telephone et/ou WhatsApp) sur une periode de <strong>10 minutes</strong>.</li>
        <li>Sans reponse, la Commande est marquee <strong>&laquo; non livree &raquo;</strong> et <strong>non remboursee</strong> (les denrees alimentaires etant perissables, voir &sect;9).</li>
        <li>Le Client reste <strong>redevable</strong> du paiement (sauf cas de force majeure), et la Commande peut etre <strong>detruite</strong> ou <strong>remise au Vendeur</strong> selon le contexte.</li>
      </ul>

      <h3>8.7. Refus de la Commande a la livraison</h3>
      <p>
        Le Client peut refuser une Commande a la livraison <strong>uniquement</strong>{" "}
        dans les cas explicitement prevus au &sect;9.2.
      </p>
      <p>
        Un refus de livraison <strong>non motive</strong> (&laquo; je n&apos;en
        ai plus envie &raquo;, &laquo; j&apos;ai deja mange &raquo;, etc.) est{" "}
        <strong>non recevable</strong> et le Client reste redevable du paiement.
      </p>

      <h2 id="chapitre-9">9. Annulations, retours et remboursements</h2>

      <h3>9.1. Principe - remboursement integral en cas de manquement de Yonima ou du Vendeur</h3>
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

      <h3>9.2. Cas donnant droit a remboursement</h3>
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

      <h3>9.3. Distinction selon le mode de paiement</h3>
      <p>
        Le mode de remboursement depend de <strong>qui a encaisse</strong> les
        sommes :
      </p>
      <ul>
        <li><strong>Paiement Wave / Maxit / Orange Money</strong> (encaisse par la Plateforme) : remboursement <strong>vers le compte d&apos;origine</strong> sous <strong>24-48h ouvrees</strong> (manuel V1, automatique post-API Payout).</li>
        <li><strong>Paiement en especes</strong> (encaisse par le Vendeur ou le Livreur) : la situation est traitee au cas par cas avec le Vendeur. Yonima peut proposer un <strong>avoir Yonima</strong> valable 6 mois sur l&apos;Application en compensation immediate, le temps que la situation soit regularisee avec le Vendeur.</li>
      </ul>

      <h3>9.4. Cas ne donnant pas lieu a remboursement</h3>
      <p>Le Client <strong>n&apos;est pas</strong> rembourse dans les cas suivants :</p>
      <ul>
        <li>L&apos;Utilisateur a <strong>change d&apos;avis</strong> apres commande.</li>
        <li>L&apos;Utilisateur <strong>n&apos;aime pas le gout</strong> du plat (sauf cas &sect;9.2.4).</li>
        <li>L&apos;Utilisateur etait <strong>absent a la livraison</strong> sans motif valable.</li>
        <li>L&apos;Utilisateur a <strong>fourni une adresse incorrecte</strong>.</li>
        <li>Le delai de livraison estime a ete depasse sans annulation prealable.</li>
        <li>Article entame, partiellement consomme ou modifie par le Client (sauf si le defaut justifiait l&apos;arret de consommation).</li>
        <li>Reclamation deposee <strong>plus de 48 heures</strong> apres la livraison.</li>
        <li>Reclamation manifestement <strong>abusive, frauduleuse ou non etayee</strong> par des elements objectifs.</li>
      </ul>

      <h3>9.5. Procedure de reclamation</h3>
      <p>
        En cas de probleme, l&apos;Utilisateur doit contacter le{" "}
        <strong>support Yonima sur WhatsApp</strong> au plus tard{" "}
        <strong>dans les 48 heures</strong> suivant la livraison, en fournissant :
      </p>
      <ul>
        <li>Le numero de Commande</li>
        <li>Une description precise du probleme</li>
        <li>Des photos quand applicable</li>
      </ul>
      <p>
        Sans reclamation dans ce delai de 48h, aucun remboursement ne sera
        accorde.
      </p>

      <h3>9.6. Litige</h3>
      <p>
        En cas de desaccord persistant entre le Client et Yonima sur un
        remboursement, les parties s&apos;engagent a rechercher une{" "}
        <strong>solution amiable</strong> avant toute procedure judiciaire
        (voir &sect;18). A defaut, le tribunal competent sera celui du siege
        social de Yonima.
      </p>

      <h2 id="chapitre-10">10. Programme de fidelite</h2>

      <h3>10.1. Acquisition de points</h3>
      <p>
        L&apos;Utilisateur cumule des points de fidelite sur ses Commandes a
        raison de <strong>1 point par tranche de 100 F CFA depenses</strong>{" "}
        (calcul par <code>FLOOR(total / 100)</code>). Les totaux{" "}
        <strong>inferieurs a 100 F CFA</strong> ne generent aucun point.
      </p>

      <h3>10.2. Utilisation</h3>
      <p>
        Les points peuvent etre convertis en <strong>recompenses</strong>{" "}
        (reductions, livraisons gratuites, produits offerts) selon le catalogue
        accessible depuis <strong>Profil &gt; Programme de fidelite</strong>.
      </p>

      <h3>10.3. Expiration</h3>
      <p>
        Les points expirent <strong>12 mois</strong> apres leur acquisition
        s&apos;ils ne sont pas utilises.
      </p>

      <h3>10.4. Non-cessibilite</h3>
      <p>
        Les points sont <strong>personnels, non cessibles, non echangeables
        contre des especes</strong> et sont <strong>perdus</strong> en cas de
        suppression du Compte.
      </p>

      <h3>10.5. Fraude</h3>
      <p>
        Toute tentative de manipulation du systeme de fidelite (commandes
        fictives, comptes multiples) entraine la <strong>perte immediate des
        points</strong> et la suspension du Compte.
      </p>

      <h2 id="chapitre-11">11. Sponsorings et Vendeurs mis en avant</h2>
      <p>
        Certains Vendeurs apparaissent en <strong>mise en avant</strong> dans
        les sections <strong>&laquo; Pour vous &raquo;</strong> (accueil) et{" "}
        <strong>&laquo; Tendances &raquo;</strong> (recherche), suite a un{" "}
        <strong>achat publicitaire</strong> (ci-apres &laquo;{" "}
        <strong>Sponsoring</strong> &raquo;). Ces Vendeurs sont signales
        visuellement par un badge <strong>&laquo; SPONSORISE &raquo;</strong>{" "}
        clairement visible sur leur carte.
      </p>
      <p>
        Cette transparence vise a respecter les obligations legales en matiere
        de publicite et les bonnes pratiques RGPD que Yonima applique
        volontairement. Les Vendeurs <strong>mis en avant editorialement</strong>{" "}
        par Yonima (sans contrepartie financiere) <strong>ne portent pas</strong>{" "}
        ce badge - ils sont selectionnes selon des criteres algorithmiques
        (notation, popularite, distance, type de cuisine, historique du Client,
        etc.).
      </p>
      <p>
        Le Client n&apos;est <strong>jamais</strong> facture pour la
        consultation des contenus sponsorises.
      </p>

      <h2 id="chapitre-12">12. Protection des donnees personnelles</h2>
      <p>
        Les donnees personnelles de l&apos;Utilisateur sont traitees conformement
        a la <strong>loi senegalaise n&deg; 2008-12 du 25 janvier 2008</strong>{" "}
        sur la protection des donnees a caractere personnel, et au{" "}
        <strong>RGPD europeen</strong> pour les Utilisateurs residents en
        Europe.
      </p>
      <p>
        Le detail est precise dans la{" "}
        <a href="/privacy/client">Politique de confidentialite</a> dediee.
      </p>
      <p>
        Pour toute demande relative aux donnees personnelles :{" "}
        <strong>contact@poulzz.com</strong> (objet : &laquo; Donnees
        personnelles &raquo;).
      </p>

      <h2 id="chapitre-13">13. Geolocalisation et permissions systeme</h2>

      <h3>13.1. Geolocalisation</h3>
      <p>
        L&apos;Application demande l&apos;acces a la position GPS au demarrage
        pour :
      </p>
      <ul>
        <li>Detecter automatiquement le quartier de l&apos;Utilisateur ;</li>
        <li>Verifier que l&apos;adresse est dans la Zone de livraison ;</li>
        <li>Estimer les delais de livraison ;</li>
        <li>Calculer les frais de livraison.</li>
      </ul>
      <p>
        L&apos;Utilisateur peut <strong>refuser</strong> la permission de
        geolocalisation, mais devra alors saisir manuellement son adresse a
        chaque Commande.
      </p>

      <h3>13.2. Notifications push</h3>
      <p>L&apos;Utilisateur consent aux notifications push pour recevoir :</p>
      <ul>
        <li>Confirmation de Commande</li>
        <li>Statut de livraison en temps reel</li>
        <li>Code de livraison</li>
        <li>Promotions ponctuelles (desactivable depuis <strong>Profil &gt; Notifications</strong>)</li>
      </ul>
      <p>
        Le consentement peut etre retire a tout moment depuis les parametres
        systeme du telephone ou depuis l&apos;ecran <strong>Profil</strong> de
        l&apos;Application.
      </p>

      <h2 id="chapitre-14">14. Propriete intellectuelle</h2>

      <h3>14.1. Marque et contenus Yonima</h3>
      <p>
        Le nom <strong>Yonima</strong>, le logo, les elements graphiques, les
        textes, le code source de l&apos;Application et la base de donnees sont
        la <strong>propriete exclusive de Poulzz / Yonima</strong> ou ont fait
        l&apos;objet d&apos;une licence d&apos;utilisation. Toute reproduction,
        copie, exploitation, modification, publication ou adaptation, totale ou
        partielle, sans accord expres ecrit de Yonima est strictement interdite
        et sera consideree comme une <strong>contrefacon</strong> sanctionnee
        par les articles applicables du Code penal senegalais.
      </p>

      <h3>14.2. Contenus des Vendeurs</h3>
      <p>
        Les <strong>photos, descriptions et noms des plats</strong> sont
        fournis par les Vendeurs partenaires, qui en garantissent la titularite
        ou la licence. Yonima ne peut etre tenue pour responsable d&apos;une
        eventuelle violation de droits par un Vendeur, mais retirera tout
        contenu signale comme problematique dans un delai raisonnable.
      </p>

      <h3>14.3. Avis et notations de l&apos;Utilisateur</h3>
      <p>
        Le Client peut <strong>noter et laisser un avis</strong> sur le Vendeur
        apres une Commande livree. Les avis doivent etre :
      </p>
      <ul>
        <li><strong>Objectifs</strong>, <strong>respectueux</strong>, et <strong>fondes sur l&apos;experience effective</strong> du Client.</li>
      </ul>
      <p>Yonima se reserve le droit de <strong>moderer ou supprimer</strong> tout avis :</p>
      <ul>
        <li>Diffamatoire, insultant, raciste, sexiste, discriminatoire ;</li>
        <li>Comportant des donnees personnelles d&apos;autrui ;</li>
        <li>Manifestement faux (avis poste par un Client qui n&apos;a jamais commande chez le Vendeur) ;</li>
        <li>Poste en serie de maniere repetee pour nuire a un Vendeur.</li>
      </ul>
      <p>
        En postant un avis, l&apos;Utilisateur <strong>conserve la propriete</strong>{" "}
        de son avis mais <strong>accorde a Yonima une licence non exclusive,
        gratuite, mondiale</strong> d&apos;utilisation, de reproduction et de
        representation de cet avis, dans le cadre de l&apos;Application et des
        supports promotionnels associes (reseaux sociaux, communication interne,
        etc.).
      </p>

      <h2 id="chapitre-15">15. Comportement de l&apos;Utilisateur et lutte anti-fraude</h2>

      <h3>15.1. Comportement attendu</h3>
      <p>L&apos;Utilisateur s&apos;engage a :</p>
      <ul>
        <li>Utiliser l&apos;Application <strong>de bonne foi</strong> ;</li>
        <li>Fournir des <strong>informations exactes</strong> ;</li>
        <li>Respecter le Vendeur, le Livreur, et le personnel Yonima ;</li>
        <li>Ne pas tenter de <strong>contourner</strong> les mecanismes techniques de l&apos;Application ;</li>
        <li>Ne pas creer <strong>plusieurs Comptes</strong> pour beneficier d&apos;offres promotionnelles destinees a un seul Client.</li>
      </ul>

      <h3>15.2. Comportements interdits</h3>
      <p>Sont notamment interdits :</p>
      <ul>
        <li>Toute tentative de <strong>fraude</strong> (paiement frauduleux, fausses reclamations, contournement de mode de paiement) ;</li>
        <li>L&apos;<strong>usurpation d&apos;identite</strong> ;</li>
        <li>L&apos;utilisation de <strong>codes promotionnels obtenus de maniere deloyale</strong> ;</li>
        <li>Le <strong>harcelement</strong> ou les <strong>insultes</strong> envers tout intervenant de la chaine (Vendeur, Livreur, support) ;</li>
        <li>Toute action visant a <strong>perturber le fonctionnement technique</strong> de l&apos;Application.</li>
      </ul>

      <h3>15.3. Sanctions</h3>
      <p>
        En cas de manquement, Yonima se reserve le droit, <strong>sans preavis
        et sans donner lieu a compensation</strong> :
      </p>
      <ul>
        <li>D&apos;<strong>annuler</strong> une Commande ;</li>
        <li>De <strong>suspendre temporairement</strong> le Compte ;</li>
        <li>De <strong>supprimer definitivement</strong> le Compte ;</li>
        <li>D&apos;<strong>engager toute procedure judiciaire</strong> en cas de fraude caracterisee.</li>
      </ul>

      <h2 id="chapitre-16">16. Responsabilite</h2>

      <h3>16.1. Responsabilite de Yonima</h3>
      <p>
        Yonima s&apos;engage a fournir un service de mise en relation conforme
        aux regles de l&apos;art. Cependant, Yonima etant un{" "}
        <strong>intermediaire technique</strong>, sa responsabilite est limitee.
        Yonima est tenue a une <strong>obligation de moyens</strong> pour :
      </p>
      <ul>
        <li>L&apos;accessibilite de l&apos;Application ;</li>
        <li>L&apos;organisation de la livraison ;</li>
        <li>Le bon traitement des paiements.</li>
      </ul>
      <p>Yonima <strong>ne peut etre tenue responsable</strong> :</p>
      <ul>
        <li>De la <strong>qualite des produits</strong> vendus par les Vendeurs (qualite gustative, fraicheur, conformite a la description) - la responsabilite incombe au Vendeur en tant qu&apos;expediteur du produit ;</li>
        <li>Des <strong>intoxications alimentaires</strong> (responsabilite du Vendeur et, le cas echeant, du Livreur si manipulation inappropriee) ;</li>
        <li>Des <strong>delais de livraison non tenus</strong> en raison de causes externes (trafic, meteo, indisponibilite Livreurs, etc.) ;</li>
        <li>Des <strong>informations fausses</strong> fournies par l&apos;Utilisateur (mauvaise adresse, mauvais telephone) ;</li>
        <li>Des <strong>dommages indirects</strong> (manque a gagner, perte de chance, perte de temps, atteinte a la reputation, etc.) decoulant de l&apos;utilisation de l&apos;Application ;</li>
        <li>Des <strong>dommages causes par une utilisation non conforme</strong> de l&apos;Application par le Client ou par un tiers ;</li>
        <li>Des cas de <strong>force majeure</strong> (cf. &sect;17).</li>
      </ul>

      <h3>16.2. Plafond de responsabilite</h3>
      <p>
        En cas de dommage direct resultant d&apos;un manquement avere de Yonima
        a ses obligations, la responsabilite de Yonima est <strong>plafonnee
        au montant de la Commande litigieuse</strong>. Aucune indemnite
        superieure ne pourra etre reclamee a ce titre.
      </p>

      <h3>16.3. Responsabilite de l&apos;Utilisateur</h3>
      <p>L&apos;Utilisateur est responsable de :</p>
      <ul>
        <li>L&apos;<strong>exactitude</strong> des informations fournies ;</li>
        <li>L&apos;<strong>usage</strong> de son Compte ;</li>
        <li>Le <strong>bon comportement</strong> envers le Livreur, le Vendeur et le personnel Yonima ;</li>
        <li>Le <strong>paiement effectif</strong> de ses Commandes.</li>
      </ul>

      <h2 id="chapitre-17">17. Force majeure</h2>
      <p>
        Aucune des parties ne peut etre tenue responsable de l&apos;inexecution
        de ses obligations en cas de <strong>force majeure</strong> au sens du
        droit senegalais, definie comme un evenement exterieur, imprevisible et
        irresistible, incluant notamment :
      </p>
      <ul>
        <li>Catastrophes naturelles, intemperies ;</li>
        <li>Coupures generalisees d&apos;electricite, de reseau internet, de reseau mobile ;</li>
        <li>Greves generales, manifestations, troubles a l&apos;ordre public ;</li>
        <li>Conflit arme ;</li>
        <li>Pandemies, mesures gouvernementales sanitaires ;</li>
        <li>Decisions administratives ou judiciaires imprevisibles.</li>
      </ul>

      <h2 id="chapitre-18">18. Litiges et droit applicable</h2>

      <h3>18.1. Droit applicable</h3>
      <p>
        Les presentes CGU/CGV sont soumises au <strong>droit senegalais</strong>.
      </p>

      <h3>18.2. Resolution amiable</h3>
      <p>
        Avant toute action contentieuse, l&apos;Utilisateur s&apos;engage a{" "}
        <strong>contacter le support Yonima</strong> par WhatsApp ou email pour
        tenter une resolution amiable. Yonima s&apos;engage a repondre{" "}
        <strong>sous 7 jours ouvres</strong>.
      </p>

      <h3>18.3. Juridiction</h3>
      <p>
        A defaut d&apos;accord amiable, <strong>les tribunaux competents de
        Dakar</strong> seront seuls competents pour connaitre de tout litige
        relatif a l&apos;interpretation ou a l&apos;execution des presentes
        Conditions, sauf disposition legale imperative contraire.
      </p>

      <h2 id="chapitre-19">19. Dispositions generales</h2>

      <h3>19.1. Nullite partielle</h3>
      <p>
        Si l&apos;une des stipulations des presentes CGU/CGV etait jugee nulle
        ou inapplicable, <strong>les autres stipulations demeurent en
        vigueur</strong>.
      </p>

      <h3>19.2. Tolerance</h3>
      <p>
        Le fait pour Yonima de ne pas se prevaloir d&apos;une stipulation des
        presentes ne vaut pas renonciation a s&apos;en prevaloir ulterieurement.
      </p>

      <h3>19.3. Cession</h3>
      <p>
        L&apos;Utilisateur ne peut <strong>ceder son Compte</strong> ni les
        droits qui en decoulent a un tiers.
      </p>
      <p>
        Yonima se reserve le droit de ceder tout ou partie de ses droits et
        obligations a un tiers (cession d&apos;activite, fusion-absorption),
        avec <strong>information prealable</strong> de l&apos;Utilisateur.
      </p>

      <h3>19.4. Integralite</h3>
      <p>
        Les presentes CGU/CGV constituent <strong>l&apos;integralite de
        l&apos;accord</strong> entre Yonima et l&apos;Utilisateur, et remplacent
        tout accord anterieur.
      </p>

      <h2 id="chapitre-20">20. Contact</h2>
      <p>
        Pour toute question, reclamation ou demande relative a l&apos;utilisation
        de l&apos;Application :
      </p>
      <ul>
        <li><strong>Support technique et commande</strong> : <a href="mailto:contact@poulzz.com">contact@poulzz.com</a> - WhatsApp +221 76 295 70 97</li>
        <li><strong>Reclamations remboursement</strong> : contact@poulzz.com (objet : &laquo; Reclamation remboursement - n&deg; de commande &raquo;)</li>
        <li><strong>Donnees personnelles (DPO)</strong> : contact@poulzz.com (objet : &laquo; Donnees personnelles &raquo;)</li>
        <li><strong>Adresse postale</strong> : POULZZ - SUARL, Bene Baraque, Ainoumady 2, Dakar 11000, Senegal</li>
        <li><strong>Mentions legales</strong> : <a href="/legal">poulzz.com/legal</a></li>
      </ul>
    </LegalPageShell>
  );
}
