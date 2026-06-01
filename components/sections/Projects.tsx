"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionLabel from "@/components/ui/SectionLabel";

/* ── Project visual thumbnails ─────────────────────────── */

function BudgetTrackerVisual() {
  const stats = [
    { label: "Balance", value: "$4,280", color: "#6366f1" },
    { label: "Income", value: "$3,200", color: "#34d399" },
    { label: "Expenses", value: "$1,840", color: "#f87171" },
  ];
  const txns = [
    { desc: "Salary", cat: "Income", catColor: "#34d399", amount: "+$3,200", income: true },
    { desc: "Groceries", cat: "Food", catColor: "#ffa502", amount: "-$420", income: false },
    { desc: "Transport", cat: "Transit", catColor: "#00c9ff", amount: "-$85", income: false },
    { desc: "Netflix", cat: "Bills", catColor: "#a29bfe", amount: "-$18", income: false },
  ];
  return (
    <div className="w-full h-full bg-[#0f1117] flex flex-col overflow-hidden p-3 gap-2">
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-1.5 shrink-0">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="rounded-lg bg-white/5 p-2"
            style={{ boxShadow: `0 0 0 1px ${s.color}35` }}
          >
            <div
              className="w-5 h-5 rounded-md mb-1.5 flex items-center justify-center"
              style={{ background: `${s.color}18` }}
            >
              <div className="w-2 h-2 rounded-sm" style={{ background: s.color }} />
            </div>
            <p className="text-[11px] font-bold leading-tight tabular-nums" style={{ color: s.color }}>
              {s.value}
            </p>
            <p className="text-[8px] text-white/35 leading-tight mt-0.5">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Transactions */}
      <div className="flex-1 flex flex-col gap-1 overflow-hidden min-h-0">
        <p className="text-[8px] font-bold uppercase tracking-widest text-white/25 shrink-0">
          Recent Transactions
        </p>
        {txns.map((tx, i) => (
          <motion.div
            key={tx.desc}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 bg-white/5 rounded-md px-2 py-1.5 shrink-0"
          >
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: tx.catColor }} />
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-semibold text-white/80 truncate leading-tight">{tx.desc}</p>
              <p className="text-[8px] text-white/30 leading-tight">{tx.cat}</p>
            </div>
            <span
              className="text-[10px] font-bold tabular-nums shrink-0"
              style={{ color: tx.income ? "#34d399" : "#f87171" }}
            >
              {tx.amount}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PersonalWebsiteVisual() {
  return (
    <div className="w-full h-full overflow-hidden relative flex flex-col" style={{ background: "#080D1A" }}>
      {/* Grid dot pattern — matches actual hero */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#6366F1 1px, transparent 1px), linear-gradient(90deg, #6366F1 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      {/* Navbar */}
      <div className="relative shrink-0 flex items-center justify-between px-3 h-7 border-b border-white/5">
        <span className="text-[9px] font-bold text-white/70 tracking-tight">Alexander Jiw</span>
        <div className="flex items-center gap-2.5">
          {["about", "projects", "contact"].map((item) => (
            <span key={item} className="text-[7px] text-white/25 uppercase tracking-wide">{item}</span>
          ))}
          <div className="w-3.5 h-3.5 rounded-full border border-white/20 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white/40" />
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-3">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-mono text-[7px] tracking-widest uppercase mb-1.5"
          style={{ color: "#6366F1" }}
        >
          Full Stack Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-bold text-white leading-tight"
          style={{ fontSize: "17px", letterSpacing: "-0.02em" }}
        >
          Alexander Jiw
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 24 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
          className="h-px mt-2 rounded-full"
          style={{ background: "linear-gradient(to right, #6366F1, #A855F7)" }}
        />
      </div>

      {/* Mini bento grid hint */}
      <div className="relative shrink-0 grid grid-cols-3 gap-1 px-3 pb-2.5">
        {[
          { bg: "#6366F115", border: "#6366F125" },
          { bg: "#37c98a10", border: "#37c98a20" },
          { bg: "#f76a8a10", border: "#f76a8a20" },
        ].map((s, i) => (
          <div key={i} className="h-5 rounded-sm" style={{ background: s.bg, border: `1px solid ${s.border}` }} />
        ))}
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
  const projects = [
    { name: "Portfolio", color: "#7c6af7" },
    { name: "Job Search", color: "#f76a8a" },
    { name: "Side Project", color: "#37c98a" },
    { name: "Learning", color: "#f5a623" },
  ];
  const tasks = [
    { name: "Update resume", priority: "high" as const, project: "Job Search", done: false },
    { name: "Fix navbar bug", priority: "medium" as const, project: "Portfolio", done: false },
    { name: "Read SICP ch.3", priority: "low" as const, project: "Learning", done: true },
    { name: "Deploy to prod", priority: "high" as const, project: "Side Project", done: false },
  ];
  const priColor = { high: "#f76a8a", medium: "#f5a623", low: "#37c98a" };
  const projColor: Record<string, string> = Object.fromEntries(projects.map(p => [p.name, p.color]));

  return (
    <div className="w-full h-full flex overflow-hidden" style={{ background: "#111113" }}>
      {/* Sidebar strip */}
      <div className="w-10 flex flex-col items-center py-3 gap-2.5 shrink-0" style={{ background: "#1a1a1f", borderRight: "1px solid #2a2a33" }}>
        {["H", "P", "G", "C"].map((l, i) => (
          <div
            key={l}
            className="w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold"
            style={{ background: i === 0 ? "#7c6af720" : "transparent", color: i === 0 ? "#7c6af7" : "#4a4a58" }}
          >
            {l}
          </div>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Project cards */}
        <div className="grid grid-cols-2 gap-1.5 p-2 shrink-0">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="rounded-md px-2 py-1.5"
              style={{ background: `${p.color}12`, border: `1px solid ${p.color}30` }}
            >
              <div className="w-2 h-2 rounded-full mb-1" style={{ background: p.color }} />
              <p className="text-[9px] font-semibold truncate" style={{ color: p.color }}>{p.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Task list */}
        <div className="flex-1 overflow-hidden px-2 pb-2 flex flex-col gap-1 min-h-0">
          <p className="text-[8px] font-bold uppercase tracking-widest shrink-0" style={{ color: "#4a4a58" }}>Tasks</p>
          {tasks.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 6 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.07 }}
              viewport={{ once: true }}
              className="flex items-center gap-1.5 rounded-md px-2 py-1 shrink-0"
              style={{ background: "#1e1e24", opacity: t.done ? 0.45 : 1 }}
            >
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: priColor[t.priority] }} />
              <p className="flex-1 text-[9px] truncate" style={{ color: t.done ? "#6b6b7e" : "#e2e2ea", textDecoration: t.done ? "line-through" : "none" }}>
                {t.name}
              </p>
              <span className="text-[7px] rounded px-1 shrink-0" style={{ background: `${projColor[t.project]}18`, color: projColor[t.project] }}>
                {t.project.split(" ")[0]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const AVATAR_COLORS: Record<string, string> = {
  A: "#2563EB", C: "#9333EA", G: "#059669", M: "#DB2777", S: "#D97706",
};
function CompanyChip({ name, role }: { name: string; role: string }) {
  const bg = AVATAR_COLORS[name[0]] ?? "#7C3AED";
  return (
    <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-md px-1.5 py-1">
      <span
        className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold text-white shrink-0"
        style={{ background: bg }}
      >
        {name[0]}
      </span>
      <div className="min-w-0">
        <p className="text-[9px] font-semibold text-white/80 truncate leading-tight">{name}</p>
        <p className="text-[8px] text-white/40 truncate leading-tight">{role}</p>
      </div>
    </div>
  );
}

function JobAppVisual() {
  const stats = [
    { label: "Active", value: "12" },
    { label: "This week", value: "4" },
    { label: "Interviews", value: "3" },
  ];
  const cols = [
    { label: "Applied", accent: "#3b82f6", count: 12, cards: [{ name: "Atlassian", role: "SWE Intern" }, { name: "Canva", role: "SWE Intern" }] },
    { label: "Interview", accent: "#f59e0b", count: 3, cards: [{ name: "Google", role: "SWE Intern" }] },
    { label: "Offer", accent: "#10b981", count: 1, cards: [] },
  ];
  return (
    <div className="w-full h-full bg-[#0f1117] flex flex-col overflow-hidden">
      {/* Stats row */}
      <div className="flex gap-2 px-3 pt-2.5 pb-1.5 shrink-0">
        {stats.map((s) => (
          <div key={s.label} className="flex-1 bg-white/5 rounded-md px-2 py-1 text-center">
            <p className="text-[11px] font-bold text-white/90 leading-tight">{s.value}</p>
            <p className="text-[8px] text-white/40 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
      {/* Kanban columns */}
      <div className="flex gap-2 px-3 pb-2 flex-1 overflow-hidden min-h-0">
        {cols.map((col) => (
          <div key={col.label} className="flex-1 flex flex-col gap-1.5 min-w-0 overflow-hidden">
            <div className="rounded-md overflow-hidden border border-white/10 bg-white/5">
              <div className="h-[3px]" style={{ background: col.accent }} />
              <div className="flex items-center justify-between px-2 py-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-white/50">{col.label}</span>
                <span className="text-[11px] font-bold text-white/80">{col.count}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 overflow-hidden">
              {col.cards.map((c) => (
                <CompanyChip key={c.name} name={c.name} role={c.role} />
              ))}
            </div>
          </div>
        ))}
      </div>
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
    span: "sm:col-span-2 md:col-span-3",
  },
  {
    title: "Budget Tracker",
    desc: "A full-stack personal finance app with transaction tracking, category breakdown, and monthly trend charts. Deployed on Vercel with PostgreSQL.",
    tags: ["Next.js", "PostgreSQL", "Tailwind", "Recharts"],
    visual: BudgetTrackerVisual,
    githubUrl: "https://github.com/alexanderj03/tracker-budget",
    liveUrl: null,
    span: "md:col-span-2",
  },
  {
    title: "Personal Website",
    desc: "This portfolio site — built with Next.js, Framer Motion, and Tailwind. Features dark mode, animated sections, and EmailJS contact.",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    visual: PersonalWebsiteVisual,
    githubUrl: "https://github.com/alexanderj03/portfolio-new",
    liveUrl: null,
    span: "",
  },
  {
    title: "Stronger Brains",
    desc: "A mental wellness web app with guided exercises, streak tracking, and progress insights. Built with a REST API and SQLite.",
    tags: ["React", "Express", "SQLite", "Node.js"],
    visual: StrongerBrainsVisual,
    githubUrl: "https://github.com/alexanderj03",
    liveUrl: null,
    span: "",
  },
  {
    title: "Management App",
    desc: "A task and team management tool with real-time updates, role-based access, and a clean dashboard UI.",
    tags: ["Next.js", "Prisma", "TypeScript", "Supabase"],
    visual: ManagementAppVisual,
    githubUrl: "https://github.com/alexanderj03/management-app",
    liveUrl: null,
    span: "md:col-span-2",
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
      <div className="relative h-36 sm:h-44 overflow-hidden">
        <Visual />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
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
                className="flex items-center gap-1.5 text-xs font-mono bg-surface-2 border border-border/60 rounded-full px-3 py-1.5 text-muted hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-pointer"
              >
                <FaGithub size={13} />
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="flex items-center gap-1.5 text-xs font-mono bg-surface-2 border border-border/60 rounded-full px-3 py-1.5 text-muted hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-pointer"
              >
                <FaExternalLinkAlt size={11} />
                <span>Live</span>
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

        {/* Bento grid: 1-col mobile → 2-col tablet → 3-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
