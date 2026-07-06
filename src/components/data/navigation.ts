import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    id: "stay",
    label: "Your stay",
    href: "#stay",
    icon: "bed-double",
    badge: 1,
  },
  { id: "house", label: "The house", href: "#house", icon: "home" },
  { id: "town", label: "Around town", href: "#town", icon: "map-pin" },
  {
    id: "breakfast",
    label: "Breakfast",
    href: "#breakfast",
    icon: "croissant",
  },
  { id: "messages", label: "Messages", href: "#messages", icon: "mail" },
];
