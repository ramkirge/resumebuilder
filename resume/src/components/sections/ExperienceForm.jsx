// src/components/sections/ExperienceForm.jsx
import React from "react";

const ExperienceForm = ({ data, setData }) => {
  const handleChange = (index, e) => {
    const updated = [...data.experience];
    updated[index][e.target.name] = e.target.value;
    setData({ ...data, experience: updated });
  };

  const addExperience = () => {
    setData({
      ...data,
      experience: [...data.experience, { position: "", company: "", duration: "" }],
    });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Experience</h2>
      {data.experience.map((exp, i) => (
        <div key={i} className="mb-2">
          <input
            type="text"
            name="position"
            placeholder="Position"
            className="input"
            value={exp.position}
            onChange={(e) => handleChange(i, e)}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            className="input"
            value={exp.company}
            onChange={(e) => handleChange(i, e)}
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            className="input"
            value={exp.duration}
            onChange={(e) => handleChange(i, e)}
          />
        </div>
      ))}
      <button onClick={addExperience} className="btn mt-2">Add Experience</button>
    </div>
  );
};

export default ExperienceForm;
