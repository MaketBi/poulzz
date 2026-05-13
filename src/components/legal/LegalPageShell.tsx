import Link from "next/link";

interface LegalPageShellProps {
  title: string;
  appLabel: string;
  version: string;
  lastUpdated: string;
  children: React.ReactNode;
  otherVersions: { href: string; label: string }[];
}

export function LegalPageShell({
  title,
  appLabel,
  version,
  lastUpdated,
  children,
  otherVersions,
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
          <span>Derniere mise a jour : {lastUpdated}</span>
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

        <div className="mt-12 prose prose-gray max-w-none prose-headings:text-[#1F492E] prose-a:text-[#D4500A]">
          {children}
        </div>
      </div>
    </div>
  );
}
