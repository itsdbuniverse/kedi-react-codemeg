import React from 'react'
import '../css/Header.css'

function Header() {
  return (
    <>
    <header>
        <div className = "main-header">
            <div className = "left-header">
                <div className = "logo">
                    <h3>Logo</h3>
                </div>
            </div>
            <div className = "right-header">
                <div className = "header-menu">
                    <ul>
                        <li><button className="login-btn">Login</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header