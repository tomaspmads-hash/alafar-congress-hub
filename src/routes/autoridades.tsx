import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { UserRound } from "lucide-react";

export const Route = createFileRoute("/autoridades")({
  head: () => ({
    meta: [
      { title: "Autoridades — ALAFAR 2026" },
      { name: "description", content: "Autoridades de la Asociación Latinoamericana de Fabricantes de Refractarios." },
    ],
  }),
  component: AutoridadesPage,
});

function AutoridadesPage() {
  const { t } = useTranslation();

  // TODO: agregar fotos de las autoridades cuando el cliente las provea
  const GROUPS: { title: string; people: { name: string; photo?: string }[] }[] = [
    { title: t("authorities.roles.president"), people: [{ name: "Celso Freitas" }] },
    { title: t("authorities.roles.past"), people: [{ name: "Daniel Llaguno" }] },
    { title: t("authorities.roles.vice3"), people: [{ name: "Norberto Bellandi" }] },
    { title: t("authorities.roles.secretary"), people: [{ name: "Teresa Togni" }] },
    { title: t("authorities.roles.treasurer"), people: [{ name: "Jessica Fernández" }] },
    { title: t("authorities.roles.technical"), people: [{ name: "Alfredo Vanola" }] },
    { title: t("authorities.roles.board"), people: [{ name: "Santiago Da Silveira" }, { name: "Jorge Luis Morales" }, { name: "Claudia Arango" }] },
    { title: t("authorities.roles.unitecr"), people: [{ name: "Abel Carriquiry" }] },
    { title: t("authorities.roles.wra"), people: [{ name: "Celso Freitas" }] },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow={t("authorities.eyebrow")}
        title={<>{t("authorities.title").split(" ").slice(0, -1).join(" ")} <span className="text-cyan">{t("authorities.title").split(" ").slice(-1)}</span></>}
        description={t("authorities.description")}
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan">{g.title}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.people.map((p) => (
                  <div key={p.name + g.title} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                    {p.photo ? (
                      <img src={p.photo} alt={p.name} className="h-14 w-14 rounded-full object-cover" />
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                        <UserRound size={26} />
                      </div>
                    )}
                    <div>
                      <p className="font-display text-base font-bold text-brand-deep">{p.name}</p>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{g.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
