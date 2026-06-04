import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/programa/social")({
  head: () => ({ meta: [{ title: "Programa Social — ALAFAR 2026" }] }),
  component: ProgramaSocial,
});

// TODO: horarios sujetos a confirmación por parte del cliente
const ACTIVITIES = [
  { day: "Lunes 26", date: "26 Oct", time: "20:00", title: "Cocktail de Bienvenida", place: "Hotel Sofitel", who: "Inscriptos y acompañantes" },
  { day: "Martes 27", date: "27 Oct", time: "08:00", title: "Ceremonia de Apertura", place: "Hotel Sofitel", who: "Inscriptos y acompañantes" },
  { day: "Martes 27", date: "27 Oct", time: "11:00", title: "Inicio Tour", place: "—", who: "Solo acompañantes" },
  { day: "Martes 27", date: "27 Oct", time: "13:00", title: "Almuerzo de trabajo", place: "—", who: "Solo inscriptos" },
  { day: "Miércoles 28", date: "28 Oct", time: "13:00", title: "Almuerzo Típico con show de tango", place: "Hotel Sofitel", who: "Inscriptos y acompañantes" },
  { day: "Jueves 29", date: "29 Oct", time: "10:00", title: "Inicio Tour", place: "—", who: "Solo acompañantes" },
  { day: "Jueves 29", date: "29 Oct", time: "20:00", title: "Cena de Despedida", place: "Hotel Sofitel", who: "Inscriptos y acompañantes" },
];

function ProgramaSocial() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">Programa Social</h2>
        <p className="mt-3 text-base text-muted-foreground">
          <span className="font-semibold text-brand-deep">Sin cargo para inscriptos y acompañantes</span> (según indique cada actividad).
        </p>

        <ol className="mt-12 relative border-l-2 border-cyan/30">
          {ACTIVITIES.map((a, i) => (
            <li key={i} className="mb-10 ml-8">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan text-[10px] font-bold text-cyan-foreground ring-4 ring-background">
                {i + 1}
              </span>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan">
                  <span>{a.day}</span>
                  <span className="text-muted-foreground/50">·</span>
                  <span className="inline-flex items-center gap-1 text-foreground/70"><Clock size={12} /> {a.time}</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-bold text-brand-deep">{a.title}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin size={12} /> {a.place}</span>
                  <span className="inline-flex items-center gap-1"><Users size={12} /> {a.who}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-4 text-xs italic text-muted-foreground">
          Horarios sujetos a confirmación.
        </p>
      </div>
    </section>
  );
}
