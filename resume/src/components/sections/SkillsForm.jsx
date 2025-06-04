// src/components/sections/SkillsForm.jsx
import React from "react";

const SkillsForm = ({ data, setData }) => {
  const handleChange = (index, field, value) => {
    const updated = [...data.skills];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setData({ ...data, skills: updated });
  };

  const addSkill = () => {
    setData({
      ...data,
      skills: [...data.skills, { name: "", level: "" }],
    });
  };

  const removeSkill = (index) => {
    const updated = [...data.skills];
    updated.splice(index, 1);
    setData({ ...data, skills: updated });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Skills</h2>
      {data.skills.map((skill, i) => (
        <div key={i} className="mb-2 flex gap-2 items-center">
          <input
            type="text"
            placeholder="Skill Name"
            className="input input-bordered w-1/2"
            value={skill.name}
            onChange={(e) => handleChange(i, "name", e.target.value)}
          />
          <select
            className="select select-bordered w-1/3"
            value={skill.level}
            onChange={(e) => handleChange(i, "level", e.target.value)}
          >
            <option value="">Select Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
          <button
            onClick={() => removeSkill(i)}
            className="btn btn-error btn-sm"
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={addSkill} className="btn btn-primary mt-2">
        Add Skill
      </button>
    </div>
  );
};

export default SkillsForm;
