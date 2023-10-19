import React from 'react'
import logo from '../assets/img.jpg'
import loginimg from'../assets/docimgcrop.jpg'
import '../css/forgot.css'
import { Link } from 'react-router-dom'

function ForgetPassword() {
  return (
    <>
    {/* <div className="content-container-login">
    <section className="">
        
            <div className="row">
                <div className="col-lg-5">
                    <img src={loginimg} class="img-fluid" alt="" />
                </div>
                <div className="col-lg-7 px-5 pt-5">
                    <h1 class="font-weight-bold py-3">Forgot Password</h1>
                    <p>Enter your email id</p>
                    <form>
                        <div className="form-row-email">
                            <div className="col-lg-7">
                                <h6>Email</h6>
                                <input type="email" placeholder="Email-Address"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                            <Link to="/"><button class="btn1 mt-3">Send</button></Link>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        
    </section>
    </div> */}

<div className="main-container-login">
        <div className="data-section">
            <div className="left-section">
            <span class="left-img">
                <img src={loginimg} alt=""></img>
            </span>
            </div>
            <div className="right-section">
                <div className="head-section">
                <h4>Forgot Password</h4>
                <p>Enter your email id</p>
                </div>
                <div className="input-section-forgot">
                    <div className="email">
                    <h6>Email</h6>
                    <input type='email' placeholder='Email' class="form-control" autofocus="" /><br></br>
                    </div>
                </div>
                <div className="login-buttons-forgot">
                <Link to={"/un-patient"} >
                    <button>Send</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ForgetPassword