import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './Signup.css';
import './ResponsiveSignup.css';

function SignupTwo() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [days, setDays] = useState([]);
    const [times, setTime] = useState([]);
    const [formData, setFormData] = useState({
        expert_subjects: '',
        expertise_area: '',
        classes_you_teach: '',
        years_of_experience: '',
        preferred_online_tool: '',
        teaching_mode: ''
    });

    useEffect(() => {
        const signupStep = localStorage.getItem('signupStep');
        if (signupStep && signupStep !== 'step2') {
            navigate(`/signup/${signupStep}`);
        }
    }, [navigate]);

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleDays(e) {
        const day = e.target.value;
        if (e.target.checked) {
            setDays([...days, day]);
        } else {
            setDays(days.filter(d => d !== day));
        }
    }

    function handleTime(e) {
        const time = e.target.value;
        if (e.target.checked) {
            setTime([...times, time]);
        } else {
            setTime(times.filter(t => t !== time));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        try {
            localStorage.setItem('formStep2Data', JSON.stringify({
                ...formData,
                days_available: days,
                time_available: times
            }));

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: '🎉 Congratulations! You have successfully completed step two of the form! 🎉',
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    content: 'custom-swal-content',
                    confirmButton: 'custom-swal-confirm'
                },
                confirmButtonText: 'Continue'
            }).then(() => {
                localStorage.setItem('signupStep', 'step3');
                navigate('/signup/step3');
            });
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Something went wrong. Please try again later.',
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    content: 'custom-swal-content',
                    confirmButton: 'custom-swal-confirm'
                },
                confirmButtonText: 'Okay'
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="main_Wrapper">
            <Link className="back-btn" to="/signup/step">Back</Link>
            <div className="signup">
                <form className="signup_container" onSubmit={handleSubmit}>
                    <div className="signup-outer-wrapper">
                        <h4>Professional Experience:</h4>
                        <div className="signup-inner-wrapper">
                            <div className="form-input-container">
                                <label htmlFor="expert_subjects">Subject(s) of expertise</label>
                                <input
                                    type="text"
                                    placeholder="Subjects you're proficient in teaching, separated by commas"
                                    name="expert_subjects"
                                    value={formData.expert_subjects}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="expertise_area">Specialized areas of knowledge</label>
                                <input
                                    type="text"
                                    placeholder="e.g early childhood education, language tutoring, web development, separated by commas"
                                    name="expertise_area"
                                    value={formData.expertise_area}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="classes_you_teach">Classes you teach</label>
                                <input
                                    type="text"
                                    placeholder="Enter the classes you teach, separated by commas"
                                    name="classes_you_teach"
                                    value={formData.classes_you_teach}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="years_of_experience">Years of Experience</label>
                                <input
                                    type="text"
                                    placeholder="e.g 2 years"
                                    name="years_of_experience"
                                    value={formData.years_of_experience}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="signup-outer-wrapper">
                        <h4>Availability:</h4>
                        <div className="signup-inner-wrapper">
                            <div className="form-input-container">
                                <label>Days available for tutoring sessions</label>
                                <div className="lesson-days-main-wrapper">
                                    {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                                        <div className="lesson-days-wrapper" key={day}>
                                            <input type="checkbox" value={day} onChange={handleDays} />
                                            <label>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="form-input-container">
                                <label className="header-label">Times available for tutoring sessions</label>
                                <div className="lesson-days-main-wrapper">
                                    {['11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm'].map(time => (
                                        <div className="lesson-days-wrapper" key={time}>
                                            <input id='lesson-days-input' type="checkbox" value={time} onChange={handleTime} />
                                            <label>{time}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="gender-container">
                                <label>Teaching in-person or online</label>
                                <p>Indicate if you prefer to teach online, physically (usually at the client's location) or both. To teach online, you must have a laptop and reliable internet connectivity.</p>
                                <div className="gender-input-container">
                                    {['Physical', 'Online', 'Both'].map(mode => (
                                        <div className="gender gender-two" key={mode}>
                                            <label>{mode}</label>
                                            <input
                                                type="radio"
                                                name="teaching_mode"
                                                value={mode}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="preferred_online_tool">Preferred Online Meeting Tool</label>
                                <input
                                    type="text"
                                    placeholder="e.g GoogleMeet"
                                    name="preferred_online_tool"
                                    value={formData.preferred_online_tool}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button" disabled={loading}>
                        {loading ? 'Submitting...' : 'Save and Continue'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignupTwo;
