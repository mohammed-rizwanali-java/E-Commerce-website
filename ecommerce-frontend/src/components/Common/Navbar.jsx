import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">

      {/* LEFT SIDE - Only Home */}
      <div className="nav-left">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </div>

      {/* RIGHT SIDE - All Other Sections */}
      <div className="nav-right">

        {auth.token && auth.role === 'ROLE_ADMIN' && (
          <NavLink to="/admin" className="nav-link">
            Admin
          </NavLink>
        )}

        {auth.token && (
          <NavLink to="/cart" className="nav-link">
            Cart
          </NavLink>
        )}

        {auth.token ? (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/register" className="nav-link">
              Register
            </NavLink>
          </>
        )}
      </div>

    </nav>
  );
};

export default Navbar;