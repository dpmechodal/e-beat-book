import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div>
        {<Sidebar/>}
        <div className="asside">
          <div className='about-first'>
              <div className=''>
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>Beat wise</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>कार्यवाही के बिन्दू</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>Village wise</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>Place wise</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>प्रारुप - A</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>प्रारूप - B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>प्रारूप - C</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>प्रचार-प्रसार के मुख्य विषय wise</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>User wise</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>Total Complain</p>
                        </div>
                      </div>
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

export default Dashboard


