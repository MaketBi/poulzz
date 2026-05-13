import Link from "next/link";

interface LegalPageShellProps {
  title: string;
  appLabel: string;
  version: string;
  lastUpdated: string;
  children: React.ReactNode;
  otherVersions: { href: string; label: string }[];
  tableOfContents?: { id: string; label: string }[];
}

const MONTHS_FR = [
  "janvier", "fevrier", "mars", "avril", "mai", "juin",
  "juillet", "aout", "septembre", "octobre", "novembre", "decembre",
];

function formatLastUpdated(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const [, year, month, day] = match;
  return `${parseInt(day, 10)} ${MONTHS_FR[parseInt(month, 10) - 1]} ${year}`;
}

export function LegalPageShell({
  title,
  appLabel,
  version,
  lastUpdated,
  children,
  otherVersions,
  tableOfContents,
}: LegalPageShellProps) {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <p className="text-sm font-medium text-[#1F492E]/60 uppercase tracking-wider">
          {appLabel}
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1F492E]">
          {title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-[#1F492E]/60">
          <span>Version {version}</span>
          <span>Derniere mise a jour : {formatLastUpdated(lastUpdated)}</span>
        </div>

        {otherVersions.length > 0 && (
          <div className="mt-8 p-4 bg-[#1F492E]/5 border border-[#1F492E]/10 rounded-xl text-sm text-[#1F492E]/80">
            <p className="font-medium mb-2">Autres versions de ce document :</p>
            <ul className="space-y-1">
              {otherVersions.map((v) => (
                <li key={v.href}>
                  <Link href={v.href} className="text-[#D4500A] hover:underline">
                    {v.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tableOfContents && tableOfContents.length > 0 && (
          <nav
            aria-label="Sommaire"
            className="mt-8 p-5 bg-white border border-[#1F492E]/10 rounded-xl"
          >
            <p className="font-semibold text-[#1F492E] mb-3">Sommaire</p>
            <ol className="space-y-1.5 text-sm text-[#1F492E]/80 list-none pl-0">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[#D4500A] hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="mt-12 prose prose-gray max-w-none prose-headings:text-[#1F492E] prose-a:text-[#D4500A] prose-headings:scroll-mt-24">
          {children}
        </div>
      </div>
    </div>
  );
}
