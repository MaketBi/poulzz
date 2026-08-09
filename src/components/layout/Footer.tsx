import Link from "next/link";

const columns = [
  {
    title: "PRODUITS",
    links: [
      { name: "Yonima", href: "/apps" },
      { name: "Skoolbi", href: "/skoolbi" },
      { name: "SenWaAPI", href: "/senwaapi" },
    ],
  },
  {
    title: "RESSOURCES",
    links: [
      { name: "Support", href: "/support" },
      { name: "Télécharger", href: "/get" },
      { name: "Suppression de compte", href: "/delete-account" },
    ],
  },
  {
    title: "LÉGAL",
    links: [
      { name: "Mentions légales", href: "/legal/mentions-legales" },
      { name: "Conditions", href: "/terms" },
      { name: "Confidentialité", href: "/privacy" },
    ],
  },
  {
    title: "À PROPOS",
    links: [
      { name: "L'équipe", href: "/about#team" },
      { name: "Carrières", href: "/about#team" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#2E6A3B] px-6 sm:px-10 lg:px-[72px] pt-16 pb-8">
      <div className="max-w-[1536px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-8 pb-10 border-b border-white/15">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-[22px] font-bold tracking-[-0.04em] text-white">
              poulzz<span className="text-[#31CC71]">.</span>
            </div>
            <p className="mt-3.5 text-sm text-white/70 leading-[1.8]">
              Dakar, S&eacute;n&eacute;gal
              <br />
              contact@poulzz.com
              <br />
              +221 76 295 70 97
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2.5">
              <div className="text-[13px] font-semibold tracking-[0.08em] text-white mb-1">
                {col.title}
              </div>
              {col.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="pt-[22px] text-[13px] text-white/50">
          &copy; {new Date().getFullYear()} POULZZ SUARL — Dakar, S&eacute;n&eacute;gal
        </div>
      </div>
    </footer>
  );
}
