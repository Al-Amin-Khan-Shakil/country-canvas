import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiFillSetting } from 'react-icons/ai';
import { FaSearchLocation } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header className="header">
        <nav className="navbar">

          <div className="nav-item">
            <NavLink to="/" className="navlink">
              <AiOutlineHome />
            </NavLink>
          </div>
          <div className="nav-item">
            <p className="page-title">{location.pathname === '/' ? 'HOME' : 'DETAILS'}</p>
          </div>
          <div className="nav-item">
            <FaSearchLocation className="search-icon" />
            <AiFillSetting className="setting-icon" />
          </div>

        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
