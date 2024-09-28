import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import {Routes,Route} from "react-router-dom"
import StudentForm from './Pages/Student'

export default function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path='/student' element={<StudentForm/>}/>
      </Routes>
    </>
  )
}
