import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Icone iOS « Ajouter a l'ecran d'accueil » : iOS arrondit lui-meme les coins. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
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
          alignItems: "center",
          justifyContent: "center",
          background: "#2E6A3B",
          color: "#FFFFFF",
          fontFamily: "Outfit",
          fontSize: 132,
          lineHeight: 1,
          letterSpacing: -7,
          paddingBottom: 14,
        }}
      >
        p<span style={{ color: "#31CC71" }}>.</span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Outfit", data: outfitBold, weight: 700, style: "normal" }],
    },
  );
}
