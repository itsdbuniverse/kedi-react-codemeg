import React from 'react'
import '../css/otp.css'
// import loginimg from'../assets/loginimage.png'
import loginimg from'../assets/docimgcrop.jpg'
import { Link } from 'react-router-dom'

function Otp() {
    return (
      <>
      {/* <section className="form my-4 mx-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <img src={loginimg} class="img-fluid" alt="" />
                </div>
                <div className="col-lg-7 px-5 pt-5">
                    <h1 class="font-weight-bold py-3">OTP Verification</h1>
                    <p>Enter your OTP sent to registered email</p>
                    <form>
                        <div class="d-flex flex-row mt-5 pt-2">
                            <input type="text" class="form-control" autofocus="" />
                            <input type="text" class="form-control" autofocus="" />
                            <input type="text" class="form-control" autofocus="" />
                            <input type="text" class="form-control" autofocus="" />
                            <input type="text" class="form-control" autofocus="" />
                        </div>
                        <div class=" mt-5">
                            <span class="d-block mobile-text">Don't receive the code?</span>
                            <span class="font-weight-bold text-danger cursor">Resend Code</span>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                            <Link to="/un-patient"><button type="button" class="btn1 mt-3">Verify</button></Link>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </section> */}

<div className="mainz">
    <div className="main-container-login">
        <div className="data-section">
            <div className="left-section">
            <span class="left-img">
                <img src={loginimg} alt=""></img>
            </span>
            </div>
            <div className="right-section">
                <div className="head-section">
                <h4>OTP Verification</h4>
                <p>Lorem ipsum dolor sit amet </p>
                </div>
                <div className="input-section">
                    <div className="otp">
                        <input type = "text" placeholder="0" class="form-control" autofocus="" />
                        <input type = "text" placeholder="0" class="form-control" autofocus="" />
                        <input type = "text" placeholder="0" class="form-control" autofocus="" />
                        <input type = "text" placeholder="0" class="form-control" autofocus="" />
                        <input type = "text" placeholder="0" class="form-control" autofocus="" />
                    </div>
                </div>
                <div className="bottom-sec">
                    <p>Don't received OTP? <a href="#">Resend</a></p>
                </div>
                <div className="login-buttons-otp">
                <Link to={"/un-patient"} >
                    <button>Verify</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
</div>
























      </>
  
    )
  }
  
  export default Otp
  
  