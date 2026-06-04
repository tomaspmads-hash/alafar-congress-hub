import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Check, FileText, Car, Mail, Users, User } from "lucide-react";

export const Route = createFileRoute("/inscripciones")({
  head: () => ({
    meta: [
      { title: "Inscripciones — ALAFAR 2026" },
      { name: "description", content: "Tarifa única USD 240. Inscripción individual o grupal al XLIV Congreso ALAFAR 2026." },
    ],
  }),
  component: InscripcionesPage,
});

function InscripcionesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Inscripciones"
        title={<>Sumate al <span className="text-cyan">Congreso ALAFAR 2026</span></>}
        description="Una tarifa única y simple. Acceso completo al programa técnico y social."
      />

      {/* Highlighted price */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold text-brand-deep sm:text-3xl">
            Tarifa de inscripción
          </h2>
          <p className="mt-6 font-display text-7xl font-black leading-none text-cyan sm:text-8xl">
            USD 240
          </p>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Los argentinos que requieran Factura A deberán adicionar el IVA correspondiente.
          </p>
        </div>
      </section>

      {/* Two types */}
      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          {[
            {
              Icon: User,
              title: "Inscripción Individual",
              price: "USD 240",
              desc: "Para profesionales que se inscriben de manera personal.",
              cta: "Inscribirme",
              href: "mailto:info@alafar2026.com.ar?subject=Inscripci%C3%B3n%20Individual%20ALAFAR%202026",
              // TODO: reemplazar por link al PDF del reglamento individual cuando el cliente lo envíe
              docLabel: "Ver reglamento individual",
              docHref: "#",
            },
            {
              Icon: Users,
              title: "Inscripción Grupal",
              price: "USD 240 / persona",
              desc: "Para empresas y delegaciones. Coordinamos la inscripción de todo el grupo.",
              cta: "Solicitar inscripción grupal",
              href: "mailto:info@alafar2026.com.ar?subject=Inscripci%C3%B3n%20Grupal%20ALAFAR%202026",
              // TODO: reemplazar por link al PDF del reglamento por grupo cuando el cliente lo envíe
              docLabel: "Ver reglamento por grupo",
              docHref: "#",
            },
          ].map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                <p.Icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-brand-deep">{p.title}</h3>
              <p className="mt-2 text-2xl font-extrabold text-cyan">{p.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/85">
                {["Acceso al programa técnico completo", "Programa social incluido", "Material institucional", "Coffee breaks y almuerzos"].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-cyan" /> <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">
                <a href={p.href} className="inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-cyan-foreground shadow-card transition hover:brightness-110">
                  {p.cta}
                </a>
                <a href={p.docHref} className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-brand-deep transition hover:border-cyan hover:text-cyan">
                  <FileText size={14} /> {p.docLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment + parking — discreet */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan">Métodos de pago</h3>
            <p className="mt-3 text-sm text-foreground/85">
              <span className="font-semibold text-brand-deep">Transferencia bancaria.</span>{" "}
              Para coordinar el pago, escribinos a{" "}
              <a href="mailto:info@alafar2026.com.ar" className="font-semibold text-cyan hover:underline">
                info@alafar2026.com.ar
              </a>.
            </p>
            <p className="mt-3 text-xs italic text-muted-foreground">
              También se acepta tarjeta de crédito y PayPal a pedido del inscripto.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan">
              <Car size={14} /> Parking
            </h3>
            <p className="mt-3 text-sm text-foreground/85">
              <span className="font-semibold text-brand-deep">Parking disponible en el Hotel Sofitel con costo adicional.</span>
            </p>
            <a href="mailto:info@alafar2026.com.ar" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan hover:underline">
              <Mail size={12} /> Consultar disponibilidad
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
