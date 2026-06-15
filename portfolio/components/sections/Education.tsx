"use client";

import { motion, useReducedMotion } from "framer-motion";
import { education, schooling } from "@/lib/data";
import { revealUp, stagger, vp } from "@/lib/motion";
import { Scroll } from "@/components/PixelArt";

export default function Education() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="education" className="section relative overflow-hidden">
      <div className="absolute top-16 right-6 sm:right-16 animate-float-slow opacity-80 pointer-events-none">
        <Scroll size={54} />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div variants={revealUp} initial={initial} whileInView="visible" viewport={vp} className="mb-14">
          <div className="section-label">06 · Lore &amp; Records</div>
          <h2 className="heading">
            Scrolls &amp; <em>Lore</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Higher Education */}
          <div>
            <h3 className="skills-category-heading">Higher Education</h3>
            <motion.div variants={revealUp} initial={initial} whileInView="visible" viewport={vp} className="card p-6">
              <h4 className="font-display text-xl" style={{ color: "var(--color-ink)" }}>{education.degree}</h4>
              <div className="font-body italic text-base mt-1" style={{ color: "var(--color-brand)" }}>{education.university}</div>
              <div className="flex items-center gap-3 mt-3 flex-wrap timeline__meta">
                <span>{education.period}</span>
                <span style={{ color: "var(--color-line)" }}>·</span>
                <span style={{ color: "var(--color-ink-dim)" }}>{education.cgpa}</span>
              </div>
            </motion.div>
          </div>

          {/* Schooling */}
          <div>
            <h3 className="skills-category-heading">Schooling</h3>
            <motion.div variants={stagger} initial={initial} whileInView="visible" viewport={vp} className="space-y-4">
              {schooling.map((s, idx) => (
                <motion.div key={idx} variants={revealUp} className="card p-5">
                  <h4 className="font-display text-base leading-snug" style={{ color: "var(--color-ink)" }}>{s.level}</h4>
                  <div className="font-body italic text-sm mt-1.5" style={{ color: "var(--color-ink-dim)" }}>{s.school}</div>
                  <div className="flex items-center gap-3 mt-2 flex-wrap timeline__meta">
                    <span>{s.period}</span>
                    <span style={{ color: "var(--color-line)" }}>·</span>
                    <span style={{ color: "var(--color-ink-dim)" }}>{s.score}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
