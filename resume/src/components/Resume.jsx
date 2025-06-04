import React, { useState } from "react";
import Sidebar from "./sections/Sidebar";
import ResumeEditor from "./ResumeEditor.jsx";
import ResumePreview from "./sections/ResumePreview";

function Resume() {
  const [resumeData, setResumeData] = useState({
    heading: {},
    education: [],
    experience: [],
    skills: [],
    summary: "",
  });

  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  // Add state for current step:
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex min-h-screen">
      {/* Pass currentStep and setCurrentStep */}
      <Sidebar currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <ResumeEditor
        data={resumeData}
        setData={setResumeData}
        currentStep={currentStep}
      />
      
    </div>
  );
}

export default Resume;



