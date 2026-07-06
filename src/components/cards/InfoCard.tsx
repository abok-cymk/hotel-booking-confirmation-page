import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { CredentialRow } from "@/components/wifi/CredentialRow";
import { cx } from "@/lib/utils";
import type { InfoCard as InfoCardData, InfoCardTone } from "@/types";

export interface InfoCardProps {
  card: InfoCardData;
  className?: string;
}

const indexColor: Record<InfoCardTone, string> = {
  primary: "text-primary",
  wifi: "text-accent-wifi",
  breakfast: "text-accent-breakfast",
};

const eyebrowColor: Record<InfoCardTone, string> = {
  primary: "text-primary",
  wifi: "text-accent-wifi",
  breakfast: "text-accent-breakfast",
};

/**
 * Numbered info card used for Arrival / WiFi / Breakfast. Content is fully
 * data-driven: it renders `credentials` when present, otherwise `body` text
 */

export function InfoCard({ card, className }: InfoCardProps) {
  const { icon, tone, eyebrow, index, title, subtitle, body, credentials } =
    card;

  return (
    <Card
      as="article"
      className={cx(
        "flex h-full flex-col gap-4 transition-shadow duration-300 hover:shadow-(--shadow-float)",
        className,
      )}
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconBox icon={icon} tone={tone} />
          <span
            className={cx(
              "font-mono text-xs font-bold uppercase tracking-[0.2em]",
              eyebrowColor[tone],
            )}
          >
            {eyebrow}
          </span>
        </div>
        <span
          className={cx("font-serif text-xl", indexColor[tone])}
          aria-hidden="true"
        >
          {index}
        </span>
      </header>

      <div className="space-y-1">
        <h3 className="font-serif text-2xl leading-tight text-foreground text-balance">
          {title}
        </h3>
        {subtitle ? (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>

      {credentials ? (
        <div className="mt-auto space-y-2">
          {credentials.map((c) => (
            <CredentialRow
              key={c.label}
              label={c.label}
              value={c.value}
              copyable={c.copyable}
            />
          ))}
        </div>
      ) : body ? (
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          {body}
        </p>
      ) : null}
    </Card>
  );
}
