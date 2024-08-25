import React, { useState } from 'react';
import Tutor from './Tutor';
import tutors from '../../../src/Tutordata'
import './Educator.css';

function Educator() {
  const [location, setLocation] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');
  const [filteredTutors, setFilteredTutors] = useState(tutors);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = tutors.filter(tutor => {
      const matchesLocation = location === '' || tutor.location.toLowerCase().includes(location.toLowerCase());
      const matchesSubject = subject === '' || tutor.subject.toLowerCase().includes(subject.toLowerCase());
      const matchesGrade = grade === '' || tutor.grade.toLowerCase().includes(grade.toLowerCase());
      return matchesLocation && matchesSubject && matchesGrade;
    });

    setFilteredTutors(filtered);
  };
  return (
    <div className="tutor-page">
      <h3 className='header-text'>Meet Our Educators</h3>
      <div className="search">
        <form className='search-form' onSubmit={handleSearch}>
          <input type="text" placeholder='Enter location' value={location} onChange={(e) => setLocation(e.target.value)} />
          <input type="text" placeholder='Enter subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
          <input type="text" placeholder='Enter grade/class' value={grade} onChange={(e) => setGrade(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="tutor-list-container">
        <div className="tutor-list">
          {filteredTutors.map((tutor) => (
            <Tutor key={tutor.id} id={tutor.id} image={tutor.image} firstName={tutor.firstName} lastName={tutor.lastName} location={tutor.location} landmark={tutor.landmark} rate={tutor.rate} grade={tutor.grade} about={tutor.about} subject={tutor.subject} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Educator;
