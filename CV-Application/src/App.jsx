import { useState } from 'react';
import GeneralInfoForm from './components/GeneralInfoForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import CVPreview from './components/CVPreview';
import './App.css';

export default function App() {
  // General information state
  const [generalInfo, setGeneralInfo] = useState({
    fullName: 'Oyekanmi Blessing Ayomide',
    email: 'blessingay5@gmail.com',
    phone: '+2348125575562',
  });

  // Education state
  const [educationList, setEducationList] = useState([
    {
      id: crypto.randomUUID(),
      school: "University of Technology",
      degree: "B.Sc. Computer Science",
      startDate: "2020",
      endDate: "2024",
    },
  ]);

  // Experience state
  const [experienceList, setExperienceList] = useState([
    {
      id: crypto.randomUUID(),
      company: "Tech Solutions Ltd",
      position: "Frontend Developer Intern",
      responsibilities:
        "Built responsive UI components using React and modern CSS.",
      startDate: "2024-01",
      endDate: "Present",
    },
  ]);
  // create handlers for general info
  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  // handlers for education
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

  //Handlers for Experience
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

  return (
    <div className="app-container">
      <div className="form-container">
        <h1>CV BUILDER</h1>
        <GeneralInfoForm
          generalInfo={generalInfo}
          onChange={handleGeneralInfoChange}
        />
        <EducationForm
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
      </div>

      <div className="preview-container">
        <CVPreview
          generalInfo={generalInfo}
          educationList={educationList}
          experienceList={experienceList}
        />
      </div>
    </div>
  );
}



