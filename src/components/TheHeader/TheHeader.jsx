import { NavLink } from "react-router-dom";
import "./index.css";

function TheHeader() {
  return (
    <header>
      <NavLink
        className={({ isActive }) => `link ${isActive && "link-active"}`}
        to={"/"}
      >
        Main
      </NavLink>
      <NavLink
        className={({ isActive }) => `link ${isActive && "link-active"}`}
        to={"/books"}
      >
        Books list
      </NavLink>
      <NavLink
        className={({ isActive }) => `link ${isActive && "link-active"}`}
        to={"/subscribe"}
      >
        Subscribe
      </NavLink>
      <NavLink
        className={({ isActive }) => `link ${isActive && "link-active"}`}
        to={"/about"}
      >
        About
      </NavLink>
    </header>
  );
}

export default TheHeader;
