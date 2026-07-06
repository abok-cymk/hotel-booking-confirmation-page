import { DateBlock } from "@/components/receipt/DateBlock";
import { PriceRow } from "@/components/receipt/PriceRow";
import { Divider } from "@/components/ui/Divider";
import { Barcode } from "@/components/ui/Barcode";
import { cx } from "@/lib/utils";
import type { Booking } from "@/types";

export interface ReceiptCardProps {
  booking: Booking;
  className?: string;
}

/** The paper "ticket" - check-in/out, itemised price rows, total, barcode. */
export function ReceiptCard({ booking, className }: ReceiptCardProps) {
  const { reference, checkIn, checkOut, lines, total, paymentMethod } = booking;
  const currency = total.currency;

  return (
    <article
      aria-label="Booking receipt"
      className={cx(
        "flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 shadow-(--shadow-card)",
        className,
      )}
    >
      <header className="flex items-start justify-between">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            Receipt
          </p>
          <h3 className="mt-1 font-serif text-xl text-foreground">
            Your stay
          </h3>
        </div>
        <p className="text-right font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
          № MS-2026
          <br />
          {reference.replace("MS-2026-", "")}
        </p>
      </header>

      <Divider dashed />

      <div className="flex justify-between gap-6">
        <DateBlock label="Check in" iso={checkIn.iso} time={checkIn.time} />
        <DateBlock
          label="Check out"
          iso={checkOut.iso}
          time={checkOut.time}
          align="end"
        />
      </div>

      <Divider dashed />

      <div className="space-y-2.5">
        {lines.map((line) => (
          <PriceRow
            key={line.label}
            label={line.label}
            detail={line.detail}
            amount={line.amount}
            currency={currency}
          />
        ))}
      </div>

      <Divider />

      <PriceRow
        label="Total paid"
        amount={total.amount}
        currency={currency}
        emphasis
      />

      <div className="flex items-end justify-between gap-4">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
          {paymentMethod}
        </p>
        <Barcode value={reference} />
      </div>
    </article>
  );
}
