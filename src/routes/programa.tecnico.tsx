import { createFileRoute, Link } from "@tanstack/react-router";
import { Construction, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/programa/tecnico")({
  head: () => ({ meta: [{ title: "Programa Técnico — ALAFAR 2026" }] }),
  component: ProgramaTecnico,
});

function ProgramaTecnico() {
  const { t } = useTranslation();
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
          <Construction size={32} />
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-cyan">{t("program.underConstruction")}</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
          {t("nav.programTechnical")}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {t("program.techBody")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:info@alafar2026.com.ar?subject=Programa%20T%C3%A9cnico%20ALAFAR%202026"
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-6 py-3 text-sm font-bold uppercase tracking-wider text-cyan-foreground shadow-card transition hover:brightness-110"
          >
            <Mail size={16} /> {t("program.notify")}
          </a>
          <Link to="/programa/social" className="rounded-md border border-border bg-card px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-deep transition hover:border-cyan hover:text-cyan">
            {t("nav.programSocial")}
          </Link>
        </div>
      </div>
    </section>
  );
}
