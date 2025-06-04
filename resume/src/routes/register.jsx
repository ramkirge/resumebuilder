import { useState } from 'react';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { registerUser } = useAuth();
  const nav = useNavigate();

  const handleLogin = async () => {
    await registerUser(username, email, password, passwordConfirm);
  };

  const handleNavigate = () => {
    nav('/login');
  };

  return (
    <div className="flex flex-col w-[70%] max-w-[400px] min-h-[500px] justify-start items-start">
      <h1 className="mb-5 text-gray-700 text-4xl font-bold">Register</h1>

      <div className="mb-5 w-full">
        <label className="block mb-1 font-medium text-gray-700">Username</label>
        <input
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Your username here"
        />
      </div>

      <div className="mb-5 w-full">
        <label className="block mb-1 font-medium text-gray-700">Email</label>
        <input
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Your email here"
        />
      </div>

      <div className="mb-5 w-full">
        <label className="block mb-1 font-medium text-gray-700">Password</label>
        <input
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Your password here"
        />
      </div>

      <div className="w-full">
        <label className="block mb-1 font-medium text-gray-700">Confirm Password</label>
        <input
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
          type="password"
          placeholder="Confirm password here"
        />
      </div>

      <button
        className="mt-5 mb-2 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        onClick={handleLogin}
      >
        Register
      </button>

      <p
        onClick={handleNavigate}
        className="text-sm text-gray-600 cursor-pointer hover:underline"
      >
        Have an account? Sign in
      </p>
    </div>
  );
};

export default Register;
