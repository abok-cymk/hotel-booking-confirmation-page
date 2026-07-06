import { cx } from "@/lib/utils";

export interface BarcodeProps {
  /** Encoded reference - used only to derive a stable, deterministic patten. */
  value?: string;
  className?: string;
}

/**
 * Decorative barcode. Widths are derived deterministically from `value` so the
 * same reference always renders the same pattern (no layout shift, SSR-safe).
 */

export function Barcode({ value = "MS-2026", className }: BarcodeProps) {
  const bars = Array.from({ length: 42 }, (_, i) => {
    const seed = value.charCodeAt(i % value.length) + i * 7;
    return (seed % 3) + 1;
  });

  return (
    <div
      className={cx("flex h-9 items-end gap-[2px]", className)}
      role="img"
      aria-label={`Barcode for reference ${value}`}
    >
      {bars.map((w, i) => (
        <span
          key={i}
          className="block h-full rounded-[1px] --bg-foreground"
          style={{ width: `${w}px`, opacity: w === 2 ? 0.85 : 1 }}
        />
      ))}
    </div>
  );
}
