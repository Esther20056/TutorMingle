import React, {useState} from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'sweetalert2/dist/sweetalert2.css';
import './Form.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Form() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const formatPhoneNumber = (input) => {
    const cleaned = ('' + input).replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
    setPhoneNumber(formatted);
  }
  const handleChange = (e) => {
    const input = e.target.value;
    formatPhoneNumber(input);
  }
  async function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);
      setErrors({});
      try {
          const formData = new FormData(e.currentTarget);
          await axios.post("http://localhost:8000/stepOne/", formData);
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
          navigate("/firststep");
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
    <div className='homeeducating-form'>
      <div className="form-first-container">
        <h4>Let's find a competent educator for you.</h4>
        <h5>Improve your child's grades and confidence. Tell us your goals and we'll help you achieve it</h5>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-second-div">
            <label htmlFor="">Are you a parent or student</label>
            <select name="parent_student" id="">
              <option value="Parent">Parent</option>
              <option value="Student">Student</option>
            </select>

          </div>
          <div className="form-second-div">
            <label htmlFor="">First Name</label>
            <input type="text" name='f_name' placeholder='Enter first name'/>
          </div>
          <div className="form-second-div">
            <label htmlFor="">Last Name</label>
            <input type="text" name='l_name' placeholder='Enter last name'/>
          </div>
          <div className="form-second-div">
            <label htmlFor="">Email</label>
            <input type="email" name='email' placeholder='Enter email address'/>
          </div>
          <div className="form-second-div">
            <label htmlFor="">Phone</label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handleChange} placeholder="Enter phone number" maxLength={13} />
          </div>
          <button type='submit' className='form-second-div-button' disabled={loading}>{loading ? 'Submitting...' : 'Save and Continue'}</button>
          <button className='form-second-div-button'><Link to='/homeducating'>Back</Link></button>
        </form>
      </div>
    </div>
  )
}

export default Form