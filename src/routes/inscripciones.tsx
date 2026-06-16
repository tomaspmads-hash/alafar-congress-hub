import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Car, Mail, ArrowRight } from "lucide-react";

const REGISTRATION_URL = "https://registro7202.congresovirtual.com.ar";

export const Route = createFileRoute("/inscripciones")({
  head: () => ({
    meta: [
      { title: "Inscripciones — ALAFAR 2026" },
      { name: "description", content: "Tarifas oficiales del XLIV Congreso ALAFAR 2026." },
    ],
  }),
  component: InscripcionesPage,
});

function InscripcionesPage() {
  const { t } = useTranslation();

  const rows: { label: string; note?: string; values: (string | null)[]; freeDashes?: boolean }[] = [
    { label: t("registration.rows.members"), values: ["800", "900", "1050", "1250"] },
    { label: t("registration.rows.nonMembers"), values: ["900", "1000", "1150", "1450"] },
    { label: t("registration.rows.honorary"), values: ["—", "—", "—", "900"], freeDashes: true },
    {
      label: t("registration.rows.students"),
      note: t("registration.rows.studentsNote"),
      values: ["100", "250", "350", "—"],
    },
    {
      label: t("registration.rows.companions"),
      note: t("registration.rows.companionsNote"),
      values: ["—", "—", "—", "—"],
      freeDashes: true,
    },
    { label: t("registration.rows.additional"), values: ["400", "450", "550", "750"] },
  ];

  const cols = [
    { title: t("registration.cols.early"), sub: t("registration.cols.earlySub") },
    { title: t("registration.cols.normal"), sub: t("registration.cols.normalSub") },
    { title: t("registration.cols.late"), sub: t("registration.cols.lateSub") },
    { title: t("registration.cols.onsite"), sub: t("registration.cols.onsiteSub") },
  ];

  const formatValue = (v: string | null, freeDashes?: boolean) => {
    if (v === "—") return freeDashes ? t("registration.rows.free") : "—";
    return `USD ${v}`;
  };

  return (
    <Layout>
      <PageHero
        eyebrow={t("registration.eyebrow")}
        title={<>{t("registration.titlePre")} <span className="text-cyan">{t("registration.titleAccent")}</span></>}
        description={t("registration.description")}
      />

      {/* Fees table */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
            {t("registration.tableTitle")}
          </h2>

          {/* Desktop table */}
          <div className="mt-10 hidden overflow-hidden rounded-2xl border border-border bg-card shadow-card lg:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-deep text-white">
                  <th className="w-[26%] p-5 text-left align-top font-display text-xs font-bold uppercase tracking-wider">
                    {t("registration.cols.category")}
                  </th>
                  {cols.map((c) => (
                    <th key={c.title} className="p-5 text-center align-top">
                      <p className="font-display text-xs font-bold uppercase tracking-wider text-cyan">{c.title}</p>
                      <p className="mt-1 text-[11px] font-normal text-white/75">{c.sub}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => (
                  <tr key={r.label} className={idx % 2 === 0 ? "bg-card" : "bg-surface"}>
                    <td className="border-t border-border p-5 align-top">
                      <p className="font-display text-sm font-bold uppercase tracking-wider text-brand-deep">{r.label}</p>
                      {r.note && <p className="mt-1 text-xs font-normal text-muted-foreground">{r.note}</p>}
                    </td>
                    {r.values.map((v, i) => (
                      <td key={i} className="border-t border-border p-5 text-center align-middle">
                        {v === "—" && r.freeDashes ? (
                          <span className="inline-block rounded-full bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan">
                            {t("registration.rows.free")}
                          </span>
                        ) : v === "—" ? (
                          <span className="text-muted-foreground">—</span>
                        ) : (
                          <span className="font-display text-lg font-extrabold text-brand-deep">USD {v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-10 space-y-4 lg:hidden">
            {rows.map((r) => (
              <div key={r.label} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <p className="font-display text-sm font-bold uppercase tracking-wider text-brand-deep">{r.label}</p>
                {r.note && <p className="mt-1 text-xs text-muted-foreground">{r.note}</p>}
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  {cols.map((c, i) => (
                    <div key={c.title} className="rounded-lg border border-border bg-surface p-3">
                      <p className="font-bold uppercase tracking-wider text-cyan text-[10px]">{c.title}</p>
                      <p className="mt-1 font-display text-base font-extrabold text-brand-deep">
                        {formatValue(r.values[i], r.freeDashes)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs italic text-muted-foreground">{t("registration.tableNote")}</p>
        </div>
      </section>

      {/* Register CTA */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl font-extrabold text-brand-deep sm:text-3xl">
            {t("registration.ctaTitle")}
          </h3>
          <p className="mt-3 text-base text-muted-foreground">{t("registration.ctaDesc")}</p>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-cyan px-8 py-4 text-base font-bold uppercase tracking-wider text-cyan-foreground shadow-elegant transition hover:brightness-110"
          >
            {t("registration.cta")} <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Payment + parking */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan">{t("registration.paymentTitle")}</h3>
            <p className="mt-3 text-sm text-foreground/85">
              {t("registration.paymentText")}{" "}
              <a href="mailto:info@alafar2026.com.ar" className="font-semibold text-cyan hover:underline">
                info@alafar2026.com.ar
              </a>.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan">
              <Car size={14} /> {t("registration.parkingTitle")}
            </h3>
            <p className="mt-3 text-sm text-foreground/85">
              <span className="font-semibold text-brand-deep">{t("registration.parkingText")}</span>
            </p>
            <a href="mailto:info@alafar2026.com.ar" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan hover:underline">
              <Mail size={12} /> {t("registration.parkingCta")}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
