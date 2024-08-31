import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'sweetalert2/dist/sweetalert2.css';
import './Step2.css';

const MySwal = withReactContent(Swal);

function Step2() {
    const [loading, setLoading] = useState(false);
    const [days, setDays] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    function handleDays(e) {
        const day = e.target.value;
        if (e.target.checked) {
            setDays([...days, day]);
        } else {
            setDays(days.filter(d => d !== day));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const validationErrors = {};
        if (days.length === 0) validationErrors.days_available = 'Please select at least one lesson day.';
        if (!data.hours_per_day) validationErrors.hours_per_day = 'Hours per day is required.';
        if (!data.preferred_time) validationErrors.preferred_time = 'Preferred time is required.';
        if (!data.teaching_mode) validationErrors.teaching_mode = 'Teaching mode is required.';
        if (!data.how_long) validationErrors.how_long = 'Duration of the classes is required.';
        if (!data.to_start_how_soon) validationErrors.to_start_how_soon = 'Start time is required.';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }
        MySwal.fire({
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
            navigate('/dashboard');
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <div className='step2-mainwrapper burgundy'>
            <form onSubmit={handleSubmit} className='form'>
                <div className="step2-second-inner-wrapper-form">
                    <p>Schedule</p>
                    <div className="form-inputs">
                        <label className='header-label'>Lesson days</label><br />
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
                        {errors.days_available && <span className='error'>{errors.days_available}</span>}
                    </div>
                    <div className="form-input">
                        <label>Hours per day?</label>
                        <select name="hours_per_day" id="">
                            <option value="">Select hours</option>
                            <option value="One hour">One hour</option>
                            <option value="Two hours">Two hours</option>
                            <option value="Three hours">Three hours</option>
                            <option value="Four hours">Four hours</option>
                            <option value="Five hours">Five hours</option>
                        </select>
                        {errors.hours_per_day && <span className='error'>{errors.hours_per_day}</span>}
                    </div>
                    <div className="form-input">
                        <label>Preferred Time</label>
                        <select name="preferred_time" id="">
                            <option value="">Select time</option>
                            <option value="11:00am">11:00am</option>
                            <option value="11:30am">11:30am</option>
                            <option value="12:00pm">12:00pm</option>
                            <option value="12:30pm">12:30pm</option>
                            <option value="1:00pm">1:00pm</option>
                            <option value="1:30pm">1:30pm</option>
                            <option value="2:00pm">2:00pm</option>
                            <option value="2:30pm">2:30pm</option>
                            <option value="3:00pm">3:00pm</option>
                            <option value="3:30pm">3:30pm</option>
                            <option value="4:00pm">4:00pm</option>
                            <option value="4:30pm">4:30pm</option>
                            <option value="5:00pm">5:00pm</option>
                            <option value="5:30pm">5:30pm</option>
                        </select>
                        {errors.preferred_time && <span className='error'>{errors.preferred_time}</span>}
                    </div>
                    <div className="form-input">
                        <label>Mode of class:</label>
                        <select name="teaching_mode" id="">
                            <option value="">Select mode</option>
                            <option value="Physical">Physical</option>
                            <option value="Online">Online</option>
                        </select>
                        {errors.teaching_mode && <span className='error'>{errors.teaching_mode}</span>}
                    </div>
                    <div className="form-input">
                        <label>For how long?</label>
                        <select name="how_long" id="">
                            <option value="">Select duration</option>
                            <option value="1 Week">1 Week</option>
                            <option value="2 Weeks">2 Weeks</option>
                            <option value="3 Weeks">3 Weeks</option>
                            <option value="4 Weeks">4 Weeks</option>
                            <option value="Monthly">Monthly</option>
                        </select>
                        {errors.how_long && <span className='error'>{errors.how_long}</span>}
                    </div>
                    <div className="form-input">
                        <label>To start how soon?</label>
                        <select name="to_start_how_soon" id="">
                            <option value="">Select start time</option>
                            <option value="Immediately">Immediately</option>
                            <option value="In a few days">In a few days</option>
                            <option value="In a few weeks">In a few weeks</option>
                        </select>
                        {errors.to_start_how_soon && <span className='error'>{errors.to_start_how_soon}</span>}
                    </div>
                    <p className='redirect-text'>After you submit we will redirect you to pay one-off booking fee of #2000</p>
                    <button type='submit' disabled={loading}>
                        {loading ? 'Submitting...' : 'Save and Continue'}
                    </button>
                    <button>
                        <Link to="/fourth_step" className='h4'>Back</Link>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Step2;
