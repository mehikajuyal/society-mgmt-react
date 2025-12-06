// src/pages/SignupPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add real signup logic here
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
