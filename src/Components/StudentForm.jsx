import React, { useState } from 'react';
import "../Pages/StudentForm.css";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    department: '',
    yearOfStudy: '',
    email: '',
    phone: '',
    photo: null,  // For storing the uploaded photo
  });

  const [photoPreview, setPhotoPreview] = useState(null);  // For showing the preview

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle photo upload separately
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
    setPhotoPreview(URL.createObjectURL(file)); // Generate a preview URL
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can append the form data and the photo to FormData to send to the backend
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    console.log('Student Data Submitted:', formData);
    // API call to send 'data' to the server

    // For now, resetting form
    setFormData({
      name: '',
      rollNumber: '',
      department: '',
      yearOfStudy: '',
      email: '',
      phone: '',
      photo: null,
    });
    setPhotoPreview(null);  // Clear photo preview
  };

  return (
    <div className='student-image'>
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="rollNumber">Roll Number:</label>
        <input
          type="text"
          id="rollNumber"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="yearOfStudy">Year of Study:</label>
        <select
          id="yearOfStudy"
          name="yearOfStudy"
          value={formData.yearOfStudy}
          onChange={handleChange}
          required
        >
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="photo">Upload Photo:</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handlePhotoChange}
        />
        {photoPreview && (
          <div>
            <img
              src={photoPreview}
              alt="Preview"
              style={{ width: '150px', height: '150px', objectFit: 'cover', marginTop: '10px' }}
            />
          </div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default StudentForm;
