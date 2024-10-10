import React from 'react'
import "../Pages/Home.css"
import { useLocation } from 'react-router-dom'
export default function Homecontent() {

  const location = useLocation()
  
  return (
    <div>
      <div className="home">
       <div className="image">
       </div>
        <div className="container">
            <div className="row">
                <h1>Hello{location.state.id} and welcome to the home</h1>
            </div>
        </div>
      </div>
    </div>
  )
}
