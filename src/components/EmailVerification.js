import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import sendmailgif from '../Image/sent-mail.gif'

const EmailVerification = () => {
  return (
    <div>
      <div className='container'>
        <div className='row vh-100 d-flex align-items-center justify-content-center'>
          <div className='col-lg-6 col-md-8 col-12 my-3'>
            <div className='login-top'>
              <div className='row align-items-center'>
                <div className='col-8 top-login-text'>
                  <h2 className='mb-0'>Email Verification</h2>
                </div>
                <div className='col-4'>
                  <img src={logo} className='img-fluid'/>
                </div>
              </div>
            </div>
            <div className="signin-page">
              <form>
                <div className="form-floating mb-4">
                  <input type="mail" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Enter Your Email</label>
                </div>
                <Link to={"/Successfullysentmail"} type="submit" className="btn btn-login">Email Verify</Link>
              </form>
              <div className="create-acc">
                <p>Already have an account? <Link to={"/"}>   Sign in instead</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailVerification