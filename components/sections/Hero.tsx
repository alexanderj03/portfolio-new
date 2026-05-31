"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "framer-motion";

const NAME = "Alexander Jiw";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", prefersReduced ? "0%" : "30%"]);

  const letters = NAME.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.045,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariant: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg"
    >
      {/* CSS grid dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(var(--primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }}
        aria-hidden="true"
      />

      <motion.div
        style={{ y }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-mono text-sm text-primary tracking-widest uppercase mb-6"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          aria-label={NAME}
          className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight"
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariant}
              className="inline-block"
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building elegant, performant web applications with modern technologies.
          CS student graduating 2026 — passionate about clean code and great UX.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium rounded-lg cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 text-muted hover:text-text transition-colors duration-200 font-medium cursor-pointer"
          >
            Get In Touch →
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        aria-hidden="true"
      >
        <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
        <div className="relative h-12 w-0.5 bg-border overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 w-full bg-primary rounded-full"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ height: "50%" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
