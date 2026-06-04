import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/programa")({
  head: () => ({
    meta: [
      { title: "Programa — ALAFAR 2026" },
      { name: "description", content: "Programa técnico, social y actividades societarias del Congreso ALAFAR 2026." },
    ],
  }),
  component: ProgramaLayout,
});

function ProgramaLayout() {
  const { t } = useTranslation();
  return (
    <Layout>
      <PageHero
        eyebrow={t("nav.program")}
        title={<>{t("nav.program")} <span className="text-cyan">ALAFAR 2026</span></>}
        description="Buenos Aires · Hotel Sofitel · 26 al 29 de Octubre de 2026"
      />
      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-4 sm:px-6 lg:px-8">
          {[
            { to: "/programa/tecnico", label: t("nav.programTechnical") },
            { to: "/programa/social", label: t("nav.programSocial") },
            { to: "/programa/societarias", label: t("nav.programCorporate") },
          ].map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/80 transition hover:border-cyan hover:text-cyan"
              activeProps={{ className: "rounded-full border border-cyan bg-cyan px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-foreground" }}
            >
              {it.label}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </Layout>
  );
}
