import type { ReactNode } from "react";
import "./OriButton.css";

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
