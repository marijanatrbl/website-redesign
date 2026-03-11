import { NavLink } from "react-router-dom";
import "./Navigation.css";

import logo from "../assets/logo.png";

function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
      <NavLink to="/apartments" end>
        Apartments
      </NavLink>
      <NavLink to="/findus">Consulting</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navigation;
