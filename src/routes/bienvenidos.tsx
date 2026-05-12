import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import presidentImg from "@/assets/president-portrait.jpg";

export const Route = createFileRoute("/bienvenidos")({
  head: () => ({
    meta: [
      { title: "Bienvenidos — XLIV Congreso ALAFAR 2026" },
      { name: "description", content: "Mensaje de bienvenida de Celso Freitas, Presidente de ALAFAR, al XLIV Congreso en Buenos Aires." },
      { property: "og:title", content: "Bienvenidos al XLIV Congreso ALAFAR" },
      { property: "og:description", content: "Mensaje del presidente de ALAFAR para la edición 2026 en Buenos Aires." },
    ],
  }),
  component: BienvenidosPage,
});

function BienvenidosPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Bienvenida"
        title={<>¡Bienvenidos a <span className="text-ember">Buenos Aires</span>!</>}
        description="Una nueva edición de ALAFAR para celebrar la transformación de la industria refractaria latinoamericana."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-ember opacity-20 blur-2xl" />
                <img
                  src={presidentImg}
                  alt="Celso Freitas, Presidente de ALAFAR"
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
                />
                <div className="absolute -bottom-5 left-5 right-5 rounded-xl bg-card p-4 shadow-elegant ring-1 ring-border">
                  <p className="font-display text-lg font-bold text-brand-deep">Celso Freitas</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Presidente · ALAFAR</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">Mensaje del Presidente</p>
              <h2 className="mt-2 font-display text-3xl font-black text-brand-deep text-balance sm:text-4xl">
                Una semana para repensar el futuro de los refractarios
              </h2>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85">
                <div className="flex gap-4">
                  <Quote className="mt-1 h-6 w-6 shrink-0 text-ember" />
                  <p>
                    <span className="font-semibold">Estimados amigos,</span> es un gran placer invitarlos
                    al <strong>XLIV Congreso de ALAFAR</strong>, que se llevará a cabo en Buenos Aires,
                    Argentina, del 27 al 29 de octubre de 2026. En esta edición, nuestro punto de encuentro
                    será el emblemático <strong>Sofitel Buenos Aires Recoleta</strong>, un espacio que combina
                    elegancia, historia y el espíritu cosmopolita que caracteriza a la ciudad.
                  </p>
                </div>
                <p>
                  La industria refractaria atraviesa un período de profunda transformación. Los desafíos de
                  la <strong>descarbonización</strong>, la innovación de materiales y la búsqueda de procesos
                  más eficientes y sostenibles nos exigen, más que nunca, fortalecer nuestra red de
                  colaboración. Este congreso será el escenario ideal para compartir avances científicos,
                  experiencias industriales y visiones estratégicas que marcarán el rumbo de los próximos años.
                </p>
                <p>
                  Espero con mucho entusiasmo darles la bienvenida en octubre de 2026 y vivir juntos una
                  semana de aprendizaje, networking y celebración de nuestra comunidad refractaria
                  latinoamericana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
