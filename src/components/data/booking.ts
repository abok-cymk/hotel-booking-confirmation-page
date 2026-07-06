import type { Booking, Property, Weather } from "@/types";

export const property: Property = {
  name: "Maison Soleil",
  tagline: "A sun-washed guesthouse in the hills above Cassis.",
  established: "1987",
  address: "12 Rue des Oliviers",
  city: "Cassis",
};

export const booking: Booking = {
  reference: "MS-2026-0421-AH",
  status: "confirmed",
  guest: { firstName: "Lucia" },
  host: {
    name: "Margaux",
    message:
      "We're glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you.",
  },
  room: { name: "La Garrigue" },
  checkIn: { iso: "2026-04-25", time: "15:00" },
  checkOut: { iso: "2026-04-29", time: "11:00" },
  nights: 4,
  lines: [
    { label: "Room . La Garrigue", detail: "x 4 nights", amount: 620.0 },
    { label: "Breakfast", detail: "x 2 guests", amount: 96.0 },
    { label: "Tourist tax", amount: 14.4 },
  ],
  total: { amount: 730.4, currency: "EUR" },
  paymentMethod: "Paid . Wise. GBP",
};

export const weather: Weather = {
  city: "Cassis",
  temperature: 27,
  unit: "C",
  condition: "Sunny",
  detail: "light breeze",
};
