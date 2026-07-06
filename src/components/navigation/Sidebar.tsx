import { Logo } from "@/components/navigation/Logo";
import { NavItem } from "@/components/navigation/NavItem";
import { Divider } from "@/components/ui/Divider";
import type { NavItem as NavItemData, Property, Weather } from "@/types";
import { WeatherCard } from "@/components/weather/WeatherCard";
import { PropertyMeta } from "../shared/PropertyMeta";

export interface SidebarProps {
  property: Property;
  navItems: NavItemData[];
  weather: Weather;
  activeId?: string;
}

/**
 * Desktop-only vertical navigation. Hidden below `lg`, where the MobileNav
 * takes over. Rendered as a real <aside> with an accessible <nav> landmark.
 */

export function Sidebar({
  property,
  navItems,
  weather,
  activeId = "stay",
}: SidebarProps) {
  return (
    <aside className="hidden w-72 shrink-0 flex-col justify-between border-r --border-border --bg-background px-6 py-8 lg:flex">
      <div className="space-y-8">
        <Logo primary="Maison" secondary="Soleil" />
        <nav aria-label="Primary">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavItem item={item} active={item.id === activeId} />
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
    </aside>
  );
}
