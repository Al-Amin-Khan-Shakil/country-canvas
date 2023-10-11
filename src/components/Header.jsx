import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiFillSetting } from 'react-icons/ai';
import { FaSearchLocation } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" className="navlink">
                <AiOutlineHome />
              </NavLink>
            </li>
            <li className="nav-item">
              <p>{location.pathname === '/' ? 'HOME' : 'DETAILS'}</p>
            </li>
            <li className="nav-item">
              <NavLink to="" className="navlink">
                <FaSearchLocation />
              </NavLink>
            </li>
            <li className="nav-item">
              <AiFillSetting />
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
