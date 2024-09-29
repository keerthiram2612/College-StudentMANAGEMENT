import React, { useState } from 'react';
import "../Pages/StudentForm.css";

const StudentForm = () => {

  return (
    <div>
      <div className='student-image'></div>
       <div className='back'>
       <div className='container student-form'>
        <div className='form'>
            <form action="text-center">
              <div className="row">
              <div className="col-md-6">
              <div className="left">
                <label>Name:</label><input type='text'></input><br/>
                <label>Email:</label><input type='text'></input><br/>
                <label>Password:</label><input type='text'></input>
                <div className='birthday'>
                  <label for="birthday">Birthday:</label>
                 <input type="date" id="birthday" name="birthday"/>
                 </div>
                 <div className='gender'>
                 <label >Gender:</label>
                <input type='radio' placeholder='Male'>
                </input>
                <label>Male</label>
                 <input type='radio' placeholder='Male'>
                 </input>
                 <label>Female</label>
                 </div>
                <div className=''>
                <label>Roll No:</label><input type='text'></input>
                </div>
                <div className='department'>
                  <label>Department:</label>
                  <select>
                    <option value={""}>Computer Science</option>
                    <option value={""}>Information Technology</option>
                    <option value={""}>Textile</option>
                   </select>
                </div>
                <div className='year'>
                  <label>Year:</label>
                  <select>
                    <option value={""}>Select year</option>
                    <option value={""}>1</option>
                    <option value={""}>2</option>
                    <option value={""}>3</option>
                    <option value={""}>4</option>
                   </select>
                </div>
                 <label>Phone:</label><input type="text" />
                 <div className='passing-year'>
                  <label>Passing Year:</label>
                  <select>
                    <option value={""}> year</option>
                    <option value={""}>2023</option>
                    <option value={""}>2024</option>
                    <option value={""}>2025</option>
                    <option value={""}>2026</option>
                   </select>
                </div>
                <label>Aadhar:</label><input type='text'></input><br />
                <label>Father Name:</label><input type='text'></input><br />
              </div>
              </div>
              <div className="col-md-6">
                   <div className="right ">
                   <label>Upload Image:</label><input type='file'></input>
                  <label>Mother Name:</label><input type='text'/><br />
                   <label>Community</label>
                   <select>
                    <option>Select</option>
                    <option>Mbc</option>
                    <option>Bc</option>
                    <option>Oc</option>
                    <option>Sc/St</option>
                   </select><br />
                   <label>Address:</label><input className='add' type='text'/><br />
                   <div className=''>
                   <button className='submit'>Submit</button>
                   </div>
                   </div>
                </div>
              </div>
            </form>
        </div>
       </div>
       </div>
    </div>
  );
};

export default StudentForm;
