"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function AnimatedHero() {
  return (
    <section className="luxury-hero relative flex min-h-screen items-center overflow-hidden bg-legal-charcoal">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(10,10,10,0.97), rgba(10,10,10,0.78), rgba(10,10,10,0.48)), url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2200&q=85")'
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(201,168,76,0.22),transparent_28%)]" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 lg:px-12">
        <div className="max-w-4xl border-l border-legal-gold/70 pl-6 sm:pl-10">
          <motion.p
            className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-legal-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            International legal excellence
          </motion.p>
          <motion.h1
            className="hero-title font-heading text-5xl leading-[0.98] text-legal-text sm:text-6xl lg:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Strategic Legal <span className="block italic text-legal-gold">Excellence.</span>
          </motion.h1>
          <motion.p
            className="hero-copy mt-8 max-w-3xl text-lg leading-8 text-legal-muted sm:text-2xl sm:leading-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            Providing sophisticated corporate counsel and elite litigation defense for global
            enterprises and private individuals.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
          >
            <Link
              className="inline-flex min-h-11 items-center justify-center border border-legal-gold bg-legal-gold px-8 py-3 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#6d5006]"
              href="/contact"
            >
              Book Consultation
            </Link>
            <Link
              className="inline-flex min-h-11 items-center justify-center border border-legal-gold px-8 py-3 text-sm font-bold uppercase tracking-[0.22em] text-legal-gold transition hover:bg-legal-gold hover:text-white"
              href="/services"
            >
              Explore Expertise
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-legal-gold"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ArrowDown size={30} />
      </motion.div>
    </section>
  );
}
