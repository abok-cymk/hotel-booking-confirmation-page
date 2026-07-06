export type BookingStatus = "confirmed" | "pending" | "cancelled";

export interface ReceiptLine {
  label: string;
  detail?: string;
  amount: number;
}

export interface Money {
  amount: number;
  /** ISO 4217 currency code, e.g. "EUR". */
  currency: string;
}

export interface Guest {
  firstName: string;
  lastName?: string;
}

export interface Host {
  name: string;
  message: string;
}

export interface StayDate {
  /** ISO date string, e.g. "2026-04-25" */
  iso: string;
  time: string;
}

export interface Room {
  name: string;
}

export interface Booking {
  reference: string;
  status: BookingStatus;
  guest: Guest;
  host: Host;
  room: Room;
  checkIn: StayDate;
  checkOut: StayDate;
  nights: number;
  lines: ReceiptLine[];
  total: Money;
  paymentMethod: string;
}

/** Navigation entry for sidebar / mobile menu. */
export type NavIconName =
  | "bed-double"
  | "home"
  | "map-pin"
  | "croissant"
  | "mail";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: NavIconName;
  badge?: number;
}

export interface Property {
  name: string;
  tagline: string;
  established: string;
  address: string;
  city: string;
}

export interface Weather {
  city: string;
  temperature: number;
  unit: "C" | "F";
  condition: string;
  detail: string;
}

/** The three numbered info cards (Arrival, WiFi, Breakfast). */
export type InfoCardTone = "primary" | "wifi" | "breakfast";
export type InfoCardIconName = "key-round" | "wifi" | "utensils-crossed";

export interface InfoCard {
  id: string;
  index: string;
  tone: InfoCardTone;
  icon: InfoCardIconName;
  eyebrow: string;
  title: string;
  subtitle?: string;
  body?: string;
  /** Optional key/value credential rows (used by the WiFi card). */
  credentials?: { label: string; value: string; copyable?: boolean }[];
}
