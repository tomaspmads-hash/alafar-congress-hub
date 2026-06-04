import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Music2, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/programa/")({
  component: ProgramaIndex,
});

function ProgramaIndex() {
  const { t } = useTranslation();
  const items = [
    { to: "/programa/tecnico", Icon: CalendarDays, title: t("nav.programTechnical"), desc: "Sesiones plenarias, mesas técnicas y ponentes internacionales." },
    { to: "/programa/social", Icon: Music2, title: t("nav.programSocial"), desc: "Cocktail, almuerzo típico con tango y cena de despedida." },
    { to: "/programa/societarias", Icon: Users, title: t("nav.programCorporate"), desc: "Comité Ejecutivo y Asamblea General de ALAFAR." },
  ];
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {items.map(({ to, Icon, title, desc }) => (
          <Link
            key={to}
            to={to}
            className="group rounded-xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
              <Icon size={24} />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-brand-deep group-hover:text-cyan">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
