import React from 'react';
import { useParams } from 'react-router-dom';
import tutors from '../../../src/Tutordata';
import './TutorInfoPage.css'

function TutorInfoPage() {
  const { id } = useParams();
  const tutor = tutors.find(t => t.id === parseInt(id)); 

  if (!tutor) {
    return <div>Tutor not found</div>;
  }
  return (
    <div className="tutor-detail">
      <h1>{tutor.firstName} {tutor.lastName}</h1>
      <div className="image-info-container">
      <img src={tutor.image} alt={tutor.firstName}/>
      <div className="tutorinfopage-inner-wrapper mt-5">
      <p style={{fontSize: '2rem'}}>{tutor.firstName} {tutor.lastName}</p>
      <div className="about d-flex flex-column">
      <p id='about-p'>{tutor.location}</p>
      <p id='about-p'><strong style={{fontWeight: '500'}}>Landmark: </strong>{tutor.landmark}</p>
      </div>      
      <p id='about-p'>Hourly rate: {tutor.rate}</p>
      </div>       
      </div>
      <div className="about d-flex flex-column">
        <h4>About {tutor.name}</h4>
      <p id='about-p'>{tutor.about}</p>
      </div>
      <div className="about d-flex flex-column">
        <h4>Subjects I teach</h4>
      <p id='about-p'>{tutor.grade2} {tutor.subject2} {tutor.subject6}</p>
      <p id='about-p'>{tutor.grade3} {tutor.subject2} {tutor.subject4}</p>
      <p id='about-p'>{tutor.grade4} {tutor.subject2} {tutor.subject5}</p>
      <p id='about-p'>{tutor.grade3} {tutor.subject3}</p>
      </div>
      <div className="about d-flex flex-column">
        <h4>Classes I teach</h4>
      <p id='about-p'>{tutor.grade}</p>
      </div>
      <div className="about d-flex flex-column">
        <h4>Education</h4>
      <p id='about-p'>{tutor.education}</p>
      <p id='about-p'>{tutor.school}</p>
      </div>
      <div className="about d-flex, flex-column">
        <h4>Travel policy</h4>
      <p id='about-p'>{tutor.travel}</p>
      <p id='about-p'>{tutor.travel2}</p>
      </div>
      <div className="about d-flex, flex-column">
        <h4>Mode of classes</h4>
      <p id='about-p'>{tutor.mode}</p>
      <p id='about-p'>{tutor.preferred_tool}</p>
      </div>
      <div className="about d-flex, flex-column">
        <h4>My availability</h4>
      <p id='about-p'>Sunday: {tutor.availability2}</p>
      <p id='about-p'>Monday: {tutor.availability}</p>
      <p id='about-p'>Tuesday: {tutor.availability}</p>
      <p id='about-p'>Wednesday: {tutor.availability}</p>
      <p id='about-p'>Thursday: {tutor.availability2}</p>
      <p id='about-p'>Friday: {tutor.availability}</p>
      <p id='about-p'>Saturday: {tutor.availability2}</p>
      </div>
    </div>
  );
}

export default TutorInfoPage;

