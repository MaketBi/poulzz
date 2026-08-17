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
  const hasToc = tableOfContents && tableOfContents.length > 0;

  return (
    <div className="bg-[#F8FAFC] pt-16 lg:pt-20">
      {/* Header band */}
      <header className="border-b border-[#1F492E]/10 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#2E6A3B]" />
            <p className="text-xs font-semibold text-[#1F492E]/70 uppercase tracking-[0.18em]">
              {appLabel}
            </p>
          </div>
          <h1
            className="font-serif text-[#1F492E] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.025em] max-w-4xl"
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontVariationSettings: '"opsz" 144',
              fontWeight: 600,
            }}
          >
            {title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-[#1F492E]/70">
            <span className="inline-flex items-center gap-2">
              <span className="font-medium text-[#1F492E]/50 uppercase tracking-wider text-xs">Version</span>
              <span className="font-mono font-medium text-[#1F492E]">{version}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="font-medium text-[#1F492E]/50 uppercase tracking-wider text-xs">Mise a jour</span>
              <span className="font-medium text-[#1F492E]">{formatLastUpdated(lastUpdated)}</span>
            </span>
          </div>
        </div>
      </header>

      {/* Mobile ToC — collapsible */}
      {hasToc && (
        <div className="lg:hidden border-b border-[#1F492E]/10 bg-white/60">
          <details className="legal-toc-mobile max-w-7xl mx-auto px-6 sm:px-8 py-4">
            <summary className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#1F492E]">Sommaire</span>
              <span className="text-xs text-[#1F492E]/60 ml-auto mr-2">
                {tableOfContents!.length} sections
              </span>
              <svg
                className="legal-toc-chevron w-4 h-4 text-[#1F492E]/60"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <ol className="mt-4 space-y-0 list-none pl-0">
              {tableOfContents!.map((item, idx) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="legal-toc-link"
                    data-preamble={item.id === "preambule" ? "true" : "false"}
                  >
                    <span className="inline-block w-7 font-mono text-xs text-[#1F492E]/40">
                      {item.id === "preambule" ? "—" : String(idx).padStart(2, "0")}
                    </span>
                    {item.label.replace(/^\d+\.\s*/, "")}
                  </a>
                </li>
              ))}
            </ol>
          </details>
        </div>
      )}

      {/* Main grid: sticky sidebar + content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-20">
        <div className={hasToc ? "lg:grid lg:grid-cols-[16rem_1fr] lg:gap-16 xl:gap-24" : ""}>
          {/* Desktop sticky ToC */}
          {hasToc && (
            <aside className="hidden lg:block">
              <nav
                aria-label="Sommaire"
                className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 -mr-2"
              >
                <p className="text-xs font-semibold text-[#1F492E]/50 uppercase tracking-[0.18em] mb-4">
                  Sommaire
                </p>
                <ol className="space-y-0 list-none pl-0 border-l border-[#1F492E]/10">
                  {tableOfContents!.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="legal-toc-link"
                        data-preamble={item.id === "preambule" ? "true" : "false"}
                      >
                        <span className="inline-block w-7 font-mono text-xs text-[#1F492E]/40">
                          {item.id === "preambule" ? "—" : String(idx).padStart(2, "0")}
                        </span>
                        {item.label.replace(/^\d+\.\s*/, "")}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          )}

          {/* Content column */}
          <article className="min-w-0">
            <div className="legal-content">{children}</div>

            {/* Other versions footer */}
            {otherVersions.length > 0 && (
              <div className="mt-20 pt-10 border-t border-[#1F492E]/15">
                <p className="text-xs font-semibold text-[#1F492E]/50 uppercase tracking-[0.18em] mb-5">
                  Autres versions de ce document
                </p>
                <ul className="space-y-2 list-none pl-0">
                  {otherVersions.map((v) => (
                    <li key={v.href}>
                      <Link
                        href={v.href}
                        className="group inline-flex items-center gap-2 text-[#1F492E] hover:text-[#2E6A3B] transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-[#2E6A3B]"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="underline decoration-[#1F492E]/20 group-hover:decoration-[#2E6A3B] underline-offset-4">
                          {v.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
