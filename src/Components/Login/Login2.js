import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await axios.post('http://localhost:8000/login/', formData);
      localStorage.setItem('user', JSON.stringify(response.data));
      Swal.fire({
        title: 'Success!',
        text: 'Login successful',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/homeducatingform');
      });

    } catch (err) {
      if (err.response && err.response.data) {
        const errorResponse = err.response.data;
        const errorMessage = errorResponse.non_field_errors ? errorResponse.non_field_errors[0] : 'Something went wrong. Please try again.';
        setError(errorMessage);
        Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        setError('Network Error: Failed to connect to the server.');
        Swal.fire({
          title: 'Error!',
          text: 'Network Error: Failed to connect to the server.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  return (
    <div className='login-main-container'>
      <form className='form' onSubmit={handleLogin}>
        <div className='login-input-container'>
          <label htmlFor='email'>Your Email Address:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email address'
            required
          />
        </div>
        <div className='login-input-container'>
          <label htmlFor='password'>Your Password:</label>
          <div className='password-container'>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              required
              aria-describedby='passwordHelp'
            />  <button
            type='button'
            className='password-visibility-toggle'
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
        {error && <div className='error-message'>{error}</div>}
        <button id='button' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

