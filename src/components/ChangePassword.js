import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

const ChangePassword = () => {
  return (
    <div>
      <div className='container'>
        <div className='row vh-100 d-flex align-items-center justify-content-center'>
          <div className='col-lg-6 col-md-8 col-12 my-3'>
            <div className='login-top'>
              <div className='row align-items-center'>
                <div className='col-8 top-login-text'>
                  <h2 className='mb-0'>Change Password</h2>
                </div>
                <div className='col-4'>
                  <img src={logo} className='img-fluid'/>
                </div>
              </div>
            </div>
            <div className="signin-page">
              <form>
                <div className="form-floating mb-4">
                  <input type="password" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Current Password</label>
                </div>
                <div className="form-floating mb-4">
                  <input type="password" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">New Password</label>
                </div>
                <div className="form-floating mb-4">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Confirm New Password</label>
                </div>
                <Link to={"/Dashboard"} type="submit" className="btn btn-login">Confirm</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword