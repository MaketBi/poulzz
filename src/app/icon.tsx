import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Favicon du site : carre vert charte, « p. » en Outfit Bold. */
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 112,
          color: "#FFFFFF",
          fontFamily: "Outfit",
          fontSize: 380,
          lineHeight: 1,
          letterSpacing: -20,
          paddingBottom: 40,
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
