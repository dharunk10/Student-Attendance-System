import React, { useState } from 'react';
import './Login.css';


const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = (event) => {
    event.preventDefault();
    console.log('Password recovery email sent to:', email);
    alert('Password was sent to the email address.');
   
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgetPassword}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Recover Password</button>
      </form>
    </div>
  );
};

export default ForgetPassword;