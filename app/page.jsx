import {
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Linkedin,
  LockKeyhole,
  Scale,
  ShieldCheck,
  Sparkles,
  Trophy,
  FileSignature
} from "lucide-react";
import AnimatedHero from "../components/AnimatedHero";
import ContactForm from "../components/ContactForm";
import FadeIn from "../components/FadeIn";
import MotionCard from "../components/MotionCard";

const stats = [
  ["200+", "Cases Won"],
  ["15+", "Years of Experience"],
  ["50+", "Countries Served"],
  ["98%", "Client Satisfaction"]
];

const practiceAreas = [
  {
    title: "Corporate Law",
    description: "Boardroom-ready counsel for governance, contracts, and enterprise decisions.",
    icon: Building2
  },
  {
    title: "Dispute Resolution",
    description: "Sharp strategy for negotiation, arbitration, litigation, and settlement.",
    icon: Scale
  },
  {
    title: "Mergers & Acquisitions",
    description: "Careful transaction support from diligence through closing.",
    icon: Handshake
  },
  {
    title: "Private Advisory",
    description: "Discreet legal guidance for families, founders, and private clients.",
    icon: LockKeyhole
  },
  {
    title: "International Trade",
    description: "Cross-border legal planning for global commercial operations.",
    icon: Globe2
  },
  {
    title: "Intellectual Property",
    description: "Protection strategies for brands, creative assets, and technology.",
    icon: FileSignature
  }
];

const reasons = [
  {
    title: "Strategic Precision",
    description: "We craft legal strategies tailored to your business goals.",
    icon: Sparkles
  },
  {
    title: "Global Reach",
    description: "Operating across 50+ jurisdictions worldwide.",
    icon: Globe2
  },
  {
    title: "Confidential & Trusted",
    description: "Complete discretion on every matter.",
    icon: ShieldCheck
  },
  {
    title: "Proven Results",
    description: "A track record that speaks for itself.",
    icon: Trophy
  }
];

const team = [
  {
    name: "Arjun Vedadi",
    role: "Senior Partner, Corporate Law",
    bio: "Advises global enterprises on growth, governance, and strategic risk.",
    image: "https://i.pravatar.cc/300?img=1"
  },
  {
    name: "Priya Sharma",
    role: "Partner, Dispute Resolution",
    bio: "Leads complex dispute strategy across arbitration and litigation matters.",
    image: "https://i.pravatar.cc/300?img=2"
  },
  {
    name: "Marcus Klein",
    role: "Associate, International Trade",
    bio: "Supports cross-border trade, compliance, and commercial transactions.",
    image: "https://i.pravatar.cc/300?img=3"
  }
];

const testimonials = [
  {
    quote: "Vedadi Legal handled our international merger with complete precision. Exceptional team.",
    by: "CEO, TechGlobal Inc."
  },
  {
    quote: "Their dispute resolution strategy saved our company millions. Highly recommended.",
    by: "MD, Alpine Ventures"
  },
  {
    quote: "Professional, discreet, and results-driven. The best legal counsel we've ever had.",
    by: "Founder, NexCorp"
  }
];

export default function HomePage() {
  return (
    <main className="bg-legal-charcoal text-legal-text">
      <AnimatedHero />

      <FadeIn className="border-y border-legal-gold/20 bg-legal-charcoal px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map(([number, label], index) => (
            <div
              className="border-legal-gold/20 px-4 py-6 text-center odd:border-r lg:border-r lg:last:border-r-0"
              key={label}
            >
              <div className="font-heading text-4xl text-legal-gold sm:text-5xl">{number}</div>
              <div className="mt-2 text-sm font-semibold text-legal-text sm:text-base">{label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-legal-gold">Expertise</p>
            <h2 className="font-heading text-4xl text-legal-text sm:text-6xl">Our Practice Areas</h2>
            <p className="mt-5 text-lg text-legal-muted">
              Comprehensive legal expertise across global markets
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <MotionCard
                  className="group border border-legal-border bg-legal-card p-8 transition hover:border-legal-gold hover:shadow-gold"
                  key={area.title}
                >
                  <Icon className="mb-8 text-legal-gold" size={42} strokeWidth={1.5} />
                  <h3 className="font-heading text-2xl text-legal-text">{area.title}</h3>
                  <p className="mt-4 leading-7 text-legal-muted">{area.description}</p>
                </MotionCard>
              );
            })}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="bg-legal-charcoal px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-legal-gold">Why choose us</p>
            <h2 className="font-heading text-4xl text-legal-text sm:text-6xl">Why Vedadi Legal</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <MotionCard className="border border-legal-border bg-legal-charcoal p-8" key={reason.title}>
                  <Icon className="mb-6 text-legal-gold" size={38} strokeWidth={1.5} />
                  <h3 className="font-heading text-2xl text-legal-text">{reason.title}</h3>
                  <p className="mt-3 leading-7 text-legal-muted">{reason.description}</p>
                </MotionCard>
              );
            })}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-legal-gold">Attorneys</p>
            <h2 className="font-heading text-4xl text-legal-text sm:text-6xl">Our People</h2>
          </div>
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {team.map((person) => (
              <MotionCard className="overflow-hidden border border-legal-border bg-legal-card" key={person.name}>
                <img className="aspect-square w-full object-cover grayscale transition duration-500 hover:grayscale-0" src={person.image} alt={person.name} />
                <div className="p-7">
                  <h3 className="font-heading text-2xl text-legal-text">{person.name}</h3>
                  <p className="mt-2 text-sm font-bold text-legal-gold">{person.role}</p>
                  <p className="mt-4 leading-7 text-legal-muted">{person.bio}</p>
                  <a className="mt-5 inline-flex min-h-11 items-center gap-2 text-legal-gold" href="https://linkedin.com" aria-label={`${person.name} LinkedIn`}>
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="bg-legal-charcoal px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-legal-gold">Testimonials</p>
            <h2 className="font-heading text-4xl text-legal-text sm:text-6xl">What Our Clients Say</h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <MotionCard className="border border-legal-border bg-legal-charcoal p-8" key={item.by}>
                <div className="font-heading text-6xl leading-none text-legal-gold">“</div>
                <p className="mt-2 text-xl italic leading-9 text-legal-text">{item.quote}</p>
                <p className="mt-8 text-sm font-bold text-legal-gold">{item.by}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <CheckCircle2 className="mx-auto mb-5 text-legal-gold" size={40} strokeWidth={1.5} />
            <h2 className="font-heading text-4xl text-legal-text sm:text-6xl">Book a Consultation</h2>
            <p className="mt-5 text-lg text-legal-muted">Speak with one of our senior attorneys today</p>
          </div>
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
