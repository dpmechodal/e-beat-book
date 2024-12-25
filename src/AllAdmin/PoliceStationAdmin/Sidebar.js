import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import user from '../../Image/user.png';

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
                            <li className={location.pathname === '/PoliceStationAdmin/Beats' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/Beats"}><i className="fa-solid fa-user"></i>Beats</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/Police' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/Police"}><i className="fa-solid fa-user"></i>Police</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/NistaranVivran' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/NistaranVivran"}><i className="fa-solid fa-user"></i>निस्तारण का विवरण</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/PiditaoInfo' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/PiditaoInfo"}><i className="fa-solid fa-user"></i>पीड़िताओं का Info</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/PracharPrasar' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/PracharPrasar"}><i className="fa-solid fa-user"></i>प्रचार-प्रसार हेतु भ्रमण की संख्या</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/JanJagrukta' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/JanJagrukta"}><i className="fa-solid fa-user"></i>जन-जागरुकता कार्यक्रमों की संख्या व स्थान</NavLink></li>
                            <li className={location.pathname === '/PoliceStationAdmin/Report' ? 'active' : ''}><NavLink to={"/PoliceStationAdmin/Report"}><i className="fa-solid fa-user"></i>Report</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='fixx'>
                <nav className="top-header navbar navbar-expand-lg sticky-top navbar-light">
                    <div className="py-2 container-fluid">
                        <div className="has-search"><p>Police Station Admin</p></div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navheight justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav navbarbottom mb-lg-0 align-items-lg-center">
                                <li className="nav-item">
                                    <button type="button" className="navbar-user position-relative border-0 bg-transparent" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src={user} />
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
