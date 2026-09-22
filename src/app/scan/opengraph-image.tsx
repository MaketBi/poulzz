import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Apercu de partage (WhatsApp, iMessage...) du hub QR https://www.poulzz.com/scan :
 * logo Yonima+ blanc a « + » vert sur fond vert charte, slogan imprime.
 */
export const alt = "Yonima+ — Tu commandes. On assure.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const root = process.cwd();
  const [outfitBold, logoSvg] = await Promise.all([
    readFile(join(root, "src/assets/fonts/Outfit-Bold.ttf")),
    readFile(join(root, "public/images/logo-yonima-plus-electric.svg")),
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
              fontSize: 110,
              lineHeight: 0.96,
              letterSpacing: -5,
            }}
          >
            Tu commandes.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 110,
              lineHeight: 0.96,
              letterSpacing: -5,
              color: "#31CC71",
            }}
          >
            On assure.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 30,
            color: "#BEEBD1",
          }}
        >
          Repas, courses et essentiels livrés dans tout Dakar
          <span style={{ marginLeft: "auto", color: "#FFFFFF" }}>
            www.poulzz.com/scan
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
