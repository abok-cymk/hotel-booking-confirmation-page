import { SunMark } from "@/components/shared/SunMark";
import { cx } from "@/lib/utils";
import type { Host, Room } from "@/types";

export interface WelcomeCardProps {
  host: Host;
  room: Room;
  className?: string;
}

/** Terracotta "welcome card" - a warm, handwritten-feeling note from the host. */
export function WelcomeCard({ host, room, className }: WelcomeCardProps) {
  return (
    <article
      aria-label={`A note from your host, ${host.name}`}
      className={cx(
        "relative flex flex-col gap-5 justify-between overflow-hidden rounded-2xl bg-primary p-7 text-primary-foreground shadow-(--shadow-float)",
        className,
      )}
    >
      {/* Subtle sun-baked gradient sheen - analogous terracotta tones only */}
      <span
        aria-hidden="true"
        className="pointer-event-none absolute inset-0 bg-linear-to-br from-primary-bright/40 via transparent to-primary-deep/50"
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground/70">
            Welcome card
          </p>
          <SunMark className="size-8 text-sun" title="" />
        </div>

        <div className="mt-8 space-y-1">
          <p className="font-serif text-lg italic text-sun">
            A note from your host,
          </p>
          <h2 className="font-serif text-4xl leading-none italic">{host.name}.</h2>
        </div>

        <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70 text-pretty">
          {host.message}
        </p>
      </div>

      <div className="relative mt-8">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground/60">
          Room
        </p>
        <p className="mt-1 font-serif text-2xl">{room.name}</p>
      </div>
    </article>
  );
}
