import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <NavLink to="/" className="navlink">home</NavLink>
    <NavLink to="/details" className="navlink">details</NavLink>
  </header>
);

export default Header;
