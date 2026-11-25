import "./filters.css";
import { ChevronDown, Search } from "lucide-react";

const Filters = () => {
  return (
    <div className="filters">
      <label className="filters__search">
        <Search color="var(--color-text)" strokeWidth={1.5} />
        <input type="text" placeholder="Search for a country…" />
      </label>

      <label className="filters__select">
        <select aria-label="Filter by Region">
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <ChevronDown aria-hidden="true" color="var(--color-text)" />
      </label>
    </div>
  );
};

export default Filters;
