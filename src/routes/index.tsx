import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin, Users, Award, Building2, Music2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/Layout";
import bsAsAsset from "@/assets/buenos-aires-puerto-madero.jpg.asset.json";
import presidentAsset from "@/assets/celso-freitas.jpg.asset.json";
const president = presidentAsset.url;
const heroBsAs = bsAsAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Congreso ALAFAR 2026 — Buenos Aires" },
      { name: "description", content: "XLIV Congreso de la Asociación Latinoamericana de Fabricantes de Refractarios. Buenos Aires, Hotel Sofitel, octubre 2026." },
      { property: "og:title", content: "Congreso ALAFAR 2026" },
      { property: "og:description", content: "El encuentro de la industria refractaria latinoamericana." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useTranslation();

  return (
    <Layout transparentHeader>
      {/* HERO — big title, no portrait */}
      <section className="relative isolate overflow-hidden bg-brand-deep pb-16 pt-28 text-white sm:pt-32">
        <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-cyan/15 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full bg-brand/40 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 fade-in-up">
          <span className="inline-flex items-center gap-3 rounded-none border-y border-cyan/40 bg-transparent px-1 py-2 text-[11px] font-bold uppercase tracking-[0.35em] text-cyan">
            <span className="h-px w-8 bg-cyan/60" aria-hidden />
            XLIV {t("hero.eyebrow").includes("Edition") ? "Edition" : "Edición"}
            <span className="text-white/40">/</span>
            Buenos Aires 2026
            <span className="h-px w-8 bg-cyan/60" aria-hidden />
          </span>
          <h1 className="mt-6 font-display font-black leading-[0.92] text-white text-balance text-5xl sm:text-7xl lg:text-[96px]">
            {t("hero.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-cyan">{t("hero.title").split(" ").slice(-1)}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-display text-2xl font-semibold text-cyan text-balance sm:text-3xl lg:text-[34px]">
            {t("hero.dates")}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><CalendarDays size={16} className="text-cyan" /> {t("hero.dates")}</span>
            <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-cyan" /> Hotel Sofitel · Recoleta</span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/inscripciones" className="inline-flex items-center gap-2 rounded-md bg-cyan px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cyan-foreground shadow-elegant transition hover:brightness-110">
              {t("nav.register")} <ArrowRight size={16} />
            </Link>
            <Link to="/programa/social" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider backdrop-blur transition hover:bg-white/15">
              {t("nav.program")}
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME SPEECH */}
      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-start lg:gap-14">
            {/* Left column — welcome speech */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan">{t("welcome.title")}</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl lg:text-5xl text-balance">
                {t("welcome.title")}
              </h2>
              {/* TODO: replace with the official welcome speech text from Dr. Celso Freitas */}
              <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
                <p>{t("welcome.p1")}</p>
                <p>{t("welcome.p2")}</p>
                <p>{t("welcome.p3")}</p>
                <p>{t("welcome.p4")}</p>
              </div>
              <p className="mt-8 border-l-4 border-cyan pl-4 text-sm font-semibold uppercase tracking-wider text-brand-deep">
                {t("welcome.signature")}
              </p>
            </div>

            {/* Right column — president portrait */}
            <aside className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-xl border border-border bg-brand shadow-elegant">
                <img
                  src={president}
                  alt={t("hero.presidentName")}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="border-t border-white/10 bg-brand-deep/90 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">
                    {t("hero.president")}
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-white">
                    {t("hero.presidentName")}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* BUENOS AIRES */}
      <section className="relative isolate overflow-hidden">
        {/* TODO: replace with hi-res institutional Buenos Aires photo from client */}
        <img src={heroBsAs} alt="Buenos Aires" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-brand-deep/20" />
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          <div className="max-w-xl rounded-xl bg-brand-deep/70 p-8 text-white backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan">{t("bsAs.title")}</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">{t("bsAs.title")}</h2>
            <p className="mt-3 text-white/85">{t("bsAs.tagline")}</p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
            {t("highlights.title")}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Award, title: t("highlights.h1Title"), desc: t("highlights.h1Desc") },
              { Icon: Users, title: t("highlights.h2Title"), desc: t("highlights.h2Desc") },
              { Icon: Building2, title: t("highlights.h3Title"), desc: t("highlights.h3Desc") },
              { Icon: Music2, title: t("highlights.h4Title"), desc: t("highlights.h4Desc") },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-deep">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/programa/social" className="inline-flex items-center gap-2 rounded-md bg-brand-deep px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-card transition hover:bg-brand">
              {t("highlights.cta")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
