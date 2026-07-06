import { KeyRound, Wifi, UtensilsCrossed } from "lucide-react";
import { cx } from "@/lib/utils";
import type { InfoCardIconName, InfoCardTone } from "@/types";

export interface IconBoxProps {
  icon: InfoCardIconName;
  tone?: InfoCardTone;
  className?: string;
}

const infoIcons = {
  "key-round": KeyRound,
  wifi: Wifi,
  "utensils-crossed": UtensilsCrossed,
} as const;

const toneStyles: Record<InfoCardTone, string> = {
  primary: "bg-primary text-primary-foreground",
  wifi: "bg-accent-wifi text-primary-foreground",
  breakfast: "bg-accent-breakfast text-primary-foreground",
};

/** Rounded square that holds a single icon - used on info cards. */
export function IconBox({
  icon: Icon,
  tone = "primary",
  className,
}: IconBoxProps) {
  const ResolvedIcon = infoIcons[Icon];

  return (
    <span
      className={cx(
        "inline-flex size-9 items-center justify-center rounded-xl shadow-sm",
        toneStyles[tone],
        className,
      )}
      aria-hidden="true"
    >
      <ResolvedIcon className="size-5" strokeWidth={2} />
    </span>
  );
}
