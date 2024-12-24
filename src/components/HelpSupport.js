import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const HelpSupport = () => {
  return (
    <div>
        {<Sidebar/>}
        <div className="asside">
            <div className='about-first'>
                <div className="row">
                    <div className="col-12 mb-24">
                        <div className="bg-box">
                            <div className="pro-add-new px-0">
                                <p>HELP & SUPPORT</p>
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

export default HelpSupport