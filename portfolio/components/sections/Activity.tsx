"use client";

import { motion, useReducedMotion } from "framer-motion";
import { identity } from "@/lib/data";
import { revealUp, vp } from "@/lib/motion";
import { Tent } from "@/components/PixelArt";

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const username = identity.github.replace(/\/+$/, "").split("/").pop();

export default function Activity() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="activity" className="section section-grid relative overflow-hidden">
      <div className="absolute top-16 right-6 sm:right-16 animate-float opacity-80 pointer-events-none">
        <Tent size={54} />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div variants={revealUp} initial={initial} whileInView="visible" viewport={vp} className="mb-12">
          <div className="section-label">05 · The Daily Grind</div>
          <h2 className="heading">
            Daily <em>Grind</em>
          </h2>
          <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--color-ink-dim)" }}>
            A year of commits at the forge — every square is a day building something real.
          </p>
        </motion.div>

        <motion.div variants={revealUp} initial={initial} whileInView="visible" viewport={vp} className="card p-5 sm:p-7">
          {/* Parchment "logbook page" framing the contribution heatmap */}
          <div className="contrib-panel">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/6f8f3f/${username}`}
              alt={`GitHub contribution graph for ${username}`}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4"
            style={{ borderTop: "1px solid var(--color-line)" }}>
            <span className="font-tag text-xs" style={{ color: "var(--color-ink-faint)" }}>
              @{username} · live from GitHub
            </span>
            <a href={identity.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-tag text-xs font-semibold transition-colors"
              style={{ color: "var(--color-brand)" }}>
              View on GitHub <ExternalLinkIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
