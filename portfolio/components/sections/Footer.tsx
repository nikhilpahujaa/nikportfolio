import { identity } from "@/lib/data";

const socials = [
  { label: "GitHub", href: identity.github },
  { label: "LinkedIn", href: identity.linkedin },
  { label: "Portfolio", href: identity.portfolio },
];

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      {/* Pixel pine ridge silhouette */}
      <svg
        aria-hidden="true"
        viewBox="0 0 160 30"
        preserveAspectRatio="xMidYMax slice"
        shapeRendering="crispEdges"
        className="absolute top-0 left-0 w-full opacity-40"
        style={{ height: "30vh" }}
      >
        {[6, 22, 40, 60, 84, 104, 126, 146].map((x, i) => (
          <g key={i} fill="#22301a">
            <rect x={x + 2} y={20} width="2" height="10" />
            <rect x={x} y={18} width="6" height="2" />
            <rect x={x - 1} y={14} width="8" height="3" />
            <rect x={x} y={10} width="6" height="3" />
            <rect x={x + 1} y={7} width="4" height="3" />
          </g>
        ))}
      </svg>

      <div className="relative z-[1] max-w-6xl mx-auto w-full">
        <p className="footer__subline mb-3">The expedition continues.</p>
        <h2 className="footer__headline mb-6">
          Let&apos;s build the <em>future</em>.
        </h2>

        <a href={`mailto:${identity.email}`} className="footer__email">
          {identity.email}
        </a>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-6"
          style={{ borderTop: "1px solid rgba(236,230,216,0.1)" }}>
          <div className="footer__social">© 2025 Nikhil Pahuja · All rights reserved.</div>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="footer__social transition-colors hover:text-[var(--color-brand)]">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
