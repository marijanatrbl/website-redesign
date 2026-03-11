import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
};

function Button({ children, to, onClick }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
