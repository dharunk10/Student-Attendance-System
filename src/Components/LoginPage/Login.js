import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';



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
    <div className="login">
      <h2>TEACHER'S LOG IN PAGE</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <Link to="/forgot-password">Forgot Password?</Link>
      <Link to="/sign-up" style={{ display: 'block', marginTop: '10px' }}>Sign Up</Link>
    </div>
  );
};

export default Login;