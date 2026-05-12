import { Linkedin, Instagram, Facebook, Youtube, Mail } from "lucide-react";
import logo from "@/assets/logo-alafar.png";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-ember">
            Organización ALAFAR
          </h3>
          <img src={logo} alt="ALAFAR" className="mt-5 h-16 w-auto brightness-0 invert" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
            Asociación Latinoamericana de Fabricantes de Materiales Refractarios (ALAFAR)
          </p>
          <p className="mt-2 text-sm text-white/60">
            Juncal 1305/1701 — Montevideo, 11000, Uruguay
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="rounded-full border border-white/20 p-2.5 text-white/80 transition hover:border-ember hover:bg-ember hover:text-ember-foreground"
                aria-label="Red social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-ember">
            Organización General
          </h3>
          <p className="mt-5 text-lg font-semibold">MET — Meeting & Events Team</p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            Coordinación integral del XLIV Congreso ALAFAR, logística, sponsors y experiencia
            del asistente.
          </p>
          <a
            href="mailto:info@alafar2026.org"
            className="mt-5 inline-flex items-center gap-2 text-sm text-white/85 hover:text-ember"
          >
            <Mail size={16} /> info@alafar2026.org
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 ALAFAR — Todos los derechos reservados.</p>
          <p>XLIV Congreso · Buenos Aires · 27–29 de Octubre 2026</p>
        </div>
      </div>
    </footer>
  );
}
