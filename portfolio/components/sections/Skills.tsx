"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { revealUp, stagger, vp } from "@/lib/motion";
import { Backpack } from "@/components/PixelArt";

export default function Skills() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="skills" className="section section-tinted relative overflow-hidden">
      <div className="absolute top-16 left-6 sm:left-16 animate-float opacity-70 pointer-events-none">
        <Backpack size={50} />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div variants={revealUp} initial={initial} whileInView="visible" viewport={vp} className="mb-14">
          <div className="section-label">04 · What&apos;s in the Pack</div>
          <h2 className="heading">
            The <em>Inventory</em>
          </h2>
        </motion.div>

        <motion.div variants={stagger} initial={initial} whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={revealUp}>
              <h3 className="skills-category-heading flex items-center gap-2">
                {group.title}
                {group.accent && (
                  <span className="font-tag text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full"
                    style={{ color: "var(--color-brass)", border: "1px solid rgba(217,164,65,0.4)" }}>
                    Current focus
                  </span>
                )}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className={`skill-pill${group.accent ? " skill-pill-accent" : ""}`}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
