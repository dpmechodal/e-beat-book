import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import sendmailgif from '../Image/sent-mail.gif'

const Successfullysentmail = () => {
  return (
    <div>
      <div className='container'>
        <div className='row vh-100 d-flex align-items-center justify-content-center'>
          <div className='col-lg-5 col-md-8 col-12 my-3'>
            <div className='login-top p-3'>
              <div className='row'>
                <div className='text-center'>
                  <img src={logo} className='img-fluid'/>
                </div>
              </div>
            </div>
            <div className="signin-page p-3">
              <form>
                <div className="modal-content">
                    <div className="modal-body text-center pb-3">
                        <img src={sendmailgif} className='img-fluid w-50 mb-2'/>
                        <h6>Successfully sent email confirmation link...</h6>
                    </div>
                    <div className="modal-footer">
                        <Link to={"/ForgotPassword"} className="btn btn-login" type='submit'>Forgot Password</Link>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Successfull Modal */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Successfull</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <img src={sendmailgif} className='img-fluid w-50'/>
              <h5>Successfully sent email confirmation link...</h5>
            </div>
            <div className="modal-footer">
              <Link to={"/"} className="btn btn-login" type='submit'>Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Successfullysentmail