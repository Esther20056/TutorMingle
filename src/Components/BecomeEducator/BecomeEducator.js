import React, { useState, useEffect } from 'react';
import './BecomeEducator.css';
import './BecomeEducatorResponsiveDesign.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { Link, useNavigate } from 'react-router-dom';
import Teacher from '../../Images/Teacher.jpg';
import Teach from '../../Images/Teach.png';
import { FaWrench, FaBrain, FaWallet } from "react-icons/fa";
import axios from 'axios';
import Details from '../ApiFolder/Teacher';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import tutors from '../../Tutordata';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function BecomeEducator() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [ModalOpen, setModalOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [hoveredTutor, setHoveredTutor] = useState(null);
    const [visible, setVisible] = useState(true); 

    const formatPhoneNumber = (input) => {
        const cleaned = ('' + input).replace(/\D/g, '');
        const formatted = cleaned.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
        setPhoneNumber(formatted);
    };
    const handleChange = (e) => {
        const input = e.target.value;
        formatPhoneNumber(input);
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    useEffect(() => {
        AOS.init(); 
        const interval = setInterval(() => {
          setVisible(prevVisible => !prevVisible); 
        }, 9000); 
        return () => clearInterval(interval);
      }, []);
    async function handleSubmit(w) {
        w.preventDefault();
        let form = new FormData(w.currentTarget);
        try {
            await axios.post("http://localhost:8000/first/", form);
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
                navigate("/signup/step");
            });
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: err?.response?.data ? 'Failed to submit form. Please check your inputs and try again.' : 'Something went wrong. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/teacherdetails/1'); // Replace 1 with the actual ID you want to fetch
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const handleNavigate = () => {
        navigate('/commentform');
    };
    return (
        <div style={{ paddingTop: "4.7rem" }}>
            <div id="carouselId" className="carousel slider" data-bs-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src={Teach} className="w-100 d-block" alt="First slide" />
                        <div className="carousel-body">
                            <h2>Share your passion by teaching subjects you love.</h2>
                            <p>TutorMingle bridges the gap between expert educators and students seeking personalized one-on-one lessons.</p>
                            <button onClick={() => setModalOpen(!ModalOpen)}>Get started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="first-content-container">
                <div className="wrapper">
                    <div className="first-content" style={{ flexBasis: "35%" }}>
                        <h2>1</h2>
                        <div className="container">
                            <p className="f-p">Choose Your Students</p>
                            <p>Choose students who align with your preferred location and schedule, whether you prefer face-to-face interactions or virtual sessions.</p>
                        </div>
                    </div>
                    <div className="first-content" style={{ flexBasis: "30%" }}>
                        <h2>2</h2>
                        <div className="container">
                            <p className="f-p">SET YOUR RATE</p>
                            <p>Compensation should align with your qualifications and experience, reflecting your true value and expertise.</p>
                        </div>
                    </div>
                    <div className="first-content" style={{ flexBasis: "35%" }}>
                        <h2>3</h2>
                        <div className="container">
                            <p className="f-p">Get Paid</p>
                            <p>Direct deposit ensures timely and reliable payments directly into your account, offering convenience and peace of mind.</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => setModalOpen(!ModalOpen)}>Get started</button>
            </div>
            <div className="educators-display">
                <h1>Educate anytime, anywhere, on any topic.</h1>
                <p>From Academics, to Test Prep, Tech Skills and Languages, we have students looking for educators in various subjects.</p>
                <div className="wrapper">
                    {tutors.map((detail, i) => (
                        <div 
                            key={i}
                            className="tutor-card"
                            onMouseEnter={() => setHoveredTutor(detail.id)}
                            onMouseLeave={() => setHoveredTutor(null)}
                        >
                            <Details
                                id={detail.id}
                                image={detail.image}
                                age={detail.age}
                                lastName={detail.lastName}
                                firstName={detail.firstName}
                                subject={detail.subject}
                            />
                            {hoveredTutor === detail.id && (
                                <div className="tutor-overlay">
                                    <p>{detail.shortWriteUp}</p>
                                    <Link to={`/educator_display/${detail.id}`} className="more-info-button">More Info</Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="how-to-become-tutor">
                <h1>How to become an educator</h1>
                <div className="wrap">
                    <div className="how-to-become-tutor-wrap">
                        <div className="inner-content-wrapper">
                            <FaWrench className='icon' />
                            <div className="content-wrap">
                                <h5>Craft your areas of focus</h5>
                                <small>Establishing a subject on TutorMingle is a breeze. Just fill out the application, list the subjects you're keen on teaching, breeze through a brief test, detail your proficiency, and begin receiving tutoring opportunities tailored to your expertise!</small>
                            </div>
                        </div>
                        <div className="inner-content-wrapper">
                            <FaBrain className='icon' />
                            <div className="content-wrap">
                                <h5>Instruct like an expert</h5>
                                <small>TutorMingle links you with individuals seeking guidance in your areas of expertise. Showcase your mastery through exceptional lessons and surpass expectations to aid our clients in reaching their objectives.</small>
                            </div>
                        </div>
                        <div className="inner-content-wrapper">
                            <FaWallet className='icon' />
                            <div className="content-wrap">
                                <h5>Receive your earnings</h5>
                                <small>Rest assured, with TutorMingle, your payments are prompt and hassle-free, allowing you to dedicate your full attention to teaching. Clients settle fees prior to lessons, ensuring you receive your payment promptly after each session.</small>
                            </div>
                        </div>
                        <button onClick={() => setModalOpen(!ModalOpen)}>Get started</button>
                    </div>
                    <div className="how-img-container">
                        <img src={Teacher} alt="" />
                    </div>
                </div>
            </div>
                <div className={`comment-pop-up ${visible ? 'fade-in' : 'fade-out'}`} data-aos="fade-in" data-aos-duration="9000">
                    <div className="popup-content">
                        <h2>We'd Love Your Feedback!</h2>
                        <p>Please rate your experience and share any comments. Your insights are crucial in helping us enhance our services. Thank you for taking the time to provide your valuable input!</p>
                        <button onClick={handleNavigate}>Go to Comment Form</button>
                        
                    </div>
                </div>
            <form action="" className={ModalOpen ? 'open' : ""} id="form" onSubmit={(w) => handleSubmit(w)}>
                <h4>Register here</h4>
                <div className="input-wrapper">
                    <div className="input-container">
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' placeholder='Your email address' />
                    </div>
                    <div className="input-container">
                        <label htmlFor="">Phone</label>
                        <input type="text" id="phoneNumber" name="phone" value={phoneNumber} onChange={handleChange} placeholder="Your phone number" maxLength={13} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="">Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                value={password}
                                name='password'
                                placeholder='Your Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordVisible ? (
                                <BsEyeSlash
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
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
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                    }}
                                />
                            )}
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
    );
}

export default BecomeEducator;
