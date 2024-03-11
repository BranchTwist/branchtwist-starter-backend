import React from 'react';

export const Dashboard: React.FC = () => {
  const imageStyle: React.CSSProperties = {
    padding: '50px',
    margin: 'auto',
    objectFit: 'cover',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    overflow: 'hidden',
  };

  return (
    <div style={containerStyle}>
      <img
        src="/cover.png"
        alt="BranchTwist Logo"
        style={imageStyle}
      />
    </div>
  );
}

export default Dashboard;
