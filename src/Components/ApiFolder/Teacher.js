import React from 'react'
import './Teacher.css'

function Details(props) {
  return (
        <div className="details">
          <div className="details-firstwrap">
          <img src={props.image} alt="" />
          <div className="inner-wrap">
              <p id='name'>{props.firstName} {props.lastName}</p>
            <p id='size'>{props.subject}</p>
          </div>
          </div>
        </div>
      );
    }
export default Details