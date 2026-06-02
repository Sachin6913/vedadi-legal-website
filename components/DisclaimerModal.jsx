"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const storageKey = "vedadi_disclaimer_accepted";

export default function DisclaimerModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const previousOverflow = useRef("");

  useEffect(() => {
    const accepted = localStorage.getItem(storageKey);

    if (accepted === "true") {
      setIsVisible(false);
      return;
    }

    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setIsVisible(true);

    return () => {
      document.body.style.overflow = previousOverflow.current;
    };
  }, []);

  function handleAgree() {
    localStorage.setItem(storageKey, "true");
    setIsVisible(false);
  }

  function handleDisagree() {
    window.location.href = "https://www.google.com";
  }

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = previousOverflow.current;
      }}
    >
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] grid overflow-y-auto bg-[rgba(23,21,18,0.62)] px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="legalDisclaimerTitle"
        >
          <motion.div
            className="m-auto w-full max-w-[600px] rounded-lg border border-legal-gold bg-legal-card p-6 text-legal-text shadow-2xl sm:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <Logo className="h-14 w-[210px]" priority />
            </div>

            <h2
              id="legalDisclaimerTitle"
              className="mt-8 font-heading text-2xl leading-tight text-legal-text"
            >
              Legal Disclaimer &amp; Terms of Access
            </h2>
            <p className="mt-3 text-sm font-semibold text-legal-gold">
              Please read carefully before proceeding
            </p>

            <div className="my-6 h-px bg-legal-gold/40" />

            <div className="max-h-[42vh] overflow-y-auto pr-2 text-sm leading-7 text-legal-muted sm:max-h-[320px]">
              <p>
                Welcome to Vedadi Legal. By accessing this website, you acknowledge and agree to the
                following:
              </p>
              <p className="mt-4">
                1. The information provided on this website is for general informational purposes
                only and does not constitute legal advice.
              </p>
              <p className="mt-4">
                2. No attorney-client relationship is formed by accessing or using this website or
                by submitting any information through this site.
              </p>
              <p className="mt-4">
                3. The content on this site is protected by copyright and may not be reproduced
                without written permission from Vedadi Legal.
              </p>
              <p className="mt-4">
                4. Vedadi Legal makes no warranties, express or implied, regarding the accuracy,
                completeness, or reliability of any information on this site.
              </p>
              <p className="mt-4">
                5. By clicking 'I Agree', you confirm that you have read, understood, and accepted
                these terms and our Privacy Policy.
              </p>
            </div>

            <label className="mt-7 flex items-start gap-3 text-sm text-legal-muted">
              <input
                className="mt-1 h-4 w-4 accent-legal-gold"
                type="checkbox"
                checked={isChecked}
                onChange={(event) => setIsChecked(event.target.checked)}
              />
              <span>I have read and understood the above disclaimer</span>
            </label>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <button
                className="min-h-11 rounded border border-legal-border px-4 text-sm font-bold uppercase tracking-[0.18em] text-legal-text transition hover:border-red-500 hover:text-red-500"
                type="button"
                onClick={handleDisagree}
              >
                I Disagree
              </button>
              <button
                className="min-h-11 rounded bg-legal-gold px-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#6d5006] disabled:cursor-not-allowed disabled:bg-[#D8D1C5] disabled:text-[#6F6A61]"
                type="button"
                disabled={!isChecked}
                onClick={handleAgree}
              >
                I Agree
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
