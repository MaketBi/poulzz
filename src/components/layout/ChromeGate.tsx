"use client";

import { usePathname } from "next/navigation";

/**
 * Masque le chrome du site (Header/Footer) sur les pages plein ecran.
 * `/scan` = page QR unique, une seule hauteur d'ecran, sans navigation.
 */
const FULLSCREEN_ROUTES = ["/scan"];

export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (FULLSCREEN_ROUTES.includes(pathname)) return null;
  return <>{children}</>;
}
