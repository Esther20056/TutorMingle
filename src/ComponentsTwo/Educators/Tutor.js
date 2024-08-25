import React from 'react';
import { Link } from 'react-router-dom';
import './Educator.css'

const Tutor = (props) => {
  return (
    <div className="tutor">
      <div className="tutor-main-inner-container">
      <div className="tutor-first-inner-container">
           <Link to={`/educator_display/${props.id}`}>
            <img src={props.image} alt={props.firstName} className="tutor-image" />
          </Link>
      <div className="tutor-text-container">
      <h3 className='name'>{props.firstName} {props.lastName}</h3>
      <small className='location'>{props.location} <br /></small>
      <small className='landmark'>{props.landmark}</small>
      <small className='description'>{props.description}</small>
      </div>
      </div>
      <div className="tutor-second-inner-container">
      <small className="about">{props.subject}<br /></small>
        <small className="rate"><bold className='bold'>Hourly rate:</bold> {props.rate}<br/></small>
        <small className="grade">{props.grade} <bold className='bold'>classes</bold> <br /></small>
        <small className="about">{props.about}<br /></small>
      </div>
      </div>
    </div>
  );
};

export default Tutor;


