import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  FileText,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aide & Support - Poulzz",
  description:
    "Besoin d'aide avec Yonima ? Contactez notre support par WhatsApp ou email, consultez nos conditions d'utilisation et notre politique de confidentialite.",
};

const WHATSAPP_URL =
  "https://wa.me/221762957097?text=Bonjour%2C%20j%27ai%20besoin%20d%27aide%20avec%20Yonima";
const EMAIL_URL = "mailto:contact@poulzz.com?subject=Support%20Yonima%20Plus";

const contactItems = [
  {
    href: WHATSAPP_URL,
    icon: MessageCircle,
    iconColor: "text-[#25D366]",
    iconBg: "bg-[#25D366]/10",
    label: "Contacter le support",
    subtitle: "Via WhatsApp · Reponse rapide",
    external: true,
  },
  {
    href: EMAIL_URL,
    icon: Mail,
    iconColor: "text-[#D4500A]",
    iconBg: "bg-[#D4500A]/10",
    label: "Nous ecrire par email",
    subtitle: "contact@poulzz.com",
    external: true,
  },
];

const legalItems = [
  {
    href: "/terms/client",
    icon: FileText,
    label: "Conditions d'utilisation",
  },
  {
    href: "/privacy/client",
    icon: ShieldCheck,
    label: "Politique de confidentialite",
  },
];

export default function SupportPage() {
  return (
    <div className="pt-28 lg:pt-32 pb-16 lg:pb-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F492E]">
            Aide &amp; Support
          </h1>
          <p className="mt-3 text-gray-600">
            Une question ou un probleme ? Notre equipe est la pour vous aider.
          </p>
        </div>

        {/* Contact cards */}
        <div className="space-y-3">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all group"
            >
              <div
                className={`shrink-0 w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center`}
              >
                <item.icon className={`h-6 w-6 ${item.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#1F492E] group-hover:text-[#1F492E]">
                  {item.label}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">{item.subtitle}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-gray-400 shrink-0 transition-colors" />
            </a>
          ))}
        </div>

        {/* Separator */}
        <div className="my-8 border-t border-gray-100" />

        {/* Legal links */}
        <div className="space-y-1">
          {legalItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <item.icon className="h-5 w-5 text-gray-400 shrink-0" />
              <span className="flex-1 text-sm text-gray-700 group-hover:text-[#1F492E] font-medium transition-colors">
                {item.label}
              </span>
              <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-gray-400 shrink-0 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
