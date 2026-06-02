"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 }
};

export default function FadeIn({ as = "section", className = "", delay = 0, children }) {
  const Component = motion[as] || motion.section;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
