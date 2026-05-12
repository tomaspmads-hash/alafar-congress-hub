import { createFileRoute } from "@tanstack/react-router";
import { Banknote, CheckCircle2, CreditCard, Wallet } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const PRICING_HEADERS = [
  "Categoría",
  "Temprana\n(antes 14 Ago)",
  "Normal\n(15 Ago — 13 Oct)",
  "Tardía\n(14 — 20 Oct)",
  "En el momento\n(después 20 Oct)",
];

const PRICING_ROWS: Array<[string, string, string, string, string]> = [
  ["Socios", "USD 800", "USD 900", "USD 1.050", "USD 1.250"],
  ["No Socios", "USD 1.000", "USD 1.150", "USD 1.450", "USD 1.450"],
  ["Socios Honorarios", "Sin cargo", "Sin cargo", "Sin cargo", "USD 900"],
  ["Estudiantes", "USD 100", "USD 250", "USD 350", "USD 350"],
  ["Acompañantes (misma habitación)", "Sin cargo", "Sin cargo", "Sin cargo", "Sin cargo"],
  ["Acompañante adicional", "USD 400", "USD 450", "USD 550", "USD 750"],
];

const BENEFITS = [
  "Participación en todas las sesiones técnicas y plenarias",
  "Contacto directo con sponsors y expositores",
  "Materiales del congreso y actas",
  "Certificado oficial de asistencia",
  "Cocktail de bienvenida — 26 de Octubre",
  "Almuerzos del 27 y 28 de Octubre",
  "Cena de gala — 29 de Octubre",
  "Programa de paseos para acompañantes",
];

export const Route = createFileRoute("/inscripciones")({
  head: () => ({
    meta: [
      { title: "Inscripciones — ALAFAR 2026" },
      { name: "description", content: "Tarifas, beneficios y métodos de pago para inscribirse al XLIV Congreso ALAFAR 2026." },
      { property: "og:title", content: "Inscripciones · XLIV Congreso ALAFAR" },
      { property: "og:description", content: "Asegurá tu lugar con tarifas escalonadas. Cuanto antes confirmes, mejor el valor." },
    ],
  }),
  component: InscripcionesPage,
});

function InscripcionesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Inscripciones"
        title={<>Asegurá tu lugar en <span className="text-ember">ALAFAR 2026</span></>}
        description="Tarifas escalonadas: cuanto antes confirmes, mejor el valor. Todos los pagos se procesan en USD."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="rounded-2xl bg-gradient-brand p-8 text-white shadow-elegant">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">Beneficios incluidos</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Todo lo que recibís</h3>
                <ul className="mt-6 space-y-3">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-ember" />
                      <span className="text-white/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="border-b border-border bg-surface px-6 py-4">
                  <h3 className="font-display text-xl font-bold text-brand-deep">Valor de las inscripciones</h3>
                  <p className="text-xs text-muted-foreground">Valores expresados en USD por persona.</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-sm">
                    <thead>
                      <tr className="bg-brand-deep text-white">
                        {PRICING_HEADERS.map((h) => (
                          <th key={h} className="whitespace-pre-line px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {PRICING_ROWS.map((row, idx) => (
                        <tr key={row[0]} className={idx % 2 ? "bg-surface" : "bg-card"}>
                          {row.map((cell, i) => (
                            <td
                              key={i}
                              className={`px-4 py-3 ${
                                i === 0
                                  ? "font-semibold text-brand-deep"
                                  : cell === "Sin cargo"
                                  ? "font-bold text-ember"
                                  : "tabular-nums text-foreground/80"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: CreditCard, title: "Tarjeta de Crédito", text: "VISA · MASTERCARD · AMEX" },
                  { icon: Banknote, title: "Transferencia", text: "Transferencia bancaria internacional" },
                  { icon: Wallet, title: "PayPal", text: "Pago seguro online" },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-xl border border-border bg-card p-5">
                    <Icon size={22} className="text-ember" />
                    <p className="mt-3 font-semibold text-brand-deep">{title}</p>
                    <p className="text-xs text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 rounded-lg border-l-4 border-ember bg-ember/10 px-4 py-3 text-sm text-foreground/80">
                <strong>Importante:</strong> en caso de requerir factura A deberá adicionar el 21% del IVA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
