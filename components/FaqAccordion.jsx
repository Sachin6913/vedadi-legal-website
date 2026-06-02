"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  ["How do I schedule a consultation?", "You can book directly through our website form, call our office, or message us on WhatsApp. We typically respond within 24 hours."],
  ["Do you offer services to individuals or only businesses?", "We serve both corporate clients and high-net-worth individuals across all our practice areas."],
  ["Which jurisdictions do you operate in?", "We operate in 50+ jurisdictions through our offices in New York, London, and Dubai, and a global network of partner firms."],
  ["Are initial consultations confidential?", "Yes. All consultations and communications with Vedadi Legal are fully confidential and protected by attorney-client privilege."],
  ["How are legal fees structured?", "Our fees vary by matter type. We offer hourly billing, fixed fees, and retainer arrangements. We will discuss the most suitable structure during your initial consultation."]
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {faqs.map(([question, answer], index) => (
        <div className="rounded-lg border border-legal-border bg-legal-card" key={question}>
          <button
            className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-xl text-legal-text"
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            {question}
            <ChevronDown className={`shrink-0 text-legal-gold transition ${openIndex === index ? "rotate-180" : ""}`} size={20} />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28 }}
              >
                <p className="px-5 pb-5 leading-7 text-legal-muted">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
