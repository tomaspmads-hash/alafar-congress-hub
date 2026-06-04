import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Mail, MapPin } from "lucide-react";
import sofitel from "@/assets/sofitel-venue.jpg";

export const Route = createFileRoute("/alojamiento")({
  head: () => ({
    meta: [
      { title: "Alojamiento — ALAFAR 2026" },
      { name: "description", content: "Tarifa preferencial USD 240 + IVA por noche en el Hotel Sofitel Buenos Aires." },
    ],
  }),
  component: AlojamientoPage,
});

function AlojamientoPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Alojamiento"
        title={<>Tu estadía en <span className="text-cyan">Buenos Aires</span></>}
        description="Gestionamos tu alojamiento con tarifa preferencial exclusiva del congreso."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-cyan bg-cyan/5 p-8 shadow-card sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan">Tarifa preferencial</p>
            <p className="mt-4 font-display text-4xl font-black leading-tight text-brand-deep sm:text-5xl">
              USD 240 + IVA <span className="text-xl font-bold text-cyan">/ noche</span>
            </p>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">
              Desde la organización, nos encargamos de gestionar tu estadía para que accedas a una tarifa
              preferencial exclusiva de <span className="font-semibold text-brand-deep">USD 240 + IVA por noche</span>.
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/85">
              Te invitamos a realizar tu reserva con anticipación para asegurar disponibilidad dentro del
              cupo del evento contactándonos directamente a{" "}
              <a href="mailto:info@alafar2026.com.ar" className="font-semibold text-cyan hover:underline">
                info@alafar2026.com.ar
              </a>.
            </p>
            <a
              href="mailto:info@alafar2026.com.ar?subject=Reserva%20de%20alojamiento%20ALAFAR%202026"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-cyan px-6 py-3 text-sm font-bold uppercase tracking-wider text-cyan-foreground shadow-card transition hover:brightness-110"
            >
              <Mail size={16} /> Reservar mi alojamiento
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            {/* TODO: reemplazar con fotos profesionales del Hotel Sofitel que envíe el cliente */}
            <img src={sofitel} alt="Hotel Sofitel Buenos Aires" className="aspect-[4/3] w-full rounded-xl object-cover shadow-card" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
              Hotel Sofitel Buenos Aires
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Sede oficial del XLIV Congreso ALAFAR. Un hotel de lujo ubicado en el corazón de
              Recoleta/Retiro, a pasos de los principales puntos culturales de Buenos Aires y con
              todas las comodidades necesarias para una estadía de excelencia.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep">
              <MapPin size={16} className="text-cyan" /> Recoleta · Buenos Aires, Argentina
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps?q=Sofitel+Buenos+Aires+Recoleta&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Hotel Sofitel Buenos Aires"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
