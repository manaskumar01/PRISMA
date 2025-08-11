import React, { useEffect, useState } from 'react';

function Body() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    // Placeholder for MongoDB fetch
    // Replace with actual API call
    fetch('/api/info')
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(() => setInfo({ name: 'Demo User', email: 'demo@example.com' }));
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '3rem',
          width: '90vw',
          maxWidth: '1200px',
          height: '70vh',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          borderRadius: '24px',
          background: 'rgba(255,255,255,0.85)',
          overflow: 'hidden',
        }}
      >
        {/* Left Section: Info from MongoDB */}
        <div
          style={{
            flex: 1,
            background: 'linear-gradient(120deg, #f5f7fa 0%, #c3cfe2 100%)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderTopLeftRadius: '24px',
            borderBottomLeftRadius: '24px',
            boxShadow: '2px 0 12px 0 rgba(0,0,0,0.03)',
          }}
        >
          <h2 style={{ marginBottom: '2rem', color: '#2d3748', fontWeight: 700, fontSize: '2rem' }}>User Information</h2>
          {info ? (
            <div style={{ fontSize: '1.2rem', color: '#374151' }}>
              <p style={{ marginBottom: '1rem' }}><strong>Name:</strong> {info.name}</p>
              <p style={{ marginBottom: '1rem' }}><strong>Email:</strong> {info.email}</p>
              {/* Add more fields as needed */}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Right Section: Two Indicator Bars */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            background: 'linear-gradient(120deg, #f0fdfa 0%, #a7f3d0 100%)',
            borderTopRightRadius: '24px',
            borderBottomRightRadius: '24px',
          }}
        >
          <div style={{ width: '80%', textAlign: 'left' }}>
            <label style={{ fontWeight: 600, color: '#2563eb', fontSize: '1.1rem' }}>Indicator 1</label>
            <div style={{ background: '#e0e7ef', borderRadius: '12px', height: '32px', width: '100%', marginTop: '0.7rem', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)' }}>
              <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, #4caf50 60%, #81c784 100%)', borderRadius: '12px', transition: 'width 0.5s' }}></div>
            </div>
          </div>
          <div style={{ width: '80%', textAlign: 'left' }}>
            <label style={{ fontWeight: 600, color: '#0ea5e9', fontSize: '1.1rem' }}>Indicator 2</label>
            <div style={{ background: '#e0e7ef', borderRadius: '12px', height: '32px', width: '100%', marginTop: '0.7rem', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)' }}>
              <div style={{ width: '35%', height: '100%', background: 'linear-gradient(90deg, #2196f3 60%, #90caf9 100%)', borderRadius: '12px', transition: 'width 0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;