import { createFileRoute } from "@tanstack/react-router";
import { Award, Building2, Calendar, Languages, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const GENERAL_INFO = [
  { icon: Calendar, label: "Fecha", value: "27, 28 y 29 de Octubre de 2026" },
  { icon: Building2, label: "Sede", value: "Sofitel Buenos Aires Recoleta" },
  { icon: Languages, label: "Idioma", value: "Español" },
  { icon: Users, label: "Modalidad", value: "Presencial" },
  { icon: Award, label: "Certificados", value: "Disponibles desde el 15 de Noviembre" },
];

export const Route = createFileRoute("/informacion")({
  head: () => ({
    meta: [
      { title: "Información General — ALAFAR 2026" },
      { name: "description", content: "Fecha, sede, idioma, modalidad y certificados del XLIV Congreso ALAFAR 2026." },
      { property: "og:title", content: "Información General · ALAFAR 2026" },
      { property: "og:description", content: "Todo lo que necesitás saber para participar del XLIV Congreso ALAFAR." },
    ],
  }),
  component: InformacionPage,
});

function InformacionPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Información General"
        title={<>Lo que necesitás <span className="text-ember">saber</span></>}
        description="Datos clave del XLIV Congreso ALAFAR para que planifiques tu participación."
      />

      <section className="bg-brand-deep py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {GENERAL_INFO.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ember text-ember-foreground">
                  <Icon size={20} />
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">{label}</p>
                <p className="mt-1 text-base font-semibold leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
