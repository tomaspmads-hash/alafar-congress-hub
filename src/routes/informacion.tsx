import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ExternalLink, MapPin } from "lucide-react";

export const Route = createFileRoute("/informacion")({
  head: () => ({
    meta: [
      { title: "Información General — ALAFAR 2026" },
      {
        name: "description",
        content:
          "Información para visitantes, visados y puntos de interés cercanos a la sede del XLIV Congreso ALAFAR.",
      },
    ],
  }),
  component: InformacionPage,
});

const POIS = [
  {
    name: "Plaza Francia",
    desc: "Espacio verde icónico de Recoleta, sede de la feria de artesanos los fines de semana.",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Francia_a_la_Argentina.jpg",
    map: "https://maps.google.com/?q=Plaza+Francia+Buenos+Aires",
  },
  {
    name: "Cementerio de la Recoleta",
    desc: "Patrimonio histórico y arquitectónico, uno de los cementerios más impresionantes del mundo.",
    img: "https://www.clarin.com/img/2016/11/06/By4Rbq3YNg_1200x0.jpg",
    map: "https://maps.google.com/?q=Cementerio+de+la+Recoleta",
  },
  {
    name: "Floralis Genérica",
    desc: "Escultura monumental de acero y aluminio, símbolo contemporáneo de Buenos Aires.",
    img: "https://elojodelarte.com/media/k2/items/cache/68497d6cb194485d2759fde9466457b7_XL.webp?t=20230509_132450",
    map: "https://maps.google.com/?q=Floralis+Generica",
  },
  {
    name: "Museo Nacional de Bellas Artes",
    desc: "Principal museo de arte de Argentina, con obras de Goya, Renoir, Monet y Van Gogh.",
    img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=70",
    map: "https://maps.google.com/?q=Museo+Nacional+de+Bellas+Artes+Buenos+Aires",
  },
];

function InformacionPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Información General"
        title={
          <>
            Información para <span className="text-cyan">visitantes</span>
          </>
        }
        description="Todo lo que necesitás saber para tu visita a Buenos Aires."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
            <p>
              La amabilidad y la hospitalidad de nuestro país son bien conocidas. Argentina es reconocida por su
              diversidad cultural, étnica y religiosa, donde se respetan las diferencias. Moldeado por la inmigración,
              nuestro país ha desarrollado una sociedad multicultural y diversa.
            </p>
            <p>
              Todos los visitantes deben estar en posesión de un pasaporte válido con una vigencia mínima de seis meses
              a partir de la fecha de entrada en el país.
            </p>
            <p>
              Por favor, compruebe si es titular de un pasaporte de uno de los países que necesitan visado para asistir
              a congresos en Argentina.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.cancilleria.gob.ar/en/representaciones"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border-2 border-cyan bg-card p-5 transition hover:bg-cyan hover:text-cyan-foreground"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan group-hover:text-cyan-foreground">
                Representación consular
              </p>
              <p className="mt-2 inline-flex items-center gap-2 font-display text-base font-bold text-brand-deep group-hover:text-cyan-foreground">
                Consulte aquí la representación consular de su país <ExternalLink size={14} />
              </p>
            </a>
            <a
              href="https://cancilleria.gob.ar/es/servicios/visas/visa-para-congresos-actividades-tecnicas-cientificas-artisticas-o-profesionales"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border-2 border-cyan bg-card p-5 transition hover:bg-cyan hover:text-cyan-foreground"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan group-hover:text-cyan-foreground">
                Visados
              </p>
              <p className="mt-2 inline-flex items-center gap-2 font-display text-base font-bold text-brand-deep group-hover:text-cyan-foreground">
                Más info sobre visados <ExternalLink size={14} />
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
            Puntos de interés cercanos al Hotel Sofitel
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {POIS.map((p) => (
              <a
                key={p.name}
                href={p.map}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <img src={p.img} alt={p.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-brand-deep group-hover:text-cyan">{p.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{p.desc}</p>
                  <p className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-cyan">
                    <MapPin size={12} /> Ver en Google Maps
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
