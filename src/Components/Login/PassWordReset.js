import React, { useState } from 'react';
import axios from 'axios';

const PassWordReset = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/reset_password/', { email });
            setMessage('Password reset email sent!');
        } catch (error) {
            setMessage('Error sending password reset email.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <button type="submit">Send Password Reset Email</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default PassWordReset;
