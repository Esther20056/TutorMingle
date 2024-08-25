import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { Link, useNavigate } from 'react-router-dom';
import './Step2.css';

function Step2() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        try {
            const formData = new FormData(e.currentTarget);
            await axios.post("http://localhost:8000/stepTwo/", formData);
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
                navigate("/fourth_step");
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
        }finally {
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            }
    }
  return (
    <div className='step2-mainwrapper burgundy'>
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
                    <label htmlFor="">Class:</label>
                    <select name="child_class" id="">
                        <option value="Preschool">Preschool</option>
                        <option value="Nursery 1">Nursery 1</option>
                        <option value="Nursey 2">Nursey 2</option>
                        <option value="Elementary 1">Elementary 1</option>
                        <option value="Elementary 2">Elementary 2</option>
                        <option value="Elementary 3">Elementary 3</option>
                        <option value="Elementary 4">Elementary 4</option>
                        <option value="Elementary 5">Elementary 5</option>
                        <option value="Elementary 6">Elementary 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>

                    </select>
                </div>
                <div className="form-input">
                    <label htmlFor="">Subject(s)</label>
                    <input type="text" placeholder="Subject(s) or Area(s) of Study Needing Assistance" name='subject'/>
                </div>
                <div className="form-input">
                    <label htmlFor="">Your Goal:</label>
                    <select name="goal" id="">
                    <option value="WAEC/ NECO/ UME/ JUPEB">WAEC/ NECO/ UME/ JUPEB</option>
                    <option value="Primary School Leaving Certificate Examination (PSLCE)">Primary School Leaving Certificate Examination (PSLCE)</option>
                    <option value="Basic Education Certificate Examination (BECE)">Basic Education Certificate Examination (BECE)</option>
                    <option value="National Common Entrance Examination (NCEE)">National Common Entrance Examination (NCEE)</option>
                    <option value="Homework/ Revision/ Study help">Homework/ Revision/ Study help</option>
                    </select>
                </div>
                <div className="form-input">
                    <label htmlFor="">School curriculum:</label>
                  <select name="school_curriculum" id="">
                    <option value="Nigerian">Nigerian</option>
                    <option value="American">American</option>
                    <option value="British">British</option>
                    <option value="Not sure">Not sure</option>                   
                  </select>
                </div>
                <div className="form-input">
                    <label htmlFor="">Do you prefer a male or female educator?
                    </label>
                    <select name="tutor_gender" id="">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Any gender is fine">Any gender is fine</option>
                    </select>
                </div>
                <div className="form-input">
                    <label htmlFor="">Tell us what about the child:</label>
                    <textarea style={{height: "5rem"}} name="about_the_child" id="" placeholder='Give us information to understand your child better so as to find the best educator to match his/her needs.'></textarea>
                </div>
                <button type='submit' disabled={loading}>{loading ? 'Submitting...' : 'Save and Continue'}</button>
                <button><Link className='back-btn'>Back</Link></button>
                </div>
            </form>
        </div>
  )
}

export default Step2