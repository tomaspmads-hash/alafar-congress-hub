import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo-alafar.png";

export function Header({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progOpen, setProgOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = transparentOnTop && !scrolled;

  const NAV = [
    { to: "/", label: t("nav.home") },
    { to: "/autoridades", label: t("nav.authorities") },
    { to: "/inscripciones", label: t("nav.registration") },
    { to: "/informacion", label: t("nav.information") },
    { to: "/alojamiento", label: t("nav.accommodation") },
    { to: "/sponsors", label: t("nav.sponsors") },
  ] as const;

  const setLang = (lng: "es" | "en") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("alafar-lang", lng);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !transparentOnTop
          ? "border-b border-border/60 bg-background/90 backdrop-blur-xl shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="ALAFAR 2026"
            className={`h-12 w-auto sm:h-14 transition ${onDark ? "brightness-0 invert" : ""}`}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className={`rounded-md px-3.5 py-2.5 text-[13px] font-bold uppercase tracking-wider transition-colors ${
              onDark ? "text-white hover:text-cyan" : "text-brand-deep hover:text-cyan"
            }`}
            activeProps={{ className: "rounded-md px-3.5 py-2.5 text-[13px] font-bold uppercase tracking-wider text-cyan border-b-2 border-cyan" }}
          >
            {t("nav.home")}
          </Link>

          <div className="relative" onMouseLeave={() => setProgOpen(false)}>
            <button
              onMouseEnter={() => setProgOpen(true)}
              onClick={() => setProgOpen((v) => !v)}
              className={`inline-flex items-center gap-1 rounded-md px-3.5 py-2.5 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                onDark ? "text-white hover:text-cyan" : "text-brand-deep hover:text-cyan"
              }`}
            >
              {t("nav.program")} <ChevronDown size={14} />
            </button>
            {progOpen && (
              <div className="absolute left-0 top-full w-72 rounded-md border border-border bg-card p-2 shadow-elegant">
                {[
                  { to: "/programa/tecnico", label: t("nav.programTechnical") },
                  { to: "/programa/social", label: t("nav.programSocial") },
                  { to: "/programa/societarias", label: t("nav.programCorporate") },
                ].map((it) => (
                  <Link
                    key={it.to}
                    to={it.to}
                    onClick={() => setProgOpen(false)}
                    className="block rounded px-3 py-2.5 text-[13px] font-bold uppercase tracking-wider text-brand-deep hover:bg-cyan/10 hover:text-cyan"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`rounded-md px-3.5 py-2.5 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                onDark ? "text-white hover:text-cyan" : "text-brand-deep hover:text-cyan"
              }`}
              activeProps={{ className: "rounded-md px-3.5 py-2.5 text-[13px] font-bold uppercase tracking-wider text-cyan border-b-2 border-cyan" }}
            >
              {n.label}
            </Link>
          ))}

          <div className="ml-2 flex items-center gap-1 rounded-md border border-border bg-background/40 p-1 backdrop-blur">
            <button
              onClick={() => setLang("es")}
              aria-label="Español"
              className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[11px] font-bold uppercase ${
                i18n.language?.startsWith("es")
                  ? "bg-cyan text-cyan-foreground shadow-sm"
                  : onDark ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-foreground/70 hover:bg-secondary hover:text-brand"
              }`}
            >
              <span className="text-base leading-none">🇪🇸</span> ES
            </button>
            <button
              onClick={() => setLang("en")}
              aria-label="English"
              className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[11px] font-bold uppercase ${
                i18n.language?.startsWith("en")
                  ? "bg-cyan text-cyan-foreground shadow-sm"
                  : onDark ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-foreground/70 hover:bg-secondary hover:text-brand"
              }`}
            >
              <span className="text-base leading-none">🇬🇧</span> EN
            </button>
          </div>

          <Link
            to="/inscripciones"
            className="ml-2 rounded-md bg-cyan px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider text-cyan-foreground shadow-card transition hover:brightness-110"
          >
            {t("nav.register")}
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-md p-2 ${onDark ? "text-white" : "text-foreground"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:bg-secondary hover:text-brand"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border pt-2">
              <p className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {t("nav.program")}
              </p>
              {[
                { to: "/programa/tecnico", label: t("nav.programTechnical") },
                { to: "/programa/social", label: t("nav.programSocial") },
                { to: "/programa/societarias", label: t("nav.programCorporate") },
              ].map((it) => (
                <Link
                  key={it.to}
                  to={it.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-brand"
                >
                  {it.label}
                </Link>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2 px-3">
              <button onClick={() => setLang("es")} className="rounded bg-secondary px-3 py-1.5 text-xs font-bold uppercase">🇪🇸 ES</button>
              <button onClick={() => setLang("en")} className="rounded bg-secondary px-3 py-1.5 text-xs font-bold uppercase">🇬🇧 EN</button>
            </div>
            <Link
              to="/inscripciones"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-cyan px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-cyan-foreground"
            >
              {t("nav.register")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
