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
                    <Link to={"/SuperAdmin/Dashboard"}><img src={logo} className='img-fluid'/></Link>
                </div>
                <div className="overflow-y">
                    <div className="sidebar-link">
                        <ul>
                            <li className={location.pathname === '/SuperAdmin/Zone' ? 'active' : ''}><NavLink to={"/SuperAdmin/Zone"}><i className="fa-solid fa-user"></i>Zone</NavLink></li>
                            <li className={location.pathname === '/SuperAdmin/Range' ? 'active' : ''}><NavLink to={"/SuperAdmin/Range"}><i className="fa-solid fa-user"></i>Range</NavLink></li>
                            <li className={location.pathname === '/SuperAdmin/District' ? 'active' : ''}><NavLink to={"/SuperAdmin/District"}><i className="fa-solid fa-user"></i>District</NavLink></li>
                            <li className={location.pathname === '/SuperAdmin/CircleOfficer' ? 'active' : ''}><NavLink to={"/SuperAdmin/CircleOfficer"}><i className="fa-solid fa-user"></i>Circle Officer</NavLink></li>
                            <li className={location.pathname === '/SuperAdmin/PoliceStation' ? 'active' : ''}><NavLink to={"/SuperAdmin/PoliceStation"}><i className="fa-solid fa-user"></i>Police Station</NavLink></li>
                            {/* <li className={location.pathname === '/SuperAdmin/Event' ? 'active' : ''}><NavLink to={"/SuperAdmin/Event"}><i className="fa-solid fa-user"></i>Event</NavLink></li> */}
                            <li className={location.pathname === '/SuperAdmin/Rank' ? 'active' : ''}><NavLink to={"/SuperAdmin/Rank"}><i className="fa-solid fa-user"></i>Rank</NavLink></li>
                            {/* <li className={location.pathname === '/SuperAdmin/Remarks' ? 'active' : ''}><NavLink to={"/SuperAdmin/Remarks"}><i className="fa-solid fa-user"></i>Remarks</NavLink></li> */}
                            <li className={location.pathname === '/SuperAdmin/Users' ? 'active' : ''}><NavLink to={"/SuperAdmin/Users"}><i className="fa-solid fa-user"></i>Users</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
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
                        <div className="has-search"><p>Super Admin</p></div>
                        <div className="navheight justify-content-end" >
                            <ul className="navbar-nav navbarbottom mb-lg-0 align-items-lg-center">
                                <li className="nav-item">
                                    <button type="button" className="navbar-user position-relative border-0 bg-transparent" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src={logo} />
                                        <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-light-green border border-light rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end header-drop">
                                        <Link className="dropdown-item" to="/"><span key="t-logout">LogOut</span></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
