import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import user from '../Image/user.png';

const Bookings = () => {
  return (
    <div>
        {<Sidebar/>}
        <div className="asside">
            <div className='about-first'>
                <div className="row">
                    <div className="col-12 mb-24">
                        <div className="bg-box">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item ms-0" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> Taxi Bookings </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> Courier Bookings </button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="pro-add-new px-0">
                                        <p>TAXI BOOKINGS</p>
                                        <div className="form-floating small-floating">
                                            <input type="text" className="form-control py-2 w-auto" id="floatingInput" placeholder="name@example.com"/>
                                            <label for="floatingInput">Search</label>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-end justify-content-between'>
                                        <div className='d-flex'>
                                            <div className="mb-3 me-3">
                                                <label className='mb-2'>Status Filter</label>
                                                <select className="form-select form-control" id="" aria-label="Floating label select example">
                                                    <option value="1">Completed</option>
                                                    <option value="2">Pending</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label className='mb-2'>Payment Method Filter</label>
                                                <select className="form-select form-control" id="" aria-label="Floating label select example">
                                                    <option value="1">Cash</option>
                                                    <option value="2">Card</option>
                                                </select>
                                            </div>
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
                                                    <th>Trip ID</th>                                    
                                                    <th>Customer Name</th>
                                                    <th>Driver Name</th>
                                                    <th>Pickup Location</th>
                                                    <th>Dropoff Location</th>
                                                    <th>Total Distance</th>
                                                    <th>Promo Code (If applied)</th>
                                                    <th>Payment Method</th>
                                                    <th>Total Amount</th>
                                                    <th>Created At</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>001</td>                                    
                                                    <td>Darshan</td>
                                                    <td>Mayur</td>
                                                    <td>RTO Circle</td>
                                                    <td>Jewels Circle</td>
                                                    <td>1 KM</td>
                                                    <td>
                                                        <Link to={'#'} class="badge bg-success me-1 text-white">Applied</Link>
                                                        <Link to={'#'} class="badge bg-warning me-1 text-white">Not Applied</Link>
                                                    </td>
                                                    <td>Cash</td>
                                                    <td>10</td>
                                                    <td>10-01-2024 <span className='time'>11:45 AM</span></td>
                                                    <td>
                                                        <Link to={'#'} class="badge bg-success me-1 text-white">Completed</Link>
                                                        <Link to={'#'} class="badge bg-warning me-1 text-white">Pending </Link>
                                                    </td>
                                                    <td>
                                                        <div className='icon-up-del'>
                                                            <Link type="button" data-bs-toggle="modal" data-bs-target="#viewexampleModaledit"><i className="fa-solid fa-eye"></i></Link>
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
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="pro-add-new px-0">
                                        <p>COURIER BOOKINGS</p>
                                        <div className="form-floating small-floating">
                                            <input type="text" className="form-control py-2 w-auto" id="floatingInput" placeholder="name@example.com"/>
                                            <label for="floatingInput">Search</label>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-end justify-content-between'>
                                        <div className='d-flex'>
                                            <div className="mb-3 me-3">
                                                <label className='mb-2'>Status Filter</label>
                                                <select className="form-select form-control" id="" aria-label="Floating label select example">
                                                    <option value="1">Completed</option>
                                                    <option value="2">Pending</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label className='mb-2'>Payment Method Filter</label>
                                                <select className="form-select form-control" id="" aria-label="Floating label select example">
                                                    <option value="1">Cash</option>
                                                    <option value="2">Card</option>
                                                </select>
                                            </div>
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
                                                    <th>Trip ID</th>                                    
                                                    <th>Customer Name</th>
                                                    <th>Driver Name</th>
                                                    <th>Pickup Location</th>
                                                    <th>Dropoff Location</th>
                                                    <th>Total Distance</th>
                                                    <th>Promo Code (If applied)</th>
                                                    <th>Payment Method</th>
                                                    <th>Total Amount</th>
                                                    <th>Created At</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>001</td>                                    
                                                    <td>Darshan</td>
                                                    <td>Mayur</td>
                                                    <td>RTO Circle</td>
                                                    <td>Jewels Circle</td>
                                                    <td>1 KM</td>
                                                    <td>
                                                        <Link to={'#'} class="badge bg-success me-1 text-white">Applied</Link>
                                                        <Link to={'#'} class="badge bg-warning me-1 text-white">Not Applied</Link>
                                                    </td>
                                                    <td>Cash</td>
                                                    <td>10</td>
                                                    <td>10-01-2024 <span className='time'>11:45 AM</span></td>
                                                    <td>
                                                        <Link to={'#'} class="badge bg-success me-1 text-white">Completed</Link>
                                                        <Link to={'#'} class="badge bg-warning me-1 text-white">Pending </Link>
                                                    </td>
                                                    <td>
                                                        <div className='icon-up-del'>
                                                            <Link type="button" data-bs-toggle="modal" data-bs-target="#viewexampleModalCourier"><i className="fa-solid fa-eye"></i></Link>
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
                </div>
            </div>
            
            {/* <!-- View Taxi Modal --> */}
            <div className="modal fade" id="viewexampleModaledit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">View Taxi Bookings</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form className='row'>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Trip ID</label>
                                    <input type="number" className="form-control" placeholder='001' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Customer Name</label>
                                    <input type="text" className="form-control" placeholder='Customer Name' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Driver Name</label>
                                    <input type="text" className="form-control" placeholder='Driver Name' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Pickup Location</label>
                                    <input type="text" className="form-control" placeholder='Pickup Location' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Dropoff Location</label>
                                    <input type="text" className="form-control" placeholder='Dropoff Location' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Total Distance</label>
                                    <input type="text" className="form-control" placeholder='Total Distance' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Promo Code</label>
                                    <input type="text" className="form-control" placeholder='Applied' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Payment Method</label>
                                    <input type="text" className="form-control" placeholder='Cash' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Total Amount</label>
                                    <input type="number" className="form-control" placeholder='10' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Created At</label>
                                    <input type="date-time" className="form-control" placeholder='10-01-2024 11:45 AM' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Status</label>
                                    <input type="text" className="form-control" placeholder='Completed' disabled/>
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
            {/* <!--End View Modal --> */}
            
            {/* <!-- View Courier Modal --> */}
            <div className="modal fade" id="viewexampleModalCourier" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">View Courier Bookings</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form className='row'>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Trip ID</label>
                                    <input type="number" className="form-control" placeholder='001' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Customer Name</label>
                                    <input type="text" className="form-control" placeholder='Customer Name' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Driver Name</label>
                                    <input type="text" className="form-control" placeholder='Driver Name' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Pickup Location</label>
                                    <input type="text" className="form-control" placeholder='Pickup Location' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Dropoff Location</label>
                                    <input type="text" className="form-control" placeholder='Dropoff Location' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Total Distance</label>
                                    <input type="text" className="form-control" placeholder='Total Distance' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Promo Code</label>
                                    <input type="text" className="form-control" placeholder='Applied' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Payment Method</label>
                                    <input type="text" className="form-control" placeholder='Cash' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Total Amount</label>
                                    <input type="number" className="form-control" placeholder='10' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Created At</label>
                                    <input type="date-time" className="form-control" placeholder='10-01-2024 11:45 AM' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Status</label>
                                    <input type="text" className="form-control" placeholder='Completed' disabled/>
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
            {/* <!--End Courier Modal --> */}


        {<Footer/>}
        </div>
    </div>
  )
}

export default Bookings