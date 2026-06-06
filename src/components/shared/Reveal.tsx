"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li";
  y?: number;
}

/**
 * Fade-up on scroll. A lightweight, accessible stand-in for GSAP ScrollTrigger
 * reveals. Respects prefers-reduced-motion via Framer Motion defaults.
 */
export default function Reveal({ children, delay = 0, className, y = 38 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
