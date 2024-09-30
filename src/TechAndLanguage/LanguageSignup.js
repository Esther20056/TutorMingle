// This form is for user who wants to learn a language and needs to register
import React, { useState} from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { Link, useNavigate } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

function LanguageSignup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [ModalOpen, setModalOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [visible, setVisible] = useState(true); 
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formValid, setFormValid] = useState(false);

    const formatPhoneNumber = (input) => {
        const cleaned = ('' + input).replace(/\D/g, '');
        const formatted = cleaned.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
        setPhoneNumber(formatted);
    };
    const handleChange = (e) => {
        const input = e.target.value;
        formatPhoneNumber(input);
        setPhone(input);
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
      const validateForm = () => {
        let isValid = true;
        setEmailError('');
        setPhoneError('');
        setPasswordError('');

        if (!email) {
            setEmailError('Email is required.');
            isValid = false;
        }
        if (!phone) {
            setPhoneError('Phone number is required.');
            isValid = false;
        }
        if (!password) {
            setPasswordError('Password is required.');
            isValid = false;
        }

        setFormValid(isValid);
        return isValid;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!validateForm()) return;
        setLoading(true);
    
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: '🎉 Welcome to TutorMingle! Your account has been successfully created 🎉',
            customClass: {
                popup: 'custom-swal-popup',
                title: 'custom-swal-title',
                content: 'custom-swal-content',
                confirmButton: 'custom-swal-confirm',
                cancelButton: 'custom-swal-cancel',
                icon: 'custom-swal-icon'
            }
        }).then(() => {
            navigate("/language");
        }).finally(() => {
            setLoading(false);
        });
    };    
  return (
    <div className='language-form-container' style={{ paddingTop: "4.7rem" }}>
           <form action="" id="language-form" onSubmit={(w) => handleSubmit(w)}>
                <h4>Register here</h4>
                <div className="input-wrapper">
                <div className="input-container">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            {emailError && <p className="error">{emailError}</p>}
                        </div>
                        <div className="input-container">
                            <label htmlFor="phone">Phone:</label>
                            <input 
                                type="text" 
                                id="phone" 
                                value={phoneNumber} 
                               maxLength={11}
                               minLength={11}
                                onChange={handleChange} 
                            />
                            {phoneError && <p className="error">{phoneError}</p>}
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Password:</label>
                            <div style={{ position: 'relative' }}>
                            <input 
                                type={passwordVisible ? 'text' : 'password'} 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                              {passwordVisible ? (
                                <BsEyeSlash
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '45%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                    }}
                                />
                            ) : (
                                <BsEye
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '45%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                    }}
                                />
                            )}
                            {passwordError && <p className="error">{passwordError}</p>}
                            </div>
                        </div>
                    <button id='form-btn' style={{ fontWeight: "600" }} type='submit'>Register</button>
                    <button id='form-btn' type="button" style={{ color: "#FFF8DC", fontWeight: "600" }}>Cancel</button>
                </div>
                <div className="log-in-container">
                    <p>Already have an account?</p>
                    <Link to="/login">Log In</Link>
                </div>
            </form>
    </div>
  )
}

export default LanguageSignup