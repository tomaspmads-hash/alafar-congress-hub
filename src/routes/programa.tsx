import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/programa")({
  head: () => ({
    meta: [
      { title: "Programa — XLIV Congreso ALAFAR 2026" },
      { name: "description", content: "Programa académico, social y de visitas técnicas del XLIV Congreso ALAFAR." },
      { property: "og:title", content: "Programa del XLIV Congreso ALAFAR" },
      { property: "og:description", content: "Tres días de contenido técnico, networking y actividades sociales en Buenos Aires." },
    ],
  }),
  component: ProgramaPage,
});

function ProgramaPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Programa"
        title={<>Tres días de contenido <span className="text-ember">técnico de alto nivel</span></>}
        description="Sesiones plenarias, mesas técnicas, visitas industriales y un completo programa social en Buenos Aires."
      />
      <ComingSoon
        id="programa"
        eyebrow="Próximamente"
        title="Programa académico en preparación"
        description="Estamos definiendo los ejes temáticos, conferencistas y actividades sociales. La grilla completa se publicará en breve."
        icon={CalendarDays}
      />
    </Layout>
  );
}
