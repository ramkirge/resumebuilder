import { useState } from 'react';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loginUser } = useAuth();
  const nav = useNavigate();

  const handleLogin = async () => {
    await loginUser(username, password);
  };
  // Example inside login.js



  const handleNavigate = () => {
    nav('/register');
  };

  return (
    <div className="min-h-[500px] w-[70%] max-w-[400px] flex flex-col items-start justify-start">
      <h1 className="mb-5 text-gray-700 text-[44px] font-bold">Login</h1>

      <div className="w-full mb-5">
        <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
          placeholder="Your username here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="w-full">
        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
          placeholder="Your password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        onClick={handleLogin}
        className="w-full mt-5 mb-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition"
      >
        Login
      </button>

      <p
        onClick={handleNavigate}
        className="text-sm text-gray-600 cursor-pointer hover:underline"
      >
        Don't have an account? Sign up
      </p>
    </div>
  );
};

export default Login;
