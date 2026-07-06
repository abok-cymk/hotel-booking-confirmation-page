import { Badge } from "@/components/ui/Badge";
import { cx } from "@/lib/utils";
import { BedDouble, Home, MapPin, Croissant, Mail } from "lucide-react";
import type { NavItem as NavItemData } from "@/types";

export interface NavItemProps {
  item: NavItemData;
  active?: boolean;
  onNavigate?: () => void;
}

const navIcons = {
  "bed-double": BedDouble,
  home: Home,
  "map-pin": MapPin,
  croissant: Croissant,
  mail: Mail,
} as const;

export function NavItem({ item, active = false, onNavigate }: NavItemProps) {
  const { label, href, icon, badge } = item;
  const Icon = navIcons[icon];
  return (
    <a
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cx(
        "flex items-center gap-3 rounded-[3px] px-3 py-2.5 text-sm font-medium transition-colors",
        active
          ? "bg-surface text-foreground shadow-(--shadow-card)"
          : "text-muted-foreground hover:bg-surface/70 hover:text-foreground",
      )}
    >
      <Icon
        className={cx("size-4.5 shrink-0", active ? "text-primary" : "")}
        strokeWidth={2}
      />
      <span className="flex-1">{label}</span>
      {badge ? <Badge label={`${badge} unread`}>{badge}</Badge> : null}
    </a>
  );
}
