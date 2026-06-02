import PeopleDirectory from "../../components/PeopleDirectory";

export const metadata = {
  title: "People | Vedadi Legal"
};

export default function PeoplePage() {
  return (
    <main className="bg-legal-charcoal text-legal-text">
      <section className="page-hero relative flex min-h-[62vh] items-end overflow-hidden bg-cover bg-center px-5 pb-16 pt-32 sm:px-8 lg:px-12" style={{ backgroundImage: 'linear-gradient(90deg, rgba(10,10,10,0.96), rgba(10,10,10,0.55)), url("https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=85")' }}>
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-legal-gold">Our people</p>
          <h1 className="max-w-5xl font-heading text-5xl leading-tight text-legal-text lg:text-7xl">Our People</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-legal-muted">
            Meet the legal minds behind Vedadi Legal's global reputation
          </p>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <PeopleDirectory />
        </div>
      </section>
    </main>
  );
}
