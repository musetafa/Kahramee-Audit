import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none" 
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundColor: '#f4f5f4'
      }} 
    />
  );
};
