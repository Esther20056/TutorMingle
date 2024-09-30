import React from 'react'
import './Footer.css'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="footer-container">
       <div className="waves"></div>  
       <div className="content">
       <div className="short-writeup">
        <a className="logo" href="#index">Tutor<span>Mingle</span></a>
        <p className="p">Introducing TutorMingle, Africa's premier tutoring platform, where excellence meets affordability. Our mission is to deliver top-notch, personalized education accessible to everyone. As the leading platform on the continent, TutorMingle connects learners with the finest educators, ensuring unparalleled quality in every session.</p>
    </div>
    <div className="quick-links">
         <div className="quick-link-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
         <FaGreaterThan className='icon'/>
         <Link to='/' className='quick-link-wrapper-a'>Home</Link>
         </div>
         <div className="quick-link-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
         <FaGreaterThan className='icon'/>
         <Link to='/becomeEducator' className='quick-link-wrapper-a'>Become an Educator</Link>
         </div>
         <div className="quick-link-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
         <FaGreaterThan className='icon'/>
         <Link to='/homeducating' className='quick-link-wrapper-a'>Home Educating</Link>
         </div>
         <div className="quick-link-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
         <FaGreaterThan className='icon'/>
         <Link to='/educators' className='quick-link-wrapper-a'>Educators</Link>
         </div>
         <div className="quick-link-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
         <FaGreaterThan className='icon'/>
         <Link to='/faq' className='quick-link-wrapper-a'>FAQs</Link>
         </div>
    </div>
    <div className="address">
        <p className="p">Plot 455a, Norus Close, Omole phase 1, Lagos State. Nigeria</p>
    </div>
    <div className="company">
        <a href="/whoweare">Who We Are</a>
        <a href="/contactUs">Contact Us</a>
        <a href="/careers">Careers</a>
    </div>
    </div> 
  </div>
  )
}

export default Footer


