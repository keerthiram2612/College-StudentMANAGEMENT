import React from 'react'
import "../Pages/Login.css"

export default function Logincontent() {
  return (
    <div className='login'>
      <div className="login-image"></div>
      <div className="container">
        <div className="row">
        <div className="login-cont">
           <div className="col-md-12">
                <div className="login-page text-center">
                    <h1 className='text-center'>LOGIN</h1>
                    <i class="fa-solid fa-user fa-2x"></i><input className='email' type="text" placeholder='Email' /><br/>
                    <i class="fa-solid fa-lock fa-2x"></i><input type="text" placeholder='Password' /><br />
                     <div className="forgot">
                     <input type="checkbox" className='checkbox' /><h3 className='check'>Remember me</h3>
                     <h3 className='flex'>Forgot Me?</h3>
                     </div>
                     <button className='text-center'>Login</button><br />
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
