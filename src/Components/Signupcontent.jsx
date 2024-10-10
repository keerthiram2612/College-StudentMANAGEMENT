import React, { useState } from 'react'
import "../Pages/Login.css"
import { Link , useNavigate } from 'react-router-dom'
import axios from "axios"

export default function Signupcontent() {
  const history = useNavigate();
  const[email,setEmail]=useState('')
  const[password,setPassword] = useState('')

  async function submit(e){
    e.preventDefault();
    try{
     await axios.post("http://localhost:3000/signup",{
      email,password
     })
     .then(res=>{
      if(res.data='exist'){
        alert("user already exists")
        // history("/home",{state:{id:email}})
      } 
      else if(res.data='notexist'){
        history("/home",{state:{id:email}})
     }
     })
     .catch(e=>{
        alert("wrong details")
        console.log(e);
     })
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <div className='login'>
      <h1>SignUp</h1>
      <form action="POST">
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/><br/>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
        <input type="submit" onClick={submit}/>
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/login">Login Page</Link>
    </div>
  )
}
