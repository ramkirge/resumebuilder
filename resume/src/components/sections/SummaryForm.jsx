// src/components/sections/SummaryForm.jsx
import React from "react";

const SummaryForm = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, summary: e.target.value });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Summary</h2>
      <textarea
        name="summary"
        placeholder="Write a brief summary about yourself"
        className="input h-24"
        value={data.summary}
        onChange={handleChange}
      />
    </div>
  );
};

export default SummaryForm;
