import { useEffect, useState } from "react";
import { get_notes } from "../api/endpoints";
import axios from 'axios';
import { useAuth } from "../context/useAuth";

const Menu = () => {
  const [notes, setNotes] = useState([]);
  const { user, logoutUser } = useAuth();



 useEffect(() => {
  const fetchResumes = async () => {
    const res = await fetch("http://localhost:8000/api/resumes/", {
      credentials: "include", // 🔥 sends session cookie with the request
    });

    if (res.status === 401) {
      console.error("Unauthorized – login required");
      return;
    }

    const data = await res.json();
    console.log("Resumes:", data);
  };

  fetchResumes();
}, []);





  

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <div className="flex flex-col items-start">
      <h1 className="text-[42px] pb-[30px] font-semibold">
        Welcome {user ? user.username : "Guest"} 👋
      </h1>

      <div className="flex flex-col items-start pb-[50px] space-y-2">
        {notes.map((note) => (
          <p key={note.id} className="text-[22px]">
            {note.name}
          </p>
        ))}
      </div>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Menu;
