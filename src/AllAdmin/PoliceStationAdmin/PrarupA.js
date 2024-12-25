import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import user from '../../Image/user.png';

const PearupA = () => {
  return (
    <div>
        {<Sidebar/>}
        <div className="asside">
            <div className='about-first'>
                <div className="row">
                    <div className="col-12 mb-24">
                        <div className="all-select mb-3">
                            {/* <select className="form-select form-control" aria-label="Floating label select example">
                                <option selected>Select Range </option>
                                <option value="1">Select Range </option>
                                <option value="2">Select Range </option>
                            </select>
                            <select className="form-select form-control" aria-label="Floating label select example">
                                <option selected>Select District </option>
                                <option value="1">Select District </option>
                                <option value="1">Select District </option>
                            </select>
                            <select className="form-select form-control" aria-label="Floating label select example">
                                <option selected>Select Circle Officer </option>
                                <option value="1">Select Circle Officer </option>
                                <option value="2">Select Circle Officer </option>
                            </select>
                            <select className="form-select form-control" aria-label="Floating label select example">
                                <option selected>Select Police Station</option>
                                <option value="1">Select Police Station</option>
                                <option value="2">Select Police Station</option>
                            </select> */}
                            <select className="form-select form-control" aria-label="Floating label select example">
                                <option selected>Select Beat </option>
                                <option value="1">Select Beat </option>
                                <option value="1">Select Beat </option>
                            </select>
                        </div>
                        <div className="bg-box">
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
                    </div>
                </div>
            </div>


        {<Footer/>}
        </div>
    </div>
  )
}

export default PearupA