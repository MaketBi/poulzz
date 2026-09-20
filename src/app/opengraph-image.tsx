import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Image de partage par defaut du site (WhatsApp, iMessage, LinkedIn...).
 * Generee au build a partir de la charte verte : wordmark « poulzz. » + tagline.
 */
export const alt = "Poulzz — La tech sénégalaise qui simplifie votre quotidien";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const outfitBold = await readFile(
    join(process.cwd(), "src/assets/fonts/Outfit-Bold.ttf"),
  );

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            letterSpacing: 4,
            color: "#BEEBD1",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#31CC71",
            }}
          />
          CONSTRUIT POUR LE SÉNÉGAL
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 168,
              lineHeight: 1,
              letterSpacing: -8,
            }}
          >
            poulzz<span style={{ color: "#31CC71" }}>.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 44,
              lineHeight: 1.2,
              color: "#EAF9F0",
              maxWidth: 900,
            }}
          >
            La tech sénégalaise qui simplifie votre quotidien
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 28,
            color: "#BEEBD1",
          }}
        >
          <span>Yonima</span>
          <span>Skoolbi</span>
          <span>SenWaAPI</span>
          <span style={{ marginLeft: "auto", color: "#FFFFFF" }}>
            www.poulzz.com
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
