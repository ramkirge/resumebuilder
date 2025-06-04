import React from "react";
import Card from "./ui/card";
import Button  from "./ui/button";
import CardContent  from "./ui/CardContent";
import temp1 from '../assets/temp1.png'
import temp2 from '../assets/temp2.png'
import temp3 from '../assets/temp3.png'
import { useNavigate } from "react-router-dom";

const templates = [
  {
    id: 1,
    name: "Professional",
    image: temp1
  },
  {
    id: 2,
    name: "Modern",
    image: temp2
  },
  {
    id: 3,
    name: "Creative",
    image: temp3
  },
  // Add more templates as needed
];

export default function Template() {
  const navigate = useNavigate();

  const handleSelect = (templateId) => {
    // Redirect to resume builder with selected template ID
    navigate(`/editor/${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 py-14">
      <h1 className="text-3xl font-bold text-center mb-6">Resume Templates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5">
        {templates.map((template) => (
          <Card key={template.id} className="hover:shadow-xl transition-shadow">
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-auto object-cover rounded-t-2xl"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{template.name}</h2>
              <Button
                className="w-full"
                onClick={() => handleSelect(template.id)}
              >
                Use this template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
