import React from 'react';
import { useUser } from '@clerk/clerk-react';

function Body() {
  const { user, isLoaded } = useUser();
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#020024',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '90vw',
          maxWidth: '1200px',
          height: '70vh',
          boxShadow: '0 0 16px 2px #00f0ff88',
          borderRadius: '24px',
          background: 'transparent',
          overflow: 'hidden',
          margin: 'auto',
        }}
      >
        {/* Left Section: Info from MongoDB */}
        <div
          style={{
            flex: 3,
            background: 'linear-gradient(120deg, #39ff14 0%, #00ff99 100%)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderTopLeftRadius: '24px',
            borderBottomLeftRadius: '24px',
            boxShadow: '0 0 48px 12px #39ff14cc, 0 0 96px 24px #39ff1444',
            minWidth: 0,
          }}
        >
          {isLoaded && user ? (
            <div style={{ fontSize: '1.2rem', color: '#374151', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', width: '100%' }}>
              <img
                src={user.imageUrl}
                alt="User profile"
                style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)', marginBottom: 0, marginTop: '0.5rem' }}
              />
              <div style={{ width: '100%' }}>
                <p style={{ marginBottom: '0.5rem', textAlign: 'left' }}><strong>Name:</strong> {user.fullName || user.firstName || 'N/A'}</p>
                <p style={{ marginBottom: '0.5rem', textAlign: 'left' }}><strong>Email:</strong> {user.primaryEmailAddress?.emailAddress || 'N/A'}</p>
                <p style={{ marginBottom: '0.5rem', textAlign: 'left' }}><strong>Phone:</strong> {user.primaryPhoneNumber?.phoneNumber || 'N/A'}</p>
                <p style={{ marginBottom: '0.5rem', textAlign: 'left' }}><strong>Vehicle Number:</strong> {user.publicMetadata?.vehicleNumber || 'Not set'}</p>
              </div>
            </div>
          ) : (
            <>
              <h2 style={{ marginBottom: '2rem', color: '#2d3748', fontWeight: 700, fontSize: '2rem' }}>User Information</h2>
              <div style={{ fontSize: '1.2rem', color: '#374151', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', width: '100%' }}>
                <img
                  src="https://ui-avatars.com/api/?name=Demo+User&background=39ff14&color=222&size=120"
                  alt="Demo profile"
                  style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 16px 0 #39ff1444', marginBottom: 0, marginTop: '0.5rem' }}
                />
                <div style={{ width: '100%' }}>
                  <p style={{ marginBottom: '0.5rem', textAlign: 'left' }}><strong>Name:</strong> Demo User</p>
                  <p style={{ marginBottom: '0.5rem', textAlign: 'left' }}><strong>Email:</strong> demo@example.com</p>
                  <p style={{ marginBottom: '0.5rem', textAlign: 'left' }}><strong>Phone:</strong> +91 9876543210</p>
                  <p style={{ marginBottom: '0.5rem', textAlign: 'left' }}><strong>Vehicle Number:</strong> MH12AB1234</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Section: Two Indicator Bars */}
        <div
          style={{
            flex: 7,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            background: 'radial-gradient(circle at center, #90caf9 0%, #1976d2 100%)',
            borderTopRightRadius: '24px',
            borderBottomRightRadius: '24px',
            minWidth: 0,
            boxShadow: '12px 24px 48px 8px #1976d2cc, 24px 48px 96px 16px #1976d244',
          }}
        >
          <div style={{ width: '80%', textAlign: 'left' }}>
            <label style={{ fontWeight: 600, color: '#000', fontSize: '1.1rem' }}>Drowsiness</label>
            <div style={{ background: '#e0e7ef', borderRadius: '12px', height: '32px', width: '100%', marginTop: '0.7rem', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)' }}>
              <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, #ff9800 60%, #ffd54f 100%)', borderRadius: '12px', transition: 'width 0.5s' }}></div>
            </div>
          </div>
          <div style={{ width: '80%', textAlign: 'left' }}>
            <label style={{ fontWeight: 600, color: '#000', fontSize: '1.1rem' }}>Alcoholic</label>
            <div style={{ background: '#e0e7ef', borderRadius: '12px', height: '32px', width: '100%', marginTop: '0.7rem', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)' }}>
              <div style={{ width: '35%', height: '100%', background: 'linear-gradient(90deg, #ef4444 60%, #f87171 100%)', borderRadius: '12px', transition: 'width 0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;