
import React, { useState } from 'react';
import StarRating from './StarRating';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './CommentForm.css';

const CommentForm = () => {
  const [ratingStars, setRatingStars] = useState(1);
  const [comments, setComments] = useState('');
  const navigate = useNavigate();

  const handleRatingChange = (newRating) => {
    setRatingStars(newRating);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ratingStars < 1 || !comments.trim()) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in both the rating and comments.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    Swal.fire({
      title: 'Success!',
      text: 'Your submission was successful.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      setRatingStars(1);
      setComments('');
      navigate('/')
    });
  };

  return (
    <div className="comment-container">
      <p className='comment-p'>
        Please rate your experience and share any comments. Your insights are crucial in helping us enhance our services. Thank you for taking the time to provide your valuable input!
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label>
          <StarRating rating={ratingStars} onRatingChange={handleRatingChange} />
        </div>
        <div>
          <label>Comments:</label>
          <textarea
            value={comments}
            onChange={handleCommentsChange}
            rows="4"
            cols="50"
            name='comments'
          />
        </div>
        <button className='comments-button' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;



