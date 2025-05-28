// src/App.jsx
import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <>
      <header style={{
        width: '100%',
        background: '#4f8cff',
        color: '#fff',
        padding: '24px 0',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '1px' }}>Team Profiles</h1>
        <p style={{ margin: '8px 0 0', fontSize: '1.1rem', opacity: 0.9 }}>
          Meet our awesome team!
        </p>
      </header>
      <main style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '24px',
        padding: '40px 5vw',
        backgroundColor: '#f9f9f9',
        minHeight: '80vh'
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
      </main>
      <footer style={{
        width: '100%',
        background: '#222',
        color: '#fff',
        textAlign: 'center',
        padding: '18px 0',
        fontSize: '1rem',
        marginTop: 'auto'
      }}>
        &copy; {new Date().getFullYear()} Team Profiles. All rights reserved.
      </footer>
      <style>
        {`
          @media (max-width: 900px) {
            main {
              gap: 16px !important;
              padding: 32px 2vw !important;
            }
          }
          @media (max-width: 600px) {
            main {
              flex-direction: column !important;
              align-items: center !important;
              gap: 12px !important;
              padding: 20px 0 !important;
            }
            header h1 {
              font-size: 2rem !important;
            }
          }
        `}
      </style>
    </>
  );
}

export default App;
