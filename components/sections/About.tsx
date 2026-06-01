"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiSqlite,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SectionLabel from "@/components/ui/SectionLabel";

const STATS = [
  { label: "Years Coding", value: 3, suffix: "+" },
  { label: "Projects Shipped", value: 5, suffix: "" },
  { label: "Technologies", value: 10, suffix: "+" },
];

const TECH = [
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiReact, label: "React" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiPython, label: "Python" },
  { icon: FaJava, label: "Java" },
  { icon: SiGit, label: "Git" },
  { icon: SiSqlite, label: "SQLite" },
];

function Counter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (prefersReduced) {
      setCount(value);
      return;
    }
    const duration = 1200;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, prefersReduced]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  return (
    <section id="about" ref={ref} className="py-24 bg-surface-1">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel chapter="01" title="About Me" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Stat tower */}
          <motion.div
            initial={{ opacity: 0, x: prefersReduced ? 0 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-2"
          >
            {STATS.map(({ label, value, suffix }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: prefersReduced ? 0 : -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="flex items-baseline gap-4 py-5 border-b border-border last:border-0"
              >
                <span className="font-heading text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-none tabular-nums">
                  <Counter value={value} suffix={suffix} inView={inView} />
                </span>
                <span className="font-heading text-muted text-sm uppercase tracking-widest">
                  {label}
                </span>
              </motion.div>
            ))}

            {/* Info lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 space-y-3"
            >
              {[
                { label: "Degree", value: "B.Sc. Computer Science" },
                { label: "Status", value: "Available for work" },
                { label: "Open to", value: "Remote · Hybrid · On-site" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider w-24 shrink-0">
                    {label}
                  </span>
                  <span className="w-px h-3 bg-border shrink-0" />
                  <span className="text-sm text-text">{value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Bio + tech stack */}
          <motion.div
            initial={{ opacity: 0, x: prefersReduced ? 0 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="space-y-8"
          >
            <div className="pl-4 border-l-2 border-primary/25 space-y-4">
              <p className="text-text leading-relaxed">
                CS graduate from UNSW (2025), passionate about building elegant
                software that solves real problems. Background in full-stack
                development, team leadership, and customer-facing roles where I bring
                both technical depth and strong people skills.
              </p>
              <p className="text-muted leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring new technologies or finding
                new ways to make life easier.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-text mb-4 text-sm uppercase tracking-wider">
                Tech Stack
              </h3>
              <div className="grid grid-cols-3 gap-2.5">
                {TECH.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: prefersReduced ? 0 : 0.2 + i * 0.05,
                      duration: 0.3,
                    }}
                    className="flex items-center gap-2 p-3 bg-surface-2 rounded-lg border border-border hover:border-primary/40 hover:bg-surface-1 transition-all duration-200 cursor-default group"
                  >
                    <Icon
                      className="text-muted group-hover:text-primary transition-colors duration-200 shrink-0"
                      size={16}
                    />
                    <span className="font-mono text-xs text-muted group-hover:text-text transition-colors duration-200 truncate">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
