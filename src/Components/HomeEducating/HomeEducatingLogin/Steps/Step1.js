import React from 'react'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './style.css'

function Step1() {
  return (
    <div className="step-one-wrapper">
       <Link className="back-btn" style={{color: '#FFF8DC'}} to="/homeducatingform">Back</Link>
      <div className='step-mainwrapper'>
     <div className="stepone-inner-wrapper" style={{marginTop: '-4rem'}}>
     <h2 className="step-mainwrapper-header-text">Tell us about your child</h2>
       <h5 className="step-mainwrapper-inner-text">
Understanding your child's interests, strengths, and challenges will guide us in designing a personalized learning approach that maximizes their potential and cultivates a love for learning.</h5>
<button className='step-mainwrapper-button'>
    <FaPlus className='plus-icon' style={{ fontSize: "1.4rem", marginRight: "1rem"}}/>
    <Link to="/second-step" className='step1-button'>Add Details</Link>
</button>
     </div>
    </div>
    </div>
  )
}

export default Step1