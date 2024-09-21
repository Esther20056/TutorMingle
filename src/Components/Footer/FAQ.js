import React from 'react';
import './FooterLinks.css'

function FAQ() {
  return (
    <div className='FAQ'>
      <h2>Frequently Asked Questions</h2>

      <h3>For Parents</h3>

      <div>
        <strong id='faq-p'>1. What is TutorMingle?</strong>
        <p>
          TutorMingle is an online platform that connects parents with qualified educators for personalized educating services. We offer a variety of subjects and educational levels to meet your child’s specific learning needs.
        </p>
      </div>

      <div>
        <strong id='faq-p'>2. How can I find an educator for my child?</strong>
        <p>
          Create an account on TutorMingle, browse through our list of available educators, and filter by subject, grade level, or location. You can review profiles, read ratings, and contact us to discuss your child’s needs.
        </p>
      </div>

      <div>
        <strong id='faq-p'>3. How are educators selected and verified?</strong>
        <p>
          All educators on TutorMingle are carefully vetted. We verify their qualifications, experience, and conduct background checks to ensure they meet our standards for quality and safety.
        </p>
      </div>

      <div>
        <strong id='faq-p'>4. What should I consider when choosing an educator?</strong>
        <p>
          Look for educators with relevant qualifications, experience, and a teaching style that matches your child’s learning needs. Reading reviews from other parents can also help you make an informed decision.
        </p>
      </div>

      <div>
        <strong id='faq-p'>5. How do I schedule a session with an educator?</strong>
        <p>
          After selecting an educator, you can schedule sessions directly through our platform. Choose a convenient time for you and your child, and confirm the appointment.
        </p>
      </div>

      <div>
        <strong id='faq-p'>6. What if I need to cancel or reschedule a session?</strong>
        <p>
          You can cancel or reschedule sessions through your account dashboard. We recommend doing this as early as possible to avoid any potential fees or inconvenience to the educator.
        </p>
      </div>

      <h3>For Educators</h3>
      <div>
        <strong id='faq-p'>1. How do I become an educator on TutorMingle?</strong>
        <p>
          To become an educator, sign up on TutorMingle and complete our application process. This includes submitting your qualifications, experience, and undergoing a background check.
        </p>
      </div>

      <div>
        <strong id='faq-p'>2. What qualifications are needed to apply?</strong>
        <p>
          We require educators to have relevant educational qualifications and experience in their subject area. Typically, a degree in education or a related field and proven teaching experience are necessary.
        </p>
      </div>

      <div>
        <strong id='faq-p'>3. How do I set my rates and availability?</strong>
        <p>
          You can set your own rates and schedule through your educator profile. Once approved, you can adjust your availability and rates as needed.
        </p>
      </div>

      <div>
        <strong id='faq-p'>4. How does TutorMingle support educators?</strong>
        <p>
          TutorMingle provides a platform for connecting with students, managing bookings, and processing payments. We also offer support to help resolve issues and ensure a positive experience for educators.
        </p>
      </div>

      {/* <div>
        <strong id='faq-p'>5. How are payments handled?</strong>
        <p>
         
          Payments are processed securely through TutorMingle. You will receive payments based on the schedule you set, and you can track your earnings through your account dashboard.
        </p>
      </div> */}

      <div>
        <strong id='faq-p'>5. What should I do if I have issues with a student or parent?</strong>
        <p>
          If you encounter any issues, please contact our support team for assistance. We’re here to help resolve conflicts and ensure that both educators and students have a positive experience.
        </p>
      </div>
    </div>
  );
}

export default FAQ;
