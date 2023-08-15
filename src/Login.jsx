import React, { useState } from 'react';
import { login } from './authService';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      const token = response.token; // Assuming the server returns the token in the response
      localStorage.setItem('token', token); // Save the token in local storage
      // Handle successful login, e.g., redirect to a protected route
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
        Create new account
      </button>
    </div>
  );
};
