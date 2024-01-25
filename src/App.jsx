import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    para: '',
    headerText: '',
    interest: [],
    linkedin: '',
    twitter: '',
    otherSocialMedia: { url: '', label: '' },
  });

  const handleFormSubmit = (newFormData) => {
    setFormData(newFormData);
  };

  return (
    <div className="card">
      <ProfileForm onFormSubmit={handleFormSubmit} />
      <div className="profileDisplay">
        <h1>{formData.name}</h1>
        <p>{formData.para}</p>
        <h2>{formData.headerText}</h2>
        <ul>
          {formData.interest.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <div className="socialLinks">
          <a href={formData.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={formData.twitter} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          {formData.otherSocialMedia.url && (
            <a href={formData.otherSocialMedia.url} target="_blank" rel="noopener noreferrer">
              {formData.otherSocialMedia.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
