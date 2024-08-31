import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Language.css';

function LanguageStepTwo() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(true); 
  const [days, setDays] = useState([]);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    program_duration: '',
    hours_per_day: '',
    start_time: '',
    student_level: ''
  });

  useEffect(() => {
    AOS.init(); 
    const interval = setInterval(() => {
      setVisible(prevVisible => !prevVisible); 
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  const handleDays = (e) => {
    const day = e.target.value;
    if (e.target.checked) {
      setDays([...days, day]);
    } else {
      setDays(days.filter(d => d !== day));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    
    console.log('Days available:', days);
    console.log('Form Data:', { ...formData, days_available: days });

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: '🎉 Congratulations! You have successfully completed the second step of the form! 🎉',
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        content: 'custom-swal-content',
        confirmButton: 'custom-swal-confirm',
        cancelButton: 'custom-swal-cancel',
        icon: 'custom-swal-icon'
      }
    }).then(() => {
      navigate("/languagestepthree");
    });
    
    setLoading(false);
  };

  return (
    <div className='language-main-container'>
      <div className="language-wrapper-two">
        <div 
          className={`language-wrapper-two-inner ${visible ? 'fade-in' : 'fade-out'}`}
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <h3>Empower Your Communication Skills</h3>
          <p>Whether you want to learn a new language for personal growth or professional opportunities, we have experienced educators ready to guide you. Our personalized language programs are designed to meet your specific needs and schedule. Start your journey today and open new doors with the power of language!</p>
        </div>
      </div>
      <div className="language-wrapper">
        <div className="language-inner-wrapper">
          <div className="language-header-texts">
            <h2>Second Step</h2>
            <p>Please give us some more details</p>
          </div>
          <form onSubmit={handleSubmit} className='language-form'>
            <div className="language-input-container">
              <label>Choose the days you want lessons to hold</label>
              <div className="lesson-days-main-wrapper">
                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                  <div key={day} className="lesson-days-wrapper">
                    <input
                      type="checkbox"
                      value={day}
                      onChange={handleDays}
                    />
                    <label>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="language-input-container">
              <label>Duration?</label>
              <select name="program_duration" value={formData.program_duration} onChange={handleChange}>
                <option value="" disabled>Select Duration</option>
                <option value="1 Week">1 Week</option>
                <option value="2 Weeks">2 Weeks</option>
                <option value="3 Weeks">3 Weeks</option>
                <option value="4 Weeks">4 Weeks</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="language-input-container">
              <label>Hours per day?</label>
              <select name="hours_per_day" value={formData.hours_per_day} onChange={handleChange}>
                <option value="" disabled>Select Hours</option>
                <option value="1 hour">1 hour</option>
                <option value="1 hour 30 minutes">1 hour 30 minutes</option>
                <option value="2 hours">2 hours</option>
                <option value="2 hours 30 minutes">2 hours 30 minutes</option>
                <option value="3 hours">3 hours</option>
                <option value="4 hours">4 hours</option>
              </select>
            </div>
            <div className="language-input-container">
              <label>From what time?</label>
              <input
                type="text"
                placeholder='e.g 4:00pm or 5:30pm'
                name='start_time'
                pattern="^([01]?[0-9]|2[0-3]):([0-5][0-9]) ?(AM|PM)$"
                title="Enter time in 12-hour format (e.g., 4:00 PM)"
                value={formData.start_time}
                onChange={handleChange}
              />
            </div>
            <div className="language-input-container">
              <label>Level of student(s)</label>
              <input
                type="text"
                name='student_level'
                placeholder='e.g Nursery 2, SSS 3, Beginner, Adult etc.'
                value={formData.student_level}
                onChange={handleChange}
              />
            </div> 
            <button type="submit" disabled={loading} className='language-btn'>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>  
        </div>  
      </div>
    </div>
  );
}

export default LanguageStepTwo;
