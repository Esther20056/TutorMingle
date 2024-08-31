import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Language.css';

function LanguageStepThree() {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [visible, setVisible] = useState(true); 
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate()

    const formatPhoneNumber = (input) => {
        const cleaned = ('' + input).replace(/\D/g, '');
        const formatted = cleaned.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
        setPhoneNumber(formatted);
    };

    const handleChange = (e) => {
        const input = e.target.value;
        formatPhoneNumber(input);
    };

    useEffect(() => {
        AOS.init(); 
        const interval = setInterval(() => {
            setVisible(prevVisible => !prevVisible); 
        }, 2000); 
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        const formData = new FormData(e.currentTarget);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        console.log('Form Data Submitted:', formDataObject);
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
             navigate("/serviceFee");
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
                        <h2>Final Step</h2>
                    </div>
                    <form onSubmit={handleSubmit} className='language-form'>
                        <div className="language-input-container">
                            <label htmlFor="">Tell us your goal</label>
                            <textarea name="goal" id="goal" rows={8} colums={50} placeholder='What is your specific goal for this lesson? Be as detailed as possible to help us get the most suitable tutor.'></textarea>
                        </div>
                        <div className="language-input-container">
                            <label htmlFor="">Last name</label>
                            <input type="text" placeholder='Last name' name='last_name'/>
                        </div>
                        <div className="language-input-container">
                            <label htmlFor="">First name</label>
                            <input type="text" placeholder='First name' name='first_name'/>
                        </div>
                        <div className="language-input-container">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='email address' name='email'/>
                        </div>
                        <div className="language-input-container">
                            <label htmlFor="">Phone number</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phone"
                                value={phoneNumber}
                                onChange={handleChange}
                                placeholder="Enter phone number"
                                maxLength={13}
                            />
                        </div>
                        <div className="language-input-container">
                            <label htmlFor="">Preferred gender of educator</label>
                            <select name="preferred_gender" id="">
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="A">Any Gender</option>
                            </select>
                        </div>
                        <div className="language-input-container">
                            <label htmlFor="">Mode of class</label>
                            <select name="teaching_mode" id="">
                                <option value="Physical">Physical</option>
                                <option value="Online">Online</option>
                            </select>
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

export default LanguageStepThree;
