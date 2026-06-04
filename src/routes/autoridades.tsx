import { createFileRoute } from "@tanstack/react-router";
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

// TODO: agregar fotos de las autoridades cuando el cliente las provea (campo `photo` opcional)
const GROUPS: { title: string; people: { name: string; photo?: string }[] }[] = [
  { title: "Presidente", people: [{ name: "Celso Freitas" }] },
  { title: "Past President", people: [{ name: "Daniel Llaguno" }] },
  { title: "Vicepresidente 3°", people: [{ name: "Norberto Bellandi" }] },
  { title: "Secretario", people: [{ name: "Teresa Togni" }] },
  { title: "Tesorero", people: [{ name: "Jessica Fernández" }] },
  { title: "Director Técnico", people: [{ name: "Alfredo Vanola" }] },
  { title: "Vocales", people: [{ name: "Santiago Da Silveira" }, { name: "Jorge Luis Morales" }, { name: "Claudia Arango" }] },
  { title: "Representante ante UNITECR", people: [{ name: "Abel Carriquiry" }] },
  { title: "Representante ante W.R.A.", people: [{ name: "Celso Freitas" }] },
];

function AutoridadesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Autoridades"
        title={<>Autoridades de <span className="text-cyan">ALAFAR</span></>}
        description="Comisión Directiva y representantes institucionales de la Asociación Latinoamericana de Fabricantes de Refractarios."
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
