// src/App.jsx
import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: '20px',
      gap: '20px',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh'
    }}>
      <ProfileCard
        name="Alice"
        bio="Front-end developer who loves React."
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <ProfileCard
        name="Bob"
        bio="Back-end guru and database expert."
        image="https://randomuser.me/api/portraits/men/46.jpg"
      />
      <ProfileCard
        name="Clara"
        bio="UX designer passionate about user-friendly interfaces."
        image="https://randomuser.me/api/portraits/women/65.jpg"
      />
    </div>
  );
}

export default App;
