import React from 'react'
import '../css/addnew.css'
import img from '../assets/user-icon.png'
import acimg from '../assets/user-icon.png'
import NavMain from './NavMain'

function AddNew() {
  return (
    <>
    <NavMain/>
      <div className="content-container-add-new">
        <div className="main-sec">
          <div className="heading">
            <h3>Register</h3>
          </div>
          <div className="content-img">
            <img src={acimg} />
          </div>
        </div>
        <div className="form-sec">
            <div className="select-sec">
              <label htmlFor="">Select your account type:</label><br />
              <div className="option">
                <button onclick="selectOption('doctor')">Doctor</button>
                <button onclick="selectOption('pharmacist')">Pharmacist</button>
                <button onclick="selectOption('chemist')">Chemist</button>
                <button onclick="selectOption('lab')">Lab</button>
              </div>
            </div>
            <div className="name-sec">
              <div className="name-head">
                <p>First Name</p>
              <input type = "text" placeholder="Enter your name"></input></div>
              <div className="name-head">
              <p>Last Name</p>
              <input type = "text" placeholder="Enter your last name"></input></div>
            </div>
            <div className="select-sec">
              <label htmlFor="">Select your gender:</label><br />
              <div className="option">
                <button onclick="selectOption('male')">Male</button>
                <button onclick="selectOption('female')">Female</button>
                <button onclick="selectOption('other')">Others</button>
              </div>
            </div>
            <div className="p-detail">
            <div className="name-head">
              <p>Date of Birth</p>
              <input type = "text" placeholder="DD/MM/YYYY" ></input></div>
              <div className="name-head">
              <p>Phone Number</p>
              <input type = "text" placeholder='Enter your number'></input></div>
            </div>
            <div className="e-pass">
            <div className="name-head">
              <p>Email Address</p>
              <input type = "text" placeholder='Enter your email'></input></div>
              <div className="name-head">
              <p>Password</p>
              <input type = "password" placeholder='********'></input></div>
            </div>
            <div className="address">
              <p>Address Line 1</p>
              <input type = "text" placeholder = 'Enter your Address'></input>
            </div>
            <div className="select-doc">
            <div className="name-head">
              <p>Select DOC type</p>
              <select id="" >
                  <option value="">-- Select --</option>
                  <option calue="">-- PAN CARD --</option>
                  <option calue="">-- Aadhar Card --</option>
                  <option calue="">-- Driving Liscence --</option>
              </select></div>
              <div className="name-head">
              <p>PID NUmber</p>
              <input type = "text" placeholder="Enter your ID"></input></div>
            </div>
            <div className="doc-upload">
            <div className="name-head">
              <p>Upload Document</p>
                <input type = "file"></input>
            </div>
            </div>
        </div>
        <div className="end-btn">
          <button>Register</button>
        </div>
      </div>
    </>
  )
}

export default AddNew