import React from 'react'
import "./Navbar.css"


export default function Navbar() {
  
  return (
    <div>
      <div className="navbar-head">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                 <h1>College</h1>
                </div>
                <div className="col-md-8">
                    <div className="right">
                        <ul className='nav navbar-nav nav-right'>
                            <a href='/'><li>Home</li></a>
                            <a href=''><li>Departments</li></a>
                            <a href='Student'><li>Students</li></a>
                            <a href=''><li>Staff</li></a>
                            <a href='login'><li>Login</li></a>
                            <a href='signup'><li>Signup</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
