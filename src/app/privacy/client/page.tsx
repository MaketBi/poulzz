import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Politique de confidentialite - Yonima Plus (Client) - Poulzz",
  description:
    "Politique de confidentialite applicable aux clients utilisant l'application Yonima Plus.",
};

export default function PrivacyClientPage() {
  return (
    <LegalPageShell
      title="Politique de confidentialite"
      appLabel="Yonima Plus - Client"
      version="1.0"
      lastUpdated="2026-05-12"
      otherVersions={[
        { href: "/privacy/business", label: "Politique de confidentialite - Yonima Business (Vendeur)" },
        { href: "/privacy/rider", label: "Politique de confidentialite - Yonima Rider (Livreur)" },
      ]}
    >
      <h2>Preambule</h2>
      <p>
        La presente Politique de confidentialite decrit comment{" "}
        <strong>POULZZ - SUARL</strong> (ci-apres &laquo; <strong>Yonima</strong>{" "}
        &raquo; ou &laquo; <strong>Nous</strong> &raquo;), editrice de
        l&apos;application mobile <strong>Yonima Plus</strong> (ci-apres &laquo;
        l&apos;<strong>Application</strong> &raquo;), collecte, utilise, partage et
        protege les <strong>donnees personnelles</strong> des Utilisateurs.
      </p>
      <p>
        Pour les informations legales detaillees de la societe (RCCM, NINEA, siege,
        gerant), se referer aux <a href="/legal">mentions legales</a>.
      </p>

      <h3>Responsable du traitement</h3>
      <p>
        POULZZ - SUARL est le <strong>responsable du traitement</strong> au sens de
        la <strong>loi senegalaise n&deg; 2008-12 du 25 janvier 2008</strong> sur la
        protection des donnees a caractere personnel, et du <strong>Reglement
        General sur la Protection des Donnees (RGPD)</strong> pour les Utilisateurs
        residents en Europe.
      </p>
      <p>
        <strong>Contact pour toute demande relative aux donnees personnelles</strong>{" "}
        : contact@poulzz.com (objet : &laquo; Donnees personnelles &raquo;).
      </p>

      <h3>Cadre juridique applicable</h3>
      <ul>
        <li>
          <strong>Loi senegalaise n&deg; 2008-12</strong> du 25 janvier 2008 sur la
          protection des donnees a caractere personnel
        </li>
        <li>
          <strong>RGPD</strong> (Reglement UE 2016/679) pour les Utilisateurs
          residents en Union europeenne
        </li>
        <li>
          Recommandations de la <strong>Commission de Protection des Donnees
          Personnelles (CDP) du Senegal</strong>
        </li>
      </ul>

      <h2>1. Donnees collectees</h2>
      <p>
        Yonima collecte les categories de donnees suivantes lors de l&apos;utilisation
        de l&apos;Application :
      </p>

      <h3>1.1. Donnees d&apos;identification</h3>
      <ul>
        <li>Nom, prenom</li>
        <li>Numero de telephone (obligatoire pour la creation du Compte via OTP)</li>
        <li>Adresse email (optionnelle)</li>
        <li>Photo de profil (optionnelle)</li>
      </ul>

      <h3>1.2. Donnees de localisation</h3>
      <ul>
        <li>Adresses de livraison sauvegardees</li>
        <li>
          Position GPS au demarrage et au moment de la commande (uniquement si
          l&apos;autorisation systeme a ete accordee)
        </li>
        <li>Quartier detecte automatiquement lors de la commande</li>
      </ul>

      <h3>1.3. Donnees de Commandes</h3>
      <ul>
        <li>Historique des Commandes (date, vendor, articles, montants)</li>
        <li>
          Modes de paiement utilises (Wave, Maxit, especes - sans les identifiants
          ni les coordonnees bancaires)
        </li>
        <li>Statuts de livraison</li>
        <li>Evaluations et avis (si l&apos;Utilisateur en laisse)</li>
      </ul>

      <h3>1.4. Preferences</h3>
      <ul>
        <li>Favoris (vendors, produits)</li>
        <li>Langue</li>
        <li>Parametres de notification</li>
      </ul>

      <h3>1.5. Donnees techniques</h3>
      <ul>
        <li>Type d&apos;appareil, marque, modele</li>
        <li>Version du systeme d&apos;exploitation (Android / iOS)</li>
        <li>Version de l&apos;Application</li>
        <li>Identifiant de notification push (token FCM / APNs)</li>
        <li>
          Identifiants publicitaires anonymises (uniquement si l&apos;autorisation
          systeme a ete accordee)
        </li>
      </ul>

      <h3>1.6. Donnees comportementales</h3>
      <ul>
        <li>Pages consultees dans l&apos;Application</li>
        <li>Recherches effectuees</li>
        <li>Clics sur les contenus sponsorises</li>
        <li>Interactions avec les notifications</li>
      </ul>

      <h3>1.7. Donnees NON collectees</h3>
      <p>
        Yonima ne stocke <strong>jamais</strong> :
      </p>
      <ul>
        <li>Les identifiants Wave, Maxit ou Orange Money en clair</li>
        <li>Les numeros de carte bancaire</li>
        <li>Les codes PIN ou mots de passe de paiement</li>
      </ul>
      <p>
        Ces informations sensibles sont gerees exclusivement par notre{" "}
        <strong>prestataire de services de paiement (PSP) PayDunya</strong> et les
        operateurs Wave / Orange / Maxit eux-memes.
      </p>

      <h2>2. Finalites du traitement</h2>
      <p>
        Les donnees collectees sont utilisees exclusivement pour les finalites
        suivantes :
      </p>
      <table>
        <thead>
          <tr>
            <th>Finalite</th>
            <th>Exemples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Fournir le service de commande et de livraison</strong></td>
            <td>Preparer la commande, l&apos;acheminer, traiter le paiement, contacter le client en cas de probleme</td>
          </tr>
          <tr>
            <td><strong>Personnaliser l&apos;experience</strong></td>
            <td>Suggestions de restaurants, programme de fidelite, recommandations basees sur l&apos;historique</td>
          </tr>
          <tr>
            <td><strong>Ameliorer l&apos;Application</strong></td>
            <td>Analytics anonymises via PostHog, mesure de performance, detection de bugs</td>
          </tr>
          <tr>
            <td><strong>Communiquer avec l&apos;Utilisateur</strong></td>
            <td>Notifications transactionnelles (confirmation, statut, code de livraison), reponses au support</td>
          </tr>
          <tr>
            <td><strong>Lutter contre la fraude</strong></td>
            <td>Detection de comptes multiples, paiements frauduleux, fausses reclamations</td>
          </tr>
          <tr>
            <td><strong>Respecter les obligations legales</strong></td>
            <td>Comptabilite, lutte anti-blanchiment, reponse a des demandes d&apos;autorites judiciaires</td>
          </tr>
          <tr>
            <td><strong>Marketing (avec consentement)</strong></td>
            <td>Communications promotionnelles, offres ciblees (desactivable a tout moment)</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Base juridique du traitement</h2>
      <p>
        Pour chaque finalite, Yonima identifie une <strong>base juridique</strong>{" "}
        conforme a la loi senegalaise et au RGPD :
      </p>
      <table>
        <thead>
          <tr>
            <th>Finalite</th>
            <th>Base juridique</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Creation du Compte et execution des commandes</td>
            <td><strong>Execution du contrat</strong> (CGU/CGV)</td>
          </tr>
          <tr>
            <td>Lutte contre la fraude</td>
            <td><strong>Interet legitime</strong> de Yonima</td>
          </tr>
          <tr>
            <td>Comptabilite, conservation legale des commandes</td>
            <td><strong>Obligation legale</strong> (5 ans)</td>
          </tr>
          <tr>
            <td>Personnalisation et ameliorations</td>
            <td><strong>Interet legitime</strong> + parametres ajustables par l&apos;Utilisateur</td>
          </tr>
          <tr>
            <td>Marketing direct</td>
            <td><strong>Consentement</strong> explicite et revocable</td>
          </tr>
          <tr>
            <td>Geolocalisation precise</td>
            <td><strong>Consentement</strong> via permission systeme (refusable)</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Partage des donnees avec des tiers</h2>

      <h3>4.1. Principe general</h3>
      <p>
        Yonima ne <strong>vend jamais</strong> les donnees des Utilisateurs a des
        tiers a des fins commerciales.
      </p>

      <h3>4.2. Partenaires operationnels (sous-traitants)</h3>
      <p>
        Certaines donnees sont partagees avec des partenaires strictement
        necessaires au service :
      </p>
      <table>
        <thead>
          <tr>
            <th>Partenaire</th>
            <th>Donnees partagees</th>
            <th>Finalite</th>
            <th>Localisation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Vendeur</strong> selectionne par le Client</td>
            <td>Nom, prenom, telephone, adresse de livraison</td>
            <td>Preparer la Commande</td>
            <td>Senegal</td>
          </tr>
          <tr>
            <td><strong>Livreur</strong> assigne</td>
            <td>Prenom, telephone, adresse de livraison</td>
            <td>Effectuer la livraison</td>
            <td>Senegal</td>
          </tr>
          <tr>
            <td><strong>PayDunya</strong> (PSP)</td>
            <td>Reference de transaction, montant, methode</td>
            <td>Traiter le paiement Wave / Maxit</td>
            <td>Senegal</td>
          </tr>
          <tr>
            <td><strong>Wave Mobile Money</strong></td>
            <td>Identifiants techniques de transaction</td>
            <td>Traiter le paiement</td>
            <td>Senegal</td>
          </tr>
          <tr>
            <td><strong>Orange Money / Maxit</strong></td>
            <td>Identifiants techniques de transaction</td>
            <td>Traiter le paiement</td>
            <td>Senegal</td>
          </tr>
          <tr>
            <td><strong>Google Maps</strong> (Google LLC)</td>
            <td>Coordonnees GPS pour geocodage et calcul d&apos;itineraire</td>
            <td>Estimer delais et frais de livraison</td>
            <td>Etats-Unis</td>
          </tr>
          <tr>
            <td><strong>Supabase</strong></td>
            <td>Hebergement infrastructure cloud (PostgreSQL, edge functions, storage)</td>
            <td>Stockage et traitement des donnees</td>
            <td>Selon region configuree</td>
          </tr>
          <tr>
            <td><strong>PostHog</strong></td>
            <td>Evenements anonymises d&apos;usage (clics, ecrans visites)</td>
            <td>Analytics produit</td>
            <td>Union europeenne</td>
          </tr>
        </tbody>
      </table>

      <h3>4.3. Autorites</h3>
      <p>
        Yonima peut partager certaines donnees avec des <strong>autorites
        judiciaires ou administratives</strong> sur demande legale dument
        justifiee.
      </p>

      <h2>5. Durees de conservation</h2>
      <table>
        <thead>
          <tr>
            <th>Donnee</th>
            <th>Duree</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Compte actif</strong></td>
            <td>Toute la duree d&apos;utilisation de l&apos;Application</td>
          </tr>
          <tr>
            <td><strong>Donnees de Commandes</strong> (date, montant, vendor, statut)</td>
            <td><strong>5 ans</strong> apres la derniere commande (obligations comptables et fiscales senegalaises)</td>
          </tr>
          <tr>
            <td><strong>Donnees techniques</strong> (logs, analytics)</td>
            <td><strong>13 mois maximum</strong></td>
          </tr>
          <tr>
            <td><strong>Donnees de paiement</strong> (cote PSP)</td>
            <td>Selon la politique de PayDunya, Wave et Orange</td>
          </tr>
          <tr>
            <td><strong>Suite a suppression du Compte</strong></td>
            <td>Anonymisation des donnees personnelles sous <strong>30 jours</strong>, sauf obligations legales</td>
          </tr>
        </tbody>
      </table>

      <h2>6. Droits de l&apos;Utilisateur</h2>
      <p>
        Conformement a la loi senegalaise n&deg; 2008-12 et au RGPD,
        l&apos;Utilisateur dispose des droits suivants :
      </p>

      <h3>6.1. Droit d&apos;acces</h3>
      <p>
        L&apos;Utilisateur peut demander <strong>une copie complete</strong> de
        ses donnees personnelles detenues par Yonima.
      </p>

      <h3>6.2. Droit de rectification</h3>
      <p>
        L&apos;Utilisateur peut demander la <strong>correction</strong> de toute
        donnee inexacte ou incomplete. Plusieurs informations sont directement
        modifiables depuis le profil de l&apos;Application (nom, photo, adresses,
        preferences).
      </p>

      <h3>6.3. Droit a l&apos;effacement (&laquo; droit a l&apos;oubli &raquo;)</h3>
      <p>
        L&apos;Utilisateur peut demander la <strong>suppression de ses donnees</strong>,
        sauf obligations legales contraires (notamment la conservation comptable
        de 5 ans des Commandes).
      </p>

      <h3>6.4. Droit a la portabilite</h3>
      <p>
        L&apos;Utilisateur peut demander a recevoir ses donnees dans un{" "}
        <strong>format structure, lisible automatiquement</strong> (JSON, CSV).
      </p>

      <h3>6.5. Droit d&apos;opposition</h3>
      <p>
        L&apos;Utilisateur peut <strong>s&apos;opposer</strong> au traitement de
        ses donnees a des fins de marketing direct, a tout moment, sans avoir a
        se justifier.
      </p>

      <h3>6.6. Droit a la limitation du traitement</h3>
      <p>
        L&apos;Utilisateur peut demander la <strong>suspension temporaire</strong>{" "}
        du traitement de ses donnees, par exemple le temps de contester
        l&apos;exactitude d&apos;une donnee.
      </p>

      <h3>6.7. Comment exercer ces droits</h3>
      <p>
        L&apos;Utilisateur ecrit a <strong>contact@poulzz.com</strong> (objet :
        &laquo; Donnees personnelles &raquo;) avec une <strong>preuve
        d&apos;identite</strong>. Yonima repond dans un delai maximum de{" "}
        <strong>30 jours</strong> a compter de la reception de la demande
        complete.
      </p>
      <p>
        Certaines actions sont egalement disponibles directement depuis
        l&apos;Application :
      </p>
      <ul>
        <li>
          <strong>Modifier</strong> son nom, photo, adresses : Profil &gt;
          Parametres
        </li>
        <li>
          <strong>Supprimer son Compte</strong> : Profil &gt; Parametres &gt;
          Supprimer mon compte
        </li>
      </ul>

      <h3>6.8. Supprimer son compte Yonima Plus</h3>
      <p>Vous pouvez supprimer votre compte a tout moment :</p>
      <ul>
        <li>
          <strong>Depuis l&apos;application</strong> : Profil &gt; Parametres
          &gt; Supprimer mon compte
        </li>
        <li>
          <strong>Depuis le site web</strong> :{" "}
          <a href="/delete-account">poulzz.com/delete-account</a>
        </li>
        <li>
          <strong>Par email</strong> : contact@poulzz.com avec preuve
          d&apos;identite
        </li>
      </ul>
      <p>
        Consequences : effacement definitif de vos donnees de profil sous 30
        jours, conservation anonymisee des donnees de commande 5 ans pour
        obligations comptables, perte des points de fidelite, livraison normale
        des commandes en cours.
      </p>

      <h2>7. Cookies, traceurs et identifiants</h2>

      <h3>7.1. Sur l&apos;Application mobile</h3>
      <p>L&apos;Application utilise les elements suivants :</p>
      <ul>
        <li>
          <strong>Identifiant de notification push</strong> (FCM Android / APNs
          iOS) pour recevoir les notifications transactionnelles
        </li>
        <li>
          <strong>Identifiant publicitaire anonymise</strong> (Google Advertising
          ID / Apple IDFA), uniquement si la permission systeme a ete accordee
        </li>
        <li>
          <strong>PostHog</strong> : analytics anonymises sur les ecrans visites,
          clics et interactions, heberges en Union europeenne
        </li>
      </ul>
      <p>
        <strong>Aucun cookie publicitaire tiers</strong> (Google Analytics,
        Facebook Pixel, etc.) n&apos;est deploye en V1.
      </p>

      <h3>7.2. Sur le site web (poulzz.com)</h3>
      <p>
        Le site web officiel utilise des cookies techniques necessaires a son
        fonctionnement. Une banniere de consentement informe les visiteurs lors
        de leur premiere visite.
      </p>

      <h2>8. Securite</h2>
      <p>Yonima met en oeuvre les mesures de securite suivantes :</p>
      <ul>
        <li>
          <strong>Chiffrement</strong> des donnees en transit (HTTPS/TLS) entre
          l&apos;Application et nos serveurs
        </li>
        <li>
          <strong>Chiffrement</strong> des donnees sensibles au repos (mots de
          passe, tokens)
        </li>
        <li>
          <strong>Authentification forte</strong> par OTP a 4 chiffres + rate
          limiting (5 tentatives max sur une periode courte)
        </li>
        <li>
          <strong>Acces restreint</strong> aux donnees : seuls les membres de
          l&apos;equipe Yonima ayant un besoin operationnel peuvent acceder aux
          donnees personnelles, sous responsabilite du gerant
        </li>
        <li>
          <strong>Audits reguliers</strong> des acces et des configurations
        </li>
      </ul>
      <p>
        En cas d&apos;<strong>incident de securite</strong> affectant les donnees
        personnelles (&laquo; data breach &raquo;), Yonima informe la CDP du
        Senegal et les Utilisateurs concernes dans les delais legaux applicables
        (72 heures au sens du RGPD pour les Utilisateurs europeens concernes).
      </p>

      <h2>9. Transferts de donnees hors Senegal</h2>
      <p>
        Certains traitements impliquent des transferts de donnees vers des pays
        tiers :
      </p>
      <table>
        <thead>
          <tr>
            <th>Sous-traitant</th>
            <th>Pays</th>
            <th>Garanties</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Google Maps</strong></td>
            <td>Etats-Unis</td>
            <td>Clauses contractuelles types (CCT) Google ; programme Data Privacy Framework</td>
          </tr>
          <tr>
            <td><strong>PostHog</strong></td>
            <td>Union europeenne</td>
            <td>Conformite RGPD native</td>
          </tr>
          <tr>
            <td><strong>Supabase</strong></td>
            <td>Selon politique Supabase (regions configurables)</td>
            <td>Engagements contractuels Supabase, chiffrement bout en bout</td>
          </tr>
        </tbody>
      </table>
      <p>
        Yonima s&apos;assure que <strong>chaque sous-traitant</strong> presente
        des garanties adequates de protection des donnees equivalentes aux
        exigences senegalaises et europeennes.
      </p>

      <h2>10. Delegue a la Protection des Donnees (DPO)</h2>
      <p>
        Yonima n&apos;a <strong>pas designe de DPO formel</strong> a ce jour. En
        attendant cette designation, toutes les demandes liees aux donnees
        personnelles peuvent etre adressees a <strong>contact@poulzz.com</strong>,
        sous la responsabilite du gerant <strong>Mamadou Diop</strong>.
      </p>

      <h2>11. Reclamation aupres de la CDP</h2>
      <p>
        Si l&apos;Utilisateur estime que ses droits ne sont pas respectes, il
        peut adresser une <strong>reclamation</strong> a la :
      </p>
      <p>
        <strong>Commission de Protection des Donnees Personnelles (CDP) du
        Senegal</strong>
        <br />
        Site web :{" "}
        <a href="https://www.cdp.sn" target="_blank" rel="noopener noreferrer">
          www.cdp.sn
        </a>
      </p>
      <p>
        L&apos;Utilisateur peut egalement saisir directement la{" "}
        <strong>juridiction competente</strong>.
      </p>

      <h2>12. Modifications de la Politique de confidentialite</h2>
      <p>
        Yonima se reserve le droit de <strong>modifier</strong> la presente
        Politique a tout moment.
      </p>
      <ul>
        <li>
          Toute modification <strong>substantielle</strong> sera notifiee a
          l&apos;Utilisateur <strong>au moins 15 jours</strong> avant son entree
          en vigueur, par notification push et/ou ecran dedie a l&apos;ouverture
          de l&apos;Application.
        </li>
        <li>
          L&apos;Utilisateur peut, a ce moment-la, <strong>s&apos;opposer</strong>{" "}
          aux modifications en supprimant son Compte.
        </li>
      </ul>

      <h2>13. Contact</h2>
      <ul>
        <li>
          <strong>Email</strong> :{" "}
          <a href="mailto:contact@poulzz.com">contact@poulzz.com</a> (objet :
          &laquo; Donnees personnelles &raquo;)
        </li>
        <li>
          <strong>WhatsApp</strong> : +221 76 295 70 97
        </li>
        <li>
          <strong>Adresse postale</strong> : POULZZ - SUARL, Bene Baraque,
          Ainoumady 2, Dakar 11000, Senegal
        </li>
        <li>
          <strong>Mentions legales</strong> : <a href="/legal">poulzz.com/legal</a>
        </li>
      </ul>
    </LegalPageShell>
  );
}
