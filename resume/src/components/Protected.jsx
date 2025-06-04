import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Protected() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }

    axios.get('http://localhost:8000/api/protected/', {
      headers: { Authorization: `Token ${token}` }
    }).then(res => {
      setMessage(res.data.message);
    }).catch(() => {
      alert('Unauthorized, please login again.');
      localStorage.removeItem('token');
      window.location.href = '/login';
    });
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Protected Page</h2>
      <p>{message}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Protected;
