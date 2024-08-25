import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import '../Components/HomeEducating/HomeEducatingLogin/Steps/Step2.css'

function TechSkillsThree() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [days, setDays] = useState([]);
    function handleDays(e) {
        const day = e.target.value;
        if (e.target.checked) {
            setDays([...days, day]);
        } else {
            setDays(days.filter(d => d !== day));
        }
    }   
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        try {
            const formData = new FormData(e.currentTarget);
            formData.append('days_available', JSON.stringify(days));
            await axios.post("http://localhost:8000/techskillthree/", formData);
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
    <div className='step2-mainwrapper cream'>
        <div className="step2-inner-wrapper">
            <form action="" className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className="step2-first-inner-wrapper-form">
                <p>Schedule</p>
                <div className="form-inputs">
                    <label htmlFor="" className='header-label'>Lesson days</label><br/>
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
                <div className="form-input">
                    <label htmlFor="">Starting Time</label>
                    <input type="text" placeholder='e.g 3:00pm' name='starting_time'/>
                </div>
                <div className="form-input">
                    <label htmlFor="">Hours per day</label>
                    <input type="text" placeholder='e.g 3hours per day' name='hours_per_day'/>
                </div>
                <div className="form-input">
                    <label htmlFor="">Preferred Time</label>
                     <select name="preferred_time" id="">
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                     </select>
                </div>
                <div className="form-input">
                    <label htmlFor="">Mode of class:</label>
                    <select name="teaching_mode" id="">
                        <option value="Physical">Physical</option>
                        <option value="Online">Online</option>
                    </select>
                </div>
                <div className="form-input">
                    <label htmlFor="">For how long</label>
                      <select name="how_long" id="">
                        <option value="1 Week">1 Week</option>
                        <option value="2 Weeks">2 Weeks</option>
                        <option value="3 Weeks">3 Weeks</option>
                        <option value="4 Weeks">4 Weeks</option>
                        <option value="Monthly">Monthly</option>
                        </select> 
                </div>
                <div className="form-input">
                    <label htmlFor="">To start how soon?
                    </label>
                  <select name="how_soon" id="">
                  <option value="Immediately">Immediately</option>
                    <option value="In a few days">In a few days</option>
                    <option value="In a few weeks">In a few weeks</option>
                    <option value=""></option>
                  </select>
                </div>
                <button type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Save and Continue'}
                    </button>
                <button><Link to='/first-step'>Back</Link></button>
                </div>
            </form>
            </div>
    </div>
  )
}

export default TechSkillsThree