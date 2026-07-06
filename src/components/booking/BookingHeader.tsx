import { Printer, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StatusLabel } from "@/components/ui/StatusLabel";
import { buildCalendarUrl } from "@/lib/calendar";
import type { Booking } from "@/types";

export interface BookingHeaderProps {
  booking: Booking;
  onPrint?: () => void;
  onAddToCalendar?: () => void;
}

/** Page header: status eyebrow, greeting hero, and primary actions. */
export function BookingHeader({
  booking,
  onPrint,
  onAddToCalendar,
}: BookingHeaderProps) {
  const { status, guest } = booking;

  function handlePrint() {
    if (onPrint) return onPrint();
    if (typeof window !== "undefined") window.print();
  }

  function handleCalendar() {
    if (onAddToCalendar) return onAddToCalendar();
    if (typeof window !== "undefined") {
      window.open(buildCalendarUrl(booking), "_blank", "noopener,noreferrer");
    }
  }

  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-3">
        <StatusLabel>Booking . {status}</StatusLabel>
        <h1 className="font-serif text-4xl leading-tight --text-foreground sm:text-5xl text-balance">
          Bienvenue,{" "}
          <span className="italic --text-primary">{guest.firstName}.</span>
        </h1>
      </div>

      <div className="flex shrink-0 gap-3">
        <Button
          variant="outline"
          icon={<Printer className="size-4" />}
          onClick={handlePrint}
        >
          Print receipt
        </Button>
        <Button
          variant="primary"
          icon={<CalendarPlus className="size-4" />}
          onClick={handleCalendar}
        >
          Add to calendar
        </Button>
      </div>
    </header>
  );
}
