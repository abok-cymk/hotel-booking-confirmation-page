import { BedDouble, Home, MapPin, Croissant, Mail } from "lucide-react";
import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { id: "stay", label: "Your stay", href: "#stay", icon: BedDouble, badge: 1 },
  { id: "house", label: "The house", href: "#house", icon: Home },
  { id: "town", label: "Around town", href: "#town", icon: MapPin },
  { id: "breakfast", label: "Breakfast", href: "#breakfast", icon: Croissant },
  { id: "messages", label: "Messages", href: "#messages", icon: Mail },
];
