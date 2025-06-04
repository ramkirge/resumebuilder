export default function Sidebar({ currentStep, setCurrentStep }) {
  const steps = ["Heading", "Summary", "Education", "Experience", "Skills"];

  return (
    <div className="w-1/6 bg-gray-100 p-4 border-r space-y-4">
      {steps.map((label, index) => (
        <button
          key={index}
          onClick={() => setCurrentStep(index)}
          className={`block w-full text-left px-4 py-2 rounded ${
            currentStep === index ? "bg-blue-500 text-white" : "hover:bg-blue-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
