import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import user from '../../Image/user.png';

const VehicleTypes = () => {
  return (
    <div>
        {<Sidebar/>}
        <div className="asside">
            <div className='about-first'>
                <div className="row">
                    <div className="col-12 mb-24">
                        <div className="bg-box">
                            <div className="pro-add-new px-0">
                                <p>VEHICLE TYPES</p>
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
                                <div className="pro-add-new px-0 mb-0">
                                    <Link type="button" className='btn add-new' data-bs-toggle="modal" data-bs-target="#exampleModalAdd"><i className="fa-solid fa-plus"></i> Add Vehicle</Link>
                                </div>
                            </div>
                            <div className='responsive-table'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>                                    
                                            <th>Service Type</th>
                                            <th>Vehicle Image</th>
                                            <th>Name Of Vehicle Type</th>
                                            <th>No Of Sit</th>
                                            <th>Best Price</th>
                                            <th>Price (Per KM)</th>
                                            <th>Price (Per Minute)</th>
                                            <th>Driver Commission (In %)</th>
                                            <th>Features</th>
                                            <th>Vehicle Information</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Ride</td>
                                            <td>
                                                <div className='profile-img'>
                                                    <img src={user} className='img-fluid'/>
                                                    <img src={user} className='img-fluid'/>
                                                    <img src={user} className='img-fluid'/>
                                                    <img src={user} className='img-fluid'/>
                                                </div>
                                            </td>
                                            <td>Name Of Vehicle Type</td>
                                            <td>3</td>
                                            <td>100</td>
                                            <td>10</td>
                                            <td>1</td>
                                            <td>10%</td>
                                            <td>Features</td>
                                            <td>Vehicle Information</td>
                                            <td>
                                                <Link to={'#'} class="badge bg-success me-1 text-white">Active</Link>
                                                <Link to={'#'} class="badge bg-warning me-1 text-white">Inactive</Link>
                                            </td>
                                            <td>
                                                <div className='icon-up-del'>
                                                    <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModaledit"><i className="fa-solid fa-pen"></i></Link>
                                                    <Link><i className="fa-solid fa-trash"></i></Link>
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
            
            {/* <!-- Add Modal --> */}
            <div className="modal fade" id="exampleModalAdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Vehicle Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form className='row'>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Service Type</label>
                                    <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                        <option selected>Ride</option>
                                        <option value="1">Courier</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Image</label>
                                    <input type="file" className="form-control" multiple/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Name Of Vehicle Type</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>No Of Sit</label>
                                    <input type="number" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Base Price</label>
                                    <input type="number" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Price (Per KM)</label>
                                    <input type="number" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Price (Per Minute)</label>
                                    <input type="number" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Driver Commission (In %)</label>
                                    <input type="number" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Features</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Information</label>
                                    <input type="text" className="form-control"/>
                                </div>
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
            {/* <!--End Add Modal --> */}


        {<Footer/>}
        </div>
    </div>
  )
}

export default VehicleTypes