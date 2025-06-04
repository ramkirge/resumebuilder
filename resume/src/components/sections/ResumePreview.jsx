import React, { useRef } from "react";
import domtoimage from "dom-to-image-more";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// Template1
const Template1 = ({ data, resumeRef }) => {
  return (
    <div
      ref={resumeRef}
      className="flex h-full w-full overflow-y-auto shadow-lg"
      style={{ minHeight: "600px" }}
    >
      {/* Sidebar */}
      <div className="bg-blue-900 text-white p-4 flex flex-col items-center w-1/3">
        {data.heading?.photo && (
          <img
            src={data.heading.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
        )}
        <div className="text-sm mb-4 text-center">
          <p className="font-bold text-lg">{data.heading?.name}</p>
          <p>{data.heading?.email}</p>
          <p>{data.heading?.phone}</p>
          <p>{data.heading?.address}</p>
        </div>

        {data.skills?.length > 0 && (
          <div className="w-full mb-4">
            <h3 className="text-sm font-semibold border-b border-white mb-1">Skills</h3>
            <ul className="list-disc ml-4 text-sm">
              {data.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {data.languages?.length > 0 && (
          <div className="w-full mb-4">
            <h3 className="text-sm font-semibold border-b border-white mb-1">Languages</h3>
            <ul className="list-disc ml-4 text-sm">
              {data.languages.map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="bg-white text-sm w-2/3 p-6 overflow-y-auto">
        {data.summary && (
          <section className="mb-4">
            <h2 className="font-bold text-base mb-1">Profile</h2>
            <p>{data.summary}</p>
          </section>
        )}

        {data.experience?.length > 0 && (
          <section className="mb-4">
            <h2 className="font-bold text-base mb-1">Work Experience</h2>
            {data.experience.map((exp, i) => (
              <div key={i} className="mb-2">
                <strong>{exp.position}</strong> at {exp.company}
                <p className="text-xs">{exp.duration}</p>
              </div>
            ))}
          </section>
        )}

        {data.education?.length > 0 && (
          <section className="mb-4">
            <h2 className="font-bold text-base mb-1">Education</h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-2">
                <strong>{edu.degree}</strong>, {edu.institute}
                <p className="text-xs">{edu.year}</p>
              </div>
            ))}
          </section>
        )}

        {data.certifications?.length > 0 && (
          <section className="mb-4">
            <h2 className="font-bold text-base mb-1">Certifications</h2>
            <ul className="list-disc ml-4 text-sm">
              {data.certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

// Template2 (same structure as Template1, updated with resumeRef)
const Template2 = ({ data, resumeRef }) => {
  return (
    <div
      ref={resumeRef}
      className="flex h-full w-full overflow-y-auto shadow-lg"
      style={{ minHeight: "600px" }}
    >
      {/* Sidebar */}
      <div className="bg-gray-800 text-white p-4 flex flex-col items-center w-1/3">
        {data.heading?.photo && (
          <img
            src={data.heading.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
        )}
        <div className="text-base mb-4 text-center">
          <p className="font-bold text-lg">{data.heading?.name}</p>
          <p>{data.heading?.email}</p>
          <p>{data.heading?.phone}</p>
          <p>{data.heading?.address}</p>
        </div>

        {data.skills?.length > 0 && (
          <div className="w-full mb-4">
            <h3 className="text-base font-semibold border-b border-white mb-1">Skills</h3>
            <ul className="list-disc ml-4 text-base">
              {data.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {data.languages?.length > 0 && (
          <div className="w-full mb-4">
            <h3 className="text-base font-semibold border-b border-white mb-1">Languages</h3>
            <ul className="list-disc ml-4 text-base">
              {data.languages.map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 text-base w-2/3 p-6 overflow-y-auto">
        {data.summary && (
          <section className="mb-4">
            <h2 className="font-bold text-lg mb-1">Profile</h2>
            <p>{data.summary}</p>
          </section>
        )}

        {data.experience?.length > 0 && (
          <section className="mb-4">
            <h2 className="font-bold text-lg mb-1">Work Experience</h2>
            {data.experience.map((exp, i) => (
              <div key={i} className="mb-2">
                <strong>{exp.position}</strong> at {exp.company}
                <p className="text-sm">{exp.duration}</p>
              </div>
            ))}
          </section>
        )}

        {data.education?.length > 0 && (
          <section className="mb-4">
            <h2 className="font-bold text-lg mb-1">Education</h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-2">
                <strong>{edu.degree}</strong>, {edu.institute}
                <p className="text-sm">{edu.year}</p>
              </div>
            ))}
          </section>
        )}

        {data.certifications?.length > 0 && (
          <section className="mb-4">
            <h2 className="font-bold text-lg mb-1">Certifications</h2>
            <ul className="list-disc ml-4 text-base">
              {data.certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

const Template3 = ({ data, resumeRef }) => {
  return (
    <div
      ref={resumeRef}
      className="bg-white text-gray-900 p-10 max-w-4xl mx-auto shadow-lg font-serif"
      style={{ fontSize: "14px", lineHeight: "1.6" }}
    >
      {/* Header */}
      <div className="text-center border-b pb-4 mb-4">
        <h1 className="text-2xl font-bold">{data.heading?.name}</h1>
        <p className="italic">{data.heading?.title}</p>
        <p>{data.heading?.address}</p>
        <p>
          {data.heading?.phone} | {data.heading?.email}
        </p>
      </div>

      {/* Profile */}
      {data.summary && (
        <section className="mb-6">
          <h2 className="uppercase font-bold border-b mb-2 text-gray-700">Profile</h2>
          <p>{data.summary}</p>
        </section>
      )}

      {/* Employment History */}
      {data.experience?.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-bold border-b mb-2 text-gray-700">Employment History</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between font-semibold">
                <span>{exp.position}, {exp.company}</span>
                <span>{exp.location}</span>
              </div>
              <div className="flex justify-between text-sm italic">
                <span>{exp.duration}</span>
              </div>
              <ul className="list-disc ml-6 mt-1">
                {exp.details?.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-bold border-b mb-2 text-gray-700">Education</h2>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between font-semibold">
                <span>{edu.degree}, {edu.institute}</span>
                <span>{edu.location}</span>
              </div>
              <div className="italic text-sm">{edu.year}</div>
              {edu.notes && (
                <ul className="list-disc ml-6 mt-1">
                  {edu.notes.map((note, j) => (
                    <li key={j}>{note}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {data.skills?.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-bold border-b mb-2 text-gray-700">Skills</h2>
          <div className="flex flex-col gap-x-6">
            {data.skills.map((skill, i) => (
              <div key={i} className="flex justify-between">
                <span>{skill.name}</span>
                <span className="italic">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* References */}
      {data.references?.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-bold border-b mb-2 text-gray-700">References</h2>
          {data.references.map((ref, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">{ref.name}</p>
              <p>{ref.email} - {ref.phone}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};


const ResumePreview = ({ data, template }) => {
  const resumeRef = useRef(null);

  function removeUnsupportedColors(node) {
  const elements = node.querySelectorAll("*");
  elements.forEach((el) => {
    const computed = window.getComputedStyle(el);

    ["color", "backgroundColor", "borderColor"].forEach((prop) => {
      const value = computed[prop];
      if (value && value.includes("oklch")) {
        // Apply fallback color
        el.style[prop] = "#000"; // or "#fff" or any safe color
      }
    });
  });
}


  const handleDownloadPDF = () => {
  if (!resumeRef.current) return;

  // Remove unsupported oklch() colors before capturing
  removeUnsupportedColors(resumeRef.current);

  html2canvas(resumeRef.current, {
    scale: 2,
    useCORS: true,
  })
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`resume-${template}.pdf`);
    })
    .catch((error) => {
      console.error("Error generating PDF:", error);
    });
};

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="text-xl font-semibold">Live Preview ({template})</h2>
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          Download PDF
        </button>
      </div>

      {/* Add a wrapper with proper A4 dimensions */}
      <div className="p-4 flex justify-center bg-gray-100 overflow-auto">
        <div
          ref={resumeRef}
          className="bg-white shadow-xl p-6 w-[794px] min-h-[1123px]" // A4 size at 96dpi
        >
          {template === "template1" && <Template1 data={data} />}
          {template === "template2" && <Template2 data={data} />}
          {template === "template3" && <Template3 data={data} />}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;