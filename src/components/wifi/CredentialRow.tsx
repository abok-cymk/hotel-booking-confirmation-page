import { CopyButton } from "@/components/ui/CopyButton";

export interface CredentialRowProps {
    label: string
    value: string
    copyable?: boolean
}

/** A network/password row inside the WiFi card, with optional copy control. */
export function CredentialRow({ label, value, copyable = false }: CredentialRowProps) {
    return (
        <div className="flex items-center justify-between gap-3 rounded-lg bg-surface-muted px-3 py-2">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                {label}
            </span>
            <span className="flex items-center gap-2">
                <span className="font-mono text-sm text-foreground">{value}</span>
                {copyable ? <CopyButton value={value} label={`${label.toLowerCase()}`} /> : null}
            </span>
        </div>
    )
}