import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './Signup.css';
import './ResponsiveSignup.css';
import axios from 'axios';

function SignupTwo() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [days, setDays] = useState([]);
    const [times, setTime] = useState([]);
    useEffect(() => {
        const signupStep = localStorage.getItem('signupStep');
        if (signupStep && signupStep !== 'step2') {
            navigate(`/signup/${signupStep}`);
        }
    }, [navigate]);
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
            setTime(times.filter(d => d !== time));
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        try {
            const formData = new FormData(e.currentTarget);
                formData.append('days_available', JSON.stringify(days));
                formData.append('time_available', JSON.stringify(times));
                await axios.post('http://localhost:8000/signuptwo/', formData);
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
                navigate('/signup/step3')
            });
        } catch (err) {
            if (err.response && err.response.data) {
                let errorMessages = '';
                for (let key in err.response.data) {
                    if (err.response.data.hasOwnProperty(key)) {
                        errorMessages += `${key}: ${err.response.data[key]}\n`;
                    }
                }
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed!',
                    text: errorMessages.trim() || 'Something went wrong. Please try again later.',
                    customClass: {
                        popup: 'custom-swal-popup',
                        title: 'custom-swal-title',
                        content: 'custom-swal-content',
                        confirmButton: 'custom-swal-confirm'
                    },
                    confirmButtonText: 'Okay'
                });
            } else {
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
            }
        } finally {
            setLoading(false);
        }
      
    }
    

    return (
        <div className="main_Wrapper">
            <Link className="back-btn" to="/signup/step">Back</Link>              
            <div className="signup">
                <form action="" className="signup_container" onSubmit={handleSubmit}>
                    <div className="signup-outer-wrapper">
                        <h4>Professional Experience:</h4>
                        <div className="signup-inner-wrapper">
                            <div className="form-input-container">
                                <label htmlFor="last_name">Subject(s) of expertise</label>
                                <input type="text" placeholder="Subjects you're proficient in teaching, separated by commas" name="expert_subjects" required />
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="expertise_area">Specialized areas of knowledge</label>
                                <input type="text" placeholder="e.g early childhood education, language tutoring, web development, separated by commas" name="expertise_area" required />
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="">Classes you teach</label>
                                <input
                                    type="text"
                                    placeholder="Enter the classes you teach, separated by commas"
                                    name="classes_you_teach"
                                    required
                                />
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="email">Years of Experience</label>
                                <input type="text" placeholder="e.g 2 years" name="years_of_experience" required />
                            </div>
                        </div>
                    </div>
                    <div className="signup-outer-wrapper">
                        <h4>Availability:</h4>
                        <div className="signup-inner-wrapper">
                            <div className="form-input-container">
                                <label>Days available for tutoring sessions</label>
                                <div className="lesson-days-main-wrapper">
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="monday" onChange={handleDays} />
                                        <label>Monday</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="tuesday" onChange={handleDays} />
                                        <label>Tuesday</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="wednesday" onChange={handleDays} />
                                        <label>Wednesday</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="thursday" onChange={handleDays} />
                                        <label>Thursday</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="friday" onChange={handleDays} />
                                        <label>Friday</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="saturday" onChange={handleDays} />
                                        <label>Saturday</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="sunday" onChange={handleDays} />
                                        <label>Sunday</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-input-container">
                                <label className="header-label">Times available for tutoring sessions</label>
                                <div className="lesson-days-main-wrapper">
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="11:00am" onChange={handleTime} />
                                        <label>11:00am</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="12:00pm" onChange={handleTime} />
                                        <label>12:00pm</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="1:00pm" onChange={handleTime} />
                                        <label>1:00pm</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="2:00pm" onChange={handleTime} />
                                        <label>2:00pm</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="3:00pm" onChange={handleTime} />
                                        <label>3:00pm</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="4:00pm" onChange={handleTime} />
                                        <label>4:00pm</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="5:00pm" onChange={handleTime} />
                                        <label>5:00pm</label>
                                    </div>
                                    <div className="lesson-days-wrapper">
                                        <input type="checkbox" value="6:00pm" onChange={handleTime} />
                                        <label>6:00pm</label>
                                    </div>
                                </div>
                            </div>

                            <div className="gender-container">
                                <label>Teaching in-person or online</label>
                                <p>Indicate if you prefer to teach online, physically (usually at the client's location) or both. To teach online, you must have a laptop and reliable internet connectivity.</p>
                                <div className="gender-input-container">
                                    <div className="gender">
                                        <label>Physical</label>
                                        <input type="radio" name="teaching_mode" value="Physical" />
                                    </div>
                                    <div className="gender">
                                        <label>Online</label>
                                        <input type="radio" name="teaching_mode" value="Online" />
                                    </div>
                                    <div className="gender">
                                        <label>Both</label>
                                        <input type="radio" name="teaching_mode" value="Both" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="email">Preferred Online Meeting Tool</label>
                                <input type="text" placeholder="e.g GoogleMeet" name="preferred_online_tool" required />
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


