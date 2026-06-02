import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "../../components/ContactForm";
import FadeIn from "../../components/FadeIn";
import FaqAccordion from "../../components/FaqAccordion";
import MotionCard from "../../components/MotionCard";

const offices = [
  ["New York", "590 Madison Avenue, New York, NY 10022"],
  ["London", "1 Mayfair Place, London W1J 8AJ"],
  ["Dubai", "DIFC, Gate Village, Dubai, UAE"]
];

export const metadata = {
  title: "Contact Us | Vedadi Legal"
};

export default function ContactPage() {
  return (
    <main className="bg-legal-charcoal text-legal-text">
      <section className="page-hero relative overflow-hidden bg-cover bg-center px-5 pb-16 pt-32 sm:px-8 lg:px-12" style={{ backgroundImage: 'linear-gradient(90deg, rgba(10,10,10,0.96), rgba(10,10,10,0.55)), url("https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=85")' }}>
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-legal-gold">Contact us</p>
          <h1 className="max-w-5xl font-heading text-5xl leading-tight text-legal-text lg:text-7xl">Contact Us</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-legal-muted">
            Reach our team for strategic counsel, urgent dispute support, or cross-border advisory
            matters.
          </p>
        </div>
      </section>

      <FadeIn className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <MotionCard className="border border-legal-border bg-legal-card p-8 text-center hover:border-legal-gold hover:shadow-gold">
            <Mail className="mx-auto text-legal-gold" size={38} />
            <h2 className="mt-5 font-heading text-2xl text-legal-text">Email</h2>
            <a className="mt-3 block text-legal-gold" href="mailto:info@vedadilegal.com">info@vedadilegal.com</a>
            <p className="mt-3 text-legal-muted">Send us an email</p>
          </MotionCard>
          <MotionCard className="border border-legal-border bg-legal-card p-8 text-center hover:border-legal-gold hover:shadow-gold">
            <Phone className="mx-auto text-legal-gold" size={38} />
            <h2 className="mt-5 font-heading text-2xl text-legal-text">Phone</h2>
            <a className="mt-3 block text-legal-gold" href="tel:+18005550199">+1 (800) 555-0199</a>
            <p className="mt-3 text-legal-muted">Mon-Fri, 9AM-6PM EST</p>
          </MotionCard>
          <MotionCard className="border border-legal-border bg-legal-card p-8 text-center hover:border-legal-gold hover:shadow-gold">
            <a
              className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white"
              href="https://wa.me/18005550199"
              aria-label="Chat with Vedadi Legal on WhatsApp"
            >
              <MessageCircle size={28} />
            </a>
            <h2 className="mt-5 font-heading text-2xl text-legal-text">WhatsApp</h2>
            <p className="mt-3 text-legal-muted">Chat on WhatsApp</p>
          </MotionCard>
        </div>
      </FadeIn>

      <FadeIn className="bg-legal-charcoal px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-4xl text-legal-text sm:text-6xl">Office Locations</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {offices.map(([city, address]) => (
              <MotionCard className="border border-legal-border bg-legal-card p-8 hover:border-legal-gold hover:shadow-gold" key={city}>
                <MapPin className="text-legal-gold" size={34} />
                <h3 className="mt-5 font-heading text-3xl text-legal-text">{city}</h3>
                <p className="mt-4 leading-7 text-legal-muted">{address}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-legal-gold">Request consultation</p>
            <h2 className="font-heading text-4xl text-legal-text sm:text-6xl">Send an Inquiry</h2>
            <p className="mt-4 text-legal-muted">Share your details and our team will respond within 24 hours.</p>
          </div>
          <ContactForm />
        </div>
      </FadeIn>

      <FadeIn className="bg-legal-charcoal px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-heading text-4xl text-legal-text sm:text-6xl">Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </FadeIn>
    </main>
  );
}
