import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import '../Components/HomeEducating/HomeEducatingLogin/Steps/Step2.css';

function TechSkillsThree() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [days, setDays] = useState([]);

    const handleDays = (e) => {
        const day = e.target.value;
        if (e.target.checked) {
            setDays([...days, day]);
        } else {
            setDays(days.filter(d => d !== day));
        }
    };

    const validateForm = (formData) => {
        const errors = {};
        if (!formData.get('starting_time')) errors.starting_time = 'Starting time is required';
        if (!formData.get('hours_per_day')) errors.hours_per_day = 'Hours per day is required';
        if (!formData.get('preferred_time')) errors.preferred_time = 'Preferred time is required';
        if (!formData.get('teaching_mode')) errors.teaching_mode = 'Teaching mode is required';
        if (!formData.get('how_long')) errors.how_long = 'Duration is required';
        if (!formData.get('how_soon')) errors.how_soon = 'Start time is required';
        if (days.length === 0) errors.days_available = 'At least one lesson day must be selected';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        const formData = new FormData(e.currentTarget);
        formData.append('days_available', JSON.stringify(days));

        const formErrors = validateForm(formData);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setLoading(false);
            return;
        }
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: '🎉 Congratulations! You have successfully completed Part 3 of the form! 🎉',
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    content: 'custom-swal-content',
                    confirmButton: 'custom-swal-confirm',
                    cancelButton: 'custom-swal-cancel',
                    icon: 'custom-swal-icon'
                }
            }).then(() => {
                navigate("/location");
            });
            setLoading(false);
        }, 1000); 
    };

    return (
        <div className='step2-mainwrapper cream'>
            <div className="step2-inner-wrapper">
                <form onSubmit={handleSubmit} className='form'>
                    <div className="step2-first-inner-wrapper-form">
                        <p>Schedule</p>
                        <div className="form-inputs">
                            <label htmlFor="" className='header-label'>Lesson days</label><br />
                            <div className="lesson-days-main-wrapper">
                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                    <div key={day} className="lesson-days-wrapper">
                                        <input type="checkbox" value={day.toLowerCase()} onChange={handleDays} />
                                        <label>{day}</label>
                                    </div>
                                ))}
                            </div>
                            {errors.days_available && <p className="error">{errors.days_available}</p>}
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Starting Time</label>
                            <input type="text" placeholder='e.g 3:00pm' name='starting_time' />
                            {errors.starting_time && <p className="error">{errors.starting_time}</p>}
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Hours per day</label>
                            <input type="text" placeholder='e.g 3hours per day' name='hours_per_day' />
                            {errors.hours_per_day && <p className="error">{errors.hours_per_day}</p>}
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Preferred Time</label>
                            <select name="preferred_time">
                                <option value="">Select</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Evening">Evening</option>
                            </select>
                            {errors.preferred_time && <p className="error">{errors.preferred_time}</p>}
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Mode of class:</label>
                            <select name="teaching_mode">
                                <option value="">Select</option>
                                <option value="Physical">Physical</option>
                                <option value="Online">Online</option>
                            </select>
                            {errors.teaching_mode && <p className="error">{errors.teaching_mode}</p>}
                        </div>
                        <div className="form-input">
                            <label htmlFor="">For how long</label>
                            <select name="how_long">
                                <option value="">Select</option>
                                <option value="1-Week">1 Week</option>
                                <option value="2-Weeks">2 Weeks</option>
                                <option value="3-Weeks">3 Weeks</option>
                                <option value="4-Weeks">4 Weeks</option>
                                <option value="Monthly">Monthly</option>
                            </select>
                            {errors.how_long && <p className="error">{errors.how_long}</p>}
                        </div>
                        <div className="form-input">
                            <label htmlFor="">To start how soon?</label>
                            <select name="how_soon">
                                <option value="">Select</option>
                                <option value="Immediately">Immediately</option>
                                <option value="In-a-few-days">In a few days</option>
                                <option value="In-a-few-weeks">In a few weeks</option>
                            </select>
                            {errors.how_soon && <p className="error">{errors.how_soon}</p>}
                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Submitting...' : 'Save and Continue'}
                        </button>
                        <button><Link to='/first-step'>Back</Link></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TechSkillsThree;
