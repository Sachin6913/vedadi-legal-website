"use client";

import { motion } from "framer-motion";

export default function MotionCard({ className = "", children }) {
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.article>
  );
}
