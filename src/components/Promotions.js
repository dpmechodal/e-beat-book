import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import user from '../Image/user.png';

const Promotions = () => {
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
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> All Promo Code </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> Active Promo Code </button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="pro-add-new px-0">
                                        <p>All Promo Code</p>
                                        <div className="form-floating small-floating">
                                            <input type="text" className="form-control py-2 w-auto" id="floatingInput" placeholder="name@example.com"/>
                                            <label for="floatingInput">Search</label>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-end justify-content-between'>
                                        <div></div>
                                        <div className="mb-3 pro-add-new px-0">
                                            <Link type="button" className='btn add-new' data-bs-toggle="modal" data-bs-target="#exampleModalAdd"><i className="fa-solid fa-plus"></i> Add  Promo Code</Link>
                                        </div>
                                    </div>
                                    <div className='responsive-table'>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>                                    
                                                    <th>Promo Code Name</th>
                                                    <th>Promo Code</th>
                                                    <th>Discount Type ( Percentage / Flat Discount )</th>
                                                    <th>Discription</th>
                                                    <th>Start Date</th>
                                                    <th>Expiry Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>                                 
                                                    <td>Promo Code Name</td>
                                                    <td>Promo Code</td>
                                                    <td>10%</td>
                                                    <td>Discription</td>
                                                    <td>10-01-2024</td>
                                                    <td>10-01-2024</td>
                                                    <td>
                                                        <Link to={'#'} class="badge bg-success me-1 text-white">Active</Link>
                                                        <Link to={'#'} class="badge bg-warning me-1 text-white">Inactive</Link>
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
                                        <p>Active Promo Code</p>
                                        <div className="form-floating small-floating">
                                            <input type="text" className="form-control py-2 w-auto" id="floatingInput" placeholder="name@example.com"/>
                                            <label for="floatingInput">Search</label>
                                        </div>
                                    </div>
                                    <div className='responsive-table'>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>                                    
                                                    <th>Promo Code Name</th>
                                                    <th>Promo Code</th>
                                                    <th>Discount Type ( Percentage / Flat Discount )</th>
                                                    <th>Discription</th>
                                                    <th>Start Date</th>
                                                    <th>Expiry Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>                                 
                                                    <td>Promo Code Name</td>
                                                    <td>Promo Code</td>
                                                    <td>10%</td>
                                                    <td>Discription</td>
                                                    <td>10-01-2024</td>
                                                    <td>10-01-2024</td>
                                                    <td>
                                                        <Link to={'#'} class="badge bg-success me-1 text-white">Active</Link>
                                                        <Link to={'#'} class="badge bg-warning me-1 text-white">Inactive</Link>
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
                        <h5 className="modal-title" id="exampleModalLabel">Add Promo Code</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form className='row'>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Promo Code Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Promo Code</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Discount Type ( Based On Percentage / Flat Discount )</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Description</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Start Date</label>
                                    <input type="date" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6 col-12">
                                    <label className='mb-2'>Expiry Date</label>
                                    <input type="date" className="form-control"/>
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

export default Promotions