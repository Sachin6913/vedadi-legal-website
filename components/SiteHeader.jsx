"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/people", label: "People" },
  { href: "/insight", label: "Insight" },
  { href: "/contact", label: "Contact Us" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-legal-gold/30 shadow-2xl backdrop-blur-xl"
          : "border-legal-border backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
      <Link
        className="inline-flex items-center"
        href="/"
        aria-label="Vedadi Legal home"
      >
        <Logo className="h-12 w-[162px] sm:w-[184px]" priority />
      </Link>
      <button
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-legal-gold/40 text-legal-gold lg:hidden"
        type="button"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav
        className={`absolute left-5 right-5 top-24 flex-col border border-legal-gold/20 bg-legal-card p-4 shadow-2xl lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
          open ? "flex" : "hidden"
        }`}
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              className={`min-h-11 px-3 py-3 text-xs font-bold uppercase tracking-[0.28em] transition hover:text-legal-gold lg:py-2 ${
                isActive
                  ? "text-legal-gold underline decoration-2 underline-offset-8"
                  : "text-legal-text"
              }`}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
        <div className="mt-3 flex items-center gap-3 border-t border-legal-border pt-4 lg:ml-4 lg:mt-0 lg:border-t-0 lg:pt-0">
          <button
            className="relative inline-flex h-8 w-[76px] items-center rounded-full border border-legal-border bg-legal-card p-1 text-legal-text shadow-sm transition"
            type="button"
            aria-label="Toggle day and night theme"
            onClick={toggleTheme}
          >
            <span
              className={`absolute top-1 h-6 w-9 rounded-full bg-legal-gold transition-all duration-300 ${
                theme === "light" ? "left-1" : "left-[35px]"
              }`}
            />
            <span
              className={`relative z-10 grid w-9 place-items-center ${
                theme === "light" ? "text-white" : "text-legal-muted"
              }`}
            >
              <Sun size={15} />
            </span>
            <span
              className={`relative z-10 grid w-9 place-items-center ${
                theme === "dark" ? "text-[#111111]" : "text-legal-muted"
              }`}
            >
              <Moon size={15} />
            </span>
          </button>
        </div>
      </nav>
      </div>
    </header>
  );
}
