import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import '../Components/HomeEducating/HomeEducatingLogin/Form.css';
import { Link, useNavigate } from 'react-router-dom';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    const formData = new FormData(e.currentTarget);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    setTimeout(() => {
      const newErrors = {};
      if (!formDataObject.f_name) newErrors.f_name = 'First name is required';
      if (!formDataObject.l_name) newErrors.l_name = 'Last name is required';
      if (!formDataObject.email) newErrors.email = 'Email is required';
      if (!formDataObject.phone) newErrors.phone = 'Phone number is required';    
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Please fix the errors and try again.',
          customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            content: 'custom-swal-content',
            confirmButton: 'custom-swal-confirm',
            cancelButton: 'custom-swal-cancel',
            icon: 'custom-swal-icon'
          }
        });
        setLoading(false);
      } else {
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
        setLoading(false);
      }
    }, 1000); 
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
