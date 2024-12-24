import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.png'
import OtpInput from './OtpInput';

const Signin = () => {
  return (
    <div className='bg-india'>
      <div className='container'>
        <div className='row vh-100 d-flex align-items-center justify-content-center'>
          <div className='col-lg-6 col-md-8 col-12 my-3'>
            <div className='login-top'>
              <div className='row align-items-center'>
                <div className='col-8 top-login-text'>
                  <h2>Enter OTP ! 👋</h2>
                  <p>Please sign-in to your account and start the adventure</p>
                </div>
                <div className='col-4 text-end'>
                  <img src={logo} className='img-fluid'/>
                </div>
              </div>
            </div>
            <div className="signin-page">
              {/* <form> */}
                {/* <div className="form-floating mb-4">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
                <div className='d-flex justify-content-between align-content-center my-3'>
                    <div className="form-check remember-me">
                      <input className="form-check-input" type="checkbox" id="gridCheck"/>
                      <label className="form-check-label" for="gridCheck">Remember me</label>
                    </div>
                    <Link to={"EmailVerification"} className="forgot-pass">Forgot Password?</Link>
                </div>
                <Link to={"/Dashboard"} type="submit" className="btn btn-login">Sign in</Link> */}
                <OtpInput/>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin