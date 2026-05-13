import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Politique de confidentialite - Yonima Business (Vendeur) - Poulzz",
  description:
    "Politique de confidentialite applicable aux restaurants et vendeurs partenaires utilisant l'application Yonima Business.",
};

export default function PrivacyBusinessPage() {
  return (
    <LegalPageShell
      title="Politique de confidentialite"
      appLabel="Yonima Business - Vendeur"
      version="1.0"
      lastUpdated="2026-05-12"
      otherVersions={[
        { href: "/privacy/client", label: "Politique de confidentialite - Yonima Plus (Client)" },
        { href: "/privacy/rider", label: "Politique de confidentialite - Yonima Rider (Livreur)" },
      ]}
    >
      <h2>Preambule</h2>
      <p>
        La presente Politique de confidentialite decrit comment{" "}
        <strong>POULZZ - SUARL</strong> (ci-apres &laquo; Yonima &raquo; ou
        &laquo; Nous &raquo;), editrice de l&apos;application{" "}
        <strong>Yonima Business</strong> destinee aux vendeurs partenaires
        (restaurants en V1), collecte, utilise, partage et protege les donnees
        personnelles des <strong>Vendeurs</strong> et de leurs{" "}
        <strong>collaborateurs autorises</strong> utilisant l&apos;application.
      </p>
      <p>
        <strong>Responsable du traitement</strong> : POULZZ - SUARL -
        contact@poulzz.com (objet : &laquo; Donnees personnelles - Business
        &raquo;).
      </p>
      <p>
        Cadre juridique applicable : loi senegalaise n&deg; 2008-12 du 25 janvier
        2008 sur la protection des donnees a caractere personnel, recommandations
        de la CDP.
      </p>

      <h2>1. Donnees collectees</h2>

      <h3>1.1. Donnees d&apos;identification du Vendeur (personne morale)</h3>
      <ul>
        <li>Raison sociale, forme juridique</li>
        <li>NINEA, RCCM</li>
        <li>Adresse du siege social</li>
        <li>Adresse(s) de l&apos;etablissement operationnel</li>
        <li>Type d&apos;activite (restaurant, a terme epicerie ou autre commerce)</li>
      </ul>

      <h3>1.2. Donnees d&apos;identification du representant legal et collaborateurs</h3>
      <ul>
        <li>Nom, prenom du gerant ou representant</li>
        <li>Numero de telephone (obligatoire pour la creation du compte via OTP)</li>
        <li>Adresse email</li>
        <li>Photo de profil (optionnelle)</li>
        <li>Role au sein de l&apos;etablissement (gerant, employe autorise)</li>
      </ul>

      <h3>1.3. Donnees bancaires et financieres</h3>
      <ul>
        <li>Numero Wave / Maxit / Orange Money associe pour les versements</li>
        <li>
          Historique des transactions Plateforme (montants encaisses, commissions
          retenues, versements effectues)
        </li>
        <li>Informations fiscales necessaires (NINEA, justificatifs si applicables)</li>
      </ul>
      <p>
        <strong>Important</strong> : Yonima ne stocke jamais en clair les
        identifiants de connexion Wave / Maxit / Orange Money. Les versements
        sont effectues via notre prestataire de services de paiement.
      </p>

      <h3>1.4. Donnees operationnelles</h3>
      <ul>
        <li>Catalogue produits (nom, photos, prix, descriptions)</li>
        <li>Horaires d&apos;ouverture et de service</li>
        <li>Capacite de production (estimation des temps de preparation)</li>
        <li>Zone de service / livraison</li>
        <li>Mode de livraison choisi (<code>pool_only</code>, <code>internal_only</code>, <code>hybrid</code>)</li>
        <li>Mode d&apos;acceptation (<code>accepts_cash</code> ou non)</li>
      </ul>

      <h3>1.5. Donnees comportementales et performance</h3>
      <ul>
        <li>Volume de commandes acceptees / refusees</li>
        <li>Delais de preparation moyens</li>
        <li>Taux d&apos;acceptation</li>
        <li>Notations et avis laisses par les Clients</li>
        <li>Incidents signales (annulations, plaintes Client, ruptures de stock)</li>
        <li>Sessions d&apos;utilisation de l&apos;application (duree, ecrans consultes)</li>
      </ul>

      <h3>1.6. Donnees techniques</h3>
      <ul>
        <li>Type d&apos;appareil (modele, OS, version)</li>
        <li>Identifiant de notification push (token FCM / APNs)</li>
        <li>Logs d&apos;activite dans l&apos;application</li>
      </ul>

      <h3>1.7. Donnees NON collectees</h3>
      <ul>
        <li>Identifiants Wave / Maxit en clair</li>
        <li>Numeros de carte bancaire</li>
        <li>Codes PIN ou mots de passe</li>
      </ul>

      <h2>2. Finalites du traitement</h2>
      <table>
        <thead>
          <tr>
            <th>Finalite</th>
            <th>Exemples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fournir le service de mise en relation Vendeur - Client</td>
            <td>Referencement, gestion du catalogue, dispatch des commandes</td>
          </tr>
          <tr>
            <td>Encaisser et reverser les paiements</td>
            <td>Calcul de commission, virements Wave / Maxit, rapprochement comptable</td>
          </tr>
          <tr>
            <td>Suivre la qualite de service</td>
            <td>Tableau de bord performances, alertes seuils, notations</td>
          </tr>
          <tr>
            <td>Lutter contre la fraude vendor</td>
            <td>Detection de comptes fictifs, fausses commandes, manipulations de notes</td>
          </tr>
          <tr>
            <td>Respecter les obligations legales</td>
            <td>Comptabilite, declarations fiscales, lutte anti-blanchiment</td>
          </tr>
          <tr>
            <td>Communiquer avec le Vendeur</td>
            <td>Notifications transactionnelles (commande, paiement, alertes), support</td>
          </tr>
          <tr>
            <td>Ameliorer l&apos;application</td>
            <td>Analytics anonymises via PostHog</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Base juridique du traitement</h2>
      <table>
        <thead>
          <tr>
            <th>Finalite</th>
            <th>Base juridique</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Referencement et execution des commandes</td>
            <td>Execution du contrat (CGU Business)</td>
          </tr>
          <tr>
            <td>Encaissement et reversement</td>
            <td>Execution du contrat + obligation legale</td>
          </tr>
          <tr>
            <td>Lutte contre la fraude</td>
            <td>Interet legitime de Yonima</td>
          </tr>
          <tr>
            <td>Comptabilite, conservation des transactions</td>
            <td>Obligation legale (5 ans)</td>
          </tr>
          <tr>
            <td>Ameliorations produit</td>
            <td>Interet legitime + parametres ajustables</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Partage des donnees avec des tiers</h2>
      <table>
        <thead>
          <tr>
            <th>Partenaire</th>
            <th>Donnees partagees</th>
            <th>Finalite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Clients finaux</strong> (via l&apos;app Yonima Plus)</td>
            <td>Nom commercial de l&apos;etablissement, photos, catalogue, horaires, notations</td>
            <td>Permettre la commande</td>
          </tr>
          <tr>
            <td><strong>Livreurs assignes</strong> (via Yonima Rider)</td>
            <td>Adresse de l&apos;etablissement, telephone, instructions de retrait</td>
            <td>Effectuer le pickup</td>
          </tr>
          <tr>
            <td><strong>PayDunya</strong> (PSP)</td>
            <td>Reference de transaction, montant, methode</td>
            <td>Versements</td>
          </tr>
          <tr>
            <td><strong>Wave / Maxit</strong></td>
            <td>Identifiants techniques de versement</td>
            <td>Reversement effectif</td>
          </tr>
          <tr>
            <td><strong>Supabase</strong></td>
            <td>Hebergement infrastructure cloud</td>
            <td>Stockage et traitement</td>
          </tr>
          <tr>
            <td><strong>PostHog</strong></td>
            <td>Evenements anonymises d&apos;usage</td>
            <td>Analytics produit</td>
          </tr>
          <tr>
            <td><strong>Autorites fiscales senegalaises</strong></td>
            <td>Donnees comptables si requises</td>
            <td>Obligations legales</td>
          </tr>
        </tbody>
      </table>
      <p>
        Yonima ne <strong>vend jamais</strong> les donnees des Vendeurs a des
        tiers a des fins commerciales.
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
            <td>Compte vendor actif</td>
            <td>Toute la duree d&apos;utilisation de l&apos;application</td>
          </tr>
          <tr>
            <td>Transactions financieres (factures, versements, commissions)</td>
            <td><strong>10 ans</strong> (obligation comptable senegalaise)</td>
          </tr>
          <tr>
            <td>Catalogue produits historique</td>
            <td>5 ans apres desactivation</td>
          </tr>
          <tr>
            <td>Donnees techniques (logs)</td>
            <td>13 mois maximum</td>
          </tr>
          <tr>
            <td>Suite a cloture du compte</td>
            <td>Anonymisation sous 30 jours, conservation comptable legale</td>
          </tr>
        </tbody>
      </table>

      <h2>6. Droits du Vendeur</h2>
      <p>
        Le Vendeur (ou son representant legal) dispose des memes droits que tout
        utilisateur au sens de la loi 2008-12 et du RGPD :
      </p>
      <ul>
        <li>Droit d&apos;acces, rectification, effacement, portabilite, opposition, limitation</li>
        <li>
          Comment les exercer : email a contact@poulzz.com (objet : &laquo;
          Donnees personnelles - Business &raquo;) avec preuve d&apos;identite du
          representant legal. Yonima repond sous 30 jours.
        </li>
      </ul>

      <h3>6.1. Cas particulier - suppression de compte vendor</h3>
      <p>La suppression d&apos;un compte vendor implique :</p>
      <ul>
        <li>L&apos;arret immediat du referencement sur l&apos;application Yonima Plus</li>
        <li>Le traitement et l&apos;encaissement final de toutes les commandes en cours</li>
        <li>Le versement de tout solde restant via le moyen habituel (Wave / Maxit)</li>
        <li>La conservation des donnees comptables et transactionnelles pour la duree legale de 10 ans</li>
        <li>L&apos;effacement des donnees de profil non comptables sous 30 jours</li>
      </ul>
      <p>
        Suppression depuis : <strong>Profil &gt; Parametres &gt; Supprimer mon
        compte</strong> dans l&apos;application Yonima Business, ou par email a
        contact@poulzz.com.
      </p>

      <h2>7. Cookies, traceurs et identifiants</h2>
      <p>L&apos;application Yonima Business utilise :</p>
      <ul>
        <li>Identifiant de notification push (FCM / APNs) pour les alertes commandes</li>
        <li>PostHog pour l&apos;analytics anonymise (heberge en UE)</li>
        <li>Aucun cookie publicitaire tiers</li>
      </ul>

      <h2>8. Securite</h2>
      <p>Memes mesures que pour la Politique de confidentialite Client :</p>
      <ul>
        <li>Chiffrement HTTPS/TLS</li>
        <li>OTP 4 chiffres + rate limiting (3 tentatives max)</li>
        <li>Acces restreint aux donnees operationnelles</li>
        <li>Audits reguliers</li>
      </ul>
      <p>
        En cas de data breach affectant des donnees vendor, notification CDP du
        Senegal dans les delais legaux applicables.
      </p>

      <h2>9. Transferts hors Senegal</h2>
      <p>
        Memes sous-traitants que pour la Politique Client (Google Maps US,
        PostHog UE, Supabase selon region configuree). Garanties via clauses
        contractuelles types et engagements DPF.
      </p>

      <h2>10. Modifications</h2>
      <p>
        Toute modification substantielle est notifiee au Vendeur au moins{" "}
        <strong>15 jours</strong> avant entree en vigueur, par notification push
        et ecran dedie a l&apos;ouverture de l&apos;application Business.
      </p>

      <h2>11. Contact</h2>
      <ul>
        <li>
          Email : <a href="mailto:contact@poulzz.com">contact@poulzz.com</a>{" "}
          (objet : &laquo; Donnees personnelles - Business &raquo;)
        </li>
        <li>WhatsApp : +221 76 295 70 97</li>
        <li>Adresse postale : POULZZ - SUARL, Bene Baraque, Ainoumady 2, Dakar 11000, Senegal</li>
        <li>Site web : <a href="https://poulzz.com">https://poulzz.com</a></li>
        <li>Mentions legales : <a href="/legal">poulzz.com/legal</a></li>
      </ul>
    </LegalPageShell>
  );
}
