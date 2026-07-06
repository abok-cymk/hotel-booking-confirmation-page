import type { HTMLAttributes } from "react";
import { cx } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "article" | "section";
}

/** Neutral surface container with the app's card radius + shadow. */
export function Card({
  as: Tag = "div",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Tag
      className={cx(
        "rounded-2xl border border-border bg-surface p-6 shadow-(--shadow-card)",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
