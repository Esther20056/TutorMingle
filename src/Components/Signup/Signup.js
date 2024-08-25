import React, { useState,useEffect } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { saveSignUpStep } from '../../ComponentsTwo/saveSignUpStep';

function Signup() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const signupStep = localStorage.getItem('signupStep');
        const signupComplete = localStorage.getItem('signupComplete') === 'true';
    
        if (!signupComplete) {
            if (signupStep) {
                navigate(`/signup/${signupStep}`);
            } else {
                navigate('/signup/step');
            }
        }
    }, [navigate]);
    
    const formatPhoneNumber = (input) => {
        const cleaned = ('' + input).replace(/\D/g, '');
        const formatted = cleaned.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
        setPhoneNumber(formatted);
    };

    const handleChange = (e) => {
        const input = e.target.value;
        formatPhoneNumber(input);
    };

    const validateForm = (formData) => {
        let valid = true;
        const newErrors = {};

        if (!phoneNumber) {
            newErrors.phoneNumber = 'Phone number is required';
            valid = false;
        }
        if (!formData.get('first_name')) {
            newErrors.first_name = 'First name is required';
            valid = false;
        }
        if (!formData.get('last_name')) {
            newErrors.last_name = 'Last name is required';
            valid = false;
        }
        const email = formData.get('email');
        if (!email) {
            newErrors.email = 'Email address is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email address';
            valid = false;
        }
        if (!formData.get('birthday')) {
            newErrors.birthday = 'Birthday is required';
            valid = false;
        }
        if (!formData.get('nationality')) {
            newErrors.nationality = 'Nationality is required';
            valid = false;
        }
        const gender = formData.get('gender');
        if (!gender) {
            newErrors.gender = 'Please select gender';
            valid = false;
        }
        const identification = formData.get('identification');
        if (!identification) {
            newErrors.identification = 'Identification document is required';
            valid = false;
        }
        const profile = formData.get('profile');
        if (!profile) {
            newErrors.profile = 'Profile picture is required';
            valid = false;
        }
        const state = formData.get('state');
        if (!state) {
            newErrors.state = 'State of residence is required';
            valid = false;
        }
        const region = formData.get('region');
        if (!region) {
            newErrors.region = 'Region is required';
            valid = false;
        }
        if (!formData.get('address')) {
            newErrors.address = 'Street address is required';
            valid = false;
        }
        const grade = formData.get('grade');
        if (!grade) {
            newErrors.grade = 'Academic record is required';
            valid = false;
        }
        const degree = formData.get('degree');
        if (!degree) {
            newErrors.degree = 'Degree earned is required';
            valid = false;
        }
        const course = formData.get('course');
        if (!course) {
            newErrors.course = 'Major/Area of study is required';
            valid = false;
        }
        if (!formData.get('school_name')) {
            newErrors.school_name = 'Educational institution name is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (!validateForm(formData)) {
            return;
        }
        setLoading(true);
        setErrors({});

        try {
            await axios.post('http://localhost:8000/aboutuser/', formData);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: '🎉 Congratulations! You have successfully completed step one of the form! 🎉',
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    content: 'custom-swal-content',
                    confirmButton: 'custom-swal-confirm'
                },
                confirmButtonText: 'Continue'
            }).then(() => {
                saveSignUpStep('step2');
                navigate('/signup/step2');
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
    };

    return (
        <div className="main_Wrapper">
            <div className="top d-flex px-2">
                <Link className="back-btn" to="/becomeEducator">
                    Back
                </Link>
                <marquee behavior="alternate" direction="right">
                    You must be 18 or above to apply
                </marquee>
            </div>
            <div className="signup">
                <p>Please enter your information accurately. Your names and date of birth should match those on your valid means of identity.</p>
                <form action="" className="signup_container" onSubmit={handleSubmit}>
                    {/* Personal Information */}
                    <div className="signup-outer-wrapper">
                        <h4>Personal Information:</h4>
                        <div className="signup-inner-wrapper">
                            <div className="form-input-container">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" placeholder="Your first name" name="first_name" required />
                                {errors.first_name && <span className="error">{errors.first_name}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" placeholder="Your last name" name="last_name" required />
                                {errors.last_name && <span className="error">{errors.last_name}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" placeholder="Your email address" name="email" required />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="birthday">Birthday</label>
                                <input type="date" placeholder="Your date of birth" name="birthday" required />
                                {errors.birthday && <span className="error">{errors.birthday}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phone"
                                    value={phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                    maxLength={13}
                                />
                                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="nationality">Nationality</label>
                                <input type="text" name="nationality" required />
                                {errors.nationality && <span className="error">{errors.nationality}</span>}
                            </div>
                            <div className="gender-container">
                                <small style={{ fontSize: '1.2rem', fontWeight: '600' }}>Gender</small>
                                <div className="gender-input-container">
                                    <div className="gender">
                                        <label htmlFor="gender">Male</label>
                                        <input type="radio" name="gender" value="M" />
                                    </div>
                                    <div className="gender">
                                        <label htmlFor="gender">Female</label>
                                        <input type="radio" name="gender" value="F" />
                                    </div>
                                </div>
                                {errors.gender && <span className="error">{errors.gender}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="identification">Identification e.g NIN, Drivers License or Passport</label>
                                <input type="file" name="identification" required style={{ backgroundColor: '#fff', outline: 'none', paddingTop: '0.8rem' }} />
                                {errors.identification && <span className="error">{errors.identification}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="profile">Profile Picture</label>
                                <input type="file" name="profile" required style={{ backgroundColor: '#fff', outline: 'none', paddingTop: '0.8rem' }} />
                                {errors.profile && <span className="error">{errors.profile}</span>}
                            </div>
                        </div>
                    </div>

                    {/* Address Information */}
                    <div className="signup-outer-wrapper">
                        <h4>Address Information</h4>
                        <div className="signup-inner-wrapper">
                            <div className="form-input-container">
                                <label htmlFor="states"> State of Residence </label>
                                <select name='state'>
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
                                {errors.state && <span className="error">{errors.state}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="region">Region</label>
                                <input type="text" name='region' placeholder='e.g Ikeja'/>
                                {errors.region && <span className="error">{errors.region}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="address">Your street address</label>
                                <input type="text" placeholder="enter your street address" name="address" required />
                                {errors.address && <span className="error">{errors.address}</span>}
                            </div>
                        </div>
                    </div>

                    {/* Educational Background */}
                    <div className="signup-outer-wrapper">
                        <h4>Educational Background:</h4>
                        <div className="signup-inner-wrapper">
                            <div className="form-input-container">
                                <label htmlFor="school_name">Educational Institution(s) Attended</label>
                                <input type="text" placeholder="Your Institution/School name" name="school_name" required />
                                {errors.school_name && <span className="error">{errors.school_name}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="course">Major/Area of Study</label>
                                <select name="course">
                                    <option value="Biological and Physical Sciences">Biological and Physical Sciences</option>
                                    <option value="Engineering and Technology">Engineering and Technology</option>
                                    <option value="Medical, Nursing and Clinical Sciences">Medical, Nursing and Clinical Sciences</option>
                                    <option value="Languages, Linguistic and Communication">Languages, Linguistic and Communication</option>
                                    <option value="Design and Architecture">Design and Architecture</option>
                                    <option value="Social Sciences, History and Law">Social Sciences, History and Law</option>
                                    <option value="Arts, Music, and Humanities">Arts, Music, and Humanities</option>
                                    <option value="Business, Finance and Administration">Business, Finance and Administration</option>
                                    <option value="Education - Math, Technology and Sciences">Education - Math, Technology and Sciences</option>
                                    <option value="Education - Art, Development and Humanities">Education - Art, Development and Humanities</option>
                                    <option value="Education - Counselling, Special Needs, General">Education - Counselling, Special Needs, General</option>
                                    <option value="Education - Business and Management">Education - Business and Management</option>
                                </select>
                                {errors.course && <span className="error">{errors.course}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="start_year">Start Year</label>
                                <input type="date" name="start_year" required />
                                {errors.start_year && <span className="error">{errors.start_year}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="end_year">End Year</label>
                                <input type="date" name="end_year" required />
                                {errors.end_year && <span className="error">{errors.end_year}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="grade">Academic Record</label>
                                <select name="grade">
                                    <option value="First Class">First Class</option>
                                    <option value="Distinction">Distinction</option>
                                    <option value="Upper Second Class">Upper Second Class</option>
                                    <option value="Lower Second Class">Lower Second Class</option>
                                    <option value="Third Class">Third Class</option>
                                    <option value="Pass Degree">Pass Degree</option>
                                    <option value="Not Applicable">Not Applicable</option>
                                </select>
                                {errors.grade && <span className="error">{errors.grade}</span>}
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="degree">Degrees Earned</label>
                                <select name="degree">
                                    <option value="Bachelor of Arts (B.A)">Bachelor of Arts (B.A)</option>
                                    <option value="Bachelor of Education (B.Ed)">Bachelor of Education (B.Ed)</option>
                                    <option value="Bachelor of Engineering (B.Eng)">Bachelor of Engineering (B.Eng)</option>
                                    <option value="Bachelor of Laws (LL.B)">Bachelor of Laws (LL.B)</option>
                                    <option value="Bachelor of Technology (B.Tech)">Bachelor of Technology (B.Tech)</option>
                                    <option value="Bachelor of  Science (B.Sc)">Bachelor of  Science (B.Sc)</option>
                                    <option value="Bachelor of Medicine and Surgery (MBBS)">Bachelor of Medicine and Surgery (MBBS)</option>
                                    <option value="Diploma Certificate (Dipl.)">Diploma Certificate (Dipl.)</option>
                                    <option value="Doctor of  Education (Ed.D)">Doctor of  Education (Ed.D)</option>
                                    <option value="Doctor of  Medicine (MD)">Doctor of  Medicine (MD)</option>
                                    <option value="Doctor of Philosophy (PhD)">Doctor of Philosophy (PhD)</option>
                                    <option value="Higher National Diploma (HND)">Higher National Diploma (HND)</option>
                                    <option value="Master of Art (MA)">Master of Art (MA)</option>
                                    <option value="Master of Business Administration (MBA)">Master of Business Administration (MBA)</option>
                                    <option value="Master of Education (M.Ed)">Master of Education (M.Ed)</option>
                                    <option value="Master of Laws (LL.M)">Master of Laws (LL.M)</option>
                                    <option value="Master of Science (M.Sc)">Master of Science (M.Sc)</option>
                                    <option value="National Certificate of Education (NCE)">National Certificate of Education (NCE)</option>
                                    <option value="Ordinary National Diploma (OND)">Ordinary National Diploma (OND)</option>
                                    <option value="Post Graduate Diploma in Education (PGDE)">Post Graduate Diploma in Education (PGDE)</option>
                                </select>
                                {errors.degree && <span className="error">{errors.degree}</span>}
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

export default Signup;