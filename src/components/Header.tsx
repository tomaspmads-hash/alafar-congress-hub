import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-alafar.png";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#autoridades", label: "Autoridades" },
  { href: "#invitados", label: "Invitados" },
  { href: "#programa", label: "Programa" },
  { href: "#inscripciones", label: "Inscripciones" },
  { href: "#informacion", label: "Información" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#alojamiento", label: "Alojamiento" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="ALAFAR 2026"
            className={`h-10 w-auto sm:h-12 transition ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:bg-secondary hover:text-brand"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#inscripciones"
            className="ml-2 rounded-md bg-ember px-4 py-2 text-xs font-bold uppercase tracking-wider text-ember-foreground shadow-card transition hover:brightness-105"
          >
            Inscribirme
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-md p-2 ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:bg-secondary hover:text-brand"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#inscripciones"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-ember px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-ember-foreground"
            >
              Inscribirme
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
