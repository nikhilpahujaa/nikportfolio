"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/data";
import { revealUp, stagger, vp } from "@/lib/motion";
import { Tent } from "@/components/PixelArt";

export default function Experience() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="experience" className="section relative overflow-hidden">
      <div className="absolute top-16 right-6 sm:right-16 animate-float-slow opacity-80 pointer-events-none">
        <Tent size={56} />
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div variants={revealUp} initial={initial} whileInView="visible" viewport={vp} className="mb-14">
          <div className="section-label">03 · The Trail So Far</div>
          <h2 className="heading">
            Quest <em>Log</em>
          </h2>
        </motion.div>

        <motion.div variants={stagger} initial={initial} whileInView="visible" viewport={vp} className="timeline">
          {experience.map((job, idx) => (
            <motion.div key={idx} variants={revealUp} className="timeline__item">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <span className="timeline__role">{job.role}</span>
                  <span className="timeline__company"> @ {job.company}</span>
                </div>
              </div>
              <div className="timeline__meta mb-4">{job.period}</div>
              <ul className="space-y-2.5">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: "var(--color-ink-dim)" }}>
                    <span className="mt-2.5 w-1.5 h-1.5 flex-shrink-0" style={{ background: "var(--color-brand)" }} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
