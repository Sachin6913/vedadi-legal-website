"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AccordionList({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <div className="rounded-lg border border-legal-border bg-legal-card" key={item}>
          <button
            className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-xl text-legal-text"
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            {item}
            <ChevronDown
              className={`shrink-0 text-legal-gold transition ${openIndex === index ? "rotate-180" : ""}`}
              size={20}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 leading-7 text-legal-muted">
                  Vedadi Legal provides practical strategy, document support, risk analysis, and cross-border coordination for {item.toLowerCase()} matters.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
