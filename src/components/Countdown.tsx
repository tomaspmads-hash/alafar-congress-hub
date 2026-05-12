import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-27T09:00:00-03:00").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  const items = [
    { label: "Días", value: t.days },
    { label: "Horas", value: t.hours },
    { label: "Min", value: t.minutes },
    { label: "Seg", value: t.seconds },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-5">
      {items.map((i) => (
        <div
          key={i.label}
          className="flex flex-col items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-4 backdrop-blur-md sm:px-6 sm:py-6"
        >
          <span className="font-display text-3xl font-bold tabular-nums text-white sm:text-5xl">
            {String(i.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs">
            {i.label}
          </span>
        </div>
      ))}
    </div>
  );
}
