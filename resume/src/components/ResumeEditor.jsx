import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeadingForm from "./sections/HeadingForm";
import SummaryForm from "./sections/SummaryForm";
import EducationForm from "./sections/EducationForm";
import ExperienceForm from "./sections/ExperienceForm";
import SkillsForm from "./sections/SkillsForm";
import ResumePreview from "./sections/ResumePreview";
import axios from 'axios';

const templateMap = {
  "1": "template1",
  "2": "template2",
  "3": "template3", // 👈 Add this
};

const ResumeEditor = ({ data, setData, currentStep }) => {
  const { templateId } = useParams();
  const navigate = useNavigate();

  // Map param to internal template key
  const currentTemplate = templateMap[templateId] || "template1";

  // All editing forms by step
  const sections = [
    <HeadingForm data={data} setData={setData} key="heading" />,
    <SummaryForm data={data} setData={setData} key="summary" />,
    <EducationForm data={data} setData={setData} key="education" />,
    <ExperienceForm data={data} setData={setData} key="experience" />,
    <SkillsForm data={data} setData={setData} key="skills" />,
  ];

  console.log(data.heading)

  // Allow template switch with URL navigation
  const handleTemplateChange = (e) => {
    navigate(`/editor/${e.target.value}`);
  };

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  console.log("Submitting data:", JSON.stringify(data, null, 2));


  const saveResume = async () => {
  try {
    const csrftoken = getCookie('csrftoken'); // if using cookie-based login

    const response = await axios.post(
      'http://127.0.0.1:8000/api/resumes/',
      {
        resume_data: data,            // wrap your existing data in resume_data
        template_id: 1                // or whatever template is selected
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
        withCredentials: true, // important for cookie-based auth
      }
    );

    console.log("Resume saved:", response.data);
  } catch (error) {
    console.error("Failed to save resume:", error);
  }
};


  // New handler to call saveResume with current data
  const handleSave = () => {
    saveResume(data);
  };

  return (
    <div className="flex gap-40 p-6">
      {/* Left: Resume Editing Form */}
      <div className="w-1/2 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Edit Resume</h1>
        
        <label htmlFor="template-select" className="font-semibold mr-2">
          Choose Template:
        </label>
        <select
          id="template-select"
          value={templateId || "1"}
          onChange={handleTemplateChange}
          className="border rounded p-1 mb-6"
        >
          {Object.keys(templateMap).map((id) => (
            <option key={id} value={id}>
              {templateMap[id].replace("template", "Template ")}
            </option>
          ))}
        </select>

        {sections[currentStep]}

        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Resume
        </button>
      </div>

      {/* Right: Resume Preview */}
      <div className="w-1/2 border rounded shadow-lg overflow-y-auto" style={{ minHeight: "600px" }}>
        <ResumePreview data={data} template={currentTemplate} />
      </div>
    </div>
  );
};

export default ResumeEditor;
