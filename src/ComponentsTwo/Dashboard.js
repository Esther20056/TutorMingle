import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Dashboard.css'

function Dashboard() {
        return (
           <div className="dashboard-mainwrapper">
            <div className="back_btn"><Link to='/third-step'>Back</Link></div>
             <div className="dashboard">
                <h2 style={{textDecoration: 'underline'}}>Dashboard</h2>
                    <div className='dashboard_inner_wrapper'>
                        <div className='data_wrapper'>
                            <h3>About</h3>
                            <p>Name:</p>
                            <p>Gender:</p>
                            <p>Class:</p>
                            <p>Subject(s):</p>
                            <p>Your Goal:</p>
                            <p>School curriculum:</p>
                            <p>Educator gender:</p>
                            <Link to="/edit/stepOne">Edit About</Link>
                        </div>
                        <div className='data_wrapper'>
                            <h3>Schedule</h3>
                            <p>Lesson days:</p>
                            <p>Hours per day:</p>
                            <p>Preferred Time:</p>
                            <p>Mode of class:</p>
                            <p>For how long:</p>
                            <p>To start how soon:</p>
                            <Link to="/edit/stepTwo">Edit Schedule</Link>
                        </div>
                        <div className='data_wrapper'>
                            <h3>Location</h3>
                            <p>State of Residence:</p>
                            <p>Street Address:</p>
                            <p>Region:</p>
                            <p>Nearest bus stop to your home:</p>
                            <Link to="/edit/stepTwo">Edit Location</Link>
                        </div>
                        <Link to='/payment' className='payment-btn'>Make Payment</Link>
                    </div>
             </div>
           </div>
        );
    }
    
export default Dashboard;

