import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  services: {
    title: "SERVICES",
    links: [
      { name: "Livraison", href: "/apps#yonima-plus" },
      { name: "Marketplace", href: "/apps" },
      { name: "Portail Vendeurs", href: "/apps#yonima-vendeur" },
      { name: "Logistique", href: "/apps#yonima-rider" },
    ],
  },
  resources: {
    title: "RESSOURCES",
    links: [
      { name: "Centre d'aide", href: "/help" },
      { name: "Politique de confidentialite", href: "/privacy" },
      { name: "Suppression de compte", href: "/delete-account" },
    ],
  },
  about: {
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
    <footer className="bg-white border-t border-gray-100">
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
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-500 max-w-xs">
              Nous construisons des solutions digitales pour connecter les
              commercants, livreurs et clients a travers le Senegal.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#F4541D] hover:text-white transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 tracking-wider">
              {footerLinks.services.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#F4541D] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-400 tracking-wider">
              {footerLinks.resources.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#F4541D] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-400 tracking-wider">
              {footerLinks.about.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.about.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#F4541D] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Poulzz. Tous droits reserves.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              Confidentialite
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
