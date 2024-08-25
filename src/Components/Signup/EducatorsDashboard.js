import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const sendConfirmationEmail = async (userId) => {
  try {
    const response = await axios.post('http://localhost:8000/send-confirmation-email/', { user_id: userId });
    return response.data;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};

function EducatorsDashboard() {
  const [emailSent, setEmailSent] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const userId = 3;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/getuser/${userId}/`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleSendConfirmationEmail = async () => {
    try {
      await sendConfirmationEmail(userId);
      setEmailSent(true);
      Swal.fire({
        title: 'Success!',
        text: 'Confirmation email has been sent.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/email-confirmed');
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send confirmation email. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>No user data available.</p>;
  }

  const { about_users = [], sign_up_two, sign_up_three, tutors_experience } = data;

  return (
    <div className="dashboard-mainwrapper">
      <div className="dashboard-header">
        <div className="back_btn">
          <Link to='/signup/step5'>Back</Link>
        </div>
        <div className="header-content">
          {about_users.length > 0 && (
            <>
              <h2>{about_users[0].first_name} {about_users[0].last_name}</h2>
              <img
                src={`http://localhost:8000${about_users[0].profile}`}
                alt="Profile"
                className="dashboard-header-img"
                onError={(e) => e.target.src = '/path/to/default-image.png'}
              />
            </>
          )}
        </div>
      </div>
      <div className="dashboard">
        <div className='dashboard_inner_wrapper'>
          {/* About User */}
          <div className='data_wrapper'>
            <h3>First Step</h3>
            {about_users.length > 0 ? (
              about_users.map((aboutUser) => (
                <div key={aboutUser.id} className="about-user">
                  <h3>{aboutUser.first_name} {aboutUser.last_name}</h3>
                  <p><strong>Email:</strong> {aboutUser.email}</p>
                  <p><strong>Phone:</strong> {aboutUser.phone}</p>
                  <p><strong>Birthday:</strong> {aboutUser.birthday}</p>
                  <p><strong>Nationality:</strong> {aboutUser.nationality}</p>
                  <p><strong>State:</strong> {aboutUser.state}</p>
                  <p><strong>Gender:</strong> {aboutUser.gender === 'F' ? 'Female' : 'Male'}</p>
                  <p><strong>Region:</strong> {aboutUser.region}</p>
                  <p><strong>Address:</strong> {aboutUser.address}</p>
                  <p><strong>Grade:</strong> {aboutUser.grade}</p>
                  <p><strong>Degree:</strong> {aboutUser.degree}</p>
                  <p><strong>School Name:</strong> {aboutUser.school_name}</p>
                  <p><strong>Course:</strong> {aboutUser.course}</p>
                  <p><strong>Start Year:</strong> {aboutUser.start_year}</p>
                  <p><strong>End Year:</strong> {aboutUser.end_year}</p>
                  <p><strong>Identification:</strong> <img
                    src={`http://localhost:8000${aboutUser.identification}`}
                    alt="Identification"   className="dashboard-header-img"
                    onError={(e) => e.target.src = '/path/to/default-image.png'}
                  />
                  </p>
                  <p><strong>Profile Picture:</strong> <img
                    src={`http://localhost:8000${aboutUser.profile}`}
                    alt="Profile"    className="dashboard-header-img"
                    onError={(e) => e.target.src = '/path/to/default-image.png'}
                  /></p>
                </div>
              ))
            ) : (
              <p>No additional information available.</p>
            )}
            <Link to="/signup/step1">Edit Step One</Link>
          </div>

          {/* SignUpTwo Data */}
          <div className='data_wrapper'>
            <h3>Step Two</h3>
            {sign_up_two ? (
              <div className="about-user">
                <p><strong>Subject(s) of expertise:</strong> {sign_up_two.expert_subjects}</p>
                <p><strong>Specialized areas of knowledge:</strong> {sign_up_two.specialized_areas}</p>
                <p><strong>Classes you teach:</strong> {sign_up_two.classes_you_teach}</p>
                <p><strong>Years of Experience:</strong> {sign_up_two.years_of_experience}</p>
                <p>
                  <strong>Days available for tutoring sessions:</strong>
                  {Array.isArray(sign_up_two.days_available) 
                    ? sign_up_two.days_available.join(', ') 
                    : sign_up_two.days_available || 'Not specified'}
                </p>
                <p>
                  <strong>Times available for tutoring sessions:</strong>
                  {Array.isArray(sign_up_two.time_available) 
                    ? sign_up_two.time_available.join(', ') 
                    : sign_up_two.time_available || 'Not specified'}
                </p>
                <p><strong>Teaching in-person or online:</strong> {sign_up_two.teaching_mode}</p>
                <p><strong>Preferred Online Meeting Tool:</strong> {sign_up_two.preferred_online_tool}</p>
              </div>
            ) : (
              <p>No additional information available.</p>
            )}
            <Link to="/signup/step2">Edit Step Two</Link>
          </div>

          {/* SignUpThree Data */}
          <div className='data_wrapper'>
            <h3>Step Three</h3>
            {tutors_experience ? (
              <>
                <p><strong>Previous Work Experiences Name:</strong> {tutors_experience.company_name}</p>
                <p><strong>Previous Work Experiences Address:</strong> {tutors_experience.company_address}</p>
                <p><strong>Previous Work Experiences Phone Number:</strong> {tutors_experience.company_phone_number}</p>
              </>
            ) : (
              <p>No additional information available.</p>
            )}
            <Link to="/signup/step3">Edit Step Three</Link>
          </div>
          <div className='data_wrapper'>
            <h3>Step Four</h3>
            {sign_up_three ? (
              <>
                <p><strong>About:</strong> {sign_up_three.about_yourself}</p>
                <p><strong>Hourly rate for tutoring services:</strong> #{sign_up_three.rate_for_tutoring_sessions}</p>
                <p><strong>Payment Options:</strong> {sign_up_three.payment_options}</p>
              </>
            ) : (
              <p>No additional information available.</p>
            )}
            <Link to="/signup/step4">Edit Step Four</Link>
          </div>

          {/* Confirmation Email */}
          <div className='data_wrapper'>
            <h3>Send Confirmation Email</h3>
            <button onClick={handleSendConfirmationEmail} disabled={emailSent}>
              {emailSent ? 'Confirmation Email Sent' : 'Send Confirmation Email'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducatorsDashboard
