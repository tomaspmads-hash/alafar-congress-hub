import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Handshake, Mail } from "lucide-react";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — ALAFAR 2026" },
      { name: "description", content: "Oportunidades de sponsoreo del XLIV Congreso ALAFAR." },
    ],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Sponsors"
        title={<>Sé parte del <span className="text-cyan">Congreso ALAFAR 2026</span></>}
      />
      <section className="bg-background py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
            <Handshake size={32} />
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-cyan">Próximamente</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
            Oportunidades de sponsoreo
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Las oportunidades de sponsoreo estarán disponibles próximamente. Para consultas, escribinos a{" "}
            <a href="mailto:info@alafar2026.com.ar" className="font-semibold text-cyan hover:underline">
              info@alafar2026.com.ar
            </a>.
          </p>
          <a
            href="mailto:info@alafar2026.com.ar?subject=Consulta%20sponsoreo%20ALAFAR%202026"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-cyan px-6 py-3 text-sm font-bold uppercase tracking-wider text-cyan-foreground shadow-card transition hover:brightness-110"
          >
            <Mail size={16} /> Contactar por sponsoreo
          </a>
        </div>
      </section>
    </Layout>
  );
}
