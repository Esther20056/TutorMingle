import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import './ResponsiveSignup.css';

function SignupThree() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [rate, setRate] = useState('');
    const [about_yourself, setAbout_yourself] = useState('');
    const [payment, setPayment] = useState('');
    const [terms_checkbox, setTerms_checkbox] = useState(false); 
    const [rateError, setRateError] = useState('');
    const [about_yourselfError, setAbout_yourselfError] = useState('');
    const [paymentError, setPaymentError] = useState('');
    const [terms_checkboxError, setTerms_checkboxError] = useState('');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const signupStep = localStorage.getItem('signupStep');
        if (signupStep && signupStep !== 'step4') {
            navigate(`/signup/${signupStep}`);
        }
    }, [navigate]);

    const validateForm = () => {
        let isValid = true;
        setAbout_yourselfError('');
        setRateError('');
        setPaymentError('');
        setTerms_checkboxError('');

        if (!about_yourself) {
            setAbout_yourselfError('About yourself is required.');
            isValid = false;
        }
        if (!rate) {
            setRateError('Hourly rate is required.');
            isValid = false;
        }
        if (!payment) {
            setPaymentError('Payment method is required.');
            isValid = false;
        }
        if (!terms_checkbox) {
            setTerms_checkboxError('You must agree to the terms and conditions.');
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
            text: '🎉 Congratulations! You have successfully completed step four of the form! 🎉',
            customClass: {
                popup: 'custom-swal-popup',
                title: 'custom-swal-title',
                content: 'custom-swal-content',
                confirmButton: 'custom-swal-confirm',
                cancelButton: 'custom-swal-cancel',
                icon: 'custom-swal-icon'
            }
        }).then(() => {
            localStorage.setItem('signupStep', 'step5');
            navigate('/signup/step5');
        }).finally(() => {
            setLoading(false);
        });
    };

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
                                    value={about_yourself} 
                                    onChange={(e) => setAbout_yourself(e.target.value)} 
                                />
                                {about_yourselfError && <p className="error">{about_yourselfError}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="signup-outer-wrapper">
                        <h4>Rates and Payment Preferences:</h4>
                        <div className="signup-inner-wrapper">
                            <div className="form-input-container">
                                <label htmlFor="rate">Hourly rate for tutoring services</label>
                                <div className="input-with-prefix">
                                    <span className="currency-prefix">₦</span>
                                    <input
                                        type="text"
                                        placeholder='e.g 3000.00 per hour'
                                        name="rate"
                                        defaultValue="3000.00"
                                        pattern="₦?[0-9]+(\.[0-9]{2})?"
                                        title="Please enter a valid amount in Nigerian Naira (₦)"
                                        value={rate} 
                                        onChange={(e) => setRate(e.target.value)} 
                                    />
                                    {rateError && <p className="error">{rateError}</p>}
                                </div>
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="payment">Payment Options - Cash or Direct Transfer</label>
                                <select 
                                    name="payment"
                                    id="payment"
                                    value={payment} 
                                    onChange={(e) => setPayment(e.target.value)} 
                                >
                                    <option value="">Select Payment Method</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Transfer">Transfer</option>
                                </select>
                                {paymentError && <p className="error">{paymentError}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="signup-outer-wrapper">
                        <h4>Terms and Conditions Agreement:</h4>
                        <div className="signup-inner-wrapper">
                            <div className="form-input-container agreement">
                                <label htmlFor="terms_checkbox">
                                    <Link to='/T&C'>Please read the Terms and Conditions before Signing up</Link>
                                </label>
                                <input 
                                    type="checkbox" 
                                    name="terms_checkbox" 
                                    id="terms_checkbox" 
                                    required 
                                    className='check-box' 
                                    checked={terms_checkbox}
                                    onChange={(e) => setTerms_checkbox(e.target.checked)} 
                                />
                                {terms_checkboxError && <p className="error">{terms_checkboxError}</p>}
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='button' disabled={loading}>
                        {loading ? 'Submitting...' : 'Save and Continue'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignupThree;

