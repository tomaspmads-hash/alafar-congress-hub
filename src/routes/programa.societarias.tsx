import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/programa/societarias")({
  head: () => ({ meta: [{ title: "Actividades Societarias — ALAFAR 2026" }] }),
  component: ProgramaSocietarias,
});

const ITEMS = [
  { day: "Lunes 26 de Octubre", time: "10:00", title: "Reunión de Comité Ejecutivo", place: "Hotel Sofitel" },
  { day: "Jueves 29 de Octubre", time: "16:30", title: "Asamblea General de ALAFAR", place: "Hotel Sofitel" },
];

function ProgramaSocietarias() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
          Actividades Societarias
        </h2>
        <p className="mt-3 text-muted-foreground">
          Reuniones institucionales de ALAFAR durante el congreso.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {ITEMS.map((it) => (
            <div key={it.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan">
                <Calendar size={14} /> {it.day} · {it.time}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-brand-deep">{it.title}</h3>
              <p className="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin size={14} /> {it.place}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs italic text-muted-foreground">Horarios sujetos a confirmación.</p>
      </div>
    </section>
  );
}
