import { cx } from "@/lib/utils"

export interface SunMarkProps {
    className?: string
    title?: string
}

export function SunMark({ className, title = "Maison Soleil Sun" }: SunMarkProps) {
    return (
        <svg
        viewBox="0 0 48 48"
        className={cx("size-8", className)}
        role="img"
        aria-label={title}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        >
            <circle cx="24" cy="24" r="8" fill="currentColor" stroke="none" />
            {Array.from({ length: 8}).map((_, i) => {
                const angle = (i * Math.PI) / 4
                const x1 = 24 + Math.cos(angle) * 15
                const y1 = 24 + Math.sin(angle) * 15
                const x2 = 24 + Math.cos(angle) * 20
                const y2 = 24 + Math.sin(angle) * 20
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
            })}
        </svg>
    )
}