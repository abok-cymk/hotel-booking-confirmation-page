import { cx } from "@/lib/utils";

export interface StatusLabelProps {
  children: React.ReactNode;
  className?: string;
}

/** Uppercase, letter-spaced eyebrow label (e.g. "BOOKING . CONFIRMED"). */
export function StatusLabel({ children, className }: StatusLabelProps) {
  return (
    <p
      className={cx(
        "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}
