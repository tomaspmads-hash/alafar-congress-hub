import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin, Car, Bus, Plane, Footprints, Calendar, Building2, Languages, Users,
  Award, CheckCircle2, CreditCard, Banknote, Wallet, ArrowRight, Mail, Sparkles,
  Crown, Globe2, CalendarDays, Handshake, BedDouble, Quote,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Countdown } from "@/components/Countdown";
import { ComingSoon } from "@/components/ComingSoon";
import heroImg from "@/assets/hero-buenos-aires.jpg";
import presidentImg from "@/assets/president-portrait.jpg";
import venueImg from "@/assets/sofitel-venue.jpg";
import logoDark from "@/assets/logo-alafar-dark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XLIV Congreso ALAFAR 2026 — Buenos Aires" },
      {
        name: "description",
        content:
          "Refractarios en Transformación: Resiliencia, Rendimiento y Sostenibilidad. 27, 28 y 29 de Octubre 2026, Sofitel Buenos Aires Recoleta.",
      },
      { property: "og:title", content: "XLIV Congreso ALAFAR 2026" },
      {
        property: "og:description",
        content:
          "El encuentro más importante de la industria refractaria en Latinoamérica. Buenos Aires, Octubre 2026.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const PRICING_HEADERS = [
  "Categoría",
  "Temprana\n(antes 14 Ago)",
  "Normal\n(15 Ago — 13 Oct)",
  "Tardía\n(14 — 20 Oct)",
  "En el momento\n(después 20 Oct)",
];

const PRICING_ROWS: Array<[string, string, string, string, string]> = [
  ["Socios", "USD 800", "USD 900", "USD 1.050", "USD 1.250"],
  ["No Socios", "USD 1.000", "USD 1.150", "USD 1.450", "USD 1.450"],
  ["Socios Honorarios", "Sin cargo", "Sin cargo", "Sin cargo", "USD 900"],
  ["Estudiantes", "USD 100", "USD 250", "USD 350", "USD 350"],
  ["Acompañantes (misma habitación)", "Sin cargo", "Sin cargo", "Sin cargo", "Sin cargo"],
  ["Acompañante adicional", "USD 400", "USD 450", "USD 550", "USD 750"],
];

const ACCESS = [
  { icon: Car, title: "En auto", text: "Fácil acceso desde Av. 9 de Julio y Av. del Libertador. Parking disponible." },
  { icon: Bus, title: "Transporte público", text: "Múltiples líneas de colectivo a metros del hotel. Subte líneas C y D." },
  { icon: Plane, title: "Aeropuertos", text: "30–40 min desde Aeroparque (AEP). 45–60 min desde Ezeiza (EZE)." },
  { icon: Footprints, title: "Caminando", text: "A pasos de museos, shopping de Recoleta y los mejores restaurantes." },
];

const BENEFITS = [
  "Participación en todas las sesiones técnicas y plenarias",
  "Contacto directo con sponsors y expositores",
  "Materiales del congreso y actas",
  "Certificado oficial de asistencia",
  "Cocktail de bienvenida — 26 de Octubre",
  "Almuerzos del 27 y 28 de Octubre",
  "Cena de gala — 29 de Octubre",
  "Programa de paseos para acompañantes",
];

const GENERAL_INFO = [
  { icon: Calendar, label: "Fecha", value: "27, 28 y 29 de Octubre de 2026" },
  { icon: Building2, label: "Sede", value: "Sofitel Buenos Aires Recoleta" },
  { icon: Languages, label: "Idioma", value: "Español" },
  { icon: Users, label: "Modalidad", value: "Presencial" },
  { icon: Award, label: "Certificados", value: "Disponibles desde el 15 de Noviembre" },
];

const SPONSORS = [
  "RHI Magnesita", "Vesuvius", "Saint-Gobain", "Imerys", "Calderys",
  "Refratechnik", "Krosaki", "Morgan Thermal", "Lhoist", "Kerneos",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
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
              <a href="#inscripciones" className="inline-flex items-center gap-2 rounded-md bg-ember px-6 py-3 text-sm font-bold uppercase tracking-wider text-ember-foreground shadow-elegant transition hover:brightness-105">
                Inscribirme <ArrowRight size={16} />
              </a>
              <a href="#bienvenidos" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/15">
                Conocer más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section id="bienvenidos" className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-ember opacity-20 blur-2xl" />
                <img
                  src={presidentImg}
                  alt="Celso Freitas, Presidente de ALAFAR"
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
                />
                <div className="absolute -bottom-5 left-5 right-5 rounded-xl bg-card p-4 shadow-elegant ring-1 ring-border">
                  <p className="font-display text-lg font-bold text-brand-deep">Celso Freitas</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Presidente · ALAFAR
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">Bienvenida</p>
              <h2 className="mt-2 font-display text-4xl font-black text-brand-deep text-balance sm:text-5xl">
                ¡Bienvenidos a Buenos Aires!
              </h2>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85">
                <div className="flex gap-4">
                  <Quote className="mt-1 h-6 w-6 shrink-0 text-ember" />
                  <p>
                    <span className="font-semibold">Estimados amigos,</span> es un gran placer
                    invitarlos al <strong>XLIV Congreso de ALAFAR</strong>, que se llevará a cabo
                    en Buenos Aires, Argentina, del 27 al 29 de octubre de 2026. En esta edición,
                    nuestro punto de encuentro será el emblemático <strong>Sofitel Buenos Aires
                    Recoleta</strong>, un espacio que combina elegancia, historia y el espíritu
                    cosmopolita que caracteriza a la ciudad.
                  </p>
                </div>
                <p>
                  La industria refractaria atraviesa un período de profunda transformación. Los
                  desafíos de la <strong>descarbonización</strong>, la innovación de materiales y
                  la búsqueda de procesos más eficientes y sostenibles nos exigen, más que nunca,
                  fortalecer nuestra red de colaboración. Este congreso será el escenario ideal
                  para compartir avances científicos, experiencias industriales y visiones
                  estratégicas que marcarán el rumbo de los próximos años.
                </p>
                <p>
                  Espero con mucho entusiasmo darles la bienvenida en octubre de 2026 y vivir
                  juntos una semana de aprendizaje, networking y celebración de nuestra comunidad
                  refractaria latinoamericana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section id="sede" className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">Sede del Congreso</p>
            <h2 className="mt-2 font-display text-4xl font-black text-brand-deep sm:text-5xl">
              Sofitel Buenos Aires, Recoleta
            </h2>
            <p className="mt-4 inline-flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-ember" /> Posadas 1232, Recoleta — CABA
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={venueImg}
                alt="Sofitel Recoleta"
                loading="lazy"
                width={1280}
                height={896}
                className="h-72 w-full object-cover sm:h-96"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <iframe
                title="Mapa Sofitel Recoleta"
                src="https://www.google.com/maps?q=Posadas+1232,+Recoleta,+Buenos+Aires&output=embed"
                className="h-72 w-full border-0 sm:h-96"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ACCESS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-brand text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-deep">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#informacion" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-foreground shadow-card transition hover:bg-brand-deep">
              Click aquí para Información General <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* COMING SOON BLOCKS */}
      <ComingSoon id="autoridades" eyebrow="Autoridades & Socios Honorarios" title="Comité de honor del XLIV Congreso" description="Pronto compartiremos la lista completa de autoridades y socios honorarios que nos acompañarán." icon={Crown} />
      <ComingSoon id="invitados" eyebrow="Invitados Internacionales" title="Speakers de talla mundial" description="Estamos confirmando referentes internacionales de la industria refractaria que liderarán nuestras sesiones plenarias." icon={Globe2} />
      <ComingSoon id="programa" eyebrow="Programa" title="Tres días de contenido técnico de alto nivel" description="El programa académico, social y de visitas técnicas estará disponible en breve." icon={CalendarDays} />

      {/* INSCRIPCIONES */}
      <section id="inscripciones" className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">Inscripciones</p>
            <h2 className="mt-2 font-display text-4xl font-black text-brand-deep sm:text-5xl">
              Asegurá tu lugar en ALAFAR 2026
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tarifas escalonadas: cuanto antes confirmes, mejor el valor.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {/* Benefits card */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl bg-gradient-brand p-8 text-white shadow-elegant">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">Beneficios incluidos</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Todo lo que recibís</h3>
                <ul className="mt-6 space-y-3">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-ember" />
                      <span className="text-white/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing table */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="border-b border-border bg-surface px-6 py-4">
                  <h3 className="font-display text-xl font-bold text-brand-deep">
                    Valor de las inscripciones
                  </h3>
                  <p className="text-xs text-muted-foreground">Valores expresados en USD por persona.</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-sm">
                    <thead>
                      <tr className="bg-brand-deep text-white">
                        {PRICING_HEADERS.map((h) => (
                          <th key={h} className="whitespace-pre-line px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {PRICING_ROWS.map((row, idx) => (
                        <tr key={row[0]} className={idx % 2 ? "bg-surface" : "bg-card"}>
                          {row.map((cell, i) => (
                            <td
                              key={i}
                              className={`px-4 py-3 ${
                                i === 0
                                  ? "font-semibold text-brand-deep"
                                  : cell === "Sin cargo"
                                  ? "font-bold text-ember"
                                  : "tabular-nums text-foreground/80"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: CreditCard, title: "Tarjeta de Crédito", text: "VISA · MASTERCARD · AMEX" },
                  { icon: Banknote, title: "Transferencia", text: "Transferencia bancaria internacional" },
                  { icon: Wallet, title: "PayPal", text: "Pago seguro online" },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-xl border border-border bg-card p-5">
                    <Icon size={22} className="text-ember" />
                    <p className="mt-3 font-semibold text-brand-deep">{title}</p>
                    <p className="text-xs text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 rounded-lg border-l-4 border-ember bg-ember/10 px-4 py-3 text-sm text-foreground/80">
                <strong>Importante:</strong> en caso de requerir factura A deberá adicionar el 21% del IVA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMACION GENERAL */}
      <section id="informacion" className="bg-brand-deep py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">Información General</p>
            <h2 className="mt-2 font-display text-4xl font-black text-balance sm:text-5xl">
              Lo que necesitás saber
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {GENERAL_INFO.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ember text-ember-foreground">
                  <Icon size={20} />
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">{label}</p>
                <p className="mt-1 text-base font-semibold leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComingSoon id="sponsors" eyebrow="Sponsors" title="Acompañá la transformación de la industria" description="Próximamente publicaremos las categorías de sponsoreo y los espacios disponibles." icon={Handshake} />
      <ComingSoon id="alojamiento" eyebrow="Alojamiento" title="Tarifa preferencial USD 240 + IVA" description="Estamos cerrando acuerdos con el Sofitel Recoleta y hoteles aliados para garantizarte la mejor experiencia." icon={BedDouble} />

      {/* NEWSLETTER */}
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
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Mail size={16} className="text-ember" />
            Para más información, contactanos a{" "}
            <a href="mailto:info@alafar2026.org" className="font-semibold text-brand hover:underline">
              info@alafar2026.org
            </a>
          </p>
        </div>

        {/* Sponsors marquee */}
        <div className="mt-16 border-y border-border bg-surface py-10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
            Compañías de la industria refractaria
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
            <span>Logos de sponsors confirmados se publicarán próximamente.</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
