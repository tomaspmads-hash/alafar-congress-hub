import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ExternalLink, MapPin } from "lucide-react";
import plazaFrancia from "@/assets/poi-plaza-francia.png";
import recoleta from "@/assets/poi-recoleta.png";
import floralis from "@/assets/poi-floralis.png";
import bellasArtes from "@/assets/poi-bellas-artes.png";

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
    img: plazaFrancia,
    map: "https://maps.google.com/?q=Plaza+Francia+Buenos+Aires",
  },
  {
    name: "Cementerio de la Recoleta",
    desc: "Patrimonio histórico y arquitectónico, uno de los cementerios más impresionantes del mundo.",
    img: recoleta,
    map: "https://maps.google.com/?q=Cementerio+de+la+Recoleta",
  },
  {
    name: "Floralis Genérica",
    desc: "Escultura monumental de acero y aluminio, símbolo contemporáneo de Buenos Aires.",
    img: floralis,
    map: "https://maps.google.com/?q=Floralis+Generica",
  },
  {
    name: "Museo Nacional de Bellas Artes",
    desc: "Principal museo de arte de Argentina, con obras de Goya, Renoir, Monet y Van Gogh.",
    img: bellasArtes,
    map: "https://maps.google.com/?q=Museo+Nacional+de+Bellas+Artes+Buenos+Aires",
  },
];

function InformacionPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <PageHero
        eyebrow={t("information.eyebrow")}
        title={
          <>
            {t("information.titlePre")} <span className="text-cyan">{t("information.titleAccent")}</span>
          </>
        }
        description={t("information.description")}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
            <p>{t("information.p1")}</p>
            <p>{t("information.p2")}</p>
            <p>{t("information.p3")}</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.cancilleria.gob.ar/en/representaciones"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border-2 border-cyan bg-card p-5 transition hover:bg-cyan hover:text-cyan-foreground"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan group-hover:text-cyan-foreground">
                {t("information.consularLabel")}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 font-display text-base font-bold text-brand-deep group-hover:text-cyan-foreground">
                {t("information.consularCta")} <ExternalLink size={14} />
              </p>
            </a>
            <a
              href="https://cancilleria.gob.ar/es/servicios/visas/visa-para-congresos-actividades-tecnicas-cientificas-artisticas-o-profesionales"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border-2 border-cyan bg-card p-5 transition hover:bg-cyan hover:text-cyan-foreground"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan group-hover:text-cyan-foreground">
                {t("information.visaLabel")}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 font-display text-base font-bold text-brand-deep group-hover:text-cyan-foreground">
                {t("information.visaCta")} <ExternalLink size={14} />
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
            {t("information.poisTitle")}
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
                    <MapPin size={12} /> {t("information.viewMap")}
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
