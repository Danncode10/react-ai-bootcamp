// src/ProfileCard.jsx
import React from 'react';

function ProfileCard({ name, bio, image }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      width: '250px',
      margin: '10px',
      boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    }}>
      <img
        src={image}
        alt={`${name}'s photo`}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <h3>{name}</h3>
      <p>{bio}</p>
      <button
        style={{
          padding: '8px 12px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '8px'
        }}
        onClick={() => alert(`Hello from ${name}!`)}
      >
        Say Hi
      </button>
    </div>
  );
}

export default ProfileCard;
