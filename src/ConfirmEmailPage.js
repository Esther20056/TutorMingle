import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ConfirmEmailPage = () => {
  const { token } = useParams();
  const [status, setStatus] = useState('Processing...');
  
  useEffect(() => {
    const confirmEmail = async () => {
      try {
        await axios.get(`http://localhost:8000/confirm-email/${token}/`);
        setStatus('Your email has been confirmed!');
      } catch (error) {
        setStatus('Error confirming email.');
      }
    };

    confirmEmail();
  }, [token]);

  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
};

export default ConfirmEmailPage;
