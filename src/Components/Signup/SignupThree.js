import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ResponsiveSignup.css';

function SignupThree() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const signupStep = localStorage.getItem('signupStep');
        if (signupStep && signupStep !== 'step4') {
            navigate(`/signup/${signupStep}`);
        }
    }, [navigate]);
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        try {
            const formData = new FormData(e.currentTarget);
            await axios.post("http://localhost:8000/signupthree/", formData);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: '🎉 Congratulations! You have successfully completed step four of the form! 🎉',
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    content: 'custom-swal-content',
                    confirmButton: 'custom-swal-confirm',
                    cancelButton: 'custom-swal-cancel',
                    icon: 'custom-swal-icon'
                }, 
                confirmButtonText: 'Continue'
            }).then(() => {
                localStorage.setItem('signupStep', 'step5');
                navigate('/signup/step5');
            });
        } catch (err) {
            if (err?.response?.data) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to submit form. Please check your inputs and try again.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Something went wrong. Please try again later.',
                });
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='main_Wrapper'>
            <Link className="back-btn" to="/signup/step3">Back</Link>
            <div className='signup'>
                <form action="" className="signup_container" onSubmit={(e) => handleSubmit(e)}>
                <div className="signup-outer-wrapper">
    <h4>Tell Us About Yourself</h4>
    <div className="signup-inner-wrapper">
        <div className="form-input-container">
            <label htmlFor="about_yourself">Tell us more about yourself</label>
            <textarea 
                id="about_yourself" 
                name="about_yourself" 
                placeholder="Write about yourself here..." 
                rows="4" 
                cols="50" 
                required
            />
        </div>
    </div>
</div>

                    <div className="signup-outer-wrapper">
                        <h4>Rates and Payment Preferences:</h4>
                        <div className="signup-inner-wrapper">
                            <div className="form-input-container">
                                <label htmlFor="">Hourly rate for tutoring services</label>
                                <div className="input-with-prefix">
                                    <span className="currency-prefix">₦</span>
                                    <input
                                        type="text"
                                        placeholder='e.g 3000.00 per hour'
                                        name="rate_for_tutoring_sessions"
                                        defaultValue="3000.00"
                                        pattern="₦?[0-9]+(\.[0-9]{2})?"
                                        title="Please enter a valid amount in Nigerian Naira (₦)"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="last_name">Payment Options-Cash or Direct Transfer</label>
                                <select name="payment_options">
                                    <option value="Cash">Cash</option>
                                    <option value="Transfer">Transfer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="signup-outer-wrapper">
                        <h4>Terms and Conditions Agreement:</h4>
                        <div className="signup-inner-wrapper">
                            <div className="form-input-container agreement">
                                <label htmlFor="first_name"><Link to='/T&C'>Please read the Terms and Conditions before Signing up </Link></label>
                                <input type="checkbox" name="terms_checkbox" required className='check-box' />
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='button' disabled={loading}>{loading ? 'Submitting...' : 'Save and Continue'}</button>
                </form>
            </div>
        </div>
    );
}

export default SignupThree;
