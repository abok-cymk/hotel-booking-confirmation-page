import { KeyRound, Wifi, UtensilsCrossed } from "lucide-react";
import type { InfoCard } from "@/types";

export const infoCards: InfoCard[] = [
  {
    id: "arrival",
    index: "01",
    tone: "primary",
    icon: KeyRound,
    eyebrow: "Arrival",
    title: "Check-in from 15:00",
    subtitle: "Sat, 25 April",
    body: "Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.",
  },
  {
    id: "wifi",
    index: "02",
    tone: "wifi",
    icon: Wifi,
    eyebrow: "WiFi",
    title: "Le Soleil . Guest",
    subtitle: "Password below",
    credentials: [
      { label: "Network", value: "Le Soleil . Guest" },
      { label: "Password", value: "soleil-2026", copyable: true },
    ],
  },
  {
    id: "breakfast",
    index: "03",
    tone: "breakfast",
    icon: UtensilsCrossed,
    eyebrow: "Breakfast",
    title: "Served 8 - 10:30",
    subtitle: "On the terrace",
    body: "Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.",
  },
];
