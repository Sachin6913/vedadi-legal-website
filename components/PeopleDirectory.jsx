"use client";

import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { useState } from "react";
import MotionCard from "./MotionCard";
import { people } from "../lib/siteData";

const filters = ["All", "Partners", "Associates", "Advisors"];

export default function PeopleDirectory() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visiblePeople = activeFilter === "All" ? people : people.filter((person) => person.category === activeFilter);

  return (
    <>
      <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-bold transition ${
              activeFilter === filter
                ? "border-legal-gold bg-legal-gold text-white"
                : "border-legal-border text-legal-muted hover:border-legal-gold hover:text-legal-gold"
            }`}
            type="button"
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {visiblePeople.map((person) => (
          <MotionCard className="overflow-hidden border border-legal-border bg-legal-card hover:border-legal-gold hover:shadow-gold" key={person.slug}>
            <img className="aspect-square w-full object-cover grayscale transition duration-500 hover:grayscale-0" src={person.image} alt={person.name} />
            <div className="p-7">
              <h2 className="font-heading text-3xl text-legal-text">{person.name}</h2>
              <p className="mt-2 text-sm font-bold text-legal-gold">{person.role} | {person.specialty}</p>
              <p className="mt-4 line-clamp-2 leading-7 text-legal-muted">{person.bio}</p>
              <div className="mt-5 flex gap-3 text-legal-gold">
                <a className="grid h-11 w-11 place-items-center border border-legal-gold/30" href="https://linkedin.com" aria-label={`${person.name} LinkedIn`}>
                  <Linkedin size={18} />
                </a>
                <a className="grid h-11 w-11 place-items-center border border-legal-gold/30" href={`mailto:${person.email}`} aria-label={`Email ${person.name}`}>
                  <Mail size={18} />
                </a>
              </div>
              <Link className="mt-6 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-[0.22em] text-legal-gold" href={`/people/${person.slug}`}>
                View Full Profile →
              </Link>
            </div>
          </MotionCard>
        ))}
      </div>
    </>
  );
}
