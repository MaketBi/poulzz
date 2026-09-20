import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Apercu de partage (WhatsApp, iMessage...) du lien de telechargement
 * https://www.poulzz.com/get : logo Yonima+ blanc sur fond vert charte.
 */
export const alt = "Télécharger l'application Yonima Plus";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const root = process.cwd();
  const [outfitBold, logoSvg] = await Promise.all([
    readFile(join(root, "src/assets/fonts/Outfit-Bold.ttf")),
    readFile(join(root, "public/images/logo-yonima-plus-white.svg")),
  ]);
  const logo = `data:image/svg+xml;base64,${logoSvg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: "linear-gradient(135deg, #1F492E 0%, #2E6A3B 100%)",
          color: "#FFFFFF",
          fontFamily: "Outfit",
        }}
      >
        {/* Logo : viewBox 462x136 → 476x140 */}
        <img src={logo} alt="" width={476} height={140} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              lineHeight: 1.05,
              letterSpacing: -3,
            }}
          >
            Téléchargez l&apos;application
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 36,
              lineHeight: 1.3,
              color: "#EAF9F0",
              maxWidth: 940,
            }}
          >
            Repas, courses et essentiels livrés chez vous, suivi GPS et
            paiement Wave.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#BEEBD1",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "12px 22px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.12)",
              color: "#FFFFFF",
            }}
          >
            App Store
          </div>
          <div
            style={{
              display: "flex",
              padding: "12px 22px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.12)",
              color: "#FFFFFF",
            }}
          >
            Google Play
          </div>
          <span style={{ marginLeft: "auto", color: "#FFFFFF" }}>
            www.poulzz.com/get
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Outfit", data: outfitBold, weight: 700, style: "normal" }],
    },
  );
}
