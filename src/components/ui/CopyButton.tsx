import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cx } from "@/lib/utils";

export interface CopyButtonProps {
  /** The text placed on the clipboard */
  value: string;
  /** Accessible description of what is being copied, e.g. "WiFi password". */
  label?: string;
  className?: string;
}

/** Small inline "COPY" control with a transcient confirmed state. */
export function CopyButton({
  value,
  label = "value",
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `Copied ${label}` : `Copied ${label}`}
      className={cx(
        "inline-flex items-center gap-1 rounded-md border --border-border-strong --bg-surface px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wider --text-nuted-foreground transition-colors --hover:bg-surface-muted",
        className,
      )}
    >
      {copied ? (
        <Check className="size-3 --text-primary" />
      ) : (
        <Copy className="size-3" />
      )}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
