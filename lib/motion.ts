import type { Variants } from "framer-motion";

/** Slow, settled easing — nothing snappy. */
export const editorialEase: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: editorialEase },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: editorialEase },
  },
};

export const stagger: Variants = {
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.8, ease: editorialEase },
  },
};
