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
        description={t("program.description")}
      />
      <div className="border-y-2 border-cyan/30 bg-gradient-to-b from-brand-deep to-brand text-white shadow-elegant">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 py-5 sm:gap-3 sm:px-6 lg:px-8">
          {[
            { to: "/programa/tecnico", label: t("nav.programTechnical") },
            { to: "/programa/social", label: t("nav.programSocial") },
            { to: "/programa/societarias", label: t("nav.programCorporate") },
          ].map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="rounded-md border border-white/25 bg-white/5 px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition hover:border-cyan hover:bg-cyan hover:text-cyan-foreground"
              activeProps={{ className: "rounded-md border-2 border-cyan bg-cyan px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-cyan-foreground shadow-card" }}
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
