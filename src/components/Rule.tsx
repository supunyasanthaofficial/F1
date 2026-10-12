import React from 'react';

export const Rule: React.FC = () => {
  return (
    <div
      style={{
        height: 1,
        background:
          'linear-gradient(90deg, rgba(255,24,1,0.6) 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.08) 75%, rgba(255,24,1,0.3) 100%)',
        margin: '0 clamp(24px, 5vw, 72px)',
      }}
    />
  );
};
