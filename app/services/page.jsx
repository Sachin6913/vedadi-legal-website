import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import MotionCard from "../../components/MotionCard";
import { services } from "../../lib/siteData";

export const metadata = {
  title: "Services | Vedadi Legal"
};

export default function ServicesPage() {
  return (
    <main className="bg-legal-charcoal text-legal-text">
      <section className="page-hero relative flex min-h-[62vh] items-end overflow-hidden bg-cover bg-center px-5 pb-16 pt-32 sm:px-8 lg:px-12" style={{ backgroundImage: 'linear-gradient(90deg, rgba(10,10,10,0.96), rgba(10,10,10,0.55)), url("https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1800&q=85")' }}>
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-legal-gold">Services</p>
          <h1 className="max-w-5xl font-heading text-5xl leading-tight text-legal-text lg:text-7xl">Our Services</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-legal-muted">
            Comprehensive legal expertise across every dimension of modern business
          </p>
        </div>
      </section>

      <FadeIn className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <MotionCard className="border border-legal-border bg-legal-card p-8 hover:border-legal-gold hover:shadow-gold" key={service.slug}>
                  <Icon className="mb-8 text-legal-gold" size={42} strokeWidth={1.5} />
                  <h2 className="font-heading text-3xl text-legal-text">{service.title}</h2>
                  <p className="mt-4 line-clamp-3 leading-7 text-legal-muted">{service.description}</p>
                  <Link className="mt-7 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-[0.22em] text-legal-gold" href={`/services/${service.slug}`}>
                    Learn More →
                  </Link>
                </MotionCard>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
