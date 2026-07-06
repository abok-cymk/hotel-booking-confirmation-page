import { cx } from "@/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  /** Accessible label, e.g. "1 unread message". Falls back to the count */
  label?: string;
  className?: string;
}

/** Small circular counter used on nav items. */
export function Badge({ children, label, className }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-primary-foreground",
        className,
      )}
    >
      {label ? <span className="sr-only">{label}</span> : null}
      <span aria-hidden={label ? true : undefined}>{children}</span>
    </span>
  );
}
