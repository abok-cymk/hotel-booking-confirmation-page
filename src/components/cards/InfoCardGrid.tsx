import { InfoCard } from "@/components/cards/InfoCard";
import type { InfoCard as InfoCardData } from "@/types";

export interface InfoCardGridProps {
  cards: InfoCardData[];
}

/** Responsive grid of numbered info cards (1 col mobile -> 3 cols desktop) */
export function InfoCardGrid({ cards }: InfoCardGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-3" role="list">
      {cards.map((card) => (
        <li key={card.id}>
          <InfoCard card={card} />
        </li>
      ))}
    </ul>
  );
}
