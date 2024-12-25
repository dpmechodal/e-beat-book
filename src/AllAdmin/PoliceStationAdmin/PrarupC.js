import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import user from '../../Image/user.png';

const PearupC = () => {
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


        {<Footer/>}
        </div>
    </div>
  )
}

export default PearupC