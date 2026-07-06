import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/navigation/Logo";
import { NavItem } from "@/components/navigation/NavItem";
import { WeatherCard } from "@/components/weather/WeatherCard";
import { PropertyMeta } from "@/components/shared/PropertyMeta";
import { Divider } from "@/components/ui/Divider";
import { cx } from "@/lib/utils";
import type { NavItem as NavItemData, Property, Weather } from "@/types";

export interface MobileNavProps {
  property: Property;
  navItems: NavItemData[];
  weather: Weather;
  activeId?: string;
}

/**
 * Top bar + slide-in drawer for small screens. Hidden at `lg` and up where the
 * Sidebar is used instead. Locks body scroll and traps focus intent via Escape.
 */

export function MobileNav({
  property,
  navItems,
  weather,
  activeId = "stay",
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="lg:hidden">
      <header className="flex items-center justify-between border-b --border-border --bg-background px-5 py-4">
        <Logo primary="Maison" secondary="Soleil" />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-xl border --border-border --bg-surface --text-foreground"
        >
          <Menu className="size-5" />
        </button>
      </header>

      {/* Overlay */}
      <div
        className={cx(
          "fixed inset-0 z-40 --bg-foreground/30 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "pointer-event-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cx(
          "fixed inset-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col justify-between --bg-background px-6 py-6 shadow-(--shadow-float) transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <Logo primary="Maison" secondary="Soleil" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close Menu"
              className="inline-flex size-10 items-center justify-center rounded-xl border --border-border --bg-surface --text-foreground"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav aria-label="Primary (mobile)">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavItem
                    item={item}
                    active={item.id === activeId}
                    onNavigate={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="space-y-5">
          <WeatherCard weather={weather} />
          <Divider dashed />
          <PropertyMeta property={property} />
        </div>
      </div>
    </div>
  );
}
