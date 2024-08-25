import React from 'react';
import './FooterLinks.css';

const careersList = [
  {
    title: 'Education Consultant',
    description: 'Advises on curriculum development, educational strategies, and teaching methods to enhance the platform’s offerings and effectiveness.'
  },
  {
    title: 'Product Manager',
    description: 'Oversees the development and improvement of the TutorMingle platform, working on features, user experience, and product strategy.'
  },
  {
    title: 'Customer Support Specialist',
    description: 'Provides assistance to users, helping resolve issues and ensuring a positive experience for both educators and students.'
  },
  {
    title: 'Educating Coordinator',
    description: 'Manages the matchmaking process between educators and students, oversees scheduling, and ensures that the sessions meet quality standards.'
  },
  {
    title: 'Training and Development Manager',
    description: 'Creates and implements training programs for educators to ensure they have the skills and knowledge needed to provide effective teaching.'
  },
  {
    title: 'Instructional Designer',
    description: 'Designs and develops educational materials and resources to support educators in delivering effective lessons.'
  },
  {
    title: 'Business Development Manager',
    description: 'Identifies and pursues new business opportunities, partnerships, and strategic initiatives to grow the platform’s reach and impact.'
  }
];

function Careers() {
  return (
    <div className='careers' style={{gap: '1rem'}}>
      <h2>Career Opportunities</h2>
      {careersList.map((career, index) => (
        <div key={index} className='career-item'>
          <h4>{career.title}</h4>
          <p>{career.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Careers;

