import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import user from '../../Image/user.png';

const Report = () => {
  return (
    <div>
        {<Sidebar/>}
        <div className="asside">
            <div className='about-first'>
                <div className="row">
                    <div className="col-12 mb-24">
                        <div className="all-select mb-3">
                            <select className="form-select form-control" aria-label="Floating label select example">
                                <option selected>Beat wise </option>
                                <option value="1">Beat wise  </option>
                                <option value="2">Beat wise  </option>
                            </select>
                            <select className="form-select form-control" aria-label="Floating label select example">
                                <option selected>कार्यवाही के बिन्दू </option>
                                <option value="1">कार्यवाही के बिन्दू </option>
                                <option value="1">कार्यवाही के बिन्दू </option>
                            </select>
                            <select className="form-select form-control" aria-label="Floating label select example">
                                <option selected>Village wise  </option>
                                <option value="1">Village wise  </option>
                                <option value="2">Village wise  </option>
                            </select>
                            <select className="form-select form-control" aria-label="Floating label select example">
                                <option selected>Place wise</option>
                                <option value="1">Place wise</option>
                                <option value="2">Place wise</option>
                            </select>
                            <select className="form-select form-control" aria-label="Floating label select example">
                                <option selected>प्रचार-प्रसार के मुख्य विषय wise </option>
                                <option value="1">प्रचार-प्रसार के मुख्य विषय wise </option>
                                <option value="1">प्रचार-प्रसार के मुख्य विषय wise </option>
                            </select>
                            <select className="form-select form-control" aria-label="Floating label select example">
                                <option selected>User wise  </option>
                                <option value="1">User wise  </option>
                                <option value="1">User wise  </option>
                            </select>
                            <select className="form-select form-control" aria-label="Floating label select example">
                                <option selected>Total complain  </option>
                                <option value="1">Total complain  </option>
                                <option value="1">Total complain  </option>
                            </select>
                        </div>
                        <div className="bg-box">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item ms-0" role="presentation">
                                    <button class="nav-link active" id="pills-a-tab" data-bs-toggle="pill" data-bs-target="#pills-a" type="button" role="tab" aria-controls="pills-a" aria-selected="true"> प्रारुप-A <span className='budge'>10</span></button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-b-tab" data-bs-toggle="pill" data-bs-target="#pills-b" type="button" role="tab" aria-controls="pills-b" aria-selected="false"> प्रारुप-B <span className='budge'>10</span></button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-c-tab" data-bs-toggle="pill" data-bs-target="#pills-c" type="button" role="tab" aria-controls="pills-c" aria-selected="false"> प्रारुप-C <span className='budge'>10</span></button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-a" role="tabpanel" aria-labelledby="pills-a-tab">
                                    <div className="pro-add-new px-0">
                                        <p>महिला अपराध सम्बन्धी अभिसूचनाओं का संकलन एवं कार्यवाही</p>
                                        <div className="form-floating small-floating">
                                            <input type="text" className="form-control py-2 w-auto" id="floatingInput" placeholder="name@example.com"/>
                                            <label for="floatingInput">Search</label>
                                        </div>
                                    </div>
                                    <div className='responsive-table'>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th rowSpan={2}>क्रमांक</th>
                                                    <th rowSpan={2}>कार्यवाही के बिन्दू</th>
                                                    <th rowSpan={2}>कमिश्नरेट/जनपद </th>
                                                    <th rowSpan={2}>थाना</th>
                                                    <th rowSpan={2}>महिला बीट</th>
                                                    <th rowSpan={2}>विवरण (क्षेत्र में संख्या विवरण )</th>
                                                    <th rowSpan={2}>स्थान,अन्य</th>
                                                    <th rowSpan={2}>सुरागरसी/चेंकिंग के दौरान अवैध गतिविधि की जानकारी होने पर महिला बीट कर्मी द्वारा कृत कार्यवाही का विवरण </th>
                                                    <th rowSpan={2}>बीट सूचना का अंकन /अन्य कार्यवाही ।</th>
                                                    <th colSpan={3}>बीट सूचना /अन्य कार्यवाही की सूचना पर थाने द्वारा की गयी कार्यवाही का विवरण</th>
                                                </tr>
                                                <tr>
                                                    <th>अभियोग पंजीकरण मय विवरण</th>
                                                    <th>निरोधात्मक कार्यवाही मय विवरण</th>
                                                    <th>अन्य कार्यवाही मय विवरण</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>                                    
                                                    <td>शराब एवं अन्य मादक पादर्थो की बिक्री के सम्बन्ध में जानकारी</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>                                    
                                                    <td>घरेलू हिसां /प्रेम प्रसंग /अवैध सम्बन्ध में जानकारी </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>                                    
                                                    <td>महिला अपराध एवं उससे सम्बन्धित अभियुक्तगण के सम्बन्ध में जानकारी  </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
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
                                <div class="tab-pane fade" id="pills-b" role="tabpanel" aria-labelledby="pills-b-tab">
                                    <div className="pro-add-new px-0">
                                        <p>पीड़िताओं एवं उनके परिवारीजन की काउन्सलिंग तथा शिकायतो का निस्तारण</p>
                                        <div className="form-floating small-floating">
                                            <input type="text" className="form-control py-2 w-auto" id="floatingInput" placeholder="name@example.com"/>
                                            <label for="floatingInput">Search</label>
                                        </div>
                                    </div>
                                    <div className='responsive-table'>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>क्रमांक</th>                                    
                                                    <th>कमिश्नरेट/जनपद का नाम </th>
                                                    <th>थाना </th>
                                                    <th>महिला बीट </th>
                                                    <th>पीड़िताओं का नाम  </th>
                                                    <th>पता</th>
                                                    <th>मोबाइल नम्बर</th>
                                                    <th>पीड़िता से प्राप्त शिकायत </th>
                                                    <th>निस्तारण का विवरण </th>
                                                    <th>पीड़िता /शिकायत कर्ता के हस्ताक्षर</th>
                                                    <th>महिला बीट पुलिस कर्मी के हस्ताक्षर</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>कमिश्नरेट/जनपद का नाम </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
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
                                <div class="tab-pane fade" id="pills-c" role="tabpanel" aria-labelledby="pills-c-tab">
                                    <div className="pro-add-new px-0">
                                        <p>प्रारुप-सी जन- जागरुकता एवं प्रचार-प्रसार</p>
                                        <div className="form-floating small-floating">
                                            <input type="text" className="form-control py-2 w-auto" id="floatingInput" placeholder="name@example.com"/>
                                            <label for="floatingInput">Search</label>
                                        </div>
                                    </div>
                                    <div className='responsive-table'>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th rowSpan={2}>क्रमांक</th>                                    
                                                    <th rowSpan={2}>प्रचार-प्रसार के मुख्य विषय</th>
                                                    <th rowSpan={2}>कमिश्नरेट/जनपद</th>
                                                    <th rowSpan={2}>थाना </th>
                                                    <th rowSpan={2}>महिला बीट</th>
                                                    <th colSpan={2}>प्रचार-प्रसार हेतु स्कूल /कालेजों गांव /वार्ड के भ्रमण की संख्या</th>
                                                    <th colSpan={2}>जन-जागरुकता हेतु आयोजित कार्यक्रमों की संख्या व स्थान</th>
                                                    <th colSpan={3}>प्रतिभाग करने वाले व्यक्तियों की संख्या</th>
                                                    <th rowSpan={2}>वितरित की गयी प्रचार-प्रसार सामग्री की संख्या</th>
                                                </tr>
                                                <tr>
                                                    <th>गाँव का नाम </th>
                                                    <th>स्थान </th>
                                                    <th>1</th>
                                                    <th>स्थान </th>
                                                    <th>महिला </th>
                                                    <th>पुरुष </th>
                                                    <th>टोटल </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>विभिन्न् हेल्प लाइन नम्बर जैसे 1090,यीपी 112,1076,181 इत्यादि के बारे में जानकारी प्रसान करनाष</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>गाँव का नाम </td>
                                                    <td>स्थान </td>
                                                    <td>1</td>
                                                    <td>स्थान </td>
                                                    <td>महिला </td>
                                                    <td>पुरुष </td>
                                                    <td>टोटल </td>
                                                    <td>1</td>
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

export default Report