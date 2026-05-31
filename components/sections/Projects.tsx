"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionLabel from "@/components/ui/SectionLabel";

/* ── Project visual thumbnails ─────────────────────────── */

function BudgetTrackerVisual() {
  const bars = [65, 40, 80, 55, 90, 35, 70];
  return (
    <div className="w-full h-full flex items-end justify-center gap-2 px-4 pb-2 pt-4 bg-[#0a1628]">
      {bars.map((h, i) => (
        <div key={i} className="flex-1 flex flex-col justify-end">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-t-sm bg-emerald-500/80 w-full min-h-1"
            style={{ maxHeight: "100%" }}
          />
        </div>
      ))}
    </div>
  );
}

function PersonalWebsiteVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0a1628] p-4 overflow-hidden">
      <div className="font-mono text-xs leading-relaxed text-left w-full max-w-full">
        <p className="text-purple-400">
          const{" "}
          <span className="text-blue-300">portfolio</span>{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-orange-300">{`{`}</span>
        </p>
        <p className="pl-4 text-emerald-400">
          name<span className="text-white">:</span>{" "}
          <span className="text-yellow-300">&quot;Alexander Jiw&quot;</span>
          <span className="text-white">,</span>
        </p>
        <p className="pl-4 text-emerald-400">
          stack<span className="text-white">:</span>{" "}
          <span className="text-yellow-300">[&quot;Next.js&quot;, &quot;TS&quot;]</span>
        </p>
        <p className="text-orange-300">{`}`}</p>
        <p className="mt-1">
          <span className="text-blue-300">portfolio</span>
          <span className="text-white">.</span>
          <span className="text-yellow-200">ship</span>
          <span className="text-white">()</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-white"
          >
            ▍
          </motion.span>
        </p>
      </div>
    </div>
  );
}

function StrongerBrainsVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0a1628]">
      {[1, 2, 3, 4].map((n) => (
        <motion.div
          key={n}
          className="absolute rounded-full border border-primary/30"
          style={{ width: n * 48, height: n * 48 }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.3, 0.6] }}
          transition={{
            duration: 2,
            delay: n * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="w-10 h-10 rounded-full bg-primary/40 border-2 border-primary z-10 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-primary" />
      </div>
    </div>
  );
}

function ManagementAppVisual() {
  return (
    <div className="w-full h-full bg-[#0a1628] flex flex-col overflow-hidden">
      {/* Terminal titlebar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-surface-2/50 border-b border-border/50 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 font-mono text-xs text-muted">bash</span>
      </div>
      {/* Terminal body */}
      <div className="flex-1 p-3 font-mono text-xs space-y-1 overflow-hidden">
        <p>
          <span className="text-emerald-400">user@app</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$ </span>
          <span className="text-muted">npm run dev</span>
        </p>
        <p className="text-emerald-300">✓ Ready on localhost:3000</p>
        <p>
          <span className="text-emerald-400">user@app</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$ </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-2 h-3 bg-white/70 align-middle"
          />
        </p>
      </div>
    </div>
  );
}

function JobAppVisual() {
  const cols = [
    { label: "Applied", color: "text-blue-400", cards: ["Atlassian", "Canva"] },
    { label: "Interview", color: "text-amber-400", cards: ["Atlassian"] },
    { label: "Offer", color: "text-emerald-400", cards: [] },
  ];
  return (
    <div className="w-full h-full bg-[#0a1628] flex gap-2 p-3 overflow-hidden">
      {cols.map((col) => (
        <div key={col.label} className="flex-1 flex flex-col gap-1.5 min-w-0">
          <div className={`font-mono text-[10px] font-semibold ${col.color} mb-1 truncate`}>
            {col.label} {col.cards.length > 0 && <span className="opacity-60">({col.cards.length})</span>}
          </div>
          {col.cards.map((c) => (
            <div
              key={c}
              className="bg-surface-2/60 border border-border/50 rounded px-2 py-1.5"
            >
              <div className="font-mono text-[10px] text-text/80 truncate">{c}</div>
              <div className="font-mono text-[9px] text-muted mt-0.5">SWE Intern</div>
            </div>
          ))}
          <div className="border border-dashed border-border/30 rounded px-2 py-1.5 opacity-40">
            <div className="w-8 h-1.5 bg-muted/30 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Project data ───────────────────────────────────────── */

const PROJECTS = [
  {
    title: "AJ-Trackr",
    desc: "Desktop job application pipeline tracker built with Tauri v2 + React. Kanban board, sortable table, calendar view, and AI-powered CSV import via Claude Haiku — replaces spreadsheet-based job tracking for students.",
    tags: ["Tauri", "React 19", "TypeScript", "Supabase", "Claude AI", "shadcn/ui"],
    visual: JobAppVisual,
    githubUrl: "https://github.com/alexanderj03/job-app-track",
    liveUrl: null,
    span: "col-span-3",
  },
  {
    title: "Budget Tracker",
    desc: "A full-stack personal finance app with transaction tracking, category breakdown, and monthly trend charts. Deployed on Vercel with PostgreSQL.",
    tags: ["Next.js", "PostgreSQL", "Tailwind", "Recharts"],
    visual: BudgetTrackerVisual,
    githubUrl: "https://github.com/alexanderj03",
    liveUrl: null,
    span: "col-span-2",
  },
  {
    title: "Personal Website",
    desc: "This portfolio site — built with Next.js, Framer Motion, and Tailwind. Features dark mode, animated sections, and EmailJS contact.",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    visual: PersonalWebsiteVisual,
    githubUrl: "https://github.com/alexanderj03/portfolio",
    liveUrl: null,
    span: "col-span-1",
  },
  {
    title: "Stronger Brains",
    desc: "A mental wellness web app with guided exercises, streak tracking, and progress insights. Built with a REST API and SQLite.",
    tags: ["React", "Express", "SQLite", "Node.js"],
    visual: StrongerBrainsVisual,
    githubUrl: "https://github.com/alexanderj03",
    liveUrl: null,
    span: "col-span-1",
  },
  {
    title: "Management App",
    desc: "A task and team management tool with real-time updates, role-based access, and a clean dashboard UI.",
    tags: ["Next.js", "Prisma", "TypeScript", "Supabase"],
    visual: ManagementAppVisual,
    githubUrl: "https://github.com/alexanderj03",
    liveUrl: null,
    span: "col-span-2",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();
  const Visual = project.visual;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: prefersReduced ? 0 : 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`${project.span} group relative bg-surface-1 border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300`}
    >
      {/* Visual thumbnail */}
      <div className="relative h-44 overflow-hidden">
        <Visual />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2 gap-4">
          <h3 className="font-heading font-semibold text-text text-lg leading-tight">
            {project.title}
          </h3>
          <div className="flex gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`}
                className="p-1.5 text-muted hover:text-text transition-colors duration-200 cursor-pointer"
              >
                <FaGithub size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="p-1.5 text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 bg-surface-2 text-muted rounded-md border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface-1">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel chapter="03" title="Projects" />

        {/* Bento grid: 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
