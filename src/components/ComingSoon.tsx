import type { LucideIcon } from "lucide-react";
import { Clock } from "lucide-react";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export function ComingSoon({ id, eyebrow, title, description, icon: Icon = Clock }: Props) {
  return (
    <section id={id} className="bg-surface py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 shadow-card sm:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-ember/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-card">
              <Icon size={28} />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">{eyebrow}</p>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{title}</h3>
              {description && (
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">{description}</p>
              )}
            </div>
            <span className="rounded-full bg-ember/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-ember-foreground ring-1 ring-ember/40">
              Próximamente más información
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
