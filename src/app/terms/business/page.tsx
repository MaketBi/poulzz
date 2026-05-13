import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "CGU Business - Yonima Business (Vendeur) - Poulzz",
  description:
    "Conditions Generales d'Utilisation et Contrat de Referencement applicables aux vendeurs partenaires utilisant l'application Yonima Business.",
};

export default function TermsBusinessPage() {
  return (
    <LegalPageShell
      title="Conditions Generales d'Utilisation et Contrat de Referencement"
      appLabel="Yonima Business - Vendeur"
      version="1.0"
      lastUpdated="2026-05-12"
      otherVersions={[
        { href: "/terms/client", label: "CGU/CGV - Yonima Plus (Client)" },
        { href: "/terms/rider", label: "CGU - Yonima Rider (Livreur)" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Definitions" },
        { id: "chapitre-2", label: "2. Acceptation, conclusion et duree du contrat" },
        { id: "chapitre-3", label: "3. Creation et gestion du compte Vendeur" },
        { id: "chapitre-4", label: "4. Catalogue et gestion des produits" },
        { id: "chapitre-5", label: "5. Commandes" },
        { id: "chapitre-6", label: "6. Mode de livraison" },
        { id: "chapitre-7", label: "7. Prix et facturation" },
        { id: "chapitre-8", label: "8. Encaissement et versement" },
        { id: "chapitre-9", label: "9. Obligations du Vendeur" },
        { id: "chapitre-10", label: "10. Obligations de Yonima" },
        { id: "chapitre-11", label: "11. Notations et avis Client" },
        { id: "chapitre-12", label: "12. Sponsorings et mises en avant payantes" },
        { id: "chapitre-13", label: "13. Programme de fidelite" },
        { id: "chapitre-14", label: "14. Propriete intellectuelle" },
        { id: "chapitre-15", label: "15. Protection des donnees personnelles" },
        { id: "chapitre-16", label: "16. Sanctions et resiliation pour faute" },
        { id: "chapitre-17", label: "17. Responsabilite" },
        { id: "chapitre-18", label: "18. Force majeure" },
        { id: "chapitre-19", label: "19. Litiges et droit applicable" },
        { id: "chapitre-20", label: "20. Dispositions generales" },
        { id: "chapitre-21", label: "21. Contact" },
      ]}
    >
      <h2 id="preambule">Preambule</h2>
      <p>
        Les presentes Conditions Generales d&apos;Utilisation et Contrat de
        Referencement (ci-apres les &laquo; <strong>CGU Business</strong>{" "}
        &raquo; ou &laquo; <strong>Contrat</strong> &raquo;) regissent
        l&apos;utilisation de l&apos;application mobile{" "}
        <strong>Yonima Business</strong> par les commercants partenaires
        (restaurants en V1) - ci-apres le &laquo; <strong>Vendeur</strong>{" "}
        &raquo; - editee par <strong>POULZZ - SUARL</strong>.
      </p>
      <p>
        Les informations legales detaillees de POULZZ - SUARL (RCCM SN DKR 2026
        B 5030, NINEA 012814647, siege Bene Baraque Ainoumady 2 Dakar) sont
        disponibles sur <a href="/legal">poulzz.com/legal</a>.
      </p>
      <p>
        L&apos;utilisation de Yonima Business implique l&apos;<strong>acceptation
        pleine et entiere</strong> des presentes CGU. A defaut, le Vendeur doit
        s&apos;abstenir d&apos;utiliser l&apos;application et resilier son
        referencement.
      </p>

      <h2 id="chapitre-1">1. Definitions</h2>
      <ul>
        <li><strong>Application Business</strong> : application mobile destinee a la gestion d&apos;un compte vendor sur la Plateforme Yonima.</li>
        <li><strong>Plateforme</strong> : ensemble Yonima Plus (application Client) + Yonima Business (application Vendeur) + Yonima Rider (application Livreur).</li>
        <li><strong>Vendeur</strong> : personne morale (societe, entreprise individuelle, association) ou personne physique exercant une activite commerciale legale et referencee sur Yonima.</li>
        <li><strong>Etablissement</strong> : lieu physique d&apos;exploitation du Vendeur depuis lequel les produits sont prepares et remis au Livreur.</li>
        <li><strong>Catalogue</strong> : ensemble des produits, prix, descriptions et photos publies par le Vendeur sur la Plateforme.</li>
        <li><strong>Commande</strong> : commande passee par un Client via Yonima Plus aupres d&apos;un Vendeur.</li>
        <li><strong>Mode de livraison</strong> : choix du Vendeur entre <code>pool_only</code> (livraison assuree par les livreurs Yonima), <code>internal_only</code> (livraison assuree par les livreurs propres du Vendeur), ou <code>hybrid</code> (les deux).</li>
        <li><strong>Commission Plateforme</strong> : pourcentage retenu par Yonima sur chaque commande passee via la Plateforme, defini contractuellement.</li>
        <li><strong>Versement</strong> : reversement periodique au Vendeur des sommes encaissees par la Plateforme, deduction faite des commissions.</li>
      </ul>

      <h2 id="chapitre-2">2. Acceptation, conclusion et duree du contrat</h2>

      <h3>2.1. Conclusion</h3>
      <p>
        Le Contrat est conclu lors de la creation du compte Vendeur et la
        validation des presentes CGU Business. Sans cette validation, le compte
        ne peut pas etre active.
      </p>

      <h3>2.2. Duree</h3>
      <p>
        Le Contrat est conclu pour une duree <strong>indeterminee</strong>.
        Chaque partie peut y mettre fin dans les conditions prevues a
        l&apos;article 16.
      </p>

      <h3>2.3. Modifications</h3>
      <p>
        Yonima se reserve le droit de modifier les CGU Business. Les
        modifications substantielles (commission, paiement, mode de livraison,
        sanctions) sont notifiees au Vendeur <strong>au moins 30 jours</strong>{" "}
        avant entree en vigueur, par notification push, ecran dedie et email.
        L&apos;usage continu apres l&apos;entree en vigueur vaut acceptation.
        Le Vendeur qui refuse peut resilier sans frais.
      </p>

      <h2 id="chapitre-3">3. Creation et gestion du compte Vendeur</h2>

      <h3>3.1. Conditions d&apos;eligibilite</h3>
      <p>Pour etre reference sur la Plateforme, le Vendeur doit :</p>
      <ul>
        <li>Exercer une activite commerciale <strong>legale</strong> au Senegal</li>
        <li>Posseder un <strong>NINEA valide</strong> ou etre en cours de regularisation</li>
        <li>Disposer d&apos;un <strong>etablissement physique</strong> dans la Zone de livraison (Dakar et proche banlieue en V1)</li>
        <li>Respecter les normes d&apos;hygiene alimentaire applicables (HACCP, autorisations sanitaires locales)</li>
        <li>Designer un <strong>representant legal</strong> ou <strong>gerant</strong> comme interlocuteur Yonima</li>
      </ul>

      <h3>3.2. Inscription</h3>
      <p>
        L&apos;inscription se fait par numero de telephone du representant legal,
        via OTP a 4 chiffres. Le compte n&apos;est active qu&apos;apres :
      </p>
      <ul>
        <li>Validation des CGU Business</li>
        <li>Soumission des documents administratifs (NINEA, RCCM si applicable, autorisations sanitaires)</li>
        <li>Validation par les equipes Yonima</li>
      </ul>
      <p>
        Yonima se reserve le droit de <strong>refuser une inscription</strong>{" "}
        sans avoir a motiver son refus.
      </p>

      <h3>3.3. Comptes collaborateurs</h3>
      <p>
        Le Vendeur peut autoriser jusqu&apos;a <strong>N collaborateurs</strong>{" "}
        (a definir contractuellement) a utiliser l&apos;application au nom de
        l&apos;etablissement. Le representant legal reste seul responsable de
        toutes les actions effectuees depuis le compte vendor.
      </p>

      <h3>3.4. Suppression du compte</h3>
      <p>
        Le Vendeur peut resilier son compte a tout moment depuis l&apos;application
        (<strong>Profil &gt; Parametres &gt; Supprimer mon compte</strong>) ou
        par email a contact@poulzz.com.
      </p>
      <p>Effets de la suppression :</p>
      <ul>
        <li>Arret immediat du referencement sur Yonima Plus</li>
        <li>Traitement normal et encaissement des commandes en cours</li>
        <li>Versement du solde restant via le moyen habituel</li>
        <li>Conservation des donnees comptables et transactionnelles pour la duree legale de 10 ans</li>
        <li>Effacement des donnees de profil non comptables sous 30 jours</li>
      </ul>

      <h2 id="chapitre-4">4. Catalogue et gestion des produits</h2>

      <h3>4.1. Contenu publie</h3>
      <p>
        Le Vendeur est seul responsable du contenu de son Catalogue :
      </p>
      <ul>
        <li>Exactitude des descriptions</li>
        <li>Conformite des photos a la realite du produit livre</li>
        <li>Respect des regles d&apos;etiquetage applicables (allergenes, composition)</li>
        <li>Legalite de la vente du produit</li>
      </ul>

      <h3>4.2. Propriete intellectuelle des contenus Vendeur</h3>
      <p>
        Le Vendeur <strong>garantit</strong> disposer des droits necessaires sur
        les photos, textes et marques publies. En cas de litige avec un tiers,{" "}
        <strong>le Vendeur seul est responsable</strong> et indemnise Yonima de
        toute action.
      </p>
      <p>
        En publiant des contenus sur la Plateforme, le Vendeur{" "}
        <strong>accorde a Yonima une licence non exclusive, gratuite,
        mondiale</strong> d&apos;utilisation, de reproduction et de
        representation de ces contenus, dans le cadre de la Plateforme et des
        supports promotionnels associes (reseaux sociaux, communication
        interne).
      </p>

      <h3>4.3. Mises a jour</h3>
      <p>
        Le Vendeur s&apos;engage a maintenir son Catalogue a jour (disponibilite,
        prix, horaires). Yonima peut <strong>desactiver automatiquement</strong>{" "}
        un produit ou un Vendeur en cas d&apos;inactivite prolongee ou de
        signalements repetes.
      </p>

      <h3>4.4. Categorisation</h3>
      <p>
        Le Vendeur attribue ses produits aux categories du referentiel Yonima
        (<code>menu_categories</code>). Yonima peut <strong>recategoriser</strong>{" "}
        un produit en cas d&apos;erreur manifeste.
      </p>

      <h2 id="chapitre-5">5. Commandes</h2>

      <h3>5.1. Reception et delai d&apos;acceptation</h3>
      <p>
        Chaque Commande est notifiee au Vendeur en temps reel. Le Vendeur
        dispose de <strong>15 minutes maximum</strong> pour accepter ou refuser.
        Sans reponse, la Commande est <strong>automatiquement annulee</strong>{" "}
        et le Client rembourse.
      </p>

      <h3>5.2. Refus de Commande</h3>
      <p>Le Vendeur peut refuser une Commande <strong>uniquement</strong> dans les cas suivants :</p>
      <ul>
        <li>Rupture de stock non anticipee</li>
        <li>Capacite de production atteinte</li>
        <li>Fermeture imprevue justifiee</li>
        <li>Demande hors zone ou hors horaire</li>
      </ul>
      <p>
        Tout refus injustifie ou taux de refus excessif (&gt; 10% sur 30 jours)
        peut entrainer des sanctions (cf. article 16).
      </p>

      <h3>5.3. Preparation</h3>
      <p>Le Vendeur s&apos;engage a :</p>
      <ul>
        <li>Respecter les <strong>delais de preparation</strong> annonces</li>
        <li>Respecter les <strong>normes d&apos;hygiene alimentaire</strong> applicables</li>
        <li>Preparer <strong>exactement</strong> ce qui figure sur la commande (articles, quantites, options)</li>
        <li>Emballer correctement pour le transport</li>
      </ul>

      <h3>5.4. Buffer de fermeture anticipee</h3>
      <p>
        Les <strong>N dernieres minutes</strong> avant la fermeture du Vendeur
        (default 15 min, configurable par le Vendeur), l&apos;application bloque
        automatiquement les nouvelles Commandes vers ce Vendeur.
      </p>

      <h2 id="chapitre-6">6. Mode de livraison</h2>

      <h3>6.1. Modes disponibles</h3>
      <p>Le Vendeur choisit son mode de livraison :</p>
      <ul>
        <li><strong><code>pool_only</code></strong> : toutes les Commandes sont livrees par les livreurs Yonima. <strong>Le paiement en especes est interdit</strong> dans ce mode (cf. &sect;7.2 des CGU Client).</li>
        <li><strong><code>internal_only</code></strong> : toutes les Commandes sont livrees par les livreurs propres du Vendeur. Le Vendeur assume la responsabilite operationnelle de la livraison.</li>
        <li><strong><code>hybrid</code></strong> : combinaison des deux modes selon configuration.</li>
      </ul>

      <h3>6.2. Regle financiere dure - pas de migration retroactive</h3>
      <p>
        <strong>Les Commandes en cours ne migrent JAMAIS</strong> vers un autre
        mode de livraison. Tout changement de mode (via Profil &gt; Parametres)
        ne s&apos;applique qu&apos;aux <strong>nouvelles Commandes</strong>.
      </p>
      <p>
        Justification : le flux d&apos;encaissement differe selon le mode. Cette
        regle est non negociable.
      </p>

      <h3>6.3. Restriction Cash sur <code>pool_only</code></h3>
      <p>
        Le Vendeur operant en <code>pool_only</code> ne peut <strong>pas</strong>{" "}
        accepter le paiement en especes. Le reglage{" "}
        <code>accepts_cash</code> est automatiquement desactive.
      </p>

      <h2 id="chapitre-7">7. Prix et facturation</h2>

      <h3>7.1. Politique tarifaire</h3>
      <p>
        Le Vendeur fixe <strong>librement</strong> ses prix dans le respect de
        la reglementation applicable. Yonima n&apos;impose aucun prix.
      </p>

      <h3>7.2. Affichage TTC</h3>
      <p>
        Tous les prix sont affiches <strong>toutes taxes comprises (TTC)</strong>{" "}
        en <strong>francs CFA (XOF)</strong>.
      </p>

      <h3>7.3. Commission Plateforme</h3>
      <p>
        Yonima retient une <strong>commission</strong> sur chaque Commande,
        dont le pourcentage est defini contractuellement et indique au Vendeur
        lors de son referencement. Cette commission peut evoluer selon
        l&apos;article 2.3.
      </p>

      <h3>7.4. Frais de livraison</h3>
      <p>
        Les frais de livraison sont definis par le Vendeur en accord avec Yonima
        selon les distances et zones. Ils sont <strong>payes par le Client</strong>{" "}
        et reverses selon les modalites de l&apos;article 8.
      </p>

      <h2 id="chapitre-8">8. Encaissement et versement</h2>

      <h3>8.1. Modalites d&apos;encaissement</h3>
      <table>
        <thead>
          <tr>
            <th>Mode de paiement</th>
            <th>Qui encaisse</th>
            <th>Reversement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wave / Maxit / Orange Money</td>
            <td>Yonima via PayDunya</td>
            <td>Versement periodique au Vendeur apres deduction de la commission</td>
          </tr>
          <tr>
            <td>Especes (si <code>accepts_cash</code> active)</td>
            <td>Vendeur ou Livreur directement</td>
            <td>Yonima facture la commission a posteriori</td>
          </tr>
        </tbody>
      </table>

      <h3>8.2. Frequence des versements</h3>
      <p>
        Les versements aux Vendeurs sont effectues <strong>de maniere
        periodique</strong> (frequence definie contractuellement, par defaut
        hebdomadaire).
      </p>

      <h3>8.3. Recapitulatif financier</h3>
      <p>
        Le Vendeur dispose dans l&apos;application d&apos;un tableau de bord
        financier detaillant :
      </p>
      <ul>
        <li>Commandes du jour / semaine / mois</li>
        <li>Montants bruts</li>
        <li>Commissions retenues</li>
        <li>Montant net a reverser</li>
        <li>Historique des versements effectues</li>
      </ul>

      <h3>8.4. Litige financier</h3>
      <p>
        En cas de desaccord sur un versement ou une commission, le Vendeur
        dispose de <strong>30 jours</strong> a compter de la date du versement
        pour le contester par ecrit a contact@poulzz.com.
      </p>

      <h2 id="chapitre-9">9. Obligations du Vendeur</h2>
      <p>Le Vendeur s&apos;engage a :</p>
      <ul>
        <li>Respecter les <strong>normes d&apos;hygiene et de securite alimentaire</strong> applicables</li>
        <li>Disposer de toutes les <strong>autorisations administratives</strong> necessaires a son activite</li>
        <li>Maintenir son <strong>catalogue a jour</strong></li>
        <li><strong>Accepter et preparer</strong> les commandes dans les delais</li>
        <li><strong>Respecter le Client et le Livreur</strong></li>
        <li>Ne pas pratiquer de <strong>discrimination</strong> envers les Clients</li>
        <li>Ne pas tenter de <strong>contourner</strong> la Plateforme (proposition de commande hors Yonima au Client, codes promo detournes, etc.)</li>
        <li>Maintenir a jour ses <strong>donnees administratives</strong> (NINEA, autorisations sanitaires)</li>
      </ul>

      <h2 id="chapitre-10">10. Obligations de Yonima</h2>
      <p>Yonima s&apos;engage a :</p>
      <ul>
        <li>Mettre a disposition une <strong>plateforme technique fiable</strong> (obligation de moyens)</li>
        <li><strong>Dispatcher les Commandes</strong> vers le Vendeur en temps reel</li>
        <li><strong>Encaisser et reverser</strong> les paiements selon les modalites convenues</li>
        <li><strong>Mettre a disposition les outils</strong> de gestion (catalogue, statistiques, notifications)</li>
        <li><strong>Assurer le support</strong> par WhatsApp et email</li>
        <li><strong>Proteger les donnees personnelles</strong> du Vendeur (cf. <a href="/privacy/business">Politique de confidentialite Business</a>)</li>
      </ul>

      <h2 id="chapitre-11">11. Notations et avis Client</h2>

      <h3>11.1. Systeme de notation</h3>
      <p>
        Chaque Commande livree peut etre notee par le Client. Les notations
        sont affichees sur la fiche du Vendeur.
      </p>

      <h3>11.2. Moderation</h3>
      <p>Yonima se reserve le droit de <strong>moderer ou supprimer</strong> un avis :</p>
      <ul>
        <li>Diffamatoire, insultant, raciste, sexiste, discriminatoire</li>
        <li>Comportant des donnees personnelles d&apos;autrui</li>
        <li>Manifestement faux</li>
        <li>Poste en serie pour nuire</li>
      </ul>

      <h3>11.3. Voie de recours</h3>
      <p>
        Le Vendeur peut <strong>contester un avis</strong> aupres du support
        Yonima. La decision de Yonima est finale apres examen.
      </p>

      <h3>11.4. Reponse aux avis</h3>
      <p>
        Le Vendeur dispose d&apos;une fonctionnalite pour{" "}
        <strong>repondre publiquement</strong> aux avis (V2, non disponible en
        V1).
      </p>

      <h2 id="chapitre-12">12. Sponsorings et mises en avant payantes</h2>
      <p>
        Le Vendeur peut acheter des <strong>emplacements sponsorises</strong>{" "}
        dans les sections &laquo; Pour vous &raquo; et &laquo; Tendances
        &raquo; de l&apos;application Yonima Plus.
      </p>
      <ul>
        <li>Les emplacements sont vendus a la <strong>journee</strong> ou a la <strong>semaine</strong></li>
        <li>Le tarif est defini par Yonima</li>
        <li>Les Vendeurs sponsorises sont identifies par un <strong>badge SPONSORISE</strong> clairement visible sur leur carte</li>
        <li>Les contenus sponsorises font l&apos;objet d&apos;un suivi statistique (impressions, clics) accessible au Vendeur</li>
      </ul>

      <h2 id="chapitre-13">13. Programme de fidelite</h2>
      <p>
        Yonima opere un programme de fidelite Client (1 point par tranche de
        100 F CFA depenses). Les points sont <strong>portes par Yonima</strong>,
        pas par le Vendeur. Le Vendeur n&apos;a <strong>aucune obligation
        financiere</strong> liee au programme fidelite.
      </p>

      <h2 id="chapitre-14">14. Propriete intellectuelle</h2>

      <h3>14.1. Plateforme Yonima</h3>
      <p>
        Le code, les designs, les bases de donnees et la marque{" "}
        <strong>Yonima</strong> restent la propriete exclusive de POULZZ -
        SUARL.
      </p>

      <h3>14.2. Contenus du Vendeur</h3>
      <p>Voir article 4.2.</p>

      <h3>14.3. Logo et marque du Vendeur</h3>
      <p>
        Le Vendeur <strong>accorde a Yonima</strong> le droit d&apos;utiliser
        son nom commercial, logo et photos dans le cadre de la Plateforme et
        des supports promotionnels associes, pendant toute la duree du Contrat.
      </p>

      <h2 id="chapitre-15">15. Protection des donnees personnelles</h2>
      <p>
        Voir{" "}
        <a href="/privacy/business">Politique de confidentialite Business</a>.
      </p>

      <h2 id="chapitre-16">16. Sanctions et resiliation pour faute</h2>

      <h3>16.1. Manquements pouvant entrainer sanction</h3>
      <ul>
        <li>Refus injustifies repetes de Commandes</li>
        <li>Delais de preparation excessifs recurrents</li>
        <li>Hygiene non respectee signalee par les Clients</li>
        <li>Tentatives de contournement de la Plateforme</li>
        <li>Comportement inapproprie envers Clients, Livreurs ou personnel Yonima</li>
        <li>Catalogue obsolete ou frauduleux</li>
        <li>Non-respect des obligations administratives ou fiscales</li>
      </ul>

      <h3>16.2. Echelle de sanctions</h3>
      <p>Yonima peut, <strong>sans preavis et sans donner lieu a compensation</strong> :</p>
      <ul>
        <li>Envoyer un <strong>avertissement ecrit</strong></li>
        <li><strong>Reduire la visibilite</strong> du Vendeur sur la Plateforme</li>
        <li><strong>Suspendre temporairement</strong> le referencement</li>
        <li><strong>Resilier definitivement</strong> le Contrat</li>
        <li><strong>Engager toute procedure judiciaire</strong> en cas de fraude caracterisee</li>
      </ul>

      <h3>16.3. Resiliation</h3>
      <ul>
        <li><strong>A l&apos;initiative du Vendeur</strong> : a tout moment via suppression du compte (cf. &sect;3.4), avec preavis de 7 jours pour permettre le traitement des Commandes en cours.</li>
        <li><strong>A l&apos;initiative de Yonima</strong> : sans preavis en cas de manquement grave ; avec preavis de 30 jours dans les autres cas.</li>
      </ul>

      <h3>16.4. Effets de la resiliation</h3>
      <ul>
        <li>Arret immediat du referencement</li>
        <li>Traitement normal des Commandes en cours</li>
        <li>Versement final du solde</li>
        <li>Conservation des donnees comptables pendant la duree legale</li>
      </ul>

      <h2 id="chapitre-17">17. Responsabilite</h2>

      <h3>17.1. Responsabilite de Yonima</h3>
      <p>
        Yonima est tenue a une <strong>obligation de moyens</strong> pour la
        fourniture du service. Sa responsabilite est limitee :
      </p>
      <ul>
        <li>Aux dommages <strong>directs</strong> causes par un manquement avere de Yonima</li>
        <li>Au montant des <strong>commissions percues</strong> au cours des <strong>3 mois precedant</strong> le sinistre</li>
      </ul>
      <p>Yonima n&apos;est en <strong>aucun cas</strong> responsable :</p>
      <ul>
        <li>De la qualite des produits du Vendeur</li>
        <li>Des dommages indirects (perte de chiffre d&apos;affaires, manque a gagner, atteinte a la reputation)</li>
        <li>Des cas de force majeure</li>
        <li>Des actions ou omissions du Vendeur lui-meme</li>
      </ul>

      <h3>17.2. Responsabilite du Vendeur</h3>
      <p>Le Vendeur est <strong>seul responsable</strong> :</p>
      <ul>
        <li>De la qualite, fraicheur et conformite de ses produits</li>
        <li>Du respect des regles d&apos;hygiene et de securite alimentaire</li>
        <li>Du respect des obligations fiscales et administratives</li>
        <li>Des dommages causes a un Client par un produit defectueux</li>
      </ul>
      <p>
        Le Vendeur <strong>garantit Yonima</strong> contre toute action engagee
        par un Client ou un tiers en raison d&apos;un manquement du Vendeur.
      </p>

      <h2 id="chapitre-18">18. Force majeure</h2>
      <p>Memes definitions que l&apos;article 17 des CGU Client.</p>

      <h2 id="chapitre-19">19. Litiges et droit applicable</h2>

      <h3>19.1. Droit applicable</h3>
      <p>Droit senegalais.</p>

      <h3>19.2. Resolution amiable</h3>
      <p>
        Avant toute action contentieuse, les parties s&apos;engagent a
        rechercher une solution amiable. Yonima repond aux signalements{" "}
        <strong>sous 7 jours ouvres</strong>.
      </p>

      <h3>19.3. Juridiction</h3>
      <p>
        Tribunaux competents de Dakar, sauf disposition legale imperative
        contraire.
      </p>

      <h2 id="chapitre-20">20. Dispositions generales</h2>
      <ul>
        <li><strong>Nullite partielle</strong> : les autres stipulations demeurent en vigueur.</li>
        <li><strong>Cession</strong> : le Vendeur ne peut ceder son compte. Yonima peut ceder ses droits avec information prealable.</li>
        <li><strong>Integralite</strong> : les presentes CGU constituent l&apos;integralite de l&apos;accord.</li>
      </ul>

      <h2 id="chapitre-21">21. Contact</h2>
      <ul>
        <li>Support operations : <a href="mailto:contact@poulzz.com">contact@poulzz.com</a></li>
        <li>WhatsApp : +221 76 295 70 97</li>
        <li>Adresse postale : POULZZ - SUARL, Bene Baraque, Ainoumady 2, Dakar 11000, Senegal</li>
        <li>Mentions legales : <a href="/legal">poulzz.com/legal</a></li>
      </ul>
    </LegalPageShell>
  );
}
