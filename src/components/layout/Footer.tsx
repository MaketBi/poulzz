import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  produits: {
    title: "PRODUITS",
    links: [
      { name: "Yonima", href: "/apps" },
      { name: "Skoolbi", href: "/skoolbi" },
    ],
  },
  ressources: {
    title: "RESSOURCES",
    links: [
      { name: "Politique de confidentialite", href: "/privacy" },
      { name: "Conditions d'utilisation", href: "/terms" },
      { name: "Mentions legales", href: "/legal" },
      { name: "Suppression de compte", href: "/delete-account" },
    ],
  },
  apropos: {
    title: "A PROPOS",
    links: [
      { name: "Notre histoire", href: "/about" },
      { name: "Carrieres", href: "/about#team" },
      { name: "Contact", href: "/contact" },
    ],
  },
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/poulzz" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/poulzz" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/poulzz" },
];

export function Footer() {
  return (
    <footer className="bg-[#1F492E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Poulzz"
                width={180}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              Poulzz SUARL — Solutions numeriques adaptees aux realites du
              Senegal. Commerce, livraison et education.
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Dakar, Senegal</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contact@poulzz.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+221 76 295 70 97</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-[#31CC71] hover:text-white transition-colors cursor-pointer"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Produits */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 tracking-wider">
              {footerLinks.produits.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.produits.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 tracking-wider">
              {footerLinks.ressources.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.ressources.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* A propos */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 tracking-wider">
              {footerLinks.apropos.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.apropos.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Poulzz SUARL. Tous droits reserves.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Confidentialite
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Conditions
            </Link>
            <Link
              href="/legal"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Mentions legales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
