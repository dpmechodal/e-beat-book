import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import user from '../Image/user.png';

const DriverDetails = () => {
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
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> All Driver </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> Request </button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="pro-add-new px-0">
                                        <p>DRIVER DETAILS</p>
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
                                        <div className='d-flex align-items-center'>
                                            <div class="mb-3 btn-group me-3" role="group" aria-label="Basic outlined example">
                                                <button type="button" class="btn btn-outline-primary shadow-none">EXPORT CSV</button>
                                                <button type="button" class="btn btn-outline-primary shadow-none">IMPORT CSV</button>
                                            </div>
                                            <div className="mb-3 pro-add-new px-0">
                                                <Link type="button" className='btn add-new' data-bs-toggle="modal" data-bs-target="#exampleModalAdd"><i className="fa-solid fa-plus"></i> Add Driver</Link>
                                            </div>
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
                                                    <th>Residence Address</th>
                                                    <th>Driving License</th>
                                                    <th>Insurance Certificate</th>
                                                    <th>Safety Documents</th>
                                                    <th>Vehicle Pictures</th>
                                                    <th>Vehicle Details</th>
                                                    <th>Vehicle Type</th>
                                                    <th>Vehicle Company Name</th>
                                                    <th>Vehicle Model Name</th>
                                                    <th>Plate Number</th>
                                                    <th>VIN Number</th>
                                                    <th>Vehicle Color</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                    <th>Pay</th>
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
                                                    <td>Residence Address</td>
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
                                                        <div className='profile-img'>
                                                            <img src={user} className='img-fluid'/>
                                                            <img src={user} className='img-fluid'/>
                                                            <img src={user} className='img-fluid'/>
                                                            <img src={user} className='img-fluid'/>
                                                        </div>
                                                    </td>
                                                    <td>Vehicle Details</td>
                                                    <td>Vehicle Type</td>
                                                    <td>Vehicle Company Name</td>
                                                    <td>Vehicle Model Name</td>
                                                    <td>Plate Number</td>
                                                    <td>VIN Number</td>
                                                    <td>Vehicle Color</td>
                                                    <td>
                                                        <Link to={'#'} class="badge bg-success me-1 text-white">Approved</Link>
                                                        <Link to={'#'} class="badge bg-warning me-1 text-white">Pending</Link>
                                                    </td>
                                                    <td>
                                                        <div className='icon-up-del'>
                                                            <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModaledit"><i className="fa-solid fa-pen"></i></Link>
                                                            <Link><i className="fa-solid fa-trash"></i></Link>
                                                            <Link type="button" data-bs-toggle="modal" data-bs-target="#viewexampleModaledit"><i className="fa-solid fa-eye"></i></Link>
                                                        </div>
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
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="pro-add-new px-0">
                                        <p>REQUEST DETAILS</p>
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
                                                    <th>Residence Address</th>
                                                    <th>Driving License</th>
                                                    <th>Insurance Certificate</th>
                                                    <th>Safety Documents</th>
                                                    <th>Vehicle Pictures</th>
                                                    <th>Vehicle Details</th>
                                                    <th>Vehicle Type</th>
                                                    <th>Vehicle Company Name</th>
                                                    <th>Vehicle Model Name</th>
                                                    <th>Plate Number</th>
                                                    <th>VIN Number</th>
                                                    <th>Vehicle Color</th>
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
                                                    <td>Residence Address</td>
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
                                                        <div className='profile-img'>
                                                            <img src={user} className='img-fluid'/>
                                                            <img src={user} className='img-fluid'/>
                                                            <img src={user} className='img-fluid'/>
                                                            <img src={user} className='img-fluid'/>
                                                        </div>
                                                    </td>
                                                    <td>Vehicle Details</td>
                                                    <td>Vehicle Type</td>
                                                    <td>Vehicle Company Name</td>
                                                    <td>Vehicle Model Name</td>
                                                    <td>Plate Number</td>
                                                    <td>VIN Number</td>
                                                    <td>Vehicle Color</td>
                                                    <td>
                                                        <Link to={'#'} class="badge bg-success me-1 text-white">Approved</Link>
                                                        <Link to={'#'} class="badge bg-warning me-1 text-white">Pending</Link>
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
            
            {/* <!-- Add Modal --> */}
            <div className="modal fade" id="exampleModalAdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Driver</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form className='row'>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Profile Image</label>
                                    <input type="file" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>User Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Mobile Number</label>
                                    <input type="number" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Email</label>
                                    <input type="mail" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Residence Address</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Driving License</label>
                                    <input type="file" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Insurance Certificate</label>
                                    <input type="file" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Safety Documents</label>
                                    <input type="file" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Pictures</label>
                                    <input type="file" className="form-control" multiple/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Details</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Type</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Company Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Model Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Plate Number</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>VIN Number</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Color</label>
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
            
            {/* <!-- Edit Modal --> */}
            <div className="modal fade" id="exampleModaledit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Driver</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form className='row'>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Profile Image</label>
                                    <input type="file" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>User Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Mobile Number</label>
                                    <input type="number" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Email</label>
                                    <input type="mail" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Residence Address</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Driving License</label>
                                    <input type="file" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Insurance Certificate</label>
                                    <input type="file" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Safety Documents</label>
                                    <input type="file" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Pictures</label>
                                    <input type="file" className="form-control" multiple/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Details</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Type</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Company Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Model Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Plate Number</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>VIN Number</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Color</label>
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
            {/* <!--End Edit Modal --> */}
            
            {/* <!-- View Modal --> */}
            <div className="modal fade" id="viewexampleModaledit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">View Driver</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form className='row'>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>User Name</label>
                                    <input type="text" className="form-control" placeholder='Darshan' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Email ID</label>
                                    <input type="mail" className="form-control" placeholder='darshan@mechodal.com' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Mobile Number</label>
                                    <input type="number" className="form-control" placeholder='9988998899' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Residence Address</label>
                                    <input type="text" className="form-control" placeholder='Residence Address' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Profile Image</label>
                                    <div className='profile-img'>
                                        <img src={user} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Last Updated Date</label>
                                    <input type="date" className="form-control" value='2024-01-10' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Pending Balance Amount</label>
                                    <input type="number" className="form-control" placeholder='1000' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Details</label>
                                    <input type="text" className="form-control" placeholder='Vehicle Details' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Account Details</label>
                                    <input type="text" className="form-control" placeholder='Account Details' disabled/>
                                </div>



                                {/* <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Driving License</label>
                                    <div className='profile-img'>
                                        <img src={user} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Insurance Certificate</label>
                                    <div className='profile-img'>
                                        <img src={user} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Safety Documents</label>
                                    <div className='profile-img'>
                                        <img src={user} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Pictures</label>
                                    <div className='profile-img'>
                                        <img src={user} className='img-fluid'/>
                                        <img src={user} className='img-fluid'/>
                                        <img src={user} className='img-fluid'/>
                                        <img src={user} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Details</label>
                                    <input type="text" className="form-control" placeholder='Vehicle Details' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Type</label>
                                    <input type="text" className="form-control" placeholder='Vehicle Type' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Company Name</label>
                                    <input type="text" className="form-control" placeholder='Vehicle Company Name' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Model Name</label>
                                    <input type="text" className="form-control" placeholder='Vehicle Model Name' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Plate Number</label>
                                    <input type="text" className="form-control" placeholder='Plate Number' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>VIN Number</label>
                                    <input type="text" className="form-control" placeholder='VIN Number' disabled/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Vehicle Color</label>
                                    <input type="text" className="form-control" placeholder='Vehicle Color' disabled/>
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

export default DriverDetails