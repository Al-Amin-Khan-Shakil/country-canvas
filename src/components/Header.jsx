import { NavLink, Outlet } from 'react-router-dom';

const Header = () => (
  <>
    <header className="header">
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="navlink">home</NavLink>
          </li>
          <li className="nav-item">
            Home Page
          </li>
          <li className="nav-item">
            <NavLink to="/details" className="navlink">details</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Header;
