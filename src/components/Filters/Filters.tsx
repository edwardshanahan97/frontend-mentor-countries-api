import "./filters.css";
import { Search } from "lucide-react";

const Filters = () => {
  return (
    <div className="filters">
      <label className="filters__search">
        <Search color="var(--color-text)" strokeWidth={1.5} />
        <input type="text" placeholder="Search for a country…" />
      </label>
    </div>
  );
};

export default Filters;
