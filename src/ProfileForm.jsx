import React, { useState } from 'react';
import './ProfileForm.css';

function ProfileForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    para: '',
    headerText: '',
    interest: [''],
    linkedin: '',
    twitter: '',
    otherSocialMedia: { url: '', label: '' },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInterestChange = (event, index) => {
    const updatedInterests = [...formData.interest];
    updatedInterests[index] = event.target.value;
    setFormData({ ...formData, interest: updatedInterests });
  };

  const addInterestField = () => {
    setFormData({ ...formData, interest: [...formData.interest, ''] });
  };

  const handleSocialMediaChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      otherSocialMedia: { ...formData.otherSocialMedia, [name]: value },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="inputField"
        />
        <textarea
          name="para"
          value={formData.para}
          onChange={handleInputChange}
          placeholder="Paragraph"
          className="textareaField"
        />
        <input
          type="text"
          name="headerText"
          value={formData.headerText}
          onChange={handleInputChange}
          placeholder="Header Text"
          className="inputField"
        />
        {formData.interest.map((interest, index) => (
          <input
            key={index}
            type="text"
            value={interest}
            onChange={(event) => handleInterestChange(event, index)}
            placeholder="Interest"
            className="inputField"
          />
        ))}
        <button type="button" onClick={addInterestField} className="button">
          Add Interest
        </button>
        <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleInputChange}
          placeholder="LinkedIn URL"
          className="inputField"
        />
        <input
          type="text"
          name="twitter"
          value={formData.twitter}
          onChange={handleInputChange}
          placeholder="Twitter URL"
          className="inputField"
        />
        <input
          type="text"
          name="url"
          value={formData.otherSocialMedia.url}
          onChange={handleSocialMediaChange}
          placeholder="Other Social Media URL"
          className="inputField"
        />
        <input
          type="text"
          name="label"
          value={formData.otherSocialMedia.label}
          onChange={handleSocialMediaChange}
          placeholder="Other Social Media Label"
          className="inputField"
        />
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;
