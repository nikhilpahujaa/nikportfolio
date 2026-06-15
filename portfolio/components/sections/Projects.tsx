"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/data";
import { revealUp, stagger, vp } from "@/lib/motion";
import { Compass } from "@/components/PixelArt";

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

// Screenshot placeholder — shown until a real image is added to portfolio/media/projects/
function ScreenshotPlaceholder({ name }: { name: string }) {
  return (
    <div
      className="rounded-xl flex flex-col items-center justify-center gap-2 aspect-square w-full"
      style={{
        background: "rgba(155,191,94,0.04)",
        border: "2px dashed rgba(155,191,94,0.2)",
        color: "var(--color-ink-faint)",
      }}
    >
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
      <span className="font-tag text-[10px] text-center leading-relaxed tracking-wider">
        Add screenshot<br />{name.toLowerCase()}.png
      </span>
    </div>
  );
}

interface ProjectCardProps {
  project: typeof projects[number];
  layout: "row" | "column";
}

function ProjectCard({ project, layout }: ProjectCardProps) {
  const isRow = layout === "row";
  return (
    <motion.div
      variants={revealUp}
      className={`card overflow-hidden flex flex-col ${isRow ? "lg:flex-row" : ""}`}
    >
      {/* Screenshot / Browser mockup */}
      <div className={`p-4 sm:p-5 flex-shrink-0 flex items-center justify-center ${isRow ? "lg:w-[450px] w-full" : "w-full"}`}>
        {"image" in project && project.image ? (
          <div className="project-preview w-full">
            <div className="project-preview__bar">
              <span className="project-preview__dot bg-[#ff5f56]" />
              <span className="project-preview__dot bg-[#ffbd2e]" />
              <span className="project-preview__dot bg-[#27c93f]" />
            </div>
            <div className="project-preview__shot bg-zinc-950/20 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="project-preview__img object-contain"
                sizes={isRow ? "(max-w-1024px) 100vw, 450px" : "(max-w-768px) 100vw, 520px"}
              />
            </div>
          </div>
        ) : (
          <ScreenshotPlaceholder name={project.name} />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 sm:p-8 flex-1 justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="tech-tag tech-tag-accent">★ Featured</span>
            <span className="font-tag text-xs" style={{ color: "var(--color-ink-faint)" }}>{project.period}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl mb-1" style={{ color: "var(--color-ink)" }}>
            {project.name}
          </h3>
          <p className="font-body italic text-lg mb-4" style={{ color: "var(--color-brand)" }}>{project.subtitle}</p>

          <p className="leading-relaxed mb-5 text-[15px]" style={{ color: "var(--color-ink-dim)" }}>
            {project.description}
          </p>

          {project.highlights && (
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              {project.highlights.map((h) => (
                <div key={h.label} className="flex-1 rounded-xl p-3.5"
                  style={{ background: "rgba(155,191,94,0.06)", border: "1px solid rgba(155,191,94,0.16)" }}>
                  <div className="contact-row__label">{h.label}</div>
                  <div className="text-sm" style={{ color: "var(--color-ink)" }}>{h.detail}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-4"
          style={{ borderTop: "1px solid var(--color-line)" }}>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
          <a href={project.url} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-tag text-xs font-semibold transition-colors"
            style={{ color: "var(--color-brand)" }}>
            View Live <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="projects" className="section section-tinted relative overflow-hidden">
      <div className="absolute top-16 left-6 sm:left-16 animate-float opacity-80 pointer-events-none">
        <Compass size={54} />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div variants={revealUp} initial={initial} whileInView="visible" viewport={vp} className="mb-12">
          <div className="section-label">02 · The Evidence</div>
          <h2 className="heading">
            Build <em>Log</em>
          </h2>
          <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--color-ink-dim)" }}>
            Production-grade expeditions — built for performance, scale, and AI integration.
          </p>
        </motion.div>

        <motion.div variants={stagger} initial={initial} whileInView="visible" viewport={vp}
          className="flex flex-col gap-4">
          
          {/* Row 1: FinSight (Full-width) */}
          {projects[0] && <ProjectCard project={projects[0]} layout="row" />}

          {/* Row 2: DataFlow & AriGato (Side-by-side) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {projects[1] && <ProjectCard project={projects[1]} layout="column" />}
            {projects[2] && <ProjectCard project={projects[2]} layout="column" />}
          </div>

          {/* Row 3: ExcelHire (Full-width) */}
          {projects[3] && <ProjectCard project={projects[3]} layout="row" />}

        </motion.div>
      </div>
    </section>
  );
}
