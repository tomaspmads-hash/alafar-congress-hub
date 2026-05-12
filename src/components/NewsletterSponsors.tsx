import { Mail } from "lucide-react";
import logoDark from "@/assets/logo-alafar-dark.png";

const SPONSORS = [
  "RHI Magnesita", "Vesuvius", "Saint-Gobain", "Imerys", "Calderys",
  "Refratechnik", "Krosaki", "Morgan Thermal", "Lhoist", "Kerneos",
];

export function NewsletterSponsors() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">Newsletter</p>
        <h2 className="mt-2 font-display text-3xl font-black text-brand-deep sm:text-4xl text-balance">
          ¡Quiero recibir más novedades acerca de ALAFAR 2026!
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="tu@email.com"
            className="flex-1 rounded-md border border-border bg-card px-4 py-3 text-sm outline-none ring-ember focus:ring-2"
          />
          <button
            type="submit"
            className="rounded-md bg-ember px-6 py-3 text-sm font-bold uppercase tracking-wider text-ember-foreground shadow-card transition hover:brightness-105"
          >
            Suscribirme
          </button>
        </form>
        <p className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          <Mail size={16} className="text-ember" />
          Para más información, contactanos a{" "}
          <a href="mailto:info@alafar2026.org" className="font-semibold text-brand hover:underline">
            info@alafar2026.org
          </a>
        </p>
      </div>

      <div className="mt-16 border-y border-border bg-surface py-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
          Sponsors
        </p>
        <div className="mt-6 overflow-hidden">
          <div className="flex w-max animate-marquee gap-12 px-6">
            {[...SPONSORS, ...SPONSORS].map((s, i) => (
              <div
                key={i}
                className="flex h-16 w-44 shrink-0 items-center justify-center rounded-lg border border-border bg-card font-display text-base font-bold text-brand-deep/70"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <img src={logoDark} alt="" className="h-6 w-auto opacity-70" />
          <span>Iremos publicando los logos de sponsors a medida que se confirmen.</span>
        </div>
      </div>
    </section>
  );
}
