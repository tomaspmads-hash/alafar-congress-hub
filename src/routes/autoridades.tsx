import { createFileRoute } from "@tanstack/react-router";
import { Crown } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/autoridades")({
  head: () => ({
    meta: [
      { title: "Autoridades & Socios Honorarios — ALAFAR 2026" },
      { name: "description", content: "Comité de honor y autoridades del XLIV Congreso ALAFAR 2026 en Buenos Aires." },
      { property: "og:title", content: "Autoridades del XLIV Congreso ALAFAR" },
      { property: "og:description", content: "Comité de honor y socios honorarios de ALAFAR 2026." },
    ],
  }),
  component: AutoridadesPage,
});

function AutoridadesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Autoridades & Socios Honorarios"
        title={<>El comité de honor del <span className="text-ember">XLIV Congreso</span></>}
        description="Las autoridades de ALAFAR y los socios honorarios que dan respaldo institucional a esta edición."
      />
      <ComingSoon
        id="autoridades"
        eyebrow="Próximamente"
        title="Listado de autoridades en preparación"
        description="Pronto compartiremos la nómina completa de autoridades y socios honorarios que nos acompañarán en Buenos Aires."
        icon={Crown}
      />
    </Layout>
  );
}
