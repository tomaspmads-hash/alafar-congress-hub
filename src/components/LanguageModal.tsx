import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "alafar-lang-chosen";

export function LanguageModal() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(STORAGE_KEY)) setOpen(true);
  }, []);

  const choose = (lng: "es" | "en") => {
    i18n.changeLanguage(lng);
    localStorage.setItem(STORAGE_KEY, "1");
    localStorage.setItem("alafar-lang", lng);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-deep/80 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-card p-8 shadow-elegant sm:p-10">
        <h2 className="text-center font-display text-3xl font-extrabold text-brand-deep">
          {t("welcomeModal.title")}
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          {t("welcomeModal.subtitle")}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            onClick={() => choose("es")}
            className="flex flex-col items-center gap-2 rounded-xl border-2 border-border bg-background px-6 py-6 transition hover:border-cyan hover:bg-cyan/5"
          >
            <span className="text-4xl">🇪🇸</span>
            <span className="font-display text-lg font-bold text-brand-deep">{t("welcomeModal.spanish")}</span>
          </button>
          <button
            onClick={() => choose("en")}
            className="flex flex-col items-center gap-2 rounded-xl border-2 border-border bg-background px-6 py-6 transition hover:border-cyan hover:bg-cyan/5"
          >
            <span className="text-4xl">🇬🇧</span>
            <span className="font-display text-lg font-bold text-brand-deep">{t("welcomeModal.english")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
