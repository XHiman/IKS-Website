import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <span className="logo">Vruttas</span>
        <ul id="menu" className="nav-links">
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <div className="navbar_line" />
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
