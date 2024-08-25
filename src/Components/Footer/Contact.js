// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     emailjs.send('service_81km87x', 'template_fcjtiln', formData, '6dP85jFUkwHJrGA72')
//       .then((response) => {
//         setStatus('Message sent successfully!');
//         setFormData({ name: name, email: email, message: message });
//       })
//       .catch((error) => {
//         setStatus('Failed to send message. Please try again.');
//         console.error('Email.js error:', error);
//       });
//   };

//   return (
//     <div className="contact-us">
//       <h2>Contact Us</h2>
//       <p>We’re here to help you with any questions or concerns you may have. Whether you're a parent, student, or educator, feel free to reach out to us, and our team will get back to you as soon as possible.</p>

//       <div className="contact-info">
//         <h3>Get in Touch</h3>
//         <p><strong>Email:</strong> support@tutormingle.com</p>
//         <p><strong>Phone:</strong> +1 (123) 456-7890</p>
//         <p><strong>Address:</strong> 123 Education Lane, Learning City, ED 45678</p>
//       </div>

//       <div className="contact-form">
//         <h3>Send Us a Message</h3>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>

//           <button type="submit">Send Message</button>
//         </form>
//         {status && <p>{status}</p>}
//       </div>
//     </div>
//   );
// }

// export default ContactUs;
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './FooterLinks.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_81km87x', 'template_fcjtiln', formData, '6dP85jFUkwHJrGA72')
      .then((response) => {
        Swal.fire({
          title: 'Success!',
          text: 'Message sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setFormData({ name: '', email: '', message: '' }); 
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to send message. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.error('Email.js error:', error);
      });
  };

  return (
    <div className="contact-us">
     <div>
     <h2>Contact Us</h2>
      <p>We’re here to help you with any questions or concerns you may have. Whether you're a parent, student, or educator, feel free to reach out to us, and our team will get back to you as soon as possible.</p>

     </div>
      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p><strong>Email:</strong> estherolajide456@gmail.com</p>
        <p><strong>Phone:</strong> 0903 945 3456</p>
        <p><strong>WhatsApp:</strong> +234 903 9453 456</p>
        <p><strong>Address:</strong> Plot 309A Norus close, omole phase1, Lagos state.</p>
      </div>

      <div>
        <h3>Send Us a Message</h3>
        <form onSubmit={handleSubmit} className='contact-form'>
          <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          </div>
           <div>
           <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
           </div>
           <div>
           <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
           </div>
          <button type="submit" id='contact-form-btn'>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
