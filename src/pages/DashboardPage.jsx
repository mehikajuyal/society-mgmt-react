// // src/pages/DashboardPage.jsx
// import React from 'react';

// function DashboardPage() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Welcome to the Dashboard!</h2>
//       <p>This is a protected area after login/signup.</p>
//     </div>
//   );
// }

// export default DashboardPage;


import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Welcome, {user?.email}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;

