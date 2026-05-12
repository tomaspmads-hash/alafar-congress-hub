import { createFileRoute } from "@tanstack/react-router";
import { BedDouble } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/alojamiento")({
  head: () => ({
    meta: [
      { title: "Alojamiento — ALAFAR 2026" },
      { name: "description", content: "Tarifa preferencial y hoteles aliados para los asistentes al XLIV Congreso ALAFAR." },
      { property: "og:title", content: "Alojamiento · ALAFAR 2026" },
      { property: "og:description", content: "Tarifa preferencial USD 240 + IVA en el Sofitel Recoleta." },
    ],
  }),
  component: AlojamientoPage,
});

function AlojamientoPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Alojamiento"
        title={<>Tarifa preferencial <span className="text-ember">USD 240 + IVA</span></>}
        description="Acuerdos con el Sofitel Recoleta y hoteles aliados para que vivas la mejor experiencia en Buenos Aires."
      />
      <ComingSoon
        id="alojamiento"
        eyebrow="Próximamente"
        title="Reservas con tarifa de congreso"
        description="Estamos cerrando los códigos de reserva y los hoteles aliados. Pronto vas a poder reservar con la tarifa preferencial."
        icon={BedDouble}
      />
    </Layout>
  );
}
