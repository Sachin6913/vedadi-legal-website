import {
  Building2,
  FileSignature,
  Globe2,
  Handshake,
  LockKeyhole,
  Scale
} from "lucide-react";

export const services = [
  {
    title: "Corporate Law",
    slug: "corporate-law",
    description: "From incorporation to complex restructuring, we guide businesses through every stage of their corporate lifecycle.",
    overview: "Vedadi Legal provides corporate counsel for companies that need reliable legal architecture, responsive governance advice, and commercially useful documentation across jurisdictions.",
    details: ["Entity Formation", "Corporate Governance", "Shareholder Agreements", "Board Advisory", "Regulatory Compliance"],
    icon: Building2
  },
  {
    title: "Dispute Resolution",
    slug: "dispute-resolution",
    description: "Strategic litigation and arbitration services to protect your interests in any forum, anywhere in the world.",
    overview: "Our dispute team builds strategy around evidence, venue, leverage, enforcement risk, and commercial outcomes, not only pleadings.",
    details: ["Commercial Litigation", "International Arbitration", "Mediation", "Enforcement of Awards"],
    icon: Scale
  },
  {
    title: "Mergers & Acquisitions",
    slug: "mergers-acquisitions",
    description: "End-to-end M&A advisory — from due diligence to post-merger integration.",
    overview: "We support buy-side and sell-side teams through diligence, negotiations, risk allocation, regulatory coordination, and post-closing integration.",
    details: ["Buy-side Advisory", "Sell-side Advisory", "Due Diligence", "Regulatory Approvals", "Integration Support"],
    icon: Handshake
  },
  {
    title: "Private Advisory",
    slug: "private-advisory",
    description: "Bespoke legal counsel for high-net-worth individuals and family offices.",
    overview: "Our private advisory work combines discretion, cross-border planning, and careful documentation for clients with complex family, wealth, and succession needs.",
    details: ["Estate Planning", "Wealth Structuring", "Trust Formation", "Succession Planning"],
    icon: LockKeyhole
  },
  {
    title: "International Trade",
    slug: "international-trade",
    description: "Navigating the complexities of cross-border commerce, sanctions, and trade regulations.",
    overview: "Vedadi Legal advises companies on trade compliance, sanctions exposure, customs issues, and disputes arising from global market operations.",
    details: ["Export Controls", "Trade Sanctions", "Customs Compliance", "WTO Disputes"],
    icon: Globe2
  },
  {
    title: "Intellectual Property",
    slug: "intellectual-property",
    description: "Protecting your most valuable intangible assets across global markets.",
    overview: "We help clients register, protect, license, and enforce intellectual property rights across markets, sectors, and commercial partnerships.",
    details: ["Patent Filing", "Trademark Registration", "IP Litigation", "Licensing Agreements"],
    icon: FileSignature
  }
];

export const people = [
  {
    name: "Arjun Vedadi",
    slug: "arjun-vedadi",
    role: "Senior Partner",
    specialty: "Corporate Law",
    email: "arjun@vedadilegal.com",
    category: "Partners",
    image: "https://i.pravatar.cc/300?img=1",
    bio: "Arjun founded Vedadi Legal with a vision to redefine international legal advisory. With 20+ years of experience across Asia, Europe, and the Americas, he specializes in complex cross-border corporate transactions."
  },
  {
    name: "Priya Sharma",
    slug: "priya-sharma",
    role: "Partner",
    specialty: "Dispute Resolution",
    email: "priya@vedadilegal.com",
    category: "Partners",
    image: "https://i.pravatar.cc/300?img=2",
    bio: "Priya brings 15 years of litigation experience across international arbitration forums including ICC, LCIA, and SIAC. She has represented Fortune 500 companies in high-stakes disputes."
  },
  {
    name: "Marcus Klein",
    slug: "marcus-klein",
    role: "Partner",
    specialty: "International Trade",
    email: "marcus@vedadilegal.com",
    category: "Partners",
    image: "https://i.pravatar.cc/300?img=3",
    bio: "Marcus advises multinational corporations on trade compliance, sanctions, and regulatory matters across EU and US jurisdictions."
  },
  {
    name: "Aisha Noor",
    slug: "aisha-noor",
    role: "Associate",
    specialty: "Intellectual Property",
    email: "aisha@vedadilegal.com",
    category: "Associates",
    image: "https://i.pravatar.cc/300?img=4",
    bio: "Aisha specializes in IP strategy for technology and pharmaceutical companies, with expertise in patent prosecution and licensing."
  },
  {
    name: "David Chen",
    slug: "david-chen",
    role: "Associate",
    specialty: "M&A",
    email: "david@vedadilegal.com",
    category: "Associates",
    image: "https://i.pravatar.cc/300?img=5",
    bio: "David has advised on over $2B worth of M&A transactions across Southeast Asia and the Middle East."
  },
  {
    name: "Sofia Rossi",
    slug: "sofia-rossi",
    role: "Senior Advisor",
    specialty: "Private Advisory",
    email: "sofia@vedadilegal.com",
    category: "Advisors",
    image: "https://i.pravatar.cc/300?img=6",
    bio: "Sofia advises ultra-high-net-worth families on wealth structuring, trust formation, and succession planning across European jurisdictions."
  }
];

export const articles = [
  {
    title: "The Future of Cross-Border M&A in a Fragmenting World",
    slug: "future-cross-border-ma-fragmenting-world",
    author: "Arjun Vedadi",
    date: "May 2026",
    category: "M&A",
    excerpt: "As geopolitical tensions reshape global trade routes, the rules governing cross-border mergers are evolving rapidly. Here is what businesses need to know..."
  },
  {
    title: "Navigating International Arbitration in 2026",
    slug: "navigating-international-arbitration-2026",
    author: "Priya Sharma",
    date: "April 2026",
    category: "Dispute",
    excerpt: "Modern arbitration requires a strategy that accounts for enforcement, forum selection, evidence, and commercial leverage."
  },
  {
    title: "IP Protection Strategies for AI-Generated Content",
    slug: "ip-protection-ai-generated-content",
    author: "Aisha Noor",
    date: "March 2026",
    category: "IP",
    excerpt: "AI tools are reshaping authorship, ownership, licensing, and enforcement strategies for creative and technical assets."
  },
  {
    title: "Trade Sanctions Compliance: A Practical Guide",
    slug: "trade-sanctions-compliance-practical-guide",
    author: "Marcus Klein",
    date: "March 2026",
    category: "Trade",
    excerpt: "Sanctions compliance needs practical screening, contract controls, escalation procedures, and board-level accountability."
  },
  {
    title: "Succession Planning for Family-Owned Businesses",
    slug: "succession-planning-family-owned-businesses",
    author: "Sofia Rossi",
    date: "February 2026",
    category: "Advisory",
    excerpt: "Clear succession structures can protect both family relationships and operating companies during generational transitions."
  },
  {
    title: "Corporate Governance Trends in Emerging Markets",
    slug: "corporate-governance-trends-emerging-markets",
    author: "David Chen",
    date: "January 2026",
    category: "Corporate",
    excerpt: "Investors and regulators are asking for stronger governance controls, clearer disclosure, and better risk oversight."
  },
  {
    title: "The Rise of Mediation in Commercial Disputes",
    slug: "rise-of-mediation-commercial-disputes",
    author: "Priya Sharma",
    date: "January 2026",
    category: "Dispute",
    excerpt: "Commercial parties are using mediation earlier to preserve relationships, reduce cost, and keep control of outcomes."
  }
];

export const offices = [
  ["New York", "123 Park Avenue, Suite 800, New York, NY 10022", "+1 (800) 555-0199"],
  ["London", "45 Gresham Street, London, EC2V 7BG", "+44 20 0000 0000"],
  ["Dubai", "Level 15, DIFC Gate Building, Dubai, UAE", "+971 4 000 0000"]
];
