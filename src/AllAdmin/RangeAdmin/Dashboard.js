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
                    {/* <Link to={"/NoOfUsersFullSignup"}> */}
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>New Users</p>
                        </div>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    {/* <Link to={"/NoOfUsersInstantAccess"}> */}
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>No Of Users</p>
                        </div>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    {/* <Link to={"/TotalNoOfEvents"}> */}
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>No Of Drivers</p>
                        </div>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    {/* <Link to={"/NoOfMatchesDashboard"}> */}
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>New Driver Request</p>
                        </div>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    {/* <Link to={"/NoOfGuestlistSignups"}> */}
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>Today's Bookings</p>
                        </div>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-24">
                    {/* <Link to={"/NoOfVIPTableRequests"}> */}
                    <div className="bg-box">
                      <div className="welcome-section">
                        <div className="welcome-text">
                          <h5>1,235</h5>
                          <p>Total bookings</p>
                        </div>
                      </div>
                    </div>
                    {/* </Link> */}
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


