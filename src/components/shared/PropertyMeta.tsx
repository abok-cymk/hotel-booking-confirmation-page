import { cx } from "@/lib/utils";
import type { Property } from "@/types";

export interface PropertyMetaProps {
  property: Property;
  className?: string;
}

/** Small typographic footer block : est. year, address, copyright */
export function PropertyMeta({ property, className }: PropertyMetaProps) {
  const { name, established, address, city } = property;
  const year = new Date().getFullYear();

  return (
    <div
      className={cx(
        "space-y-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] --text-faint-foreground",
        className,
      )}
    >
      <p>Est. {established}</p>
      <p>
        {name} . {address} . {city}
      </p>
      <p>
        © {year} {name}
      </p>
    </div>
  );
}
