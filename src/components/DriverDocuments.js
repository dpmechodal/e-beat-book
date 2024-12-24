import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import user from '../Image/user.png';

const DriverDocuments = () => {
  return (
    <div>
        {<Sidebar/>}
        <div className="asside">
            <div className='about-first'>
                <div className="row">
                    <div className="col-12 mb-24">
                        <div className="bg-box">
                            <div className="pro-add-new px-0">
                                <p>DRIVER DOCUMENTS</p>
                                <div className="form-floating small-floating">
                                    <input type="text" className="form-control py-2 w-auto" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Search</label>
                                </div>
                            </div>
                            <div className='responsive-table'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Driver ID</th>                                    
                                            <th>Profile Image</th>
                                            <th>Driver Name</th>
                                            <th>Driving License</th>
                                            <th>Insurance Certificate</th>
                                            <th>Safety Documents</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div className='profile-img'>
                                                    <img src={user} className='img-fluid'/>
                                                </div>
                                            </td>
                                            <td>Raj</td>
                                            <td>
                                                <div className='profile-img'>
                                                    <img src={user} className='img-fluid'/>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='profile-img'>
                                                    <img src={user} className='img-fluid'/>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='profile-img'>
                                                    <img src={user} className='img-fluid'/>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to={'#'} class="badge bg-success me-1 text-white">Verified</Link>
                                                <Link to={'#'} class="badge bg-warning me-1 text-white">Pending</Link>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-upload py-2">Pay</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="pro-add-new px-0 mb-0 pt-3">
                                <p>1 - 6 of 6</p>
                                <nav aria-label="...">
                                    <ul className="pagination pagination-sm mb-0">
                                        <li className="page-item active" aria-current="page">
                                        <span className="page-link">1</span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {<Footer/>}
        </div>
    </div>
  )
}

export default DriverDocuments