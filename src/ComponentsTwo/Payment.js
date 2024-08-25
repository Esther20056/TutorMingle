import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css'
import PaystackPop from '@paystack/inline-js'
import { IoWalletSharp } from "react-icons/io5";

function Payment() {
    const navigate = useNavigate()
    const [ModalOpen, setModalOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState("2000")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const paywithpaystack = (e) => {
            e.preventDefault();
            const paystack = new PaystackPop();
            axios.post('http://localhost:8000/createpayment/', {
                email: email,
                amount: parseFloat(amount),
                firstname: firstname,
                lastname: lastname,
            })
            .then(response => {
                const { key } = response.data;     
                paystack.newTransaction({
                    key: "pk_test_48947716d824b0b00eb3d43ae2ca69845f95efe8", 
                    amount: amount * 100,
                    email: email,
                    firstname: firstname,
                    lastname: lastname,
                    onSuccess: (transaction) => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Payment Complete!',
                            text: `Reference ${transaction.reference}`,
                        }).then(() => {
                            setEmail('');
                            setAmount('');
                            navigate('/message');
                        });
                    },
                    onCancel: () => {
                        Swal.fire({
                            icon: 'info',
                            title: 'Transaction Canceled',
                            text: 'You have canceled the transaction.',
                        });
                    },
                });
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Payment Failed',
                    text: 'Payment failed. Please try again.',
                });
            });
        };
    const [activeAccordion, setActiveAccordion] = useState(null);         
        const handleAccordionClick = (index) => {
            setActiveAccordion(index === activeAccordion ? null : index); 
        };
        const accordionItems = [
                {
                    title: "What subjects do your educators cover?",
                    content: "Our educators cover a wide range of subjects from elementary to high school levels, including math, science, languages, and more.",
        
                },
                {
                    title: "How are educators selected?",
                    content: "Educators undergo a rigorous screening process that evaluates their qualifications, teaching experience, and background checks to ensure top-quality instruction.",
        
                },
                {
                    title: "Can I choose an educator based on specific criteria?",
                    content: "Yes, you can select an educator based on subject expertise, teaching style, availability, and even reviews from other parents.",
        
                },
                {
                    title: "Are there educating options for children with special needs?",
                    content: "We offer specialized educating tailored to accommodate various learning needs. Contact us to discuss your specific requirements.",
        
                },
                {
                    title: "What if my child needs help with homework?",
                    content: "Our educators can assist with homework, ensuring that your child understands concepts thoroughly and completes assignments effectively.",
        
                },
                {
                    title: "How do I pay for educating services?",
                    content: "Payments are securely processed through our platform. You can choose from various payment methods for your convenience.",
        
                },
                {
                    title: "Can I schedule a trial session with an educator?",
                    content: "Yes, you can schedule a trial session to meet the tutor, discuss goals, and evaluate if they are the right fit for your child.",
        
                },
                {
                    title: "What if I need to reschedule or cancel an educating session?",
                    content: "Please notify your educator at least 24 hours in advance to avoid incurring charges for missed lessons.",
        
                },
                {
                    title: "Do you offer group educating sessions?",
                    content: "Yes, we offer group sessions for subjects where collaborative learning can be beneficial. Contact us to inquire about group availability.",
        
                },
                {
                    title: "What if I have concerns about my child's progress?",
                    content: "Our tutors regularly update parents on their child's progress and are available to address any concerns you may have.",
        
                },
                {
                    title: "How can I provide feedback about an educator?",
                    content: "You can rate and provide feedback on each educating session through our platform. Your input helps us maintain quality standards.",
        
                },
                {
                    title: "Is there customer support available if I have questions?",
                    content: "Our customer support team is available to assist you with any questions or issues you may have regarding educating services or our platform.",
        
                },
            ]
  return (
    <div className='dashboard-mainwrapper'>
        <div className="back_btn"><Link to='/dashboard'>Back</Link></div>
        <div className="dashboard">
        <h2 style={{textDecoration: 'none'}}>Thank you for considering our educating services.</h2>
        <div className="payment-and-write-up-wrapper">
                <div className="side-wrapper">
                    <div className="side-group d-flex gap-3">
                    <IoWalletSharp className='side-group-icon'/>
                    <div className="side-group-text">
                    <h4>Pay Service Fee:</h4>
                    <p>For our custom classes, whether offline or online, this fee is charged per learner as an upfront commitment to cover logistics in connecting you with your desired educator. Please note: The service fee for online group or comprehensive classes is ₦2000, with upfront payment required.</p>
                    </div>
                    </div>
                    <div className="side-group d-flex gap-3">
                    <IoWalletSharp className='side-group-icon'/>
                    <div className="side-group-text">
                    <h4>Select your desired class schedule.</h4>
                    <p>Our personalized one-on-one sessions cater to individual learning needs in academics, skills, and exam preparation, offered either online or at your home, with pricing based on format, subject, sessions, and duration.</p>
                    </div>
                    </div>
                    <div className="side-group d-flex gap-3">
                    <IoWalletSharp className='side-group-icon'/>
                     <div className="side-group-text">
                    <h4>Pay for Lessons:</h4>
                    <p>Upon connecting with your educator and confirming satisfaction, full tuition payment is required to commence classes. Payments can be made to any of our bank accounts under the name TutorMingle.</p>
                    </div>
                    </div>
                </div>
            <div className="payments-container">
             <div className="paystack-integration">
                <div className="service">
                <h4>Service Fee</h4>
                <button>#2000</button>
                </div>
                <form action="" className='paystack-form'>
                  <div className="payment-form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} id='email'/>
                  </div>
                  <div className="payment-form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}  id='amount'/>
                  </div>
                  <div className="payment-form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}  id='firstname'/>
                  </div>
                  <div className="payment-form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} id='lastname' />
                  </div>
                  <button id='btns' type="submit" onClick={paywithpaystack} >Pay</button>
                </form>
             </div>
             <button id='btns' onClick={() => setModalOpen(!ModalOpen)}>Pay with Bank</button>
             <div id='direct-payment' className={`direct-payment-modal ${ModalOpen ? 'open' : ''}`}>
                <div className="direct-payment-content">
                    <h5>Pay to bank</h5>
                    <p className='pay-with-bank-note'>How to pay with bank:</p>
                    <ul>
                        <li>Copy the bank account details below</li>
                        <li>Pay with your bank app, USSD or ATM</li>
                        <li>To confirm your payment, Send your receipt to TutorMingle@gmail.com</li>
                    </ul>
                    <p className='account-number'>2356786543</p>
                    <div className="bank-details">
                        <small>TutorMingle</small>
                        <small>Zenith Bank</small>
                    </div>
                    <button id='form-btn' type="button" style={{ color: "#FFF8DC", fontWeight: "600" }} onClick={() => setModalOpen(false)}>Cancel</button>
                </div>
            </div>
             </div>
             </div>
            <div className="accordion-wrapper">
                <h2 className='faq' style={{paddingBottom: '1rem'}}>Frequently Asked Questions</h2>
                <div className="accordion-text-container">
                     <div className="accordion" id="accordionExample">
                    {accordionItems.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                    className="accordion-button"
                                    type="button"
                                    onClick={() => handleAccordionClick(index)}
                                >
                                    {item.title}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                     </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Payment