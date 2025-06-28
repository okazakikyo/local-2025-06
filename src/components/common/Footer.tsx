// src/components/common/Footer.tsx

import React from 'react';
import { Link } from 'react-router';

// Footer navigation links
const FOOTER_LINKS: Array<{ path: string; label: string }> = [
  { path: '/home', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/menu', label: 'Menu' },
  { path: '/reservation', label: 'Reservation' },
];

// Company info constants
const COMPANY_NAME = 'Le68 Bistro & Café';
const CURRENT_YEAR = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{ padding: '2rem 1rem', background: '#f8f8f8' }}>
      {/* Footer navigation */}
      <nav className="footer__nav" aria-label="Footer navigation">
        <ul className="footer__list" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', margin: 0, padding: 0, listStyle: 'none' }}>
          {FOOTER_LINKS.map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className="footer__link" style={{ textDecoration: 'none', color: '#333' }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Divider */}
      <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #ddd' }} />

      {/* Copyright */}
      <div className="footer__copy" style={{ textAlign: 'center', color: '#666', fontSize: '0.875rem' }}>
        © {CURRENT_YEAR} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
