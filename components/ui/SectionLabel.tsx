"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  chapter: string;
  title: string;
}

export default function SectionLabel({ chapter, title }: Props) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative mb-16">
      <span className="absolute -top-6 left-0 font-heading text-8xl font-bold select-none pointer-events-none text-primary/[0.04]">
        {chapter}
      </span>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-text">
        {title}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        transition={
          prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.2 }
        }
        viewport={{ once: true }}
        className="mt-3 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
      />
    </div>
  );
}
