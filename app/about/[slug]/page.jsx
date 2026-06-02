import Link from "next/link";

const pages = {
  "our-story": {
    title: "Our Story",
    body: "Vedadi Legal grew from a boutique advisory firm into an international practice by remaining disciplined about quality, discretion, and practical client outcomes. Our story is rooted in the belief that excellent legal work must understand the transaction, the dispute, the family, and the business reality behind the document."
  },
  mission: {
    title: "Mission, Vision & Values",
    body: "Our mission is to deliver strategic, results-driven legal solutions. Our vision is to be the most trusted international legal partner for clients who demand excellence without compromise. Our values are integrity, precision, discretion, innovation, and client-first service."
  },
  "global-presence": {
    title: "Global Presence",
    body: "With offices in New York, London, and Dubai, and a partner network spanning more than 50 jurisdictions, Vedadi Legal supports clients wherever legal risks and opportunities arise."
  }
};

export default function AboutDetailPage({ params }) {
  const page = pages[params.slug] || pages["our-story"];

  return (
    <main className="bg-legal-charcoal px-5 py-32 text-legal-text sm:px-8 lg:px-12">
      <section className="mx-auto max-w-5xl">
        <nav className="mb-8 text-sm text-legal-muted">
          <Link className="hover:text-legal-gold" href="/">Home</Link> <span>/</span>{" "}
          <Link className="hover:text-legal-gold" href="/about">About</Link> <span>/</span>{" "}
          <span className="text-legal-gold">{page.title}</span>
        </nav>
        <h1 className="font-heading text-5xl text-legal-text sm:text-7xl">{page.title}</h1>
        <p className="mt-8 text-lg leading-8 text-legal-muted">{page.body}</p>
        <Link className="mt-10 inline-flex min-h-11 items-center bg-legal-gold px-7 font-bold text-white" href="/contact">
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
