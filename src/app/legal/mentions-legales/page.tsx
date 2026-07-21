import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "Mentions legales - Yonima - Poulzz",
  description:
    "Mentions legales de POULZZ - SUARL, editrice de l'application mobile Yonima : editeur, directeur de la publication, hebergeur et propriete intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageShell
      title="Mentions legales"
      appLabel="Yonima - POULZZ SUARL"
      version="1.0"
      lastUpdated="2026-07-21"
      otherVersions={[
        { href: "/legal/kyc", label: "Politique de connaissance client (KYC)" },
        { href: "/legal/lcb-ft", label: "Politique LCB-FT" },
        { href: "/legal/securite-transactions", label: "Politique de securite des transactions" },
        { href: "/legal/charte-utilisation", label: "Charte d'utilisation responsable" },
      ]}
      tableOfContents={[
        { id: "preambule", label: "Preambule" },
        { id: "chapitre-1", label: "1. Editeur de l'Application" },
        { id: "chapitre-2", label: "2. Directeur de la publication" },
        { id: "chapitre-3", label: "3. Coordonnees de contact" },
        { id: "chapitre-4", label: "4. Hebergement" },
        { id: "chapitre-5", label: "5. Nom commercial et societe" },
        { id: "chapitre-6", label: "6. Propriete intellectuelle" },
        { id: "chapitre-7", label: "7. Documents legaux associes" },
      ]}
    >
      <p className="text-sm text-[#1F492E]/60 italic">
        Document valide en interne par le PO et les equipes Yonima. Une
        validation juridique externe par un avocat senegalais est prevue avant
        le lancement public V1.
      </p>

      <h2 id="preambule">Preambule</h2>
      <p>
        Les presentes <strong>Mentions legales</strong> identifient
        l&apos;editeur, le directeur de la publication et l&apos;hebergeur de
        l&apos;application mobile <strong>Yonima</strong> (ci-apres
        l&apos;<strong>Application</strong>) ainsi que du site{" "}
        <strong>poulzz.com</strong>, et precisent les regles de propriete
        intellectuelle applicables. Elles constituent le document autonome de
        reference quant a l&apos;identite de la societe editrice.
      </p>

      <h2 id="chapitre-1">1. Editeur de l&apos;Application</h2>
      <p>L&apos;Application mobile <strong>Yonima</strong> est editee par :</p>
      <ul>
        <li><strong>Raison sociale</strong> : POULZZ - SUARL</li>
        <li><strong>Forme juridique</strong> : SUARL (Societe Unipersonnelle a Responsabilite Limitee)</li>
        <li><strong>Capital social</strong> : 100 000 F CFA</li>
        <li><strong>RCCM</strong> : SN DKR 2026 B 5030</li>
        <li><strong>NINEA</strong> : 012814647</li>
        <li><strong>Date de creation</strong> : 5 fevrier 2026</li>
        <li><strong>Activite declaree</strong> : Developpement d&apos;applications et de sites web, fourniture de services digitaux et de solutions numeriques ; mise en relation et livraison de repas</li>
      </ul>
      <h3>Siege social</h3>
      <p>
        POULZZ - SUARL<br />
        Bene Baraque, Ainoumady 2<br />
        Dakar 11000<br />
        Senegal
      </p>

      <h2 id="chapitre-2">2. Directeur de la publication</h2>
      <ul>
        <li><strong>Gerant</strong> : Mamadou Diop</li>
        <li><strong>Directeur de la publication</strong> : Mamadou Diop</li>
      </ul>

      <h2 id="chapitre-3">3. Coordonnees de contact</h2>
      <ul>
        <li><strong>Site web officiel</strong> : <a href="https://poulzz.com">https://poulzz.com</a></li>
        <li><strong>Email</strong> : <a href="mailto:contact@poulzz.com">contact@poulzz.com</a></li>
        <li><strong>WhatsApp</strong> : +221 76 295 70 97</li>
        <li><strong>Telephone</strong> : +221 76 295 70 97</li>
        <li><strong>Adresse postale</strong> : POULZZ - SUARL, Bene Baraque, Ainoumady 2, Dakar 11000, Senegal</li>
      </ul>

      <h2 id="chapitre-4">4. Hebergement</h2>
      <p>
        Le present site <strong>poulzz.com</strong> est heberge par{" "}
        <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789,
        Etats-Unis.
      </p>
      <p>
        L&apos;infrastructure technique de l&apos;<strong>application mobile
        Yonima</strong> (base de donnees, edge functions, stockage de fichiers)
        est hebergee par <strong>Supabase</strong>.
      </p>
      <p>
        Les details et garanties relatifs a l&apos;hebergement, ainsi que les
        eventuels transferts de donnees associes, sont precises dans la{" "}
        <a href="/privacy">Politique de confidentialite (&sect;8 et &sect;9)</a>.
      </p>

      <h2 id="chapitre-5">5. Nom commercial et societe</h2>
      <ul>
        <li><strong>Nom commercial</strong> : Yonima</li>
        <li><strong>Societe editrice et contractante</strong> : POULZZ - SUARL</li>
      </ul>
      <p>
        <strong>Yonima est un nom commercial</strong> et <strong>ne dispose pas
        de personnalite morale propre</strong>. Tous les contrats, factures et
        engagements legaux relatifs a l&apos;Application sont conclus au nom de{" "}
        <strong>POULZZ - SUARL</strong>.
      </p>

      <h2 id="chapitre-6">6. Propriete intellectuelle</h2>

      <h3>6.1. Marque et contenus Yonima</h3>
      <p>
        Le nom <strong>Yonima</strong>, le logo, les elements graphiques, les
        textes, le code source de l&apos;Application et la base de donnees sont
        la <strong>propriete exclusive de POULZZ - SUARL</strong> ou ont fait
        l&apos;objet d&apos;une licence d&apos;utilisation.
      </p>
      <p>
        Toute reproduction, copie, exploitation, modification, publication ou
        adaptation, totale ou partielle, sans accord expres ecrit de POULZZ -
        SUARL, est <strong>strictement interdite</strong> et pourra etre
        consideree comme une contrefacon sanctionnee par les dispositions
        applicables du droit senegalais.
      </p>

      <h3>6.2. Contenus des Vendeurs et des Utilisateurs</h3>
      <p>
        Les <strong>photos, descriptions et noms des produits</strong> sont
        fournis par les Vendeurs partenaires, qui en garantissent la titularite
        ou la licence. Les <strong>avis</strong> publies par les Utilisateurs
        restent leur propriete, sous reserve de la licence d&apos;utilisation
        accordee a Yonima dans les conditions prevues par les{" "}
        <a href="/terms">CGU/CGV (&sect;14)</a>.
      </p>

      <h2 id="chapitre-7">7. Documents legaux associes</h2>
      <p>
        L&apos;Application est regie par un ensemble de documents complementaires,
        accessibles depuis l&apos;ecran <strong>A propos &gt; Legal</strong> de
        l&apos;Application :
      </p>
      <ul>
        <li><strong><a href="/terms">Conditions Generales d&apos;Utilisation et de Vente (CGU/CGV)</a></strong> : regles d&apos;utilisation, commandes, paiement, livraison, remboursement, responsabilite.</li>
        <li><strong><a href="/privacy">Politique de confidentialite</a></strong> : traitement des donnees personnelles, droits de l&apos;Utilisateur, partenaires, securite.</li>
        <li><strong><a href="/legal/kyc">Politique de connaissance client (KYC)</a></strong> : identification des Utilisateurs et niveaux de vigilance.</li>
        <li><strong><a href="/legal/lcb-ft">Politique de lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB-FT)</a></strong>.</li>
        <li><strong><a href="/legal/securite-transactions">Politique de securite des transactions</a></strong> : securite des paiements, PSP, mesures anti-fraude.</li>
        <li><strong><a href="/legal/charte-utilisation">Charte d&apos;utilisation responsable</a></strong> : regles de bon usage de l&apos;Application.</li>
      </ul>
    </LegalPageShell>
  );
}
