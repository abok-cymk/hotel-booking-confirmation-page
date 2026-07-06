import { formatShortDate, cx } from "@/lib/utils";

export interface DateBlockProps {
    label: string
    iso: string
    time: string
    align?: "start" | "end"
    className?: string
}

/** Check-in / check-out date block: label, big day + month, weekday + time. */
export function DateBlock({ label, iso, time, align = "start", className }: DateBlockProps) {
    const { day, month, weekday } = formatShortDate(iso)

    return (
        <div className={cx("space-y-1", align === "end" && "text-right", className)}>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em --text-muted-foreground]">
                {label}
            </p>
            <p className="font-serif text-3xl leading-none --text-foreground">
                {day} {month}
            </p>
            <p className="text-xs --text-muted-foreground">
                {weekday} . {time}
            </p>
        </div>
    )
}
