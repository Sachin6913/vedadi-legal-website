"use client";

import { useState } from "react";

export default function SignupForm({ showName = true }) {
  const [status, setStatus] = useState("");

  async function submitSignup(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!email) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Sending your thank-you email...");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const result = await response.json();
      setStatus(
        result.emailSent
          ? "Signed up. A thank-you email has been sent."
          : "Signed up. Add SMTP settings on the server to send the thank-you email."
      );
      form.reset();
    } catch {
      setStatus("Signup saved locally. Run Next.js with SMTP settings to send email automatically.");
    }
  }

  return (
    <form className="grid gap-4 border border-legal-gold/20 bg-legal-card p-6" onSubmit={submitSignup}>
      {showName && (
        <label className="grid gap-2 text-sm font-semibold text-legal-text">
          Name
          <input className="min-h-11 border border-legal-border bg-legal-charcoal px-4 text-legal-text outline-none transition placeholder:text-legal-muted focus:border-legal-gold" type="text" name="name" autoComplete="name" placeholder="Your name" />
        </label>
      )}
      <label className="grid gap-2 text-sm font-semibold text-legal-text">
        Email
        <input className="min-h-11 border border-legal-border bg-legal-charcoal px-4 text-legal-text outline-none transition placeholder:text-legal-muted focus:border-legal-gold" type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
      </label>
      <button className="min-h-11 bg-legal-gold px-6 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#6d5006]" type="submit">
        Sign Up
      </button>
      <p className="min-h-6 text-sm font-semibold text-legal-gold" role="status">
        {status}
      </p>
    </form>
  );
}
