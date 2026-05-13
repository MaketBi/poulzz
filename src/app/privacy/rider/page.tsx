import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Politique de confidentialite - Yonima Rider (Livreur) - Poulzz",
  description:
    "Politique de confidentialite applicable aux livreurs partenaires utilisant l'application Yonima Rider.",
};

export default function PrivacyRiderPage() {
  return (
    <LegalPageShell
      title="Politique de confidentialite"
      appLabel="Yonima Rider - Livreur"
      version="1.0"
      lastUpdated="2026-05-12"
      otherVersions={[
        { href: "/privacy/client", label: "Politique de confidentialite - Yonima Plus (Client)" },
        { href: "/privacy/business", label: "Politique de confidentialite - Yonima Business (Vendeur)" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Donnees collectees" },
        { id: "chapitre-2", label: "2. Finalites du traitement" },
        { id: "chapitre-3", label: "3. Base juridique du traitement" },
        { id: "chapitre-4", label: "4. Partage des donnees avec des tiers" },
        { id: "chapitre-5", label: "5. Durees de conservation" },
        { id: "chapitre-6", label: "6. Droits du Livreur" },
        { id: "chapitre-7", label: "7. Cookies, traceurs et identifiants" },
        { id: "chapitre-8", label: "8. Securite" },
        { id: "chapitre-9", label: "9. Transferts hors Senegal" },
        { id: "chapitre-10", label: "10. Modifications" },
        { id: "chapitre-11", label: "11. Contact" },
      ]}
    >
      <h2 id="preambule">Preambule</h2>
      <p>
        La presente Politique de confidentialite decrit comment{" "}
        <strong>POULZZ - SUARL</strong> (ci-apres &laquo; Yonima &raquo;),
        editrice de l&apos;application <strong>Yonima Rider</strong> destinee
        aux livreurs partenaires, collecte, utilise, partage et protege les
        donnees personnelles des Livreurs utilisant l&apos;application.
      </p>
      <p>
        <strong>Responsable du traitement</strong> : POULZZ - SUARL -
        contact@poulzz.com (objet : &laquo; Donnees personnelles - Rider
        &raquo;).
      </p>

      <h2 id="chapitre-1">1. Donnees collectees</h2>

      <h3>1.1. Donnees d&apos;identification</h3>
      <ul>
        <li>Nom, prenom</li>
        <li>Numero de telephone (obligatoire - creation de compte via OTP)</li>
        <li>Adresse email (optionnelle)</li>
        <li>Photo de profil (recommandee pour reconnaissance Client)</li>
        <li>Date de naissance (verification majorite)</li>
      </ul>

      <h3>1.2. Donnees d&apos;identification professionnelle (KYC)</h3>
      <ul>
        <li>Carte d&apos;identite nationale (CIN) - photo recto/verso, conservee chiffree</li>
        <li>Permis de conduire si vehicule motorise</li>
        <li>Carte grise du vehicule</li>
        <li>Type de vehicule (moto, scooter, voiture, velo)</li>
        <li>Plaque d&apos;immatriculation</li>
      </ul>

      <h3>1.3. Donnees bancaires</h3>
      <ul>
        <li>Numero Wave / Maxit / Orange Money pour les versements</li>
        <li>Historique des courses et remunerations</li>
        <li>Justificatifs fiscaux si applicables</li>
      </ul>

      <h3>1.4. Donnees de geolocalisation</h3>
      <ul>
        <li>
          <strong>Position GPS continue pendant les sessions actives</strong>{" "}
          (online), indispensable au dispatch
        </li>
        <li>Position au demarrage et arret des courses</li>
        <li>Trajets effectues (duree, distance)</li>
        <li>Quartier de presence</li>
      </ul>
      <p>
        <strong>Important</strong> : La geolocalisation est <strong>continue</strong>{" "}
        pendant les sessions en ligne. Sans cette donnee, le service de dispatch
        ne peut pas fonctionner. L&apos;utilisateur peut suspendre la session a
        tout moment depuis l&apos;application, ce qui arrete immediatement la
        collecte de position.
      </p>

      <h3>1.5. Donnees operationnelles</h3>
      <ul>
        <li>Disponibilite (online / offline)</li>
        <li>Sessions actives (date debut, date fin, duree)</li>
        <li>Volume de courses acceptees, refusees, annulees</li>
        <li>Delais de pickup et de livraison</li>
        <li>Notations laissees par les Clients</li>
        <li>Incidents (refus de course, retard, plainte Client, contestations)</li>
        <li>Sanctions appliquees (avertissement, suspension temporaire, deactivation)</li>
      </ul>

      <h3>1.6. Donnees techniques</h3>
      <ul>
        <li>Type d&apos;appareil, modele, OS</li>
        <li>Identifiant de notification push (FCM / APNs)</li>
        <li>Identifiant publicitaire anonymise si permission accordee</li>
        <li>Logs d&apos;activite de l&apos;application</li>
      </ul>

      <h3>1.7. Donnees NON collectees</h3>
      <ul>
        <li>Identifiants Wave / Maxit en clair</li>
        <li>Numeros de carte bancaire</li>
        <li>Codes PIN</li>
      </ul>

      <h2 id="chapitre-2">2. Finalites du traitement</h2>
      <table>
        <thead>
          <tr>
            <th>Finalite</th>
            <th>Exemples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dispatch des courses</td>
            <td>Identification du livreur disponible le plus pertinent (distance, statut, scoring)</td>
          </tr>
          <tr>
            <td>Suivi du Client</td>
            <td>Position en temps reel partagee avec le Client pendant la livraison active</td>
          </tr>
          <tr>
            <td>Remuneration</td>
            <td>Calcul des paiements, virements, tracabilite comptable</td>
          </tr>
          <tr>
            <td>Suivi de la qualite de service</td>
            <td>Tableau de bord performances, sanctions automatiques</td>
          </tr>
          <tr>
            <td>KYC et conformite</td>
            <td>Verification de l&apos;identite, controle du droit de circulation, exigences reglementaires</td>
          </tr>
          <tr>
            <td>Lutter contre la fraude</td>
            <td>Detection de comptes fictifs, contournement de sanctions, manipulations de courses</td>
          </tr>
          <tr>
            <td>Respecter les obligations legales</td>
            <td>Comptabilite, declarations, reponse aux autorites</td>
          </tr>
        </tbody>
      </table>

      <h2 id="chapitre-3">3. Base juridique du traitement</h2>
      <table>
        <thead>
          <tr>
            <th>Finalite</th>
            <th>Base juridique</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Execution des courses et paiement</td>
            <td>Execution du contrat (CGU Rider)</td>
          </tr>
          <tr>
            <td>KYC et controle d&apos;identite</td>
            <td>Obligation legale + interet legitime</td>
          </tr>
          <tr>
            <td>Geolocalisation continue pendant les sessions actives</td>
            <td>Execution du contrat (sans ce traitement, le service ne peut pas fonctionner)</td>
          </tr>
          <tr>
            <td>Sanctions automatiques</td>
            <td>Interet legitime de Yonima et des Clients</td>
          </tr>
          <tr>
            <td>Comptabilite</td>
            <td>Obligation legale (5 ans)</td>
          </tr>
        </tbody>
      </table>

      <h2 id="chapitre-4">4. Partage des donnees avec des tiers</h2>
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
            <td><strong>Clients finaux</strong> (Yonima Plus)</td>
            <td>Prenom, photo, position en temps reel pendant la livraison active, telephone (masque si possible)</td>
            <td>Permettre le suivi et le contact</td>
          </tr>
          <tr>
            <td><strong>Vendeurs</strong> (Yonima Business)</td>
            <td>Prenom, telephone, position pendant le pickup</td>
            <td>Coordonner la remise</td>
          </tr>
          <tr>
            <td><strong>PayDunya</strong> (PSP)</td>
            <td>Reference transaction, montant</td>
            <td>Versements</td>
          </tr>
          <tr>
            <td><strong>Wave / Maxit</strong></td>
            <td>Identifiants techniques de versement</td>
            <td>Reversement</td>
          </tr>
          <tr>
            <td><strong>Supabase</strong></td>
            <td>Hebergement</td>
            <td>Stockage et traitement</td>
          </tr>
          <tr>
            <td><strong>PostHog</strong></td>
            <td>Evenements anonymises</td>
            <td>Analytics produit</td>
          </tr>
          <tr>
            <td><strong>Autorites judiciaires ou administratives</strong></td>
            <td>Donnees KYC, courses effectuees</td>
            <td>Sur demande legale dument justifiee</td>
          </tr>
        </tbody>
      </table>
      <p>
        La position GPS du Livreur <strong>n&apos;est jamais partagee avec un
        Client</strong> en dehors d&apos;une livraison active assignee a ce
        Client. Le partage cesse des la livraison terminee.
      </p>

      <h2 id="chapitre-5">5. Durees de conservation</h2>
      <table>
        <thead>
          <tr>
            <th>Donnee</th>
            <th>Duree</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Compte rider actif</td>
            <td>Toute la duree d&apos;utilisation</td>
          </tr>
          <tr>
            <td>Documents KYC (CIN, permis, carte grise)</td>
            <td>Toute la duree du compte + 5 ans apres desactivation</td>
          </tr>
          <tr>
            <td>Historique des courses et remunerations</td>
            <td><strong>10 ans</strong> (obligation comptable)</td>
          </tr>
          <tr>
            <td>Sessions en ligne (start/end)</td>
            <td>5 ans</td>
          </tr>
          <tr>
            <td>Logs de geolocalisation detailles</td>
            <td><strong>30 jours</strong> par defaut, 5 ans en cas d&apos;incident ouvert</td>
          </tr>
          <tr>
            <td>Donnees techniques (logs)</td>
            <td>13 mois</td>
          </tr>
          <tr>
            <td>Suite a cloture du compte</td>
            <td>Anonymisation profil sous 30 jours, conservation KYC et comptable legale</td>
          </tr>
        </tbody>
      </table>

      <h2 id="chapitre-6">6. Droits du Livreur</h2>
      <p>Memes droits que tout utilisateur (loi 2008-12 + RGPD) :</p>
      <ul>
        <li>Acces, rectification, effacement, portabilite, opposition, limitation</li>
        <li>
          Exercice : email a contact@poulzz.com (objet : &laquo; Donnees
          personnelles - Rider &raquo;) avec preuve d&apos;identite. Reponse sous
          30 jours.
        </li>
      </ul>

      <h3>6.1. Cas particulier - suppression de compte rider</h3>
      <ul>
        <li>Arret immediat des dispatch</li>
        <li>Versement du solde final via le moyen habituel</li>
        <li>Conservation des donnees KYC et comptables pour la duree legale</li>
        <li>Effacement du profil sous 30 jours</li>
        <li>
          Les sanctions actives ne peuvent pas etre contournees par une
          suppression puis une recreation : la tracabilite KYC empeche les
          comptes multiples
        </li>
      </ul>
      <p>
        Suppression : <strong>Profil &gt; Parametres &gt; Supprimer mon compte</strong>{" "}
        dans l&apos;application Yonima Rider, ou par email a contact@poulzz.com.
      </p>

      <h2 id="chapitre-7">7. Cookies, traceurs et identifiants</h2>
      <ul>
        <li>Identifiant push (FCM / APNs)</li>
        <li>Identifiant publicitaire si permission accordee</li>
        <li>PostHog pour l&apos;analytics anonymise</li>
        <li>Aucun cookie publicitaire tiers</li>
      </ul>

      <h2 id="chapitre-8">8. Securite</h2>
      <ul>
        <li>Chiffrement HTTPS/TLS</li>
        <li>Documents KYC chiffres au repos</li>
        <li>OTP 4 chiffres + rate limiting</li>
        <li>
          Acces restreint aux documents KYC (equipe ops Yonima uniquement, sous
          responsabilite du gerant)
        </li>
        <li>Audits reguliers</li>
      </ul>

      <h2 id="chapitre-9">9. Transferts hors Senegal</h2>
      <p>
        Sous-traitants identiques (Google Maps US, PostHog UE, Supabase selon
        region). Garanties via clauses contractuelles types.
      </p>

      <h2 id="chapitre-10">10. Modifications</h2>
      <p>Modification substantielle notifiee 15 jours avant entree en vigueur.</p>

      <h2 id="chapitre-11">11. Contact</h2>
      <ul>
        <li>
          Email : <a href="mailto:contact@poulzz.com">contact@poulzz.com</a>{" "}
          (objet : &laquo; Donnees personnelles - Rider &raquo;)
        </li>
        <li>WhatsApp : +221 76 295 70 97</li>
        <li>Adresse postale : POULZZ - SUARL, Bene Baraque, Ainoumady 2, Dakar 11000, Senegal</li>
        <li>Mentions legales : <a href="/legal">poulzz.com/legal</a></li>
      </ul>
    </LegalPageShell>
  );
}
