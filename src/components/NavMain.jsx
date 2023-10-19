import React from 'react'
import '../css/navmain.css'
import { Link } from 'react-router-dom'
import logoimg from '../assets/logo.jpg'


function NavMain() {
    return (
        <>
            <header class="header-main">
                <nav class="nav-container">
                    <div className='nav-data'>
                        <a href="#" class="nav-logo">Kedi</a>
                    </div>
                    <div className="nav-menu">
                        <ul class="nav-list">
                            <li><Link to="/un-patient">Unapproved Professionals</Link></li>
                            <li><Link to="/un-prof">Unapproved Patients</Link></li>
                            <li><Link to="/professional">Professionals</Link></li>
                            <li><Link to="/patient">Patients</Link></li>
                            <li><Link to="/add-new">Add New</Link></li>
                            <li><a href="/hospital">Hospital</a></li>
                            <li><Link to="/notification"><i class="fa fa-bell" aria-hidden="true"></i></Link></li>
                            <div class="dropdown">
                            <span className="img-l">
                    <em style={{backgroundImage: `url(${logoimg})`}}></em>
                  </span>
                                <div class="dropdown-content">
                                    <ul>
                                    <li><Link to="/myaccount"><a href="#"><i class="fa fa-user" aria-hidden="true"></i> My Account</a></Link></li>
                                    <li><Link to="/otp"><a href="#">Otp</a></Link></li>
                                    <li><Link to="/"><a href="#"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                           
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavMain