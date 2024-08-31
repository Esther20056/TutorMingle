import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Language.css';
import './LanguageResponsive.css';

function Language() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    language: '',
    address: '',
    city: '',
    state: '',
    students: '',
    howSoon: ''
  });
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init(); 
    const interval = setInterval(() => {
      setVisible(prevVisible => !prevVisible); 
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

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
    console.log('Form Data:', formData);
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: '🎉 Congratulations! You have successfully completed the first step of the form! 🎉',
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        content: 'custom-swal-content',
        confirmButton: 'custom-swal-confirm',
        cancelButton: 'custom-swal-cancel',
        icon: 'custom-swal-icon'
      }
    }).then(() => {
      navigate("/languagesteptwo");
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
            <h2>Learn any Language</h2>
            <p>Get an experienced Language educator in your area</p>
          </div>
          <form onSubmit={handleSubmit} className='language-form'>
            <div className="language-input-container">
              <label htmlFor="language">Select Language</label>
              <select
                name="language"
                id="language"
                value={formData.language}
                onChange={handleChange}
              >
                <option value="">Select a language</option>
                <option value="Yoruba">Yoruba Language</option>
                <option value="Igbo">Igbo Language</option>
                <option value="French">French Language</option>
                <option value="Hausa">Hausa Language</option>
                <option value="German">German Language</option>
                <option value="Spanish">Spanish Language</option>
                <option value="Arabic">Arabic Language</option>
                <option value="Chinese">Chinese Language</option>
              </select>
            </div>
            <div className="language-input-container">
              <label htmlFor="address">Where do you stay?</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder='e.g plot 256 Norus Close, Omole'
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="language-input-container">
              <label htmlFor="city">City or nearest bus stop</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder='e.g Ogunnusi bus stop'
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="language-input-container">
              <label htmlFor="state">State of Residence</label>
              <select
                name="state"
                id="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select a state</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>
            </div>
            <div className="language-input-container">
              <label htmlFor="students">How many students</label>
              <select
                name="students"
                id="students"
                value={formData.students}
                onChange={handleChange}
              >
                <option value="">Select number of students</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="language-input-container">
              <label htmlFor="howSoon">To start how soon?</label>
              <select
                name="howSoon"
                id="howSoon"
                value={formData.howSoon}
                onChange={handleChange}
              >
                <option value="">Select timing</option>
                <option value="Immediately">Immediately</option>
                <option value="In a few days">In a few days</option>
                <option value="In a few weeks">In a few weeks</option>
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

export default Language;
