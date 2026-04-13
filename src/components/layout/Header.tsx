"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Yonima", href: "/apps" },
  { name: "Skoolbi", href: "/skoolbi" },
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
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav
        className={cn(
          "max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 lg:px-8 transition-all duration-300",
          showDarkMode
            ? "bg-white/[0.06] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            : "bg-white/90 backdrop-blur-md shadow-lg border border-gray-200/50"
        )}
      >
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Poulzz"
              width={180}
              height={50}
              className={cn(
                "h-12 lg:h-14 w-auto transition-all duration-300",
                showDarkMode && "brightness-0 invert"
              )}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  showDarkMode
                    ? pathname === item.href
                      ? "text-[#31CC71]"
                      : "text-white/70 hover:text-white"
                    : pathname === item.href
                      ? "text-[#31CC71]"
                      : "text-[#1F492E]/70 hover:text-[#1F492E]"
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
                "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 active:scale-[0.98] cursor-pointer",
                showDarkMode
                  ? "text-zinc-950 bg-[#31CC71] hover:bg-[#28b862]"
                  : "text-white bg-[#D4500A] hover:bg-[#B8440A]"
              )}
            >
              Nous contacter
            </Link>
          </div>

          <button
            type="button"
            className={cn(
              "md:hidden p-2 cursor-pointer transition-colors",
              showDarkMode ? "text-white" : "text-[#1F492E]"
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
              <Image
                src="/images/logo.png"
                alt="Poulzz"
                width={180}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
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
