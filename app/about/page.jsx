import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import MotionCard from "../../components/MotionCard";
import { offices } from "../../lib/siteData";

export const metadata = {
  title: "About Us | Vedadi Legal"
};

const values = [
  ["Mission", "To deliver strategic, results-driven legal solutions that protect and advance our clients' interests across borders and industries.", "/about/mission"],
  ["Vision", "To be the most trusted international legal partner for businesses and individuals who demand excellence without compromise.", "/about/mission"],
  ["Values", "Integrity. Precision. Discretion. Innovation. Client-first at every step.", "/about/mission"]
];

const awards = [
  "Ranked Top 50 Law Firms — Legal 500, 2024",
  "Best International Advisory Firm — Global Law Awards, 2023",
  "Excellence in Corporate Law — Chambers & Partners, 2022",
  "Client Choice Award — International Law Office, 2023"
];

export default function AboutPage() {
  return (
    <main className="bg-legal-charcoal text-legal-text">
      <section className="page-hero relative flex min-h-[62vh] items-end overflow-hidden bg-cover bg-center px-5 pb-16 pt-32 sm:px-8 lg:px-12" style={{ backgroundImage: 'linear-gradient(90deg, rgba(10,10,10,0.96), rgba(201,168,76,0.28)), url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85")' }}>
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-legal-gold">About us</p>
          <h1 className="max-w-5xl font-heading text-5xl leading-tight text-legal-text lg:text-7xl">About Vedadi Legal</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-legal-muted">
            A legacy of legal excellence built on trust, precision, and global expertise
          </p>
        </div>
      </section>

      <FadeIn className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-legal-gold">Our Story</p>
            <h2 className="font-heading text-4xl text-legal-text sm:text-6xl">Our Story</h2>
            <div className="mt-7 space-y-6 text-lg leading-8 text-legal-muted">
              <p>
                Founded over 15 years ago, Vedadi Legal was established with a singular vision — to provide world-class legal counsel to businesses and individuals navigating complex legal landscapes. What began as a boutique advisory firm has grown into a globally recognized legal practice with offices in New York, London, and Dubai.
              </p>
              <p>
                Our founders believed that exceptional legal work requires not just knowledge of the law, but a deep understanding of business, culture, and human relationships. That philosophy continues to guide every case we take on today.
              </p>
            </div>
            <Link className="mt-8 inline-flex min-h-11 items-center border border-legal-gold px-6 text-sm font-bold uppercase tracking-[0.22em] text-legal-gold transition hover:bg-legal-gold hover:text-white" href="/about/our-story">
              Read More
            </Link>
          </div>
          <img className="aspect-[4/5] w-full rounded-lg border border-legal-gold/20 object-cover shadow-gold" src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1100&q=85" alt="Vedadi Legal law library" />
        </div>
      </FadeIn>

      <FadeIn className="bg-legal-charcoal px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-4xl text-legal-text sm:text-6xl">Our Mission &amp; Values</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(([title, text, href]) => (
              <MotionCard className="border border-legal-border bg-legal-card p-8 hover:border-legal-gold hover:shadow-gold" key={title}>
                <Link href={href}>
                  <h3 className="font-heading text-3xl text-legal-text">{title}</h3>
                  <p className="mt-5 leading-7 text-legal-muted">{text}</p>
                  <span className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.22em] text-legal-gold">Read More →</span>
                </Link>
              </MotionCard>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-legal-gold">Global Presence</p>
            <h2 className="font-heading text-4xl text-legal-text sm:text-6xl">A Truly Global Practice</h2>
            <p className="mt-6 text-lg leading-8 text-legal-muted">
              With offices in three continents and a network of partner firms in over 50 jurisdictions, Vedadi Legal ensures that wherever your legal needs arise, we are there.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offices.map(([city, address, phone]) => (
              <MotionCard className="border border-legal-border bg-legal-card p-8 hover:border-legal-gold hover:shadow-gold" key={city}>
                <Link href="/about/global-presence">
                  <h3 className="font-heading text-3xl text-legal-text">{city}</h3>
                  <p className="mt-4 leading-7 text-legal-muted">{address}</p>
                  <p className="mt-4 font-semibold text-legal-gold">{phone}</p>
                </Link>
              </MotionCard>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="bg-legal-charcoal px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-4xl text-legal-text sm:text-6xl">Awards &amp; Recognition</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {awards.map((award) => (
              <div className="rounded-lg border border-legal-gold/60 bg-legal-card p-6 text-sm font-semibold leading-7 text-legal-gold" key={award}>
                {award}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
