import React, { useState } from 'react';
import styles from './Login.module.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = (event) => {
    event.preventDefault();
    console.log('Password recovery email sent to:', email);
    alert('Password was sent to the email address.');
  };

  return (
    <div className={styles.wholeBody}>
      <div className={styles.app}>
        <h2 className={styles.heading}>Forgot Password</h2>
        <form onSubmit={handleForgetPassword}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>Recover Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
