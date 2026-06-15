import type { Variants } from "framer-motion";

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 90, damping: 20 },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

/** Use once:false for bidirectional scroll reveal — elements fade in on enter, reset on exit */
export const vp = { once: false, margin: "-60px" } as const;
