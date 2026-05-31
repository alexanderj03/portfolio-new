"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      style={{ width }}
      className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent z-[100]"
      aria-hidden="true"
    />
  );
}
