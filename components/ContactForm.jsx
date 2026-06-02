"use client";

import { useState } from "react";
import { services } from "../lib/siteData";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitContact(event) {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      office: String(formData.get("office") || "").trim(),
      area: String(formData.get("area") || "").trim(),
      preferredDate: String(formData.get("preferredDate") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    if (Object.values(payload).some((value) => !value)) {
      setStatus("Please complete all fields before submitting.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending your inquiry...");

    try {
      const response = await fetch("/api/send-consultation-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Unable to send inquiry.");
      }

      setStatus("Your inquiry has been submitted. We will respond within 24 hours.");
      setToastVisible(true);
      window.setTimeout(() => setToastVisible(false), 3600);
      form.reset();
    } catch (error) {
      setStatus(error.message || "Unable to send inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
    {toastVisible && (
      <div className="fixed right-4 top-24 z-[9998] max-w-sm rounded border border-legal-gold bg-legal-card px-5 py-4 text-sm font-semibold text-legal-gold shadow-gold">
        Your inquiry has been submitted. We will respond within 24 hours.
      </div>
    )}
    <form className="mx-auto grid w-full max-w-3xl gap-5 border border-legal-gold/20 bg-legal-card p-6 shadow-2xl sm:p-8" onSubmit={submitContact}>
      <label className="grid gap-2 text-sm font-semibold text-legal-text">
        Full Name
        <input className="min-h-11 border border-legal-border bg-legal-charcoal px-4 text-legal-text outline-none transition placeholder:text-legal-muted focus:border-legal-gold" type="text" name="name" autoComplete="name" placeholder="Your name" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-legal-text">
        Email Address
        <input className="min-h-11 border border-legal-border bg-legal-charcoal px-4 text-legal-text outline-none transition placeholder:text-legal-muted focus:border-legal-gold" type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-legal-text">
        Phone Number
        <input className="min-h-11 border border-legal-border bg-legal-charcoal px-4 text-legal-text outline-none transition placeholder:text-legal-muted focus:border-legal-gold" type="text" name="phone" placeholder="+1 (800) 555-0199" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-legal-text">
        Office
        <select className="min-h-11 border border-legal-border bg-legal-charcoal px-4 text-legal-text outline-none transition focus:border-legal-gold" name="office" required defaultValue="">
          <option value="" disabled>Select an office</option>
          <option>New York</option>
          <option>London</option>
          <option>Dubai</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-legal-text">
        Practice Area
        <select className="min-h-11 border border-legal-border bg-legal-charcoal px-4 text-legal-text outline-none transition focus:border-legal-gold" name="area" required defaultValue="">
          <option value="" disabled>Select a practice area</option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-legal-text">
        Preferred Date
        <input className="min-h-11 border border-legal-border bg-legal-charcoal px-4 text-legal-text outline-none transition placeholder:text-legal-muted focus:border-legal-gold" type="date" name="preferredDate" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-legal-text">
        Message
        <textarea className="min-h-36 border border-legal-border bg-legal-charcoal px-4 py-3 text-legal-text outline-none transition placeholder:text-legal-muted focus:border-legal-gold" name="message" rows="6" placeholder="Briefly describe what you need" required />
      </label>
      <button
        className="min-h-11 bg-legal-gold px-6 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#6d5006] disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Request Consultation"}
      </button>
      <p className="min-h-6 text-center text-sm font-semibold text-legal-gold" role="status" aria-live="polite">
        {status}
      </p>
    </form>
    </>
  );
}
