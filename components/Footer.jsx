import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-legal-charcoal px-5 py-14 text-legal-text sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-legal-gold/20 pt-12 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <Logo className="mb-4 h-14 w-[200px]" />
        <p className="text-legal-muted">Strategic Legal Excellence</p>
        <div className="mt-6 flex gap-3 text-legal-gold">
          <a className="grid min-h-11 min-w-11 place-items-center border border-legal-gold/30 transition hover:bg-legal-gold hover:text-white" href="https://linkedin.com" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a className="grid min-h-11 min-w-11 place-items-center border border-legal-gold/30 transition hover:bg-legal-gold hover:text-white" href="https://x.com" aria-label="Twitter X">
            <Twitter size={18} />
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-legal-gold">Quick Links</h3>
        {["Home", "About Us", "Services", "People", "Insight", "Contact"].map((label) => (
          <Link
            className="block min-h-8 text-sm text-legal-muted transition hover:text-legal-text"
            href={label === "Home" ? "/" : `/${label.toLowerCase().replace(" us", "").replace(" ", "-")}`}
            key={label}
          >
            {label}
          </Link>
        ))}
      </div>
      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-legal-gold">Practice Areas</h3>
        {["Corporate Law", "Dispute Resolution", "M&A", "Advisory"].map((label) => (
          <Link className="block min-h-8 text-sm text-legal-muted transition hover:text-legal-text" href="/services" key={label}>
            {label}
          </Link>
        ))}
      </div>
      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-legal-gold">Contact Info</h3>
        <a className="block min-h-8 text-sm text-legal-muted transition hover:text-legal-text" href="mailto:email@vedadilegal.com">email@vedadilegal.com</a>
        <a className="block min-h-8 text-sm text-legal-muted transition hover:text-legal-text" href="tel:+18005550199">+1 (800) 555-0199</a>
        <p className="mt-2 text-sm text-legal-muted">New York | London | Dubai</p>
        <a
          className="mt-5 inline-grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-legal-text transition hover:scale-105"
          href="https://wa.me/918000000000"
          target="_blank"
          rel="noreferrer"
          title="Chat with us on WhatsApp"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-legal-border pt-6 text-center text-sm text-legal-muted">
        © 2026 Vedadi Legal. All rights reserved.
      </p>
    </footer>
  );
}
