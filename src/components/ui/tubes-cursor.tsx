"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface TubesCursorProps {
  /** Initial tube colors — 3 hex strings */
  tubeColors?: string[];
  /** Initial light colors — 4 hex strings */
  lightColors?: string[];
  /** Light intensity */
  lightIntensity?: number;
  /** Extra CSS classes for the wrapper */
  className?: string;
  /** Children rendered above the canvas */
  children?: React.ReactNode;
}

interface TubesApp {
  tubes: {
    setColors: (colors: string[]) => void;
    setLightsColors: (colors: string[]) => void;
  };
  dispose?: () => void;
}

/**
 * Generates an array of random hex color strings.
 */
function randomColors(count: number): string[] {
  return new Array(count)
    .fill(0)
    .map(
      () =>
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")
    );
}

export default function TubesCursor({
  tubeColors = ["#5e72e4", "#8965e0", "#f5365c"],
  lightColors = ["#21d4fd", "#b721ff", "#f4d03f", "#11cdef"],
  lightIntensity = 200,
  className = "",
  children,
}: TubesCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<TubesApp | null>(null);

  useEffect(() => {
    const initTimer = setTimeout(() => {
      import(
        /* webpackIgnore: true */
        "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
      )
        .then((module) => {
          const TubesCursorLib = module.default as (
            canvas: HTMLCanvasElement,
            options: Record<string, unknown>
          ) => TubesApp;

          if (canvasRef.current) {
            const app = TubesCursorLib(canvasRef.current, {
              tubes: {
                colors: tubeColors,
                lights: {
                  intensity: lightIntensity,
                  colors: lightColors,
                },
              },
            });
            appRef.current = app;
          }
        })
        .catch((err: unknown) =>
          console.error("Failed to load TubesCursor module:", err)
        );
    }, 100);

    return () => {
      clearTimeout(initTimer);
      if (appRef.current && typeof appRef.current.dispose === "function") {
        appRef.current.dispose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = useCallback(() => {
    if (appRef.current) {
      appRef.current.tubes.setColors(randomColors(3));
      appRef.current.tubes.setLightsColors(randomColors(4));
    }
  }, []);

  return (
    <div
      onClick={handleClick}
      className={`relative min-h-[100dvh] w-full bg-zinc-950 overflow-hidden cursor-pointer ${className}`}
    >
      {/* Canvas — fixed behind content, pointer-events-none so children remain interactive */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Content layer */}
      {children && (
        <div className="relative z-[1] min-h-[100dvh] flex flex-col items-start justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
