import React, { useState } from 'react';
import "./protest-css.css"

function ProtestForm() {
  const [showForm, setShowForm] = useState(false);
  const [protestTitle, setProtestTitle] = useState('');
  const [protestDescription, setProtestDescription] = useState('');
  const [protestDate, setProtestDate] = useState('');
  const [protestLocation, setProtestLocation] = useState('');

  const handleCreateProtestClick = () => {
    setShowForm(true);
  };

  const handleSubmitProtest = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to a server or store it locally
    alert('Protest submitted!');
  };

  return (
    <div id="protest-section">
      <h1>Voice Your Protest</h1>
      <button id="create-protest-btn" onClick={handleCreateProtestClick}>Create a Protest</button>
      {showForm && (
        <div id="protest-form">
          <input type="text" id="protest-title" placeholder="Title of the Protest" value={protestTitle} onChange={(e) => setProtestTitle(e.target.value)} required />
          <textarea id="protest-description" placeholder="Description" value={protestDescription} onChange={(e) => setProtestDescription(e.target.value)} required></textarea>
          <input type="date" id="protest-date" placeholder="Date" value={protestDate} onChange={(e) => setProtestDate(e.target.value)} required />
          <input type="text" id="protest-location" placeholder="Location" value={protestLocation} onChange={(e) => setProtestLocation(e.target.value)} required />
          <button id="submit-protest" onClick={handleSubmitProtest}>Submit Protest</button>
        </div>
      )}
    </div>
  );
}

export default ProtestForm;
