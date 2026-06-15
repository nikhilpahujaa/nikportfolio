/**
 * Pixel-art sprites — drawn from compact char grids so each "pixel" is a rect.
 * Used as intentional, asymmetric decorative accents (one per section).
 * Space = transparent. Every other char maps to a palette colour.
 */
import type { CSSProperties } from "react";

type Palette = Record<string, string>;

function PixelSprite({
  rows,
  palette,
  size = 56,
  className,
  style,
  title,
}: {
  rows: string[];
  palette: Palette;
  size?: number;
  className?: string;
  style?: CSSProperties;
  title?: string;
}) {
  const h = rows.length;
  const w = Math.max(...rows.map((r) => r.length));
  const cells: { x: number; y: number; c: string }[] = [];
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (ch !== " " && palette[ch]) cells.push({ x, y, c: palette[ch] });
    }
  });
  return (
    <svg
      width={size}
      height={(size * h) / w}
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      className={className}
      style={style}
      role="img"
      aria-label={title}
    >
      {cells.map((p, i) => (
        <rect key={i} x={p.x} y={p.y} width={1} height={1} fill={p.c} />
      ))}
    </svg>
  );
}

const fire: Palette = { Y: "#f6d36b", O: "#e08a3c", R: "#c25b2a", w: "#8a5e36", W: "#6b4a2b" };
export const Campfire = (p: Omit<Parameters<typeof PixelSprite>[0], "rows" | "palette">) => (
  <PixelSprite
    title="campfire"
    palette={fire}
    rows={[
      "    Y    ",
      "   YOY   ",
      "  YOOOY  ",
      "  YORYO  ",
      " YOORROY ",
      " YORRROY ",
      " OORRROO ",
      "  OOROO  ",
      "   OOO   ",
      "WWwWWwWW ",
      " WWwWWw  ",
    ]}
    {...p}
  />
);

const pack: Palette = { G: "#6f8f3f", g: "#4f6a2c", S: "#6b4a2b", b: "#d9a441" };
export const Backpack = (p: Omit<Parameters<typeof PixelSprite>[0], "rows" | "palette">) => (
  <PixelSprite
    title="backpack"
    palette={pack}
    rows={[
      "  gGGg  ",
      " gGGGGg ",
      "GSSSSSSG",
      "GSbbbbSG",
      "GGGGGGGG",
      "GGGggGGG",
      "GGGbbGGG",
      "GGGggGGG",
      "GGGGGGGG",
      "gGGGGGGg",
      " gGGGGg ",
      "  gGGg  ",
    ]}
    {...p}
  />
);

const comp: Palette = { C: "#d9a441", R: "#c25b2a", W: "#ece6d8", d: "#211d17" };
export const Compass = (p: Omit<Parameters<typeof PixelSprite>[0], "rows" | "palette">) => (
  <PixelSprite
    title="compass"
    palette={comp}
    rows={[
      "   CCCCC   ",
      "  CC   CC  ",
      " C   R   C ",
      "C   RRR   C",
      "C    R    C",
      "C   RdR   C",
      "C    W    C",
      "C   WWW   C",
      " C   W   C ",
      "  CC   CC  ",
      "   CCCCC   ",
    ]}
    {...p}
  />
);

const scroll: Palette = { p: "#d8cdb2", P: "#ece6d8", r: "#6b4a2b", i: "#8a8170" };
export const Scroll = (p: Omit<Parameters<typeof PixelSprite>[0], "rows" | "palette">) => (
  <PixelSprite
    title="scroll"
    palette={scroll}
    rows={[
      " rrrrrrrr ",
      "rPPPPPPPPr",
      " PiiiiiiP ",
      " PPPPPPPP ",
      " PiiiiiiP ",
      " PPPPPPPP ",
      " PiiiiiiP ",
      " PPPPPPPP ",
      "rPPPPPPPPr",
      " rrrrrrrr ",
    ]}
    {...p}
  />
);

const tent: Palette = { G: "#6f8f3f", g: "#4f6a2c", d: "#211d17", b: "#d9a441" };
export const Tent = (p: Omit<Parameters<typeof PixelSprite>[0], "rows" | "palette">) => (
  <PixelSprite
    title="tent"
    palette={tent}
    rows={[
      "    b    ",
      "   GgG   ",
      "  GGgGG  ",
      " GGGdGGG ",
      " GGGdGGG ",
      "GGGGdGGGG",
      "GGGddGGGG",
      "gggddgggg",
    ]}
    {...p}
  />
);

/* ---------- Hero night-wilderness scene (layered pixel silhouettes) ---------- */
export function HeroScene() {
  return (
    <svg
      className="hero-bg"
      viewBox="0 0 160 90"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="crispEdges"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d2430" />
          <stop offset="45%" stopColor="#241f2c" />
          <stop offset="100%" stopColor="#181511" />
        </linearGradient>
      </defs>
      <rect width="160" height="90" fill="url(#sky)" />
      {/* moon */}
      <g>
        <rect x="122" y="12" width="10" height="10" fill="#ece6d8" opacity="0.92" />
        <rect x="120" y="14" width="2" height="6" fill="#ece6d8" opacity="0.92" />
        <rect x="132" y="14" width="2" height="6" fill="#ece6d8" opacity="0.92" />
        <rect x="124" y="10" width="6" height="2" fill="#ece6d8" opacity="0.92" />
        <rect x="124" y="22" width="6" height="2" fill="#ece6d8" opacity="0.92" />
        <rect x="125" y="14" width="2" height="2" fill="#c9c1ad" opacity="0.6" />
        <rect x="128" y="18" width="2" height="2" fill="#c9c1ad" opacity="0.5" />
      </g>
      {/* stars */}
      {[
        [12, 10], [28, 18], [44, 8], [60, 22], [76, 12], [92, 26],
        [20, 30], [50, 34], [104, 16], [140, 30], [150, 12], [8, 24], [36, 40],
      ].map(([x, y], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="1"
          height="1"
          fill="#ece6d8"
          className="animate-twinkle"
          style={{ animationDelay: `${(i % 5) * 0.6}s` }}
        />
      ))}
      {/* far hills */}
      <path
        d="M0 64 L20 54 L36 60 L54 48 L72 58 L92 50 L112 60 L132 52 L150 60 L160 56 L160 90 L0 90 Z"
        fill="#3a4a2c"
        opacity="0.55"
      />
      {/* mid hills */}
      <path
        d="M0 72 L24 62 L44 70 L64 60 L88 70 L108 62 L130 72 L152 64 L160 70 L160 90 L0 90 Z"
        fill="#2f3d24"
        opacity="0.8"
      />
      {/* pine silhouettes */}
      {[14, 30, 118, 138].map((x, i) => (
        <g key={i} fill="#22301a" opacity="0.9">
          <rect x={x + 2} y={66} width="2" height="8" />
          <rect x={x} y={64} width="6" height="2" />
          <rect x={x - 1} y={60} width="8" height="3" />
          <rect x={x} y={56} width="6" height="3" />
          <rect x={x + 1} y={53} width="4" height="3" />
        </g>
      ))}
      {/* near ground */}
      <rect x="0" y="78" width="160" height="12" fill="#1c2415" />
    </svg>
  );
}
