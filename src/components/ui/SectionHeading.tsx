import { cx } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** Serif heading with an optional mono eyebrow above it */
export function SectionHeading({
  eyebrow,
  title,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cx("space-y-2", className)}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] --text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="text-balance font-serif text-3xl leading-tight --text-foreground">
        {title}
      </Tag>
    </div>
  );
}
