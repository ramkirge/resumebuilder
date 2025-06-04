import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const signup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/signup/', {
        username,
        password,
        email,
      });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/protected'; // go to protected page
    } catch (err) {
      alert(err.response?.data?.error || 'Signup failed!');
    }
  };

  return (
    <form onSubmit={signup}>
      <h2>Sign Up</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
      <input placeholder="Email (optional)" onChange={(e) => setEmail(e.target.value)} /><br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;

