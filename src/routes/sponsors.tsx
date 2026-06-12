import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Construction } from "lucide-react";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — ALAFAR 2026" },
      { name: "description", content: "Oportunidades de sponsoreo del XLIV Congreso ALAFAR." },
    ],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <PageHero
        eyebrow={t("sponsors.eyebrow")}
        title={<>{t("sponsors.titlePre")} <span className="text-cyan">{t("sponsors.titleAccent")}</span></>}
      />
      <section className="bg-background py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
            <Construction size={32} />
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-cyan">{t("sponsors.status")}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
            {t("sponsors.title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {t("sponsors.body")}{" "}
            <a href="mailto:info@alafar2026.com.ar" className="font-semibold text-cyan hover:underline">
              info@alafar2026.com.ar
            </a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
