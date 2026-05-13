import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "CGU Rider - Yonima Rider (Livreur) - Poulzz",
  description:
    "Conditions Generales d'Utilisation et Contrat de Prestation applicables aux livreurs partenaires utilisant l'application Yonima Rider.",
};

export default function TermsRiderPage() {
  return (
    <LegalPageShell
      title="Conditions Generales d'Utilisation et Contrat de Prestation"
      appLabel="Yonima Rider - Livreur"
      version="1.0"
      lastUpdated="2026-05-12"
      otherVersions={[
        { href: "/terms/client", label: "CGU/CGV - Yonima Plus (Client)" },
        { href: "/terms/business", label: "CGU - Yonima Business (Vendeur)" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Definitions" },
        { id: "chapitre-2", label: "2. Statut juridique du Livreur" },
        { id: "chapitre-3", label: "3. Conditions d'inscription" },
        { id: "chapitre-4", label: "4. Fonctionnement des Courses" },
        { id: "chapitre-5", label: "5. Remuneration" },
        { id: "chapitre-6", label: "6. Obligations du Livreur" },
        { id: "chapitre-7", label: "7. Obligations de Yonima" },
        { id: "chapitre-8", label: "8. Sanctions et systeme de scoring" },
        { id: "chapitre-9", label: "9. Suppression du compte" },
        { id: "chapitre-10", label: "10. Geolocalisation et permissions systeme" },
        { id: "chapitre-11", label: "11. Propriete intellectuelle" },
        { id: "chapitre-12", label: "12. Protection des donnees personnelles" },
        { id: "chapitre-13", label: "13. Responsabilite" },
        { id: "chapitre-14", label: "14. Force majeure" },
        { id: "chapitre-15", label: "15. Litiges et droit applicable" },
        { id: "chapitre-16", label: "16. Dispositions generales" },
        { id: "chapitre-17", label: "17. Contact" },
      ]}
    >
      <h2 id="preambule">Preambule</h2>
      <p>
        Les presentes Conditions Generales d&apos;Utilisation et Contrat de
        Prestation de Services (ci-apres les &laquo; <strong>CGU Rider</strong>{" "}
        &raquo; ou &laquo; <strong>Contrat</strong> &raquo;) regissent
        l&apos;utilisation de l&apos;application mobile{" "}
        <strong>Yonima Rider</strong> par les livreurs partenaires (ci-apres
        le &laquo; <strong>Livreur</strong> &raquo;), editee par{" "}
        <strong>POULZZ - SUARL</strong>.
      </p>
      <p>
        Les informations legales detaillees de POULZZ - SUARL sont disponibles
        sur <a href="/legal">poulzz.com/legal</a>.
      </p>
      <p>
        L&apos;utilisation de Yonima Rider implique l&apos;<strong>acceptation
        pleine et entiere</strong> des presentes CGU. A defaut, le Livreur doit
        s&apos;abstenir d&apos;utiliser l&apos;application.
      </p>
      <p>
        <strong>Statut du Livreur</strong> : Le Livreur agit en qualite de{" "}
        <strong>prestataire de services independant</strong>. Le Contrat{" "}
        <strong>n&apos;etablit aucun lien de subordination</strong> entre le
        Livreur et Yonima. Le Livreur reste libre d&apos;organiser son temps,
        d&apos;accepter ou refuser les courses, et de travailler simultanement
        pour d&apos;autres plateformes.
      </p>

      <h2 id="chapitre-1">1. Definitions</h2>
      <ul>
        <li><strong>Application Rider</strong> : application mobile destinee a la gestion des courses pour les Livreurs partenaires de Yonima.</li>
        <li><strong>Plateforme</strong> : ensemble Yonima Plus + Yonima Business + Yonima Rider.</li>
        <li><strong>Livreur</strong> : personne physique majeure, prestataire independant, reference sur Yonima Rider pour effectuer des courses.</li>
        <li><strong>Course</strong> : trajet effectue entre un etablissement Vendeur et un Client final, attribue via l&apos;application.</li>
        <li><strong>Session active</strong> (&laquo; online &raquo;) : periode pendant laquelle le Livreur est connecte a l&apos;application et disponible pour recevoir des Courses.</li>
        <li><strong>Pickup</strong> : retrait de la commande chez le Vendeur.</li>
        <li><strong>Code de livraison</strong> : code a 3 chiffres communique par le Client au Livreur lors de la remise pour valider la livraison effective.</li>
        <li><strong>Pool Yonima</strong> : ensemble des Livreurs disponibles auquel sont dispatchees les Commandes des Vendeurs en mode <code>pool_only</code> ou <code>hybrid</code>.</li>
        <li><strong>Sanctions</strong> : mesures appliquees en cas de manquement (avertissement, reduction de score, suspension temporaire, deactivation).</li>
      </ul>

      <h2 id="chapitre-2">2. Statut juridique du Livreur</h2>

      <h3>2.1. Independance</h3>
      <p>
        Le Livreur <strong>agit en qualite de prestataire independant</strong>.
        Il n&apos;existe <strong>aucun lien de subordination juridique</strong>{" "}
        entre Yonima et le Livreur. Le Contrat est un <strong>contrat de
        prestation de services</strong>, et non un contrat de travail.
      </p>

      <h3>2.2. Consequences pratiques</h3>
      <ul>
        <li>Le Livreur est <strong>libre d&apos;organiser ses horaires</strong></li>
        <li>Le Livreur est <strong>libre d&apos;accepter ou de refuser</strong> une Course</li>
        <li>Le Livreur peut travailler <strong>simultanement pour d&apos;autres plateformes</strong></li>
        <li>Le Livreur <strong>n&apos;est pas tenu</strong> d&apos;effectuer un nombre minimum de Courses</li>
        <li>Yonima <strong>ne fournit pas</strong> le vehicule, l&apos;equipement ou les frais operationnels (essence, entretien, etc.)</li>
      </ul>

      <h3>2.3. Obligations sociales et fiscales du Livreur</h3>
      <p>Le Livreur est <strong>seul responsable</strong> :</p>
      <ul>
        <li>De sa <strong>declaration</strong> aupres des organismes sociaux et fiscaux competents au Senegal</li>
        <li>Du paiement des <strong>cotisations sociales et impots</strong> dus</li>
        <li>De toute <strong>assurance</strong> liee a son activite (responsabilite civile professionnelle, assurance vehicule)</li>
      </ul>
      <p>
        Yonima <strong>n&apos;est pas employeur</strong> et ne procede{" "}
        <strong>a aucune retenue</strong> sociale ou fiscale.
      </p>

      <h2 id="chapitre-3">3. Conditions d&apos;inscription</h2>

      <h3>3.1. Eligibilite</h3>
      <p>Pour s&apos;inscrire comme Livreur, le candidat doit :</p>
      <ul>
        <li>Etre <strong>age de 18 ans revolus</strong></li>
        <li>Posseder une <strong>carte d&apos;identite nationale (CIN) valide</strong></li>
        <li>Posseder un <strong>vehicule en regle</strong> (moto, scooter, voiture, velo)</li>
        <li>Posseder un <strong>permis de conduire valide</strong> si vehicule motorise</li>
        <li>Posseder une <strong>carte grise</strong> valide pour le vehicule</li>
        <li>Disposer d&apos;un <strong>smartphone Android ou iOS</strong> compatible</li>
        <li>Disposer d&apos;un <strong>compte Wave / Maxit / Orange Money</strong> pour les versements</li>
        <li>Etre en mesure de <strong>lire et comprendre le francais</strong> suffisamment pour utiliser l&apos;application</li>
      </ul>

      <h3>3.2. KYC obligatoire</h3>
      <p>L&apos;inscription requiert la soumission des documents suivants :</p>
      <ul>
        <li><strong>Photo de la CIN</strong> (recto/verso)</li>
        <li><strong>Photo du permis de conduire</strong> si vehicule motorise</li>
        <li><strong>Photo de la carte grise</strong> du vehicule</li>
        <li><strong>Photo de profil</strong> recente</li>
      </ul>
      <p>
        Les documents sont <strong>conserves chiffres</strong> par Yonima
        pendant toute la duree du Contrat et <strong>5 ans apres</strong> sa
        resiliation (cf.{" "}
        <a href="/privacy/rider">Politique de confidentialite Rider</a>).
      </p>

      <h3>3.3. Activation du compte</h3>
      <p>
        Le compte n&apos;est active qu&apos;apres <strong>validation manuelle</strong>{" "}
        des documents par les equipes Yonima. Yonima se reserve le droit de{" "}
        <strong>refuser une inscription</strong> sans avoir a motiver son
        refus.
      </p>

      <h3>3.4. Mise a jour des documents</h3>
      <p>
        Le Livreur s&apos;engage a <strong>maintenir a jour</strong> ses
        documents (renouvellement CIN, permis, carte grise). Toute peremption
        non regularisee entraine la <strong>suspension automatique</strong> du
        compte.
      </p>

      <h2 id="chapitre-4">4. Fonctionnement des Courses</h2>

      <h3>4.1. Session active</h3>
      <p>
        Pour recevoir des Courses, le Livreur active sa session via
        l&apos;application (passage a &laquo; online &raquo;). Pendant la
        session active, la <strong>geolocalisation GPS est continue</strong>{" "}
        (indispensable au dispatch). Le Livreur peut suspendre sa session a
        tout moment.
      </p>

      <h3>4.2. Dispatch</h3>
      <p>
        Les Courses sont attribuees automatiquement par l&apos;algorithme
        Yonima selon :
      </p>
      <ul>
        <li>La <strong>distance</strong> du Livreur au Vendeur</li>
        <li>Le <strong>score de performance</strong> du Livreur</li>
        <li>La <strong>disponibilite</strong> du Livreur</li>
        <li>Les <strong>preferences</strong> de zone du Livreur si applicable</li>
      </ul>

      <h3>4.3. Acceptation</h3>
      <p>
        Le Livreur dispose de <strong>N secondes</strong> (a definir, default
        30s) pour accepter ou refuser une Course proposee. Sans reponse, la
        Course est reattribuee a un autre Livreur.
      </p>

      <h3>4.4. Refus</h3>
      <p>
        Le Livreur peut refuser <strong>librement</strong> une Course.
        Toutefois, un <strong>taux de refus excessif</strong> (a definir, ex:
        &gt; 30% sur 30 jours) peut entrainer une <strong>reduction du
        score</strong> et une moindre attribution de Courses.
      </p>

      <h3>4.5. Execution</h3>
      <p>Une Course acceptee doit etre executee selon les etapes :</p>
      <ol>
        <li><strong>Trajet vers le Vendeur</strong> (statut <code>picking_up</code>)</li>
        <li><strong>Arrivee chez le Vendeur</strong> et retrait de la commande (statut <code>assigned</code> -&gt; <code>pickup_complete</code>)</li>
        <li><strong>Trajet vers le Client</strong> (statut <code>delivering</code>)</li>
        <li><strong>Arrivee chez le Client</strong> (statut <code>arrived</code>)</li>
        <li><strong>Remise contre code de livraison</strong> a 3 chiffres</li>
        <li><strong>Validation</strong> dans l&apos;application (statut <code>delivered</code>)</li>
      </ol>

      <h3>4.6. Code de livraison</h3>
      <p>
        Le Code de livraison a 3 chiffres est communique par le Client au
        Livreur au moment de la remise. <strong>Sans ce code, la livraison ne
        peut pas etre validee</strong> dans l&apos;application (sauf override
        exceptionnel par le support Yonima en cas de probleme avere).
      </p>
      <p>
        Le Livreur dispose de <strong>5 tentatives</strong> pour saisir le code
        correct. Au-dela, le support Yonima doit intervenir.
      </p>

      <h3>4.7. Absence du Client</h3>
      <p>Si le Client est absent ou injoignable :</p>
      <ul>
        <li>Le Livreur tente de joindre le Client <strong>2 fois</strong> (telephone et/ou WhatsApp)</li>
        <li>L&apos;attente totale est limitee a <strong>10 minutes</strong></li>
        <li>Sans reponse, la Course est marquee <strong>&laquo; non livree &raquo;</strong> et le Livreur peut quitter le site</li>
        <li>Le Vendeur ou Yonima decident du sort de la commande (destruction, retour, conservation)</li>
      </ul>

      <h3>4.8. Refus du Client a la livraison</h3>
      <p>Si le Client refuse a la livraison, le Livreur doit :</p>
      <ul>
        <li><strong>Documenter</strong> le refus (photo si possible)</li>
        <li>Marquer la Course <strong>&laquo; refusee par le Client &raquo;</strong></li>
        <li>Suivre les instructions du support pour le devenir de la commande</li>
      </ul>

      <h2 id="chapitre-5">5. Remuneration</h2>

      <h3>5.1. Calcul de la remuneration</h3>
      <p>La remuneration du Livreur par Course est composee de :</p>
      <ul>
        <li>Un <strong>montant de base</strong> (<code>driver_base_payout</code>) fonction de la distance</li>
        <li>Un eventuel <strong>bonus de surge</strong> (<code>surge_amount</code>) en cas de forte demande ou de penurie de Livreurs</li>
        <li>D&apos;eventuels <strong>bonus operationnels</strong> (heures de pointe, zones eloignees)</li>
      </ul>
      <p>
        Le montant total est <strong>affiche au Livreur au moment de
        l&apos;attribution</strong> de la Course et garanti apres acceptation.
      </p>

      <h3>5.2. Penurie de Livreurs et surge</h3>
      <p>
        En cas de penurie de Livreurs sur une zone, Yonima peut augmenter
        automatiquement le <code>driver_base_payout</code> de 0 a +20% pour
        attirer des Livreurs. Ce supplement est <strong>absorbe par Yonima</strong>{" "}
        (et non repercute au Client) jusqu&apos;a un seuil defini
        contractuellement.
      </p>

      <h3>5.3. Modes de paiement</h3>
      <p>
        Les remunerations sont <strong>versees au Livreur</strong> sur son
        compte Wave / Maxit / Orange Money associe, selon une frequence definie
        contractuellement (par defaut hebdomadaire).
      </p>

      <h3>5.4. Cas des paiements en especes</h3>
      <p>
        Pour les Commandes payees en especes par le Client, <strong>le Livreur
        encaisse directement les sommes</strong> aupres du Client (montant total
        commande + frais livraison). Le solde du par le Livreur a Yonima (ou
        inversement) est calcule et regularise periodiquement.
      </p>

      <h3>5.5. Recapitulatif financier</h3>
      <p>Le Livreur dispose dans l&apos;application d&apos;un recapitulatif :</p>
      <ul>
        <li>Courses du jour / semaine / mois</li>
        <li>Montants bruts par Course</li>
        <li>Detail des bonus</li>
        <li>Montant net a verser</li>
        <li>Historique des versements effectues</li>
      </ul>

      <h3>5.6. Litige financier</h3>
      <p>
        En cas de desaccord sur une remuneration, le Livreur dispose de{" "}
        <strong>30 jours</strong> a compter du versement pour le contester par
        ecrit a contact@poulzz.com.
      </p>

      <h2 id="chapitre-6">6. Obligations du Livreur</h2>
      <p>Le Livreur s&apos;engage a :</p>
      <ul>
        <li><strong>Respecter le Code de la route</strong> senegalais</li>
        <li>Posseder une <strong>assurance responsabilite civile</strong> couvrant son activite</li>
        <li>Maintenir son <strong>vehicule en bon etat</strong> mecanique et de securite</li>
        <li>Porter une <strong>tenue propre</strong> et idealement le <strong>gilet Yonima</strong> lorsque fourni</li>
        <li>Presenter une <strong>hygiene et un comportement</strong> respectueux envers les Vendeurs, Clients et personnel Yonima</li>
        <li><strong>Preserver l&apos;integrite</strong> des commandes (pas d&apos;ouverture, pas de manipulation)</li>
        <li><strong>Respecter les delais</strong> annonces dans l&apos;application</li>
        <li><strong>Ne pas accepter</strong> de Course en dehors de la Plateforme avec un Client ou Vendeur identifie via Yonima</li>
        <li><strong>Communiquer</strong> avec le Client et le Vendeur uniquement via les canaux fournis par l&apos;application</li>
        <li><strong>Signaler immediatement</strong> tout incident (accident, vol, agression, panne) au support Yonima</li>
      </ul>

      <h2 id="chapitre-7">7. Obligations de Yonima</h2>
      <p>Yonima s&apos;engage a :</p>
      <ul>
        <li>Mettre a disposition une <strong>application fiable</strong> (obligation de moyens)</li>
        <li><strong>Dispatcher les Courses</strong> de maniere equitable selon les criteres de l&apos;article 4.2</li>
        <li><strong>Verser les remunerations</strong> dans les delais convenus</li>
        <li><strong>Mettre a disposition les outils</strong> de suivi et de statistiques</li>
        <li><strong>Assurer le support</strong> par WhatsApp et email</li>
        <li><strong>Proteger les donnees personnelles</strong> du Livreur (cf. <a href="/privacy/rider">Politique de confidentialite Rider</a>)</li>
      </ul>
      <p>Yonima <strong>ne fournit pas</strong> :</p>
      <ul>
        <li>Le vehicule</li>
        <li>L&apos;essence ou l&apos;entretien</li>
        <li>L&apos;assurance du vehicule</li>
        <li>Les equipements personnels (telephone, casque, gilet hors gilet de marque Yonima quand applicable)</li>
      </ul>

      <h2 id="chapitre-8">8. Sanctions et systeme de scoring</h2>

      <h3>8.1. Systeme de scoring</h3>
      <p>
        Le Livreur dispose d&apos;un <strong>score de performance</strong>{" "}
        calcule a partir de :
      </p>
      <ul>
        <li>Taux d&apos;acceptation des Courses</li>
        <li>Taux de Courses livrees</li>
        <li>Notations laissees par les Clients</li>
        <li>Delais de livraison</li>
        <li>Incidents signales</li>
      </ul>
      <p>
        Un score bas peut entrainer une <strong>moindre attribution</strong> de
        Courses.
      </p>

      <h3>8.2. Incidents et sanctions</h3>
      <p>Yonima peut sanctionner le Livreur en cas de manquement :</p>
      <table>
        <thead>
          <tr>
            <th>Manquement</th>
            <th>Sanction possible</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Retard ponctuel sans justification</td><td>Avertissement</td></tr>
          <tr><td>Refus de Course excessif</td><td>Reduction de score</td></tr>
          <tr><td>Non-respect du Code de la route signale</td><td>Avertissement a suspension</td></tr>
          <tr><td>Manipulation ou vol de marchandise</td><td>Deactivation immediate</td></tr>
          <tr><td>Insultes ou comportement inapproprie envers Client/Vendeur</td><td>Suspension a deactivation</td></tr>
          <tr><td>Fraude (faux numero de Wave, comptes multiples, contournement)</td><td>Deactivation immediate + procedure judiciaire</td></tr>
          <tr><td>Conduite dangereuse manifeste</td><td>Suspension a deactivation</td></tr>
          <tr><td>Documents KYC perimes non regularises</td><td>Suspension automatique</td></tr>
        </tbody>
      </table>

      <h3>8.3. Procedure</h3>
      <p>
        Une sanction est notifiee au Livreur par l&apos;application et/ou
        WhatsApp, avec <strong>motif</strong> et <strong>duree</strong>. Le
        Livreur peut <strong>contester</strong> par ecrit a contact@poulzz.com
        dans un delai de <strong>7 jours</strong>. Yonima repond sous{" "}
        <strong>14 jours</strong>.
      </p>

      <h3>8.4. Pas de double compte</h3>
      <p>
        La tracabilite KYC empeche tout Livreur sanctionne de{" "}
        <strong>recreer un compte</strong> sous une autre identite. Toute
        tentative est constitutive d&apos;une fraude et peut donner lieu a
        action judiciaire.
      </p>

      <h2 id="chapitre-9">9. Suppression du compte</h2>

      <h3>9.1. A l&apos;initiative du Livreur</h3>
      <p>
        Le Livreur peut resilier son compte a tout moment depuis
        l&apos;application (<strong>Profil &gt; Parametres &gt; Supprimer mon
        compte</strong>) ou par email a contact@poulzz.com.
      </p>
      <p>Effets :</p>
      <ul>
        <li>Arret immediat du dispatch</li>
        <li>Versement final du solde</li>
        <li>Conservation des documents KYC et donnees comptables pour la duree legale</li>
        <li>Effacement du profil sous 30 jours</li>
      </ul>

      <h3>9.2. A l&apos;initiative de Yonima</h3>
      <p>
        Yonima peut resilier le Contrat <strong>sans preavis</strong> en cas de
        manquement grave (cf. &sect;8). Dans les autres cas, preavis de{" "}
        <strong>30 jours</strong>.
      </p>

      <h2 id="chapitre-10">10. Geolocalisation et permissions systeme</h2>

      <h3>10.1. Geolocalisation continue</h3>
      <p>
        La geolocalisation GPS est <strong>continue pendant les sessions
        actives</strong>, et <strong>indispensable</strong> au fonctionnement
        du service de dispatch. Le Livreur en est informe a l&apos;inscription
        et reconfirme par l&apos;acceptation des presentes CGU.
      </p>

      <h3>10.2. Notifications push</h3>
      <p>Le Livreur consent aux notifications push pour recevoir :</p>
      <ul>
        <li>Attributions de Courses</li>
        <li>Alertes statuts (commande prete, etc.)</li>
        <li>Communications operationnelles Yonima</li>
      </ul>

      <h2 id="chapitre-11">11. Propriete intellectuelle</h2>
      <p>
        Le nom <strong>Yonima</strong>, le logo, l&apos;application et la
        marque sont la propriete exclusive de POULZZ - SUARL. Le Livreur recoit
        un <strong>droit d&apos;usage non exclusif</strong> de l&apos;application
        pendant la duree du Contrat.
      </p>

      <h2 id="chapitre-12">12. Protection des donnees personnelles</h2>
      <p>
        Voir <a href="/privacy/rider">Politique de confidentialite Rider</a>.
      </p>

      <h2 id="chapitre-13">13. Responsabilite</h2>

      <h3>13.1. Responsabilite du Livreur</h3>
      <p>Le Livreur est <strong>seul responsable</strong> :</p>
      <ul>
        <li>De sa <strong>conduite</strong> et du respect du Code de la route</li>
        <li>Des <strong>accidents</strong> dans lesquels il est implique</li>
        <li>Des <strong>dommages causes a la marchandise</strong> transportee par sa negligence</li>
        <li>Des <strong>dommages causes a des tiers</strong> lors de ses Courses</li>
        <li>Du <strong>respect</strong> de ses obligations sociales et fiscales</li>
      </ul>

      <h3>13.2. Responsabilite de Yonima</h3>
      <p>
        Yonima est tenue a une <strong>obligation de moyens</strong>. Sa
        responsabilite est limitee :
      </p>
      <ul>
        <li>Aux <strong>dommages directs</strong> causes par un manquement avere de Yonima</li>
        <li>Au montant des <strong>remunerations versees</strong> au Livreur au cours des <strong>3 mois precedant</strong> le sinistre</li>
      </ul>
      <p>Yonima n&apos;est en <strong>aucun cas</strong> responsable :</p>
      <ul>
        <li>Des <strong>accidents de la circulation</strong> subis ou causes par le Livreur</li>
        <li>Des <strong>vols</strong> ou degradations dont le Livreur peut etre victime</li>
        <li>Des <strong>dommages indirects</strong></li>
        <li>Des cas de <strong>force majeure</strong></li>
      </ul>

      <h3>13.3. Assurance</h3>
      <p>
        Le Livreur <strong>doit disposer</strong> d&apos;une assurance
        responsabilite civile professionnelle ou personnelle adaptee. Yonima
        peut demander le justificatif a tout moment.
      </p>

      <h2 id="chapitre-14">14. Force majeure</h2>
      <p>Definitions identiques a l&apos;article 17 des CGU Client.</p>

      <h2 id="chapitre-15">15. Litiges et droit applicable</h2>

      <h3>15.1. Droit applicable</h3>
      <p>Droit senegalais.</p>

      <h3>15.2. Resolution amiable</h3>
      <p>
        Avant toute action contentieuse, les parties s&apos;engagent a
        rechercher une solution amiable. Yonima repond aux signalements{" "}
        <strong>sous 7 jours ouvres</strong>.
      </p>

      <h3>15.3. Juridiction</h3>
      <p>
        Tribunaux competents de Dakar, sauf disposition legale imperative
        contraire.
      </p>

      <h2 id="chapitre-16">16. Dispositions generales</h2>
      <ul>
        <li><strong>Nullite partielle</strong> : les autres stipulations demeurent en vigueur.</li>
        <li><strong>Cession</strong> : le Livreur ne peut pas ceder son compte ni les Courses qui lui sont attribuees. Yonima peut ceder ses droits avec information prealable.</li>
        <li><strong>Integralite</strong> : les presentes CGU constituent l&apos;integralite de l&apos;accord.</li>
      </ul>

      <h2 id="chapitre-17">17. Contact</h2>
      <ul>
        <li>Support operations : <a href="mailto:contact@poulzz.com">contact@poulzz.com</a></li>
        <li>WhatsApp : +221 76 295 70 97</li>
        <li>Adresse postale : POULZZ - SUARL, Bene Baraque, Ainoumady 2, Dakar 11000, Senegal</li>
        <li>Mentions legales : <a href="/legal">poulzz.com/legal</a></li>
      </ul>
    </LegalPageShell>
  );
}
