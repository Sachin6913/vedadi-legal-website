import Link from "next/link";
import { articles, people } from "../../../lib/siteData";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }) {
  const article = articles.find((item) => item.slug === params.slug) || articles[0];
  const author = people.find((person) => article.author.includes(person.name.split(" ")[0])) || people[0];
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <main className="bg-legal-charcoal px-5 py-32 text-legal-text sm:px-8 lg:px-12">
      <article className="mx-auto max-w-4xl">
        <nav className="mb-8 text-sm text-legal-muted">
          <Link className="hover:text-legal-gold" href="/">Home</Link> <span>/</span>{" "}
          <Link className="hover:text-legal-gold" href="/insight">Insight</Link> <span>/</span>{" "}
          <span className="text-legal-gold">{article.category}</span>
        </nav>
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-legal-gold">{article.category}</span>
        <h1 className="mt-5 font-heading text-5xl text-legal-text sm:text-7xl">{article.title}</h1>
        <p className="mt-5 text-sm text-legal-muted">{article.author} | {article.date} | {article.category}</p>
        <div className="mt-10 space-y-7 text-lg leading-8 text-legal-muted">
          <p>{article.excerpt.replace("...", ".")} This article provides a practical overview for decision-makers navigating complex legal and commercial environments.</p>
          <p>For companies and private clients, the central challenge is not only understanding what the law says, but also identifying how regulation, timing, negotiation leverage, and reputational risk interact in real decisions.</p>
          <p>Vedadi Legal recommends a structured review of documents, jurisdictional exposure, governance approvals, and dispute resolution options before any major legal step is taken.</p>
          <p>Clients should treat legal planning as an active business tool. Early advice can reduce cost, preserve optionality, and create a clearer path toward a durable outcome.</p>
        </div>
        <div className="mt-12 flex gap-5 rounded-lg border border-legal-border bg-legal-card p-6">
          <img className="h-20 w-20 rounded-full object-cover" src={author.image} alt={author.name} />
          <div>
            <h2 className="font-heading text-2xl text-legal-text">{author.name}</h2>
            <p className="mt-2 text-sm text-legal-muted">{author.bio}</p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="font-heading text-3xl text-legal-text">Related Articles</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <Link className="rounded-lg border border-legal-border bg-legal-card p-5 hover:border-legal-gold" href={`/insight/${item.slug}`} key={item.slug}>
                <span className="text-xs font-bold text-legal-gold">{item.category}</span>
                <h3 className="mt-3 font-heading text-xl text-legal-text">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
        <Link className="mt-12 inline-flex min-h-11 items-center bg-legal-gold px-7 font-bold text-white" href="/contact">
          Book a Consultation
        </Link>
      </article>
    </main>
  );
}
