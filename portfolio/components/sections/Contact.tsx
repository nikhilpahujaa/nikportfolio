"use client";

import { motion, useReducedMotion } from "framer-motion";
import { identity } from "@/lib/data";
import { revealUp, stagger, vp } from "@/lib/motion";
import { Campfire } from "@/components/PixelArt";

const socials = [
  { label: "GitHub", href: identity.github },
  { label: "LinkedIn", href: identity.linkedin },
  { label: "Portfolio", href: identity.portfolio },
];

export default function Contact() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="contact" className="section section-tinted relative overflow-hidden">
      <div className="absolute top-16 right-6 sm:right-16 animate-float opacity-90 pointer-events-none">
        <Campfire size={56} />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div variants={revealUp} initial={initial} whileInView="visible" viewport={vp} className="mb-12">
          <div className="section-label">07 · Rest at the Fire</div>
          <h2 className="heading">
            Make <em>Camp</em>
          </h2>
          <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--color-ink-dim)" }}>
            Open to full-time roles, freelance expeditions, and genuinely interesting engineering
            problems. Got something worth building? Pull up a log by the fire — let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact options */}
          <motion.div variants={stagger} initial={initial} whileInView="visible" viewport={vp} className="flex flex-col gap-3">
            <motion.a variants={revealUp} href={`mailto:${identity.email}`} className="contact-row">
              <div>
                <div className="contact-row__label">Email</div>
                <div className="contact-row__value">{identity.email}</div>
              </div>
              <span style={{ color: "var(--color-brand)" }}>→</span>
            </motion.a>
            <motion.a variants={revealUp} href={`tel:${identity.phone.replace(/\s/g, "")}`} className="contact-row">
              <div>
                <div className="contact-row__label">Phone</div>
                <div className="contact-row__value">{identity.phone}</div>
              </div>
              <span style={{ color: "var(--color-brand)" }}>→</span>
            </motion.a>
            <motion.div variants={revealUp} className="contact-row" style={{ cursor: "default" }}>
              <div>
                <div className="contact-row__label">Location</div>
                <div className="contact-row__value">{identity.location}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Primary CTA + socials */}
          <motion.div variants={revealUp} initial={initial} whileInView="visible" viewport={vp}>
            <a href={`mailto:${identity.email}`} className="cta-resume">
              ✉ Let&apos;s build something together
            </a>
            <div className="flex flex-wrap gap-3 mt-6">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
