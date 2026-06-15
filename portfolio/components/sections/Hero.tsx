"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { roles, stats } from "@/lib/data";
import { HeroScene, Campfire } from "@/components/PixelArt";

function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const word = words[wordIdx];
    const delay = deleting ? 50 : 85;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < word.length) setText(word.slice(0, text.length + 1));
        else setTimeout(() => setDeleting(true), 2200);
      } else {
        if (text.length > 0) setText(text.slice(0, -1));
        else {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIdx, words, reduced]);

  return text;
}

const paths = [
  { num: "01", title: "Build Log", sub: "What I've shipped", href: "#projects" },
  { num: "02", title: "Quest Log", sub: "Where I've worked", href: "#experience" },
  { num: "03", title: "Make Camp", sub: "Let's talk", href: "#contact" },
];

export default function Hero() {
  const typedText = useTypewriter(roles);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Pixel night-wilderness scene */}
      <HeroScene />
      <div className="hero-overlay absolute inset-0 z-[1]" />

      {/* Floating campfire sprite */}
      <div className="absolute bottom-[14%] right-[10%] z-[2] animate-float opacity-90 hidden sm:block">
        <Campfire size={64} />
      </div>

      <div className="relative z-[3] w-full max-w-5xl mx-auto px-5 py-28 text-center text-[var(--color-ink)]">
        {/* Status badge */}
        <div className="animate-entry inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{ background: "rgba(236,230,216,0.06)", border: "1px solid rgba(236,230,216,0.16)" }}>
          <span className="animate-ember w-2 h-2 rounded-full inline-block" style={{ background: "#9bbf5e" }} />
          <span className="font-tag text-xs tracking-wide" style={{ color: "var(--color-ink-dim)" }}>
            Available for opportunities · Gurgaon, India
          </span>
        </div>

        {/* Name */}
        <h1 className="hero-name animate-entry mb-5">
          <span className="block text-[1.1em] leading-[0.95]">Nikhil</span>
          <span className="block text-[0.85em] leading-[0.95]" style={{ color: "var(--color-brand)" }}>Pahuja</span>
        </h1>

        {/* Role — typewriter */}
        <p className="hero-role animate-entry--delayed mb-7 h-9" style={{ color: "var(--color-ink-dim)" }}>
          A <span style={{ color: "var(--color-ink)", textDecoration: "underline", textDecorationStyle: "wavy", textDecorationColor: "var(--color-brand)" }} className="typing-cursor">{typedText}</span>
        </p>

        {/* Stats strip */}
        <div className="animate-entry--delayed-2 flex items-center justify-center gap-6 sm:gap-10 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl" style={{ color: "var(--color-ink)" }}>{s.value}</div>
              <div className="font-tag text-[10px] tracking-widest uppercase mt-1" style={{ color: "var(--color-ink-faint)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Choose your path */}
        <div className="animate-entry--delayed-2 w-full max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px" style={{ background: "rgba(236,230,216,0.18)" }} />
            <span className="path-rule">Choose your path</span>
            <div className="flex-1 h-px" style={{ background: "rgba(236,230,216,0.18)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {paths.map((p) => (
              <a key={p.num} href={p.href} className="hero-card group">
                <span className="hero-card__num">{p.num}</span>
                <span className="hero-card__title">{p.title}</span>
                <span className="flex items-center justify-between font-tag text-xs" style={{ opacity: 0.7 }}>
                  {p.sub}
                  <span className="hero-card__arrow">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-12 animate-bounce-y">
          <a href="#about" className="inline-flex flex-col items-center gap-1.5 transition-colors" style={{ color: "var(--color-ink-faint)" }}>
            <span className="font-tag text-[10px] tracking-widest uppercase">scroll</span>
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
