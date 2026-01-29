import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialite - Poulzz",
  description: "Politique de confidentialite des applications Yonima",
};

export default function PrivacyPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Politique de confidentialite
        </h1>
        <p className="mt-4 text-gray-500">
          Derniere mise a jour : {new Date().toLocaleDateString("fr-FR")}
        </p>

        <div className="mt-12 prose prose-gray max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Poulzz (&quot;nous&quot;, &quot;notre&quot;) exploite les applications mobiles Yonima
            Plus, Yonima Rider et Yonima Vendeur. Cette politique de
            confidentialite explique comment nous collectons, utilisons et
            protegeons vos informations personnelles.
          </p>

          <h2>2. Informations que nous collectons</h2>
          <h3>2.1 Informations que vous nous fournissez</h3>
          <ul>
            <li>Nom et prenom</li>
            <li>Numero de telephone</li>
            <li>Adresse email</li>
            <li>Adresses de livraison</li>
            <li>Informations de paiement (traitees par nos partenaires de paiement securises)</li>
          </ul>

          <h3>2.2 Informations collectees automatiquement</h3>
          <ul>
            <li>Donnees de localisation (pour les livraisons et le suivi)</li>
            <li>Informations sur l&apos;appareil (modele, systeme d&apos;exploitation)</li>
            <li>Journaux d&apos;utilisation de l&apos;application</li>
            <li>Identifiants publicitaires</li>
          </ul>

          <h2>3. Utilisation des informations</h2>
          <p>Nous utilisons vos informations pour :</p>
          <ul>
            <li>Fournir et ameliorer nos services de livraison</li>
            <li>Traiter vos commandes et paiements</li>
            <li>Vous envoyer des notifications sur vos commandes</li>
            <li>Ameliorer l&apos;experience utilisateur</li>
            <li>Assurer la securite de notre plateforme</li>
            <li>Respecter nos obligations legales</li>
          </ul>

          <h2>4. Partage des informations</h2>
          <p>
            Nous pouvons partager vos informations avec :
          </p>
          <ul>
            <li>Les restaurants et vendeurs pour preparer vos commandes</li>
            <li>Les livreurs pour effectuer les livraisons</li>
            <li>Nos prestataires de services de paiement (Orange Money, Wave)</li>
            <li>Les autorites competentes si requis par la loi</li>
          </ul>

          <h2>5. Securite des donnees</h2>
          <p>
            Nous mettons en oeuvre des mesures de securite techniques et
            organisationnelles appropriees pour proteger vos donnees
            personnelles contre l&apos;acces non autorise, la modification, la
            divulgation ou la destruction.
          </p>

          <h2>6. Conservation des donnees</h2>
          <p>
            Nous conservons vos donnees personnelles aussi longtemps que
            necessaire pour fournir nos services et respecter nos obligations
            legales. Vous pouvez demander la suppression de vos donnees a tout
            moment.
          </p>

          <h2>7. Vos droits</h2>
          <p>Vous avez le droit de :</p>
          <ul>
            <li>Acceder a vos donnees personnelles</li>
            <li>Corriger vos donnees inexactes</li>
            <li>Demander la suppression de vos donnees</li>
            <li>Retirer votre consentement</li>
            <li>Porter plainte aupres d&apos;une autorite de protection des donnees</li>
          </ul>

          <h2>8. Suppression de compte</h2>
          <p>
            Vous pouvez demander la suppression complete de votre compte et de
            toutes vos donnees associees. Pour ce faire, visitez notre{" "}
            <Link href="/delete-account" className="text-[#F4541D] hover:underline">
              page de suppression de compte
            </Link>
            .
          </p>

          <h2>9. Modifications de cette politique</h2>
          <p>
            Nous pouvons mettre a jour cette politique de confidentialite de
            temps a autre. Nous vous informerons de tout changement important
            par notification dans l&apos;application ou par email.
          </p>

          <h2>10. Nous contacter</h2>
          <p>
            Pour toute question concernant cette politique de confidentialite ou
            vos donnees personnelles, contactez-nous a :
          </p>
          <ul>
            <li>Email : privacy@poulzz.sn</li>
            <li>Adresse : Dakar, Senegal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
