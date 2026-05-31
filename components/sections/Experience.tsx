"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const ITEMS = [
  {
    type: "work" as const,
    role: "Sales Associate",
    org: "Optus",
    period: "April 2024 – Present",
    desc: "Consistently exceeded monthly sales KPIs through consultative selling and tailored tech solutions. Resolved complex billing, device, and plan issues. Trusted to manage escalated customer concerns.",
    tags: ["Sales", "Customer Service", "Retail"],
  },
  {
    type: "work" as const,
    role: "Team Leader",
    org: "Elevate Tuition",
    period: "Jan 2022 – Dec 2024",
    desc: "Led and mentored a team of tutors, coordinating schedules and program operations across multiple subjects. Developed tailored learning strategies and acted as primary contact for academic and operational challenges.",
    tags: ["Leadership", "Mentoring", "Operations"],
  },
  {
    type: "work" as const,
    role: "Team Member",
    org: "Woolworths Group",
    period: "Feb 2022 – Aug 2023",
    desc: "Delivered consistent customer service in a fast-paced retail environment during high-volume trading periods. Maintained store standards and collaborated closely with team members.",
    tags: ["Retail", "Customer Service", "Teamwork"],
  },
  {
    type: "work" as const,
    role: "Team Member",
    org: "Australian Electoral Commission",
    period: "Jan 2022 – Dec 2023",
    desc: "Organised voting information to ensure smooth vote counting operations. Collaborated within a large team requiring strong communication and coordination.",
    tags: ["Government", "Data", "Coordination"],
  },
  {
    type: "edu" as const,
    role: "Bachelor of Computer Science",
    org: "UNSW",
    period: "2022 – 2025",
    desc: "Strong foundation in software development, data structures, and algorithms. Built full-stack applications using React, SQL, and Next.js. Worked across Java, Python, and JavaScript.",
    tags: ["CS", "Full Stack", "Algorithms"],
  },
  {
    type: "edu" as const,
    role: "Higher School Certificate (HSC)",
    org: "Canley Vale High School",
    period: "2016 – 2021",
    desc: "Successfully completed the Higher School Certificate.",
    tags: ["HSC"],
  },
];

function TimelineCard({
  item,
  index,
  isLeft,
}: {
  item: (typeof ITEMS)[0];
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  return (
    <div
      className={`flex items-start gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: prefersReduced ? 0 : (isLeft ? -40 : 40) }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
        className="w-full md:w-[calc(50%-24px)] bg-surface-1 border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-300"
      >
        <div className="flex items-start justify-between mb-2 gap-2">
          <div className="min-w-0">
            <h3 className="font-heading font-semibold text-text leading-snug">
              {item.role}
            </h3>
            <p className="text-primary text-sm mt-0.5">{item.org}</p>
          </div>
          <span
            className={`shrink-0 text-xs px-2 py-1 rounded-full ${
              item.type === "edu"
                ? "bg-accent/10 text-accent"
                : "bg-primary/10 text-primary"
            }`}
          >
            {item.type === "edu" ? "Edu" : "Work"}
          </span>
        </div>
        <p className="text-xs text-muted mb-3 font-mono">{item.period}</p>
        <p className="text-sm text-muted leading-relaxed mb-4">{item.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 bg-surface-2 text-muted rounded-md border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Center node */}
      <div className="hidden md:flex w-12 flex-col items-center shrink-0 pt-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: [0, 1.4, 1] } : {}}
          transition={{ duration: 0.4, delay: index * 0.05 + 0.15 }}
          className="w-3 h-3 rounded-full bg-primary border-2 border-bg"
        />
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block w-[calc(50%-24px)]" />
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel chapter="02" title="Experience" />

        <div ref={containerRef} className="relative">
          {/* Animated center line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block overflow-hidden bg-border">
            <motion.div
              style={{ scaleY: lineScaleY, transformOrigin: "top" }}
              className="h-full w-full bg-gradient-to-b from-primary to-accent"
            />
          </div>

          {/* Left line (mobile) */}
          <div className="absolute left-4 top-0 bottom-0 w-px md:hidden overflow-hidden bg-border">
            <motion.div
              style={{ scaleY: lineScaleY, transformOrigin: "top" }}
              className="h-full w-full bg-gradient-to-b from-primary to-accent"
            />
          </div>

          <div className="space-y-8 md:space-y-10 pl-10 md:pl-0">
            {ITEMS.map((item, i) => (
              <TimelineCard
                key={i}
                item={item}
                index={i}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
