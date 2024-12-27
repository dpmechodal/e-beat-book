import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div>
            {/* nav fixx */}
            <div className='sidebar'>
                <div className="sidebar-logo">
                    <Link to={"/PoliceStationAdmin/Dashboard"}><img src={logo} className='img-fluid'/></Link>
                </div>
                <div className="overflow-y">
                    <div className="sidebar-link">
                        <ul>
                            <li className={location.pathname === '/PoliceStationAdmin/Dashboard' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/Dashboard"}><i className="fa-solid fa-house"></i>Dashboard</NavLink></li>
                            <div class="page-line"><hr/><span>User Panel</span></div>
                            <li className={location.pathname === '/PoliceStationAdmin/Beats' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/Beats"}><i className="fa-solid fa-user"></i>Beats</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/Village' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/Village"}><i className="fa-solid fa-user"></i>Village</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/Place' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/Place"}><i className="fa-solid fa-user"></i>Place</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/User' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/User"}><i className="fa-solid fa-user"></i>User</NavLink></li>
                            <div class="page-line"><hr/><span>Admin Panel</span></div>
                            <li className={location.pathname === '/PoliceStationAdmin/PrarupA' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/PrarupA"}><i className="fa-solid fa-user"></i>प्रारुप-A</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/PrarupB' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/PrarupB"}><i className="fa-solid fa-user"></i>प्रारुप-B</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/NistaranVivran' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/NistaranVivran"}><i class="fa-solid fa-minus"></i><i className="fa-solid fa-user"></i>निस्तारण का विवरण</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/PrarupC' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/PrarupC"}><i className="fa-solid fa-user"></i>प्रारुप-C</NavLink></li>
                            {/* <li className={location.pathname === '/PoliceStationAdmin/PracharPrasar' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/PracharPrasar"}><i className="fa-solid fa-user"></i>प्रचार-प्रसार हेतु भ्रमण की संख्या</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/JanJagrukta' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/JanJagrukta"}><i className="fa-solid fa-user"></i>जन-जागरुकता कार्यक्रमों की संख्या व स्थान</NavLink></li> */}
                            <li className={location.pathname === '/PoliceStationAdmin/Report' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/Report"}><i className="fa-solid fa-user"></i>Report</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='fixx'>
                <nav className="top-header navbar navbar-expand sticky-top navbar-light">
                    <div className="py-2 container-fluid">
                        <div className="navbar-user"><img src={logo} className='invisible'/></div>
                        <div className="has-search"><p>Police Station Admin</p></div>
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
