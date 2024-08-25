import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import '../Components/HomeEducating/HomeEducatingLogin/Form.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TechSkills() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const formatPhoneNumber = (input) => {
    const cleaned = ('' + input).replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
    setPhoneNumber(formatted);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    formatPhoneNumber(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const formData = new FormData(e.currentTarget);
      await axios.post("http://localhost:8000/techskills/", formData);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: '🎉 Congratulations! You have successfully completed Part 1 of the form! 🎉',
        customClass: {
          popup: 'custom-swal-popup',
          title: 'custom-swal-title',
          content: 'custom-swal-content',
          confirmButton: 'custom-swal-confirm',
          cancelButton: 'custom-swal-cancel',
          icon: 'custom-swal-icon'
        }
      }).then(() => {
        navigate("/tech_two");
      });
    } catch (err) {
      if (err?.response?.data) {
        const errorMessages = err.response.data;
        let customMessage = 'Failed to submit form. Please check your inputs and try again.';
        const fieldErrors = Object.entries(errorMessages).map(([field, message]) => {
          if (field === 'email' && message.includes('already exists')) {
            customMessage = 'A user with this email already exists. Please use a different email address.';
          }
          return `<p><strong>${field}:</strong> ${message}</p>`;
        }).join('');
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: customMessage,
          footer: `<div>${fieldErrors}</div>`,
          customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            content: 'custom-swal-content',
            confirmButton: 'custom-swal-confirm',
            cancelButton: 'custom-swal-cancel',
            icon: 'custom-swal-icon'
          }
        }).then(() => {
          navigate("/homeducating");
        });
        setErrors(errorMessages);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
        }).then(() => {
          navigate("/signup"); 
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='homeeducating-form'>
      <div className="form-first-container">
        <h4>Explore your technical skills!</h4>
        <h5>Enhance your abilities at any age. Share your interests and we'll assist you in achieving your goals.</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-second-div">
            <label htmlFor="parent_student">Are you a parent or student</label>
            <select name="parent_student" id="parent_student">
              <option value="Parent">Parent</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <div className="form-second-div">
            <label htmlFor="f_name">First Name</label>
            <input type="text" name='f_name' id='f_name' placeholder='Enter first name'/>
            {errors.f_name && <p className="error">{errors.f_name}</p>}
          </div>
          <div className="form-second-div">
            <label htmlFor="l_name">Last Name</label>
            <input type="text" name='l_name' id='l_name' placeholder='Enter last name'/>
            {errors.l_name && <p className="error">{errors.l_name}</p>}
          </div>
          <div className="form-second-div">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' placeholder='Enter email address'/>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-second-div">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              maxLength={13}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <button type='submit' className='form-second-div-button' disabled={loading}>
            {loading ? 'Submitting...' : 'Save and Continue'}
          </button>
          <button className='form-second-div-button'>
            <Link to='/'>Back</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default TechSkills;
