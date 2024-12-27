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
                    <Link to={"/ZoneAdmin/Dashboard"}><img src={logo} className='img-fluid'/></Link>
                </div>
                <div className="overflow-y">
                    <div className="sidebar-link">
                        <ul>
                            <li className={location.pathname === '/ZoneAdmin/Dashboard' ? 'active' : ''}><NavLink to={"/ZoneAdmin/Dashboard"}><i className="fa-solid fa-user"></i>Dashboard</NavLink></li>
                            <li className={location.pathname === '/ZoneAdmin/Report' ? 'active' : ''}><NavLink to={"/ZoneAdmin/Report"}><i className="fa-solid fa-user"></i>Report</NavLink></li>
                            <li className={location.pathname === '/ZoneAdmin/NistaranVivran' ? 'active' : ''}><NavLink to={"/ZoneAdmin/NistaranVivran"}><i className="fa-solid fa-user"></i>निस्तारण का विवरण</NavLink></li>
                            <li className={location.pathname === '/ZoneAdmin/PiditaoInfo' ? 'active' : ''}><NavLink to={"/ZoneAdmin/PiditaoInfo"}><i className="fa-solid fa-user"></i>पीड़िताओं का Info</NavLink></li>
                            <li className={location.pathname === '/ZoneAdmin/PracharPrasar' ? 'active' : ''}><NavLink to={"/ZoneAdmin/PracharPrasar"}><i className="fa-solid fa-user"></i>प्रचार-प्रसार हेतु भ्रमण की संख्या</NavLink></li>
                            <li className={location.pathname === '/ZoneAdmin/JanJagrukta' ? 'active' : ''}><NavLink to={"/ZoneAdmin/JanJagrukta"}><i className="fa-solid fa-user"></i>जन-जागरुकता कार्यक्रमों की संख्या व स्थान</NavLink></li>
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
                        <div className="has-search"><p>Zone Admin</p></div>
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
