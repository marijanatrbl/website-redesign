import type { ReactNode } from "react";
import "./FilterButton.css";

type FilterButtonProps = {
  children: ReactNode;
  isActive?: boolean;
  onClick: () => void;
  disabled?: boolean;
};

const FilterButton = ({
  children,
  isActive = false,
  onClick,
  disabled = false,
}: FilterButtonProps) => {
  return (
    <div className="searchpolje">
      <button
        className={`filter-btn ${isActive ? "active" : ""}`}
        onClick={onClick}
        disabled={disabled}
        aria-pressed={isActive}
      >
        {children}
      </button>
    </div>
  );
};

export default FilterButton;

// children → tekst (Tower I, 2nd–10th…)

// isActive → vizuelno + semantičko stanje

// aria-pressed → accessibility ✔

// reusable u bilo kojoj stranici
