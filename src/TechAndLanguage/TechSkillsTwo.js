import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import '../Components/HomeEducating/HomeEducatingLogin/Steps/Step2.css';

function TechSkillsTwo() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = (formData) => {
        const errors = {};
        if (!formData.get('child_name')) errors.child_name = 'Child\'s name is required';
        if (!formData.get('age')) errors.age = 'Age is required';
        if (!formData.get('course')) errors.course = 'Course selection is required';
        if (!formData.get('goal')) errors.goal = 'Goal selection is required';
        if (!formData.get('tutor_gender')) errors.tutor_gender = 'Tutor gender preference is required';
        if (!formData.get('about_the_child')) errors.about_the_child = 'Information about the child is required';
        return errors;
    };

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        const formData = new FormData(e.currentTarget);
        const formErrors = validateForm(formData);

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setLoading(false);
            return;
        }
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: '🎉 Congratulations! You have successfully completed Part 2 of the form! 🎉',
            customClass: {
                popup: 'custom-swal-popup',
                title: 'custom-swal-title',
                content: 'custom-swal-content',
                confirmButton: 'custom-swal-confirm',
                cancelButton: 'custom-swal-cancel',
                icon: 'custom-swal-icon'
            }
        }).then(() => {
            navigate("/tech_three");
        });

        setLoading(false);
    }

    return (
        <div className='step2-mainwrapper burgundy'>
            <div className="step2-inner-wrapper">
                <form onSubmit={handleSubmit} className='form'>
                    <div className="step2-second-inner-wrapper-form">
                        <p>About</p>
                        <div className="form-input">
                            <label htmlFor="child_name">Name:</label>
                            <input type="text" placeholder="Child's full name" name='child_name' />
                            {errors.child_name && <p className="error">{errors.child_name}</p>}
                        </div>
                        <div className="form-input">
                            <label htmlFor="gender">Gender:</label>
                            <select name="gender">
                                <option value="">Select</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </div>
                        <div className="form-input">
                            <label htmlFor="age">Age:</label>
                            <input type="text" placeholder="Your age/child's age" name='age' />
                            {errors.age && <p className="error">{errors.age}</p>}
                        </div>
                        <div className="form-input">
                            <label htmlFor="course">Course:</label>
                            <select name="course">
                                <option value="">Select</option>
                                <option value="UI/UX">UI/UX</option>
                                <option value="Front-end Development">Front-end Development</option>
                                <option value="Back-end Development">Back-end Development</option>
                                <option value="iOS and Android Development">iOS and Android Development</option>
                            </select>
                            {errors.course && <p className="error">{errors.course}</p>}
                        </div>
                        <div className="form-input">
                            <label htmlFor="goal">Your Goal:</label>
                            <select name="goal">
                                <option value="">Select</option>
                                <option value="Develop interactive apps for educational use">Develop interactive apps for educational use</option>
                                <option value="Master coding fundamentals for app creation">Master coding fundamentals for app creation</option>
                                <option value="Create engaging UI/UX for diverse audiences">Create engaging UI/UX for diverse audiences</option>
                                <option value="Learn to integrate multimedia for impact">Learn to integrate multimedia for impact</option>
                                <option value="Build apps fostering learning and play">Build apps fostering learning and play</option>
                                <option value="Understand app deployment and maintenance basics">Understand app deployment and maintenance basics</option>
                            </select>
                            {errors.goal && <p className="error">{errors.goal}</p>}
                        </div>
                        <div className="form-input">
                            <label htmlFor="tutor_gender">Do you prefer a male or female tutor?</label>
                            <select name="tutor_gender">
                                <option value="">Select</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="A">Any gender is fine</option>
                            </select>
                            {errors.tutor_gender && <p className="error">{errors.tutor_gender}</p>}
                        </div>
                        <div className="form-input">
                            <label htmlFor="about_the_child">Tell us what about the child:</label>
                            <textarea style={{ height: "5rem" }} name="about_the_child" placeholder='Give us information to understand your child better so as to find the best educator to match his/her needs.'></textarea>
                            {errors.about_the_child && <p className="error">{errors.about_the_child}</p>}
                        </div>
                        <button type='submit' disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                        <button><Link to='/tech' className='back-btn'>Back</Link></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TechSkillsTwo;
