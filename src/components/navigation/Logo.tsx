import { SunMark } from "@/components/shared/SunMark";
import { cx } from "@/lib/utils";

export interface LogoProps {
  /** Two-line name, e.g. "Maison" / "Soleil". */
  primary: string;
  secondary: string;
  href?: string;
  className?: string;
}

export function Logo({ primary, secondary, href = "#", className }: LogoProps) {
  return (
    <a
      href={href}
      className={cx("group flex items-center gap-3", className)}
      aria-label={`${primary} ${secondary} - home`}
    >
      <SunMark className="size-8 text-sun-deep transition-transform duration-500 group group-hover:rotate-45" />
      <span className="leading-tight">
        <span className="block font-serif text-lg italic text-primary">
          {primary}
        </span>
        <span className="block font-serif text-lg font-semibold text-foreground">
          {secondary}
        </span>
      </span>
    </a>
  );
}
