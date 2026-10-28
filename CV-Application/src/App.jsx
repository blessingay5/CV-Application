// src/App.jsx
import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationalForm from "./components/EducationalForm";
import ExperienceForm from "./components/ExperienceForm";
import CVPreview from "./components/CVPreview"; 
import "./App.css";

export default function App() {
  // Global submission toggle for the whole CV
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [educationList, setEducationList] = useState([
    {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [experienceList, setExperienceList] = useState([
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  ]);

  // Handlers
  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEducation = () => {
    setEducationList([
      ...educationList,
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleEducationChange = (id, field, value) => {
    setEducationList(
      educationList.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu,
      ),
    );
  };

  const handleDeleteEducation = (id) => {
    setEducationList(educationList.filter((edu) => edu.id !== id));
  };

  const handleAddExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleExperienceChange = (id, field, value) => {
    setExperienceList(
      experienceList.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp,
      ),
    );
  };

  const handleDeleteExperience = (id) => {
    setExperienceList(experienceList.filter((exp) => exp.id !== id));
  };

  // Handle global submit & edit
  const handleSubmitAll = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEditAll = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="app-container">
      <header
        className="no-print"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <h1>CV Builder</h1>
        {isSubmitted && (
          <button
            type="button"
            onClick={() => window.print()}
            style={{ backgroundColor: "#10b981", color: "white" }}
          >
            📄 Save as PDF
          </button>
        )}
      </header>

      {/* CONDITIONAL RENDER: If submitted, show full CV Preview. Otherwise, show forms. */}
      {isSubmitted ? (
        <div className="submitted-cv-wrapper">
          <CVPreview
            generalInfo={generalInfo}
            educationList={educationList}
            experienceList={experienceList}
          />
          <div
            className="no-print"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <button
              type="button"
              onClick={handleEditAll}
              style={{
                backgroundColor: "#4f46e5",
                color: "white",
                padding: "0.75rem 2rem",
                fontSize: "1rem",
              }}
            >
              Edit CV
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmitAll}>
          <GeneralInfoForm
            generalInfo={generalInfo}
            onChange={handleGeneralInfoChange}
          />

          <EducationalForm
            educationList={educationList}
            onChange={handleEducationChange}
            onAdd={handleAddEducation}
            onDelete={handleDeleteEducation}
          />

          <ExperienceForm
            experienceList={experienceList}
            onChange={handleExperienceChange}
            onAdd={handleAddExperience}
            onDelete={handleDeleteExperience}
          />

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#059669",
                color: "white",
                padding: "0.75rem 2.5rem",
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              Submit CV
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
