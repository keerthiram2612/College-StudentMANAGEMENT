import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; // Home component
import StudentForm from './Pages/Student'; // Student form component
import Login from './Pages/Login'; // Login component
import Signup from './Pages/Signup'; // Signup component

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Root route for Home */}
        <Route path="/home" element={<Home />} /> {/* Added specific route for Home */}
        <Route path="/student" element={<StudentForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
