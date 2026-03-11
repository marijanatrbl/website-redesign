import "./Search.css";

import type { ReactNode, CSSProperties } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
};

const Search = ({ children, onClick, disabled, style }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
};

export default Search;
