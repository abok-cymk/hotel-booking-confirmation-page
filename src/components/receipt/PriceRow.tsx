import { cx, formatMoney } from "@/lib/utils";

export interface PriceRowProps {
  label: string;
  detail?: string;
  amount: number;
  currency: string;
  /** Emphasised total row. */
  emphasis?: boolean;
  className?: string;
}

/** One label/amount line on the receipt */
export function PriceRow({
  label,
  detail,
  amount,
  currency,
  emphasis = false,
  className,
}: PriceRowProps) {
  return (
    <div className={cx("flex items-baseline justify-between gap-4", className)}>
      <span
        className={cx(
          emphasis
            ? "font-mono text-xs uppercase tracking-[0.18em] --text-muted-foreground"
            : "text-sm --text-foreground",
        )}
      >
        {label}
        {detail ? (
          <span className="--text-muted-foreground"> {detail}</span>
        ) : null}
      </span>
      <span
        className={cx(
          "font-numeric shrink-0",
          emphasis
            ? "font-serif text-2xl --text-foreground"
            : "text-sm --text-muted-foreground",
        )}
      >
        {formatMoney({ amount, currency })}
      </span>
    </div>
  );
}
