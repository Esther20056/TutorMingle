import React, {useState, useEffect }  from 'react'
import TMSecondBanner from '../../Images/TMSecondBanner.png'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './HomeEducating.css'
import { Link, useNavigate} from 'react-router-dom'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import axios from 'axios'

function Homeeducating() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [ModalOpen, setModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);

  const formatPhoneNumber = (input) => {
      const cleaned = ('' + input).replace(/\D/g, '');
      const formatted = cleaned.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
      setPhoneNumber(formatted);
  };
  const handleChange = (e) => {
      const input = e.target.value;
      formatPhoneNumber(input);
      setPhone(input);
  };
  const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
  };
    
      const validateForm = () => {
        let isValid = true;
        setEmailError('');
        setPhoneError('');
        setPasswordError('');

        if (!email) {
            setEmailError('Email is required.');
            isValid = false;
        }
        if (!phone) {
            setPhoneError('Phone number is required.');
            isValid = false;
        }
        if (!password) {
            setPasswordError('Password is required.');
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
            text: '🎉 Welcome to TutorMingle! Your account has been successfully created 🎉',
            customClass: {
                popup: 'custom-swal-popup',
                title: 'custom-swal-title',
                content: 'custom-swal-content',
                confirmButton: 'custom-swal-confirm',
                cancelButton: 'custom-swal-cancel',
                icon: 'custom-swal-icon'
            }
        }).then(() => {
            navigate("/homeducatingform");
        }).finally(() => {
            setLoading(false);
        });
    };
  return (
    <div className='home-educating-container'>
       {/* banner starts here */}
        <div id="carouselId" className="carousel home-educating-slider" data-bs-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active d-flex align-items-center">
                        <img
                            src={TMSecondBanner}
                            className="w-100 d-block"
                            alt="First slide"
                        />
                        <div className="carousel-body text-start">
                            <p>Tailored homeschooling that empowers your children to excel in exams, enhances their self-assurance, and achieves higher academic results</p>
                            <button onClick={() => setModalOpen(!ModalOpen)}>Get a home educator</button>
                        </div>
                    </div>
                </div>
        </div>
        {/* banner ends here */}
         {/* first-content starts here */}
         <div className="first-content-container">
            <h2 className="header-text">Your perfect instructor awaits.</h2>
            <h5 className='header-text-two'>TutorMingle simplifies learning by connecting you with the ideal instructor, managing bookings, and facilitating ongoing communication, so you can focus on mastering your interests without the hassle of logistics.</h5>
            <div className="wrapper">
                <div className="first-content">
                    <h2>1</h2>
                    <div className="container">
                        <p className="f-p">Let us know where you need support and guidance</p>
                        <p>Link up with professionals proficient in various academic fields and technology.</p>
                    </div>
                </div>
                <div className="first-content">
                    <h2>2</h2>
                    <div className="container">
                        <p className="f-p">Choose The Educator You Want</p>
                        <p>Search online for a educators with the right qualifications, availability and hourly rates.</p>
                    </div>
                </div>
                <div className="first-content">
                    <h2>3</h2>
                    <div className="container">
                        <p className="f-p">Schedule your session</p>
                        <p>Tell your educator when you’d like to meet, and only pay for the time you need.</p>
                    </div>
                </div>
                
            </div>
            <button onClick={() => setModalOpen(!ModalOpen)}>Get started</button>
          </div>
          {/* first-content ends here */}
          <form action="" className={ModalOpen ? 'open' : ""} id="form" onSubmit={(w) => handleSubmit(w)}>
                <h4>Register here</h4>
                <div className="input-wrapper">
                <div className="input-container">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            {emailError && <p className="error">{emailError}</p>}
                        </div>
                        <div className="input-container">
                            <label htmlFor="phone">Phone:</label>
                            <input 
                                type="text" 
                                id="phone" 
                                value={phoneNumber} 
                                onChange={handleChange} 
                            />
                            {phoneError && <p className="error">{phoneError}</p>}
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Password:</label>
                            <div style={{ position: 'relative' }}>
                            <input 
                                type={passwordVisible ? 'text' : 'password'} 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                              {passwordVisible ? (
                                <BsEyeSlash
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '40%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                    }}
                                />
                            ) : (
                                <BsEye
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '40%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                    }}
                                />
                            )}
                            {passwordError && <p className="error">{passwordError}</p>}
                            </div>
                        </div>
                    <button id='form-btn' style={{ fontWeight: "600" }} type='submit'>Register</button>
                    <button id='form-btn' type="button" style={{ color: "#FFF8DC", fontWeight: "600" }} onClick={() => setModalOpen(false)}>Cancel</button>
                </div>
                <div className="log-in-container">
                    <p>Already have an account?</p>
                    <Link to="/login">Log In</Link>
                </div>
            </form>
    </div>
  )
}

export default Homeeducating