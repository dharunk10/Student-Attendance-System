import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Login:', { email, password });
    navigate('/student-card');
  };

  return (
    <div className={styles.wholeBody}>
      <div className={styles.app}>
        <h2 className={styles.heading}>TEACHER'S LOG IN PAGE</h2>
        <form onSubmit={handleLogin}>
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
          <div className={styles.inputContainer}>
            <label className={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>Log In</button>
          </div>
        </form>
        <Link to="/forgot-password" className={styles.link}>Forgot Password?</Link>
        <Link to="/sign-up" className={styles.link} style={{ display: 'block', marginTop: '10px' }}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
