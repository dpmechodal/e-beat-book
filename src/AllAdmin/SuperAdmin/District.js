import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const District = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`asside ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className='about-first'>
                <div className="row">
                    <div className="col-12 mb-24">
                        <div className="bg-box">
                            <div className="pro-add-new px-0">
                                <p>District Master </p>
                                <div className="form-floating small-floating">
                                    <input type="text" className="form-control py-2 w-auto" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Search</label>
                                </div>
                            </div>
                            <div className='d-flex align-items-end justify-content-between mb-3'>
                                <div className="all-select">
                                    <select className="form-select form-control" aria-label="Floating label select example">
                                        <option selected>Select District </option>
                                        <option value="1">Select District </option>
                                        <option value="2">Select District </option>
                                    </select>
                                    <select className="form-select form-control" aria-label="Floating label select example">
                                        <option selected>Select Zone </option>
                                        <option value="1">Select Zone </option>
                                        <option value="2">Select Zone </option>
                                    </select>
                                    <select className="form-select form-control" aria-label="Floating label select example">
                                        <option selected>Select Range </option>
                                        <option value="1">Select Range </option>
                                        <option value="2">Select Range </option>
                                    </select>
                                </div>
                                <div className="pro-add-new px-0 mb-0">
                                    <Link type="button" className='btn add-new' data-bs-toggle="modal" data-bs-target="#exampleModalAdd"><i className="fa-solid fa-plus"></i> Create District</Link>
                                </div>
                            </div>
                            <div className='responsive-table'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>No</th>                                    
                                            <th>District Name</th>
                                            <th>Zone Name</th>
                                            <th>Range Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>District Name</td>
                                            <td>Zone Name</td>
                                            <td>Range Name</td>
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
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create District</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form className='row'>
                                <div className="mb-3 col-12">
                                    <label className='mb-2'>District Name</label>
                                    <input type="text" className="form-control" placeholder='Enter District Name'/>
                                </div>
                                <div className="mb-3 col-12">
                                    <label className='mb-2'>Select Zone</label>
                                    <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                        <option selected>Select Zone</option>
                                        <option value="1">Select Zone</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-12">
                                    <label className='mb-2'>Select Range</label>
                                    <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                        <option selected>Select Range</option>
                                        <option value="1">Select Range</option>
                                    </select>
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
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit District</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form className='row'>
                                <div className="mb-3 col-12">
                                    <label className='mb-2'>District Name</label>
                                    <input type="text" className="form-control" placeholder='Enter District Name'/>
                                </div>
                                <div className="mb-3 col-12">
                                    <label className='mb-2'>Select Zone</label>
                                    <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                        <option selected>Select Zone</option>
                                        <option value="1">Select Zone</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-12">
                                    <label className='mb-2'>Select Range</label>
                                    <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                        <option selected>Select Range</option>
                                        <option value="1">Select Range</option>
                                    </select>
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


        {<Footer/>}
        </div>
    </div>
  )
}

export default District