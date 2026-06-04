import { Linkedin, Instagram, Facebook, Mail, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo-alafar.png";

export function Footer() {
  const { t } = useTranslation();
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan">
            {t("footer.orgAlafar")}
          </h3>
          {/* TODO: replace with official ALAFAR logo (light version) provided by client */}
          <img src={logo} alt="ALAFAR" className="mt-5 h-16 w-auto brightness-0 invert" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
            {t("footer.alafarName")}
          </p>
          <a
            href="mailto:info@alafar2026.com.ar"
            className="mt-5 inline-flex items-center gap-2 text-sm text-white/85 hover:text-cyan"
          >
            <Mail size={16} /> info@alafar2026.com.ar
          </a>
          <p className="mt-2 text-sm text-white/60">{t("footer.venue")}</p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan">
            {t("footer.orgGeneral")}
          </h3>
          {/* TODO: replace with MET GROUP official logo */}
          <p className="mt-5 text-lg font-semibold">{t("footer.metName")}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
            {t("footer.metDesc")}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/metgroupsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 p-2.5 text-white/80 transition hover:border-cyan hover:bg-cyan hover:text-cyan-foreground"
              aria-label="Instagram MET Group"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/metgroup.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 p-2.5 text-white/80 transition hover:border-cyan hover:bg-cyan hover:text-cyan-foreground"
              aria-label="Facebook MET Group"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://ar.linkedin.com/company/metgroupsa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 p-2.5 text-white/80 transition hover:border-cyan hover:bg-cyan hover:text-cyan-foreground"
              aria-label="LinkedIn MET Group"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>{t("footer.rights")}</p>
          <button
            onClick={top}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 transition hover:border-cyan hover:text-cyan"
          >
            <ArrowUp size={14} /> {t("footer.backTop")}
          </button>
        </div>
      </div>
    </footer>
  );
}
