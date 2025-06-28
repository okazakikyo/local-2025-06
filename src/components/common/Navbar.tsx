// src/components/common/Navbar.tsx

import React from 'react';
import { Link, useLocation } from 'react-router';
import LanguageSelector from './LanguageSelector';

// Navigation items configuration
const NAV_ITEMS: Array<{ path: string; label: string }> = [
  { path: '/home', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/menu', label: 'Menu' },
  { path: '/reservation', label: 'Reservation' },
];

/**
 * Determine if a nav item is active based on current location
 */
const isActive = (currentPath: string, itemPath: string): boolean =>
  currentPath === itemPath;

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="navbar">
      {/* Brand / Logo */}
      <div className="navbar__brand">
        <Link to="/home" className="navbar__logo">
          {/* TODO: Replace with actual logo img or component */}
          Le68 Bistro & Café
        </Link>
      </div>

      {/* Navigation links */}
      <nav className="navbar__nav">
        <ul className="navbar__list">
          {NAV_ITEMS.map(({ path, label }) => (
            <li
              key={path}
              className={`navbar__item ${
                isActive(currentPath, path) ? 'navbar__item--active' : ''
              }`}
            >
              <Link to={path} className="navbar__link">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Language selector */}
      <div className="navbar__lang">
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Navbar;
