import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import user from '../Image/user.png';

const UserDetails = () => {
  return (
    <div>
        {<Sidebar/>}
        <div className="asside">
            <div className='about-first'>
                <div className="row">
                    <div className="col-12 mb-24">
                        <div className="bg-box">
                            <div className="pro-add-new px-0">
                                <p>USER DETAILS</p>
                                <div className="form-floating small-floating">
                                    <input type="text" className="form-control py-2 w-auto" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Search</label>
                                </div>
                            </div>
                            <div className='d-flex align-items-end justify-content-between'>
                                <div className="mb-3 col-lg-2 col-md-3 col-5">
                                    <label className='mb-2'>Filter</label>
                                    <select className="form-select form-control" id="" aria-label="Floating label select example">
                                        <option selected>All </option>
                                        <option value="1">Verified </option>
                                        <option value="2">Pending</option>
                                    </select>
                                </div>
                                <div class="mb-3 btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" class="btn btn-outline-primary shadow-none">EXPORT CSV</button>
                                    <button type="button" class="btn btn-outline-primary shadow-none">IMPORT CSV</button>
                                </div>
                            </div>
                            <div className='responsive-table'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>                                    
                                            <th>Profile Image</th>
                                            <th>User Name</th>
                                            <th>Mobile Number</th>
                                            <th>Email</th>
                                            <th>Refer Code</th>
                                            <th>Mobile Verification</th>
                                            <th>Email Verification</th>
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
                                            <td>Darshan</td>
                                            <td>9988998899</td>
                                            <td>darshan@mechodal.com</td>
                                            <td>ABCD123</td>
                                            <td>
                                                <Link to={'#'} class="badge bg-success me-1 text-white">Verified</Link>
                                                <Link to={'#'} class="badge bg-warning me-1 text-white">Pending</Link>
                                            </td>
                                            <td>
                                                <Link to={'#'} class="badge bg-success me-1 text-white">Verified</Link>
                                                <Link to={'#'} class="badge bg-warning me-1 text-white">Pending</Link>
                                            </td>
                                            <td>
                                                <div className='icon-up-del'>
                                                    <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModaledit"><i className="fa-solid fa-pen"></i></Link>
                                                    <Link><i className="fa-solid fa-trash"></i></Link>
                                                    <Link type="button" data-bs-toggle="modal" data-bs-target="#viewexampleModaledit"><i className="fa-solid fa-eye"></i></Link>
                                                </div>
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
            
            {/* <!-- Edit Modal --> */}
            <div className="modal fade" id="exampleModaledit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit User Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form>
                                <div className="mb-3">
                                    <label className='mb-2'>Profile Image</label>
                                    <input type="file" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className='mb-2'>User Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className='mb-2'>Mobile Number</label>
                                    <input type="number" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className='mb-2'>Email</label>
                                    <input type="mail" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className='mb-2'>Refer Code</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                {/* <div className="form-floating mb-3 mt-2">
                                    <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                        <option selected>OPIUM</option>
                                        <option value="1">Pacha</option>
                                        <option value="2">Shoko</option>
                                        <option value="3">Downtown</option>
                                        <option value="3">Twenties</option>
                                    </select>
                                    <label for="floatingSelectGrid">Venue</label>
                                </div> */}
                                <div className="upload-reset-btn mb-0 justify-content-center pt-2">
                                    <button className='btn btn-reset' data-bs-dismiss="modal">Cancel</button>
                                    <button className='btn btn-upload me-0' data-bs-dismiss="modal">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* <!--End Edit Modal --> */}
            
            {/* <!-- View Modal --> */}
            <div className="modal fade" id="viewexampleModaledit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">View User Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form>
                                <div className="mb-3">
                                    <label className='mb-2'>Profile Image</label>
                                    <div className='profile-img'>
                                        <img src={user} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className='mb-2'>User Name</label>
                                    <input type="text" className="form-control" placeholder='Darshan' disabled/>
                                </div>
                                <div className="mb-3">
                                    <label className='mb-2'>Mobile Number</label>
                                    <input type="number" className="form-control" placeholder='9988998899' disabled/>
                                </div>
                                <div className="mb-3">
                                    <label className='mb-2'>Email</label>
                                    <input type="mail" className="form-control" placeholder='darshan@mechodal.com' disabled/>
                                </div>
                                <div className="mb-3">
                                    <label className='mb-2'>Refer Code</label>
                                    <input type="text" className="form-control" placeholder='ABCD123' disabled/>
                                </div>
                                {/* <div className="form-floating mb-3 mt-2">
                                    <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                        <option selected>OPIUM</option>
                                        <option value="1">Pacha</option>
                                        <option value="2">Shoko</option>
                                        <option value="3">Downtown</option>
                                        <option value="3">Twenties</option>
                                    </select>
                                    <label for="floatingSelectGrid">Venue</label>
                                </div> */}
                                <div className="upload-reset-btn mb-0 justify-content-center pt-2">
                                    <button className='btn btn-reset' data-bs-dismiss="modal">Cancel</button>
                                    <button className='btn btn-upload me-0' data-bs-dismiss="modal">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* <!--End View Modal --> */}
        {<Footer/>}
        </div>
    </div>
  )
}

export default UserDetails