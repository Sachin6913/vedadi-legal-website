import Link from "next/link";
import { people } from "../../../lib/siteData";

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }));
}

export default function PersonProfilePage({ params }) {
  const person = people.find((item) => item.slug === params.slug) || people[0];

  return (
    <main className="bg-legal-charcoal px-5 py-32 text-legal-text sm:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <nav className="mb-8 text-sm text-legal-muted">
          <Link className="hover:text-legal-gold" href="/">Home</Link> <span>/</span>{" "}
          <Link className="hover:text-legal-gold" href="/people">People</Link> <span>/</span>{" "}
          <span className="text-legal-gold">{person.name}</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
          <img className="aspect-square w-full rounded-lg border border-legal-border object-cover" src={person.image} alt={person.name} />
          <div>
            <h1 className="font-heading text-5xl text-legal-text sm:text-7xl">{person.name}</h1>
            <p className="mt-4 text-lg font-bold text-legal-gold">{person.role} | {person.specialty}</p>
            <p className="mt-8 text-lg leading-8 text-legal-muted">{person.bio}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {["Practice Areas", "Education", "Notable Matters"].map((title) => (
                <div className="rounded-lg border border-legal-border bg-legal-card p-6" key={title}>
                  <h2 className="font-heading text-2xl text-legal-text">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-legal-muted">Placeholder details for {title.toLowerCase()} will be updated by the firm.</p>
                </div>
              ))}
            </div>
            <Link className="mt-10 inline-flex min-h-11 items-center bg-legal-gold px-7 font-bold text-white" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
