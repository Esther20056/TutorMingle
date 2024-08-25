import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../ComponentsTwo/Dashboard.css'

function TechDashboard() {
        return (
           <div className="dashboard-mainwrapper">
            <div className="back_btn"><Link to='/location'>Back</Link></div>
             <div className="dashboard">
                <h2 style={{textDecoration: 'underline'}}>Dashboard</h2>
                    <div className='dashboard_inner_wrapper'>
                        <div className='data_wrapper'>
                            <h3>About</h3>
                            <p>Name:</p>
                            <p>Gender:</p>
                            <p>Age:</p>
                            <p>Course:</p>
                            <p>Your Goal:</p>
                            <p>Educator gender:</p>
                            <Link to="/tech_two">Edit About</Link>
                        </div>
                        <div className='data_wrapper'>
                            <h3>Schedule</h3>
                            <p>Lesson days:</p>
                            <p>Starting Time</p>
                            <p>Hours per day:</p>
                            <p>Preferred Time:</p>
                            <p>Mode of class:</p>
                            <p>For how long:</p>
                            <p>To start how soon:</p>
                            <Link to="/tech_three">Edit Schedule</Link>
                        </div>
                        <div className='data_wrapper'>
                            <h3>Location</h3>
                            <p>State of Residence:</p>
                            <p>Region:</p>
                            <p>Street Address:</p>
                            <p>Nearest bus stop to your home:</p>
                            <Link to="/location">Edit Location</Link>
                        </div>
                        <Link to='/serviceFee' className='payment-btn'>Make Payment</Link>
                    </div>
             </div>
           </div>
        );
    }
    
export default TechDashboard;

