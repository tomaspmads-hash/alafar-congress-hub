import { createFileRoute } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/invitados")({
  head: () => ({
    meta: [
      { title: "Invitados Internacionales — ALAFAR 2026" },
      { name: "description", content: "Speakers internacionales confirmados para el XLIV Congreso ALAFAR 2026." },
      { property: "og:title", content: "Invitados Internacionales · ALAFAR 2026" },
      { property: "og:description", content: "Referentes mundiales de la industria refractaria liderarán las plenarias." },
    ],
  }),
  component: InvitadosPage,
});

function InvitadosPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Invitados Internacionales"
        title={<>Speakers de <span className="text-ember">talla mundial</span></>}
        description="Referentes internacionales de la industria refractaria liderarán nuestras sesiones plenarias y mesas técnicas."
      />
      <ComingSoon
        id="invitados"
        eyebrow="Próximamente"
        title="Confirmando speakers internacionales"
        description="Estamos cerrando acuerdos con referentes globales que enriquecerán el programa académico del congreso."
        icon={Globe2}
      />
    </Layout>
  );
}
