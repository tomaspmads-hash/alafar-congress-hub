import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-alafar.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/bienvenidos", label: "Bienvenidos" },
  { to: "/sede", label: "Sede" },
  { to: "/autoridades", label: "Autoridades" },
  { to: "/invitados", label: "Invitados" },
  { to: "/programa", label: "Programa" },
  { to: "/inscripciones", label: "Inscripciones" },
  { to: "/informacion", label: "Información" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/alojamiento", label: "Alojamiento" },
] as const;

export function Header({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = transparentOnTop && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !transparentOnTop
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="ALAFAR 2026"
            className={`h-10 w-auto sm:h-12 transition ${onDark ? "brightness-0 invert" : ""}`}
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className={`rounded-md px-2.5 py-2 text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                onDark
                  ? "text-white/85 hover:bg-white/10 hover:text-white"
                  : "text-foreground/80 hover:bg-secondary hover:text-brand"
              }`}
              activeProps={{
                className: onDark
                  ? "rounded-md px-2.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-ember"
                  : "rounded-md px-2.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-brand bg-secondary",
              }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/inscripciones"
            className="ml-2 rounded-md bg-ember px-4 py-2 text-xs font-bold uppercase tracking-wider text-ember-foreground shadow-card transition hover:brightness-105"
          >
            Inscribirme
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
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
                activeProps={{
                  className: "rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wider text-brand bg-secondary",
                }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/inscripciones"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-ember px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-ember-foreground"
            >
              Inscribirme
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
