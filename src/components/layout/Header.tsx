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

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav
        className={cn(
          "max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 lg:px-8 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg border border-gray-200/50"
            : "bg-white/60 backdrop-blur-sm shadow-md border border-gray-100/30"
        )}
      >
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Poulzz"
              width={180}
              height={50}
              className="h-12 lg:h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href
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
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#D4500A] rounded-full hover:bg-[#B8440A] transition-colors cursor-pointer"
            >
              Nous contacter
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-[#1F492E] cursor-pointer"
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
        <div className="md:hidden fixed inset-0 top-0 z-40 bg-[#1F492E]">
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
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#D4500A] rounded-full hover:bg-[#B8440A] transition-colors mt-6 cursor-pointer"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
