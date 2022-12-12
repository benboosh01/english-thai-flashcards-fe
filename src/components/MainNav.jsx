import { NavLink } from "react-router-dom";

export const MainNav = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <NavLink
          to="/"
          className="nav-link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Phrases
        </NavLink>
        <NavLink
          to="/flashcards"
          className="nav-link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Flashcards
        </NavLink>
      </ul>
    </nav>
  );
};
