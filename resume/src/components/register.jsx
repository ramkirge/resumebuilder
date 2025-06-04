import { useState } from "react";
import axios from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("register/", form);
      alert("Registration successful.");
      navigate("/login");
    } catch {
      alert("Registration failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <input className="w-full p-2 border" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="w-full p-2 border" placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button className="bg-green-500 text-white px-4 py-2">Register</button>
    </form>
  );
}
