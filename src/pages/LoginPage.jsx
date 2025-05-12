// // src/pages/LoginPage.jsx
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function LoginPage() {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add real login logic here
//     navigate('/dashboard');
//   };

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Email" required /><br />
//         <input type="password" placeholder="Password" required /><br />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         New user? <Link to="/signup">Sign up here</Link>
//       </p>
//     </div>
//   );
// }

// export default LoginPage;




import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import authService from '../services/authService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await authService.login(email, password);
    if (userData) {
      login(userData);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        New user? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default LoginPage;

