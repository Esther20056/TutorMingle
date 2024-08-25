import React from 'react'
import { Link } from 'react-router-dom'
import './Terms.css'

function Terms() {
  return (
    
   <div className="terms-wrapper">
     <Link className="back-btn" to="/signup/step4">Back</Link>
    <div className='terms_and_condition_wrapper'>
     <p className="terms-header-text">Terms and Conditions</p>
  <p id="term-welcome-text">Welcome to <terms id='navbar-brand'>[Tutor<span>Mingle</span>]!</terms> By signing up as a tutor on our platform, you agree to abide by the following terms and conditions:</p>

<h5>Eligibility:</h5><p>You must be legally eligible to provide tutoring services in your respective jurisdiction.</p>

<h5>Accuracy of Information:</h5><p> You certify that all information provided during signup, including your qualifications, experience, and contact details, is accurate and up-to-date.</p>

<h5> Professional Conduct: </h5> <p> As an educator on our platform, you agree to conduct yourself professionally at all times and adhere to ethical standards in your interactions with students and other users.</p>

<h5>Responsibility for Content: </h5><p>You are solely responsible for the content you upload or share on our platform, including profile information, tutoring materials, and communications with students.</p> 

<h5> Confidentiality:</h5><p>You agree to maintain the confidentiality of any sensitive information shared by students during tutoring sessions and to use such information only for the purpose of tutoring.</p>

<h5> Intellectual Property:</h5> <p>Any materials or content provided by you during tutoring sessions remain your intellectual property. However, you grant <terms id='navbar-brand'>[Tutor<span>Mingle</span>]!</terms> a non-exclusive license to use such materials for the purpose of facilitating tutoring services on our platform.</p>

<h5>Payment and Fees:</h5><p> [Tutor<span>Mingle</span>]may collect fees or commissions for facilitating tutoring sessions. By signing up as an educator, you agree to any applicable payment terms and authorize <terms id='navbar-brand'>[Tutor <span>Mingle</span>]!</terms> to deduct such fees from your earnings.</p>

<h5>Termination:</h5><p> <terms id='navbar-brand'>[Tutor<span>Mingle</span>]!</terms> reserves the right to suspend or terminate your account at any time if you violate these terms and conditions or engage in misconduct on our platform.</p>

<h5>Modification of Terms:</h5><p> <terms id='navbar-brand'>[Tutor<span>Mingle</span>]!</terms> reserves the right to modify or update these terms and conditions at any time. It is your responsibility to review them periodically for changes.</p>

<p> By signing up as a tutor on <terms id='navbar-brand'>[Tutor<span>Mingle</span>]!</terms>, you acknowledge that you have read, understood, and agreed to these terms and conditions.</p>
   </div>
   </div>
  )
}

export default Terms