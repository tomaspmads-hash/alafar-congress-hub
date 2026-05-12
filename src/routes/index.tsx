import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Countdown } from "@/components/Countdown";
import heroImg from "@/assets/hero-buenos-aires.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XLIV Congreso ALAFAR 2026 — Buenos Aires" },
      { name: "description", content: "Refractarios en Transformación: Resiliencia, Rendimiento y Sostenibilidad. 27, 28 y 29 de Octubre 2026, Sofitel Buenos Aires Recoleta." },
      { property: "og:title", content: "XLIV Congreso ALAFAR 2026" },
      { property: "og:description", content: "El encuentro más importante de la industria refractaria en Latinoamérica. Buenos Aires, Octubre 2026." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout transparentHeader>
      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Buenos Aires al atardecer"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
              <Sparkles size={14} className="text-ember" />
              XLIV Edición · Buenos Aires 2026
            </span>
            <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] text-white text-balance sm:text-6xl lg:text-7xl">
              XLIV Congreso de <span className="text-ember">ALAFAR</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 text-balance sm:text-xl">
              Refractarios en Transformación:{" "}
              <span className="font-semibold text-white">Resiliencia, Rendimiento y Sostenibilidad.</span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><CalendarDays size={16} className="text-ember" /> 27 — 29 Octubre 2026</span>
              <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-ember" /> Sofitel Buenos Aires · Recoleta</span>
            </div>

            <div className="mt-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                Cuenta regresiva al congreso
              </p>
              <Countdown />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/inscripciones" className="inline-flex items-center gap-2 rounded-md bg-ember px-6 py-3 text-sm font-bold uppercase tracking-wider text-ember-foreground shadow-elegant transition hover:brightness-105">
                Inscribirme <ArrowRight size={16} />
              </Link>
              <Link to="/bienvenidos" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/15">
                Conocer más
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
