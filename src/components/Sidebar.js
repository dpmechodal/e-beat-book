import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import user from '../Image/user.png';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div>
            {/* nav fixx */}
            <div className='sidebar'>
                <div className="sidebar-logo">
                    <Link to={"/Dashboard"}><img src={logo} className='img-fluid'/></Link>
                </div>
                <div className="overflow-y">
                    <div className="sidebar-link">
                        <ul>
                            <li className={location.pathname === '/Dashboard' ? 'active' : ''}><NavLink to={"/Dashboard"}><i className="fa-solid fa-house"></i>Dashboard</NavLink></li>
                            <li className={location.pathname === '/UserDetails' ? 'active' : ''}><NavLink to={"/UserDetails"}><i className="fa-solid fa-user"></i>Add New Order</NavLink></li>
                        </ul>
                    </div>
                    <div class="page-line"><hr/><span>Assign Weapon</span></div>
                    <div className="sidebar-link">
                        <ul>
                            <li className={location.pathname === '/Bookings' ? 'active' : ''}><NavLink to={"/Bookings"}><i className="fa-solid fa-user"></i>Assign to District</NavLink></li>
                            <li className={location.pathname === '/DriverDetails' ? 'active' : ''}><NavLink to={"/DriverDetails"}><i className="fa-solid fa-user"></i>Assign to Unit</NavLink></li>
                        </ul>
                    </div>
                    <div className="sidebar-link">
                        <ul>
                            <li className={location.pathname === '/DriverDocuments' ? 'active' : ''}><NavLink to={"/DriverDocuments"}><i className="fa-solid fa-user"></i>Return Weapon</NavLink></li>
                        </ul>
                    </div>
                    <div class="page-line"><hr/><span>Reports</span></div>
                    <div className="sidebar-link">
                        <ul>
                            <li className={location.pathname === '/VehicleTypes' ? 'active' : ''}><NavLink to={"/VehicleTypes"}><i className="fa-solid fa-user"></i>Assign Report</NavLink></li>
                            <li className={location.pathname === '/Promotions' ? 'active' : ''}><NavLink to={"/Promotions"}><i className="fa-solid fa-user"></i>Return Report</NavLink></li>
                            <li className={location.pathname === '/HelpSupport' ? 'active' : ''}><NavLink to={"/HelpSupport"}><i className="fa-solid fa-user"></i>Available Report</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='fixx'>
                <nav className="top-header navbar navbar-expand-lg sticky-top navbar-light">
                    <div className="py-2 container-fluid">
                        <div className="has-search"><p>CR Weapon Management</p></div>
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
                                        <Link className="dropdown-item" to="#"><span key="t-logout">Profile</span></Link>
                                        <Link className="dropdown-item" to="/ChangePassword"><span key="t-logout">Change Password</span></Link>
                                        <Link className="dropdown-item" to="#"><span key="t-logout">Billing</span></Link>
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
