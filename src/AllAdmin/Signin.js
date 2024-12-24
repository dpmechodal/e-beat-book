import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.png'

const Signin = () => {
  return (
    <div className='bg-india'>
      <div className='container'>
        <div className='row vh-100 d-flex align-items-center justify-content-center'>
          <div className='col-lg-6 col-md-8 col-12 my-3'>
            <div className='login-top'>
              <div className='row align-items-center'>
                <div className='col-8 top-login-text'>
                  <h2>Welcome ! 👋</h2>
                  <p>Please sign-in to your account and start the adventure</p>
                </div>
                <div className='col-4 text-end'>
                  <img src={logo} className='img-fluid'/>
                </div>
              </div>
            </div>
            <div className="signin-page">
              <form>
                <div className="form-floating mb-4">
                  <input type="tel" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Mobile Number</label>
                </div>
                <Link to={"/OTP"} type="submit" className="btn btn-login">Sign in</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin