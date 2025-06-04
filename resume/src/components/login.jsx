import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("login/", form);
      login(res.data.access);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <input className="w-full p-2 border" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="w-full p-2 border" placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button className="bg-blue-500 text-white px-4 py-2">Login</button>
    </form>
  );
}
