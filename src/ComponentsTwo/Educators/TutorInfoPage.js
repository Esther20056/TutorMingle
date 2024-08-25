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
      <div className="about">
      <p>{tutor.location}</p><p>near</p> 
      <p>{tutor.landmark}</p>
      </div>      
      <p>Hourly rate: {tutor.rate}</p>
      </div>       
      </div>
      <div className="about d-flex, flex-column">
        <h4>About {tutor.name}</h4>
      <p>{tutor.about}</p>
      </div>
      <div className="about d-flex, flex-column">
        <h4>Subjects I teach</h4>
      <p>{tutor.grade2} {tutor.subject2} {tutor.subject6}</p>
      <p>{tutor.grade3} {tutor.subject2} {tutor.subject4}</p>
      <p>{tutor.grade4} {tutor.subject2} {tutor.subject5}</p>
      <p>{tutor.grade3} {tutor.subject3}</p>
      </div>
      <div className="about d-flex, flex-column">
        <h4>Classes I teach</h4>
      <p>{tutor.grade}</p>
      </div>
      <div className="about d-flex, flex-column">
        <h4>Education</h4>
      <p>{tutor.education}</p>
      <p>{tutor.school}</p>
      </div>
      <div className="about d-flex, flex-column">
        <h4>Travel policy</h4>
      <p>{tutor.travel}</p>
      <p>{tutor.travel2}</p>
      </div>
      <div className="about d-flex, flex-column">
        <h4>Mode of classes</h4>
      <p>{tutor.mode}</p>
      <p>{tutor.preferred_tool}</p>
      </div>
      <div className="about d-flex, flex-column">
        <h4>My availability</h4>
      <p>Sunday: {tutor.availability2}</p>
      <p>Monday: {tutor.availability}</p>
      <p>Tuesday: {tutor.availability}</p>
      <p>Wednesday: {tutor.availability}</p>
      <p>Thursday: {tutor.availability2}</p>
      <p>Friday: {tutor.availability}</p>
      <p>Saturday: {tutor.availability2}</p>
      </div>
    </div>
  );
}

export default TutorInfoPage;

