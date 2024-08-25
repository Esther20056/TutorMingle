import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './Signup.css';
import axios from 'axios';

function TutoringExperience() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [hasWorkExperience, setHasWorkExperience] = useState(false);
    const [noWorkExperience, setNoWorkExperience] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        companyAddress: '',
        companyPhoneNumber: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const signupStep = localStorage.getItem('signupStep');
        if (signupStep && signupStep !== 'step3') {
            navigate(`/signup/${signupStep}`);
        }
    }, [navigate]);

    const formatPhoneNumber = (input) => {
        const cleaned = ('' + input).replace(/\D/g, '');
        if (cleaned === '') {
            setPhoneNumber('');
            return;
        }
        const formatted = cleaned.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
        setPhoneNumber(formatted);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'companyPhoneNumber') {
            formatPhoneNumber(value);
        }
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleWorkExperienceCheckboxChange = (event) => {
        setHasWorkExperience(event.target.checked);
        if (event.target.checked) {
            setNoWorkExperience(false);
        }
    };

    const handleNoWorkExperienceCheckboxChange = (event) => {
        setNoWorkExperience(event.target.checked);
        if (event.target.checked) {
            setHasWorkExperience(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (hasWorkExperience) {
            const { companyName, companyAddress, companyPhoneNumber } = formData;
            if (!companyName || !companyAddress || !companyPhoneNumber) {
                Swal.fire({
                    icon: 'error',
                    title: 'Validation Error!',
                    text: 'Please fill out all required fields.',
                }).then(() => {
                    setLoading(false);
                });
                return;
            }
        } else if (!noWorkExperience) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error!',
                text: 'Please specify whether you have work experience or not.',
            }).then(() => {
                setLoading(false);
            });
            return;
        }

        try {
            await axios.post('http://localhost:8000/tutor_experience/', {
                user_id: 3,
                has_work_experience: hasWorkExperience,
                no_work_experience: noWorkExperience,
                company_name: formData.companyName,
                company_address: formData.companyAddress,
                company_phone_number: phoneNumber
            });

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: '🎉 Congratulations! You have successfully completed step three of the form! 🎉',
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    content: 'custom-swal-content',
                    confirmButton: 'custom-swal-confirm',
                    cancelButton: 'custom-swal-cancel',
                    icon: 'custom-swal-icon'
                }
            }).then(() => {
                localStorage.setItem('signupStep', 'step4');
                navigate("/signup/step4");
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Submission Error!',
                text: 'There was an error submitting your data.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='main_Wrapper'>
            <Link className="back-btn" to="/signup/step2">Back</Link>
            <div className="signup">
                <form className="signup_container" onSubmit={handleSubmit}>
                    <div className="signup-outer-wrapper">
                        <h4>Previous Work Experiences:</h4>
                        <div className="signup-inner-wrapper">
                            <div className="form-input-container work_container">
                                <label htmlFor="has_work_experience" style={{fontSize: '1.3rem'}}>Do you have previous work experience?</label>
                                <input
                                    type="checkbox"
                                    id="has_work_experience"
                                    className='work_experience'
                                    name="has_work_experience"
                                    checked={hasWorkExperience}
                                    onChange={handleWorkExperienceCheckboxChange}
                                />
                            </div>
                            {hasWorkExperience && (
                                <div className="work-experience-fields">
                                    <div className="form-input-container">
                                        <label htmlFor="companyName">Company Name</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            placeholder="Company name"
                                            required
                                        />
                                    </div>
                                    <div className="form-input-container">
                                        <label htmlFor="companyAddress">Company Address</label>
                                        <input
                                            type="text"
                                            name="companyAddress"
                                            value={formData.companyAddress}
                                            onChange={handleChange}
                                            placeholder="Company address"
                                            required
                                        />
                                    </div>
                                    <div className="form-input-container">
                                        <label htmlFor="companyPhoneNumber">Company Phone Number</label>
                                        <input
                                            type="text"
                                            name="companyPhoneNumber"
                                            value={phoneNumber}
                                            onChange={handleChange}
                                            placeholder="Company phone number"
                                            maxLength={13}
                                            required
                                        />
                                    </div>
                                    <p className="pt-4">Note: Fill out the fields for at least one company.</p>
                                </div>
                            )}
                            <div className="form-input-container work_container">
                                <label htmlFor="no_work_experience" style={{fontSize: '1.3rem'}}>No previous work experience</label>
                                <input
                                    type="checkbox"
                                    className='work_experience'
                                    id="no_work_experience"
                                    name="no_work_experience"
                                    checked={noWorkExperience}
                                    onChange={handleNoWorkExperienceCheckboxChange}
                                />
                            </div>
                            <button type='submit' className='button' disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TutoringExperience;
