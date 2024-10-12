import React, { useState } from 'react';
import "../Pages/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Logincontent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
  e.preventDefault();

  try {
    const res = await axios.post('http://localhost:3000/login', {
      email,
      password,
    });

    if (res.data === 'exist') {
      navigate('/home', { state: { id: email } });
    } else if (res.data === 'notexist') {
      alert('User has not signed up');
    } else if (res.data === 'wrongpassword') {
      alert('Incorrect password. Please try again.');
    } else {
      alert('Unexpected response from server');
    }
  } catch (e) {
    alert('An error occurred');
    console.log(e);
  }
}

  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={submit}> {/* onSubmit handles the form submission */}
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
        <input type='submit' value='Login' />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to='/signup'>SignUp Page</Link>
    </div>
  );
}
