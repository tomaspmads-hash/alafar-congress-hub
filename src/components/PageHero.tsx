import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-brand pb-20 pt-40 text-white">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-ember/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-black text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
