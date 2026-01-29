export const metadata = {
  title: "Conditions d'utilisation - Poulzz",
  description: "Conditions d'utilisation des applications Yonima",
};

export default function TermsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Conditions d&apos;utilisation
        </h1>
        <p className="mt-4 text-gray-500">
          Derniere mise a jour : {new Date().toLocaleDateString("fr-FR")}
        </p>

        <div className="mt-12 prose prose-gray max-w-none">
          <h2>1. Acceptation des conditions</h2>
          <p>
            En telechargeant, installant ou utilisant les applications Yonima
            (Yonima Plus, Yonima Rider, Yonima Vendeur), vous acceptez d&apos;etre lie
            par ces conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces
            conditions, veuillez ne pas utiliser nos services.
          </p>

          <h2>2. Description des services</h2>
          <p>
            Poulzz fournit une plateforme de mise en relation entre :
          </p>
          <ul>
            <li>Les clients souhaitant commander des produits (Yonima Plus)</li>
            <li>Les livreurs independants (Yonima Rider)</li>
            <li>Les commercants et restaurants (Yonima Vendeur)</li>
          </ul>

          <h2>3. Inscription et compte</h2>
          <p>
            Pour utiliser nos services, vous devez creer un compte en
            fournissant des informations exactes et completes. Vous etes
            responsable de la confidentialite de vos identifiants de connexion.
          </p>

          <h2>4. Utilisation acceptable</h2>
          <p>Vous vous engagez a :</p>
          <ul>
            <li>Fournir des informations exactes et a jour</li>
            <li>Utiliser les services de maniere legale et ethique</li>
            <li>Ne pas perturber le fonctionnement de la plateforme</li>
            <li>Respecter les autres utilisateurs</li>
          </ul>

          <h2>5. Commandes et paiements</h2>
          <p>
            Les prix affiches incluent toutes les taxes applicables. Les frais
            de livraison sont calcules en fonction de la distance et affiches
            avant confirmation de la commande. Les paiements sont traites par
            nos partenaires securises (Orange Money, Wave, cartes bancaires).
          </p>

          <h2>6. Livraison</h2>
          <p>
            Les delais de livraison sont des estimations. Poulzz n&apos;est pas
            responsable des retards dus a des circonstances independantes de
            notre volonte (trafic, conditions meteorologiques, etc.).
          </p>

          <h2>7. Annulations et remboursements</h2>
          <p>
            Les annulations sont possibles avant que le commercant ne commence
            la preparation. Les remboursements sont traites selon notre
            politique de remboursement, generalement dans un delai de 5 a 10
            jours ouvrables.
          </p>

          <h2>8. Responsabilite</h2>
          <p>
            Poulzz agit en tant qu&apos;intermediaire et n&apos;est pas responsable de la
            qualite des produits fournis par les commercants. Nous nous
            efforcons de resoudre tout litige de maniere equitable.
          </p>

          <h2>9. Propriete intellectuelle</h2>
          <p>
            Tous les contenus de nos applications (logos, textes, images,
            logiciels) sont la propriete de Poulzz et sont proteges par les
            lois sur la propriete intellectuelle.
          </p>

          <h2>10. Modification des conditions</h2>
          <p>
            Nous nous reservons le droit de modifier ces conditions a tout
            moment. Les modifications prendront effet des leur publication. Nous
            vous informerons des changements importants.
          </p>

          <h2>11. Resiliation</h2>
          <p>
            Nous pouvons suspendre ou resilier votre compte en cas de violation
            de ces conditions. Vous pouvez egalement fermer votre compte a tout
            moment via la page de suppression de compte.
          </p>

          <h2>12. Droit applicable</h2>
          <p>
            Ces conditions sont regies par les lois du Senegal. Tout litige sera
            soumis a la competence exclusive des tribunaux de Dakar.
          </p>

          <h2>13. Contact</h2>
          <p>
            Pour toute question concernant ces conditions, contactez-nous a :
          </p>
          <ul>
            <li>Email : legal@poulzz.sn</li>
            <li>Adresse : Dakar, Senegal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
