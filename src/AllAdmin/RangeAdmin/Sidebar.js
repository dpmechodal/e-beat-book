import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-logo">
          <Link to="/RangeAdmin/Dashboard">
            <img src={logo} className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="overflow-y">
          <div className="sidebar-link">
            <ul>
              <li className={location.pathname === '/RangeAdmin/Dashboard' ? 'active' : ''}>
                <NavLink to="/RangeAdmin/Dashboard">
                  <i className="fa-solid fa-user"></i>Dashboard
                </NavLink>
              </li>
              <li className={location.pathname === '/RangeAdmin/Report' ? 'active' : ''}>
                <NavLink to="/RangeAdmin/Report">
                  <i className="fa-solid fa-user"></i>Report
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Top Navigation */}
      <div className={`fixx ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <nav
          className={`top-header navbar navbar-expand sticky-top navbar-light ${
            isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'
          }`}
        >
          <div className="py-2 container-fluid">
            <button
              className="navbar-user position-relative border-0 bg-transparent"
              onClick={toggleSidebar}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="has-search">
              <p>Range Admin</p>
            </div>
            <div className="navheight justify-content-end">
              <ul className="navbar-nav navbarbottom mb-lg-0 align-items-lg-center">
                <li className="nav-item">
                  <button
                    type="button"
                    className="navbar-user position-relative border-0 bg-transparent"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src={logo} alt="User" />
                    <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-light-green border border-light rounded-circle">
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end header-drop">
                    <Link className="dropdown-item" to="/">
                      <span key="t-logout">LogOut</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
