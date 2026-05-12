import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bus, Car, Footprints, MapPin, Plane } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import venueImg from "@/assets/sofitel-venue.jpg";

const ACCESS = [
  { icon: Car, title: "En auto", text: "Fácil acceso desde Av. 9 de Julio y Av. del Libertador. Parking disponible." },
  { icon: Bus, title: "Transporte público", text: "Múltiples líneas de colectivo a metros del hotel. Subte líneas C y D." },
  { icon: Plane, title: "Aeropuertos", text: "30–40 min desde Aeroparque (AEP). 45–60 min desde Ezeiza (EZE)." },
  { icon: Footprints, title: "Caminando", text: "A pasos de museos, shopping de Recoleta y los mejores restaurantes." },
];

export const Route = createFileRoute("/sede")({
  head: () => ({
    meta: [
      { title: "Sede — Sofitel Buenos Aires Recoleta · ALAFAR 2026" },
      { name: "description", content: "El XLIV Congreso ALAFAR se realizará en el Sofitel Buenos Aires Recoleta, en Posadas 1232, CABA." },
      { property: "og:title", content: "Sede del XLIV Congreso ALAFAR" },
      { property: "og:description", content: "Sofitel Buenos Aires Recoleta — Posadas 1232, CABA." },
    ],
  }),
  component: SedePage,
});

function SedePage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Sede del Congreso"
        title={<>Sofitel Buenos Aires, <span className="text-ember">Recoleta</span></>}
        description="Elegancia clásica en el corazón de uno de los barrios más vibrantes de Buenos Aires."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin size={18} className="text-ember" /> Posadas 1232, Recoleta — CABA, Argentina
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <img src={venueImg} alt="Sofitel Recoleta" loading="lazy" width={1280} height={896} className="h-72 w-full object-cover sm:h-96" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <iframe
                title="Mapa Sofitel Recoleta"
                src="https://www.google.com/maps?q=Posadas+1232,+Recoleta,+Buenos+Aires&output=embed"
                className="h-72 w-full border-0 sm:h-96"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ACCESS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-brand text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-deep">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/informacion" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-foreground shadow-card transition hover:bg-brand-deep">
              Click aquí para Información General <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
