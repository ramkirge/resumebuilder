// src/components/sections/EducationForm.jsx
import React from "react";

const EducationForm = ({ data, setData }) => {
  const handleChange = (index, e) => {
    const updated = [...data.education];
    updated[index][e.target.name] = e.target.value;
    setData({ ...data, education: updated });
  };

  const addEducation = () => {
    setData({ ...data, education: [...data.education, { degree: "", institute: "", year: "" }] });
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold mb-2">Education</h2>
      {data.education.map((edu, i) => (
        <div key={i} className="mb-2">
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            className="input"
            value={edu.degree}
            onChange={(e) => handleChange(i, e)}
          />
          <input
            type="text"
            name="institute"
            placeholder="Institute"
            className="input"
            value={edu.institute}
            onChange={(e) => handleChange(i, e)}
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            className="input"
            value={edu.year}
            onChange={(e) => handleChange(i, e)}
          />
        </div>
      ))}
      <button onClick={addEducation} className="btn mt-2">Add Education</button>
    </div>
  );
};

export default EducationForm;
