// src/components/sections/HeadingForm.jsx
import React from "react";

const HeadingForm = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, heading: { ...data.heading, [e.target.name]: e.target.value } });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Heading</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="input"
        value={data.heading?.name || ""}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input"
        value={data.heading?.email || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        className="input"
        value={data.heading?.phone || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default HeadingForm;