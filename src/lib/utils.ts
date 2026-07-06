export function cx(...parts: Array<string | false | null | undefined>): string {
    return parts.filter(Boolean).join(" ")
}

/** Format a Money value, e.g. { amount 730.4, currency: "EUR" } -> "€ 730.40". */
export function formatMoney({ amount, currency }: { amount: number; currency: string }): string {
    const symbols: Record<string, string> = { EUR: "€", USD: "$", GBP: "£"}
    const symbol = symbols[currency] ?? currency
    return `${symbol} ${amount.toFixed(2)}`
}

/** Format an ISO date into a compact day + short month, e.g. "25 Apr". */
export function formatShortDate(iso: string): { day: string; month: string; weekday: string } {
    const date = new Date(iso)

    return {
      day: date.toLocaleDateString("en-GB", { day: "2-digit" }),
      month: date.toLocaleDateString("en-GB", { month: "short" }),
      weekday: date.toLocaleDateString("en-GB", { weekday: "long" }),
    };
}

/** "Sat, 25 April" style long date. */
export function formatLongDate(iso: string): string {
    return new Date(iso).toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "long"
    })
}