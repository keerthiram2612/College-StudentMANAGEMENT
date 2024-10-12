import React, { useState } from 'react';
import "../Pages/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signupcontent() {
  const navigate = useNavigate(); // Renamed history to navigate to match with useNavigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/signup', {
        email,
        password,
      });
      
      if (res.data === 'exist') {
        alert('User already exists');
      } else if (res.data === 'notexist') {
        navigate('/home', { state: { id: email } });
      }
    } catch (e) {
      alert('Wrong details');
      console.log(e);
    }
  }

  return (
    <div className='login'>
      <h1>SignUp</h1>
      <form onSubmit={submit}> {/* Changed to onSubmit */}
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          required
        />
        <br />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
        <br />
        <input type='submit' value='Sign Up' /> {/* Changed to form submit */}
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to='/login'>Login Page</Link>
    </div>
  );
}
