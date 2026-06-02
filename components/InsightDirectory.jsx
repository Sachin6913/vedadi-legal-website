"use client";

import Link from "next/link";
import { useState } from "react";
import MotionCard from "./MotionCard";
import { articles } from "../lib/siteData";

const categories = ["All", "Corporate", "Dispute", "M&A", "Trade", "IP", "Advisory"];

export default function InsightDirectory() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = articles[0];
  const visibleArticles = articles
    .slice(1)
    .filter((article) => activeCategory === "All" || article.category === activeCategory);

  return (
    <>
      <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-bold transition ${
              activeCategory === category
                ? "border-legal-gold bg-legal-gold text-white"
                : "border-legal-border text-legal-muted hover:border-legal-gold hover:text-legal-gold"
            }`}
            type="button"
            key={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <MotionCard className="mb-10 border border-legal-gold/40 bg-legal-card p-8 hover:border-legal-gold hover:shadow-gold">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-legal-gold">{featured.category}</span>
        <h2 className="mt-5 font-heading text-4xl text-legal-text sm:text-5xl">{featured.title}</h2>
        <p className="mt-4 text-sm text-legal-muted">{featured.author} | {featured.date} | {featured.category}</p>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-legal-muted">{featured.excerpt}</p>
        <Link className="mt-7 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-[0.22em] text-legal-gold" href={`/insight/${featured.slug}`}>
          Read Full Article →
        </Link>
      </MotionCard>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleArticles.map((article) => (
          <MotionCard className="border border-legal-border bg-legal-card p-7 hover:border-legal-gold hover:shadow-gold" key={article.slug}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-legal-gold">{article.category}</span>
            <h2 className="mt-5 font-heading text-2xl text-legal-text">{article.title}</h2>
            <p className="mt-4 text-sm text-legal-muted">{article.author} | {article.date}</p>
            <p className="mt-4 line-clamp-2 leading-7 text-legal-muted">{article.excerpt}</p>
            <Link className="mt-6 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-[0.22em] text-legal-gold" href={`/insight/${article.slug}`}>
              Read More →
            </Link>
          </MotionCard>
        ))}
      </div>
    </>
  );
}
