import { cx } from "@/lib/utils";

export interface DividerProps {
    dashed?: boolean
    className?: string
}

export function Divider({ dashed = false, className }: DividerProps) {
    return (
        <hr 
        className={cx(
            "border-0 border-t",
            dashed ? "border-t border-dashed --border-border-strong" : "--border-border",
            className
        )}
        />
    )
}