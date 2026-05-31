"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { BiSun, BiMoon, BiMenu, BiX } from "react-icons/bi";

const NAV_ITEMS = ["home", "about", "experience", "projects", "contact"] as const;

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;

      if (atBottom) {
        setActive("contact");
        return;
      }

      const sections = NAV_ITEMS.map((id) => document.getElementById(id));
      let current = "home";
      sections.forEach((el) => {
        if (el && el.getBoundingClientRect().top <= 120) {
          current = el.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-heading font-semibold text-text text-lg tracking-tight">
          Alexander Jiw
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item} className="relative">
              <button
                onClick={() => scrollToSection(item)}
                className={`px-4 py-2 text-sm capitalize cursor-pointer transition-colors duration-200 ${
                  active === item
                    ? "text-primary"
                    : "text-muted hover:text-text"
                }`}
              >
                {item}
              </button>
              {active === item && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-lg text-muted hover:text-text hover:bg-surface-2 transition-colors duration-200 cursor-pointer"
          >
            {theme === "dark" ? <BiSun size={20} /> : <BiMoon size={20} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-muted hover:text-text transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <BiX size={22} /> : <BiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden bg-surface-1 border-b border-border px-6 py-4 flex flex-col gap-1"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`py-2.5 text-sm capitalize text-left cursor-pointer transition-colors duration-200 ${
                active === item ? "text-primary" : "text-muted"
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
