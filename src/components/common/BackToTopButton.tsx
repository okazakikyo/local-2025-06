// src/components/common/BackToTopButton.tsx

import React, { useState, useEffect } from 'react';

/**
 * BackToTopButton component
 * - Appears when user scrolls down
 * - Scrolls smoothly to top when clicked
 */
const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className="back-to-top-button"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        padding: '0.75rem 1rem',
        borderRadius: '4px',
        border: 'none',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
        background: '#333',
        color: '#fff',
      }}
    >
      ↑ Top
    </button>
  );
};

export default BackToTopButton;