import React from 'react'
import '../css/myaccount.css'
import logoimg from '../assets/logo.jpg'
import NavMain from './NavMain'

function MyAccount() {
  return (
    <>
    <NavMain/>
    <div className="content-container-add-new">
        <div className="main-sec">
          <div className="content-img">
          <span className="img-2">
                    <em style={{backgroundImage: `url(${logoimg})`}}></em>
                  </span>
          </div>
        </div>
        <div className="form-sec">
            <div className="name-sec">
              <div className="name-head">
                <p>First Name</p>
              <input type = "text" placeholder="Enter your name"></input></div>
              <div className="name-head">
              <p>Last Name</p>
              <input type = "text" placeholder="Enter your last name"></input></div>
            </div>
            
            <div className="e-pass">
            <div className="name-head">
              <p>Email Address</p>
              <input type = "text" placeholder='Enter your email'></input></div>
              <div className="name-head">
              <p>Password</p>
              <input type = "password" placeholder='********'></input></div>
            </div>
        </div>
        <div className="update-btn">
          <button>Register</button>
        </div>
    </div>
    </>
  )
}

export default MyAccount