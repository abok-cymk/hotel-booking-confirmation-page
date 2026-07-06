import { cx } from "@/lib/utils";
import type { Weather } from "@/types";

export interface WeatherCardProps {
  weather: Weather;
  className?: string;
}

/** Lemonade-yellow weather card shown in the sidebar footer. */
export function WeatherCard({ weather, className }: WeatherCardProps) {
  const { city, temperature, unit, condition, detail } = weather;

  return (
    <section
      aria-label={`Weather in ${city}`}
      className={cx(
        "relative overflow-hidden rounded-2xl bg-sun px-5 py-4 text-sun-foreground shadow-(--shadow-card)",
        className,
      )}
    >
      {/* Sun disc peeking from the corner */}
      <span
        aria-hidden="true"
        className="absolute -right-6 -top-6 size-20 rounded-full bg-sun-deep/70"
      />
      <p className="relative font-mono text-[0.65rem] uppercase tracking-[0.18em] text-sun-foreground">
        Today in {city}
      </p>
      <p className="relative mt-2 font-serif text-4xl font-semibold leading-none">
        {temperature}
        <span className="align-top text-2xl">⁰</span>
      </p>
      <p className="relative mt-1.5 text-sm">
        {condition} . {detail}
      </p>
    </section>
  );
}
