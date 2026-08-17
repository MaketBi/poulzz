"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Yonima", href: "/apps" },
  { name: "Skoolbi", href: "/skoolbi" },
  { name: "SenWaAPI", href: "/senwaapi" },
  { name: "A propos", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On the homepage, the header sits over the dark hero
  const isHome = pathname === "/";
  const showDarkMode = isHome && !isScrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5">
      <nav
        className={cn(
          "w-full max-w-[1536px] mx-auto rounded-full border backdrop-blur-md transition-all duration-300 pl-[72px] pr-[24px] py-[15px]",
          showDarkMode
            ? "bg-white/[0.07] border-white/[0.14]"
            : "bg-white border-[#EDF1EF] shadow-sm"
        )}
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span
              className={cn(
                "text-[24px] font-bold tracking-[-0.04em] transition-colors duration-300",
                showDarkMode ? "text-white" : "text-[#2E6A3B]"
              )}
            >
              poulzz<span className="text-[#31CC71]">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-[17px] font-medium px-[18px] py-3 rounded-full transition-colors",
                  showDarkMode
                    ? pathname === item.href
                      ? "text-[#31CC71]"
                      : "text-white/80 hover:bg-white/10"
                    : pathname === item.href
                      ? "text-[#2E6A3B]"
                      : "text-[#1A1A1A] hover:bg-[#2E6A3B]/[0.07]"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center px-[28px] py-[15px] text-[16px] font-semibold rounded-full transition-all duration-200 active:scale-[0.98] cursor-pointer",
                showDarkMode
                  ? "text-[#006D36] bg-[#31CC71] hover:brightness-105"
                  : "text-white bg-[#2E6A3B] hover:bg-[#006D36]"
              )}
            >
              Nous contacter
            </Link>
          </div>

          <button
            type="button"
            className={cn(
              "md:hidden ml-auto p-2 cursor-pointer transition-colors",
              showDarkMode ? "text-white" : "text-[#1A1A1A]"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 z-40 bg-zinc-950">
          <div className="flex items-center justify-between px-6 py-5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
            >
              <span className="text-2xl font-bold tracking-[-0.04em] text-white">
                poulzz<span className="text-[#31CC71]">.</span>
              </span>
            </Link>
            <button
              type="button"
              className="p-2 text-white cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2 px-6 mt-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-semibold py-3 transition-colors",
                  pathname === item.href
                    ? "text-[#31CC71]"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-zinc-950 bg-[#31CC71] rounded-full hover:bg-[#28b862] transition-colors mt-6 cursor-pointer"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
