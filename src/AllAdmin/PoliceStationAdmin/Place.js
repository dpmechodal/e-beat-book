import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Place = () => {
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
                                <p>Place</p>
                                <div className="form-floating small-floating">
                                    <input type="text" className="form-control py-2 w-auto" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Search</label>
                                </div>
                            </div>
                            <div className='d-flex align-items-end justify-content-between mb-3'>
                                <div className="col-lg-2 col-md-3 col-5">
                                </div>
                                <div className="pro-add-new px-0 mb-0">
                                    <Link className='btn add-new' data-bs-toggle="modal" data-bs-target="#exampleModalAdd"><i className="fa-solid fa-plus"></i> Create Place</Link>
                                </div>
                            </div>
                            <div className='responsive-table'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>No</th>                                    
                                            <th>Beat Select</th>
                                            <th>Village Select</th>
                                            <th>Place Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Beat Select</td>
                                            <td>Village Select</td>
                                            <td>Place Name</td>
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
            
            {/* <!-- Map Modal --> */}
            {/* <div className="modal fade" id="exampleModalMap" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Map Open</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form className='row'>
                                <div className="col-12">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4289.236318621005!2d72.12048137576751!3d21.763341762142858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5a09b3323dd9%3A0x3a1a8cbfd6c99bc3!2sMechodal%20Technology%20%7C%20Top%20Mechanical%20and%20Software%20Development%20company!5e1!3m2!1sen!2sin!4v1735106742740!5m2!1sen!2sin" width={'100%'} height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div> */}
            {/* <!--End Map Modal --> */}
            
            {/* <!-- Add Modal --> */}
            <div className="modal fade" id="exampleModalAdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Place</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="user-details">
                                <form className='row'>
                                    <div className="mb-3 col-12">
                                        <label className='mb-2'>Select Beat</label>
                                        <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                            <option selected>Select Beat</option>
                                            <option value="1">Select Beat</option>
                                        </select>
                                    </div>
                                    <div className="mb-3 col-12">
                                        <label className='mb-2'>Select Village</label>
                                        <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                            <option selected>Select Village</option>
                                            <option value="1">Select Village</option>
                                        </select>
                                    </div>
                                    <div className="mb-3 col-12">
                                        <label className='mb-2'>Place Name</label>
                                        <input type="text" className="form-control" placeholder='Enter Place Name'/>
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
                        <h5 className="modal-title" id="exampleModalLabel">Edit Place</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-details">
                            <form className='row'>
                                <div className="mb-3 col-12">
                                    <label className='mb-2'>Select Beat</label>
                                    <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                        <option selected>Select Beat</option>
                                        <option value="1">Select Beat</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-12">
                                    <label className='mb-2'>Select Village</label>
                                    <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                        <option selected>Select Village</option>
                                        <option value="1">Select Village</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-12">
                                    <label className='mb-2'>Place Name</label>
                                    <input type="text" className="form-control" placeholder='Enter Place Name'/>
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

export default Place