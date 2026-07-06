import type { Booking } from "@/types";
import { useState } from "react";
import { WelcomeCard } from "@/components/welcome/WelcomeCard";
import { ReceiptCard } from "@/components/receipt/ReceiptCard";
import { cx } from "@/lib/utils";

export interface BookingCardStackProps {
  booking: Booking;
}

export function BookingCardStack({ booking }: BookingCardStackProps) {
  const [fanned, setFanned] = useState(false);

  return (
    <div className="space-y-4">
      {/* Mobile: stacked flow */}
      <div className="space-y-5 lg:hidden">
        <WelcomeCard host={booking.host} room={booking.room} />
        <ReceiptCard booking={booking} />
      </div>

      {/* Desktop: overlapping, fanning cards */}
      <div
        className="relative mx-auto hidden h-[240px] max-w-3xl items-center justify-center lg:flex"
        onMouseEnter={() => setFanned(true)}
        onMouseLeave={() => setFanned(false)}
        onFocusCapture={() => setFanned(true)}
        onBlurCapture={() => setFanned(false)}
      >
        <div
          className={cx(
            "absolute w-[380px] transition-all duration-500 ease-out",
            fanned
              ? "-translate-x-[46%] -rotate-3"
              : "-translate-x-[18%] -rotate-1",
          )}
        >
          <ReceiptCard booking={booking} />
        </div>

        <div
          className={cx(
            "absolute w-[380px] transition-all duration-500 ease-out",
            fanned
              ? "translate-x-[46%] rotate-3"
              : "translate-x-[18%] rotate-1",
          )}
        >
          <WelcomeCard
            host={booking.host}
            room={booking.room}
            className="h-[380px]"
          />
        </div>
      </div>

      <p className="hidden items-center justify-center gap-3 text-center font-mono text-[0.65rem] uppercase tracking-[0.25em] --text-muted-foreground lg:flex">
        <span
          aria-hidden="true"
          className="inline-block h-1 w-1 rorate-45 --bg-primary/60"
        />
        Hover to fan
        <span
          aria-hidden="true"
          className="inline-block h-1 w-1 rorate-45 --bg-primary/60"
        />
      </p>
    </div>
  );
}
