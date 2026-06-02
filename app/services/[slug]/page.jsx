import Link from "next/link";
import AccordionList from "../../../components/AccordionList";
import { services } from "../../../lib/siteData";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((item) => item.slug === params.slug) || services[0];

  return (
    <main className="bg-legal-charcoal px-5 py-32 text-legal-text sm:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <nav className="mb-8 text-sm text-legal-muted">
          <Link className="hover:text-legal-gold" href="/">Home</Link> <span>/</span>{" "}
          <Link className="hover:text-legal-gold" href="/services">Services</Link> <span>/</span>{" "}
          <span className="text-legal-gold">{service.title}</span>
        </nav>
        <h1 className="font-heading text-5xl text-legal-text sm:text-7xl">{service.title}</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-legal-muted">{service.overview}</p>
        <div className="mt-12 max-w-4xl">
          <AccordionList items={service.details} />
        </div>
        <Link className="mt-12 inline-flex min-h-11 items-center bg-legal-gold px-7 font-bold text-white" href="/contact">
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
