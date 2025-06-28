// src/components/Menu/BackToTopButton.tsx
import React from 'react';

const BackToTopButton: React.FC = () => {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className="back-to-top"
      onClick={handleClick}
      style={{ position: 'fixed', bottom: '2rem', right: '2rem', padding: '0.5rem 1rem' }}
    >
      ↑ Top
    </button>
  );
};

export default BackToTopButton;
