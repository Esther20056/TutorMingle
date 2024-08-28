import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';

function Form() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const formatPhoneNumber = (input) => {
    const cleaned = ('' + input).replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
    setPhoneNumber(formatted);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    formatPhoneNumber(input);
  };

  const validateForm = () => {
    const formErrors = {};
    const formData = new FormData(document.querySelector('form'));
    const firstName = formData.get('f_name');
    const lastName = formData.get('l_name');
    const email = formData.get('email');
    const phone = formData.get('phoneNumber');
    if (!firstName) formErrors.firstName = 'First name is required';
    if (!lastName) formErrors.lastName = 'Last name is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) formErrors.email = 'Valid email is required';
    if (!phone) formErrors.phoneNumber = 'Phone number is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    if (!validateForm()) {
      setLoading(false);
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: '🎉 Your form has been successfully submitted 🎉',
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        content: 'custom-swal-content',
        confirmButton: 'custom-swal-confirm',
        cancelButton: 'custom-swal-cancel',
        icon: 'custom-swal-icon',
      },
    }).then(() => {
      navigate('/firststep'); 
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className='homeeducating-form'>
      <div className="form-first-container">
        <h4>Let's find a competent educator for you.</h4>
        <h5>Improve your child's grades and confidence. Tell us your goals and we'll help you achieve it</h5>
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
            <input type="text" name='f_name' placeholder='Enter first name'/>
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-second-div">
            <label htmlFor="l_name">Last Name</label>
            <input type="text" name='l_name' placeholder='Enter last name'/>
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-second-div">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Enter email address'/>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-second-div">
            <label htmlFor="phoneNumber">Phone</label>
            <input 
              type="text" 
              id="phoneNumber" 
              name="phoneNumber" 
              value={phoneNumber} 
              onChange={handleChange} 
              placeholder="Enter phone number" 
              maxLength={13} 
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>
          <button type='submit' className='form-second-div-button' disabled={loading}>
            {loading ? 'Submitting...' : 'Save and Continue'}
          </button>
          <button className='form-second-div-button'>
            <Link to='/homeducating'>Back</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
