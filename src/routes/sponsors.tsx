import { createFileRoute } from "@tanstack/react-router";
import { Handshake } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — ALAFAR 2026" },
      { name: "description", content: "Categorías de sponsoreo y oportunidades para acompañar al XLIV Congreso ALAFAR." },
      { property: "og:title", content: "Sponsors · XLIV Congreso ALAFAR" },
      { property: "og:description", content: "Acompañá la transformación de la industria refractaria latinoamericana." },
    ],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Sponsors"
        title={<>Acompañá la <span className="text-ember">transformación</span> de la industria</>}
        description="Conectá tu marca con los principales referentes del sector refractario en Latinoamérica."
      />
      <ComingSoon
        id="sponsors"
        eyebrow="Próximamente"
        title="Categorías de sponsoreo en preparación"
        description="Estamos definiendo los paquetes y espacios disponibles. Iremos publicando los logos de sponsors confirmados a medida que se sumen."
        icon={Handshake}
      />
    </Layout>
  );
}
