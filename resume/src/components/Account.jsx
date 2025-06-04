import React from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token'); // or 'access' if JWT, 'authToken' if DRF Token
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome to your Account</h2>
      <button onClick={logout}>Logout</button>
      {/* Your account details/components */}
    </div>
  );
}

export default Account;
