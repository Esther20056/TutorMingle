import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import axios from 'axios';
import '../Components/HomeEducating/HomeEducatingLogin/Steps/Step2.css'

function TechSkillsTwo() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        try {
            const formData = new FormData(e.currentTarget);
            await axios.post("http://localhost:8000/techskilltwo/", formData);
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
    };
  return (
    <div className='step2-mainwrapper burgundy'>
        <div className="step2-inner-wrapper">
            <form action="" className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className="step2-second-inner-wrapper-form">
                <p>About</p>
                <div className="form-input">
                    <label htmlFor="">Name:</label>
                    <input type="text" placeholder="Child's full name" name='child_name'/>
                </div>
                <div className="form-input">
                    <label htmlFor="">Gender:</label>
                   <select name="gender" id="">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                   </select>
                </div>
                <div className="form-input">
                    <label htmlFor="">Age:</label>
                   <input type="text" placeholder="Your age/child's age" name='age'/>
                </div>
                <div className="form-input">
                    <label htmlFor="">Course</label>
                   <select name="course" id="">
                    <option value="UI/UX">UI/UX</option>
                    <option value="Front-end Development">Front-end Development</option>
                    <option value="Back-end Development">Back-end Development</option>
                    <option value="iOS and Android Development">iOS and Android Development</option>
                   </select>
                </div>
                <div className="form-input">
                    <label htmlFor="">Your Goal:</label>
                    <select name="goal" id="">
                    <option value="Develop interactive apps for educational use">Develop interactive apps for educational use</option>
                    <option value="Master coding fundamentals for app creation">Master coding fundamentals for app creation</option>
                    <option value="Create engaging UI/UX for diverse audiences">Create engaging UI/UX for diverse audiences</option>
                    <option value="Learn to integrate multimedia for impact">Learn to integrate multimedia for impact</option>
                    <option value="Build apps fostering learning and play">Build apps fostering learning and play</option>
                    <option value="Understand app deployment and maintenance basics">Understand app deployment and maintenance basics</option>
                    </select>
                </div>
                <div className="form-input">
                    <label htmlFor="">Do you prefer a male or female tutor?
                    </label>
                    <select name="tutor_gender" id="">
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="A">Any gender is fine</option>
                    </select>
                </div>
                <div className="form-input">
                    <label htmlFor="">Tell us what about the child:</label>
                    <textarea style={{height: "5rem"}} name="about_the_child" id="" placeholder='Give us information to understand your child better so as to find the best educator to match his/her needs.'></textarea>
                </div>
                <button type='submit'>Submit</button>
                <button><Link to='/tech' className='back-btn'>Back</Link></button>
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default TechSkillsTwo