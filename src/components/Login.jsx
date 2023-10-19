import React from 'react'
import '../css/login.css'
import logo from '../assets/img.jpg'
import loginimg from'../assets/docimgcrop.jpg'
import { Link } from 'react-router-dom'

function Login() {
  return (  
    <>
    {/* <div className="content-container-login">
    <section className="">
        
            <div className="row">
                <div className="col-lg-5">
                    <img src={loginimg} class="img-fluid" alt="" />
                </div>
                <div className="col-lg-7 px-5 pt-5">
                    <h1 class="font-weight-bold py-3">Login to Kedi</h1>
                    <p>Enter your login details</p>
                    <form>
                        <div className="form-row-email">
                            <div className="col-lg-7">
                                <h6>Email</h6>
                                <input type="email" placeholder="Email-Address" />
                            </div>
                        </div>
                        <div className="form-row-password">
                            <div className="col-lg-7">
                            <h6>Password</h6>
                            <input type="Password" placeholder="********" />
                            </div>
                        </div>
                        <section className="link">
                        <Link to="/forgetpassword"><a href="#">Forgot Password?</a></Link>
                        </section>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <Link to={"/un-patient"} >
                                    <button class="btn1 mt-3">Login</button> 
                                </Link>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        
    </section>
    </div> */}

    {/*--------------2nd login page */}
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
                <h4>Login to Kedi</h4>
                <p>Enter your login details</p>
                </div>
                <div className="input-section">
                    <div className="email">
                    <h6>Email</h6>
                    <input type='email' placeholder='Email' class="form-control" autofocus="" /><br></br>
                    </div>
                    <div className="pass">
                    <h6>Password</h6>
                    <input type='password' placeholder='*********' class="form-control" autofocus="" />
                    </div>
                    <div className="forgot-link">
                    <Link to="/forgetpassword"><a href="#">Forgot Password?</a></Link>
                    </div>
                </div>
                <div className="login-buttons">
                <Link to={"/un-patient"} >
                    <button>Login</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
</div>


















    </>

  )
}

export default Login

