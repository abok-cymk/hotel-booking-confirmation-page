import type { Booking } from "@/types";

/** Turn "2026-04-25" + "15:00" into a Google Calendar timestamp "20260425T150000". */
function toStamp(iso: string, time: string): string {
  const [h = "00", m = "00"] = time.split(":");
  return `${iso.replace(/-/g, "")}T${h.padStart(2, "0")}${m.padStart(2, "0")}00`;
}

/**
 * Build a Google calendar "add event" URL for the stay. Google is used as a
 * universal target; the tasks roadmap covers native Apple/Outlook exports
 */

export function buildCalendarUrl(booking: Booking): string {
  const title = `Stay at Maison Soleil . ${booking.room.name}`;
  const details = `Booking ${booking.reference}. Host: ${booking.host.name}.`;
  const dates = `${toStamp(booking.checkIn.iso, booking.checkIn.time)}/${toStamp(
    booking.checkOut.iso,
    booking.checkOut.time,
  )}`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    details,
    dates,
    location: "Maison Soleil, Cassis",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
