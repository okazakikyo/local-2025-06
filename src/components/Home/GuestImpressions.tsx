// src/components/Home/GuestImpressions.tsx
import React from 'react';

const logos = ['/logos/critic1.png', '/logos/critic2.png'];

const GuestImpressions: React.FC = () => (
  <section className="guest-impressions">
    <h2>Recognized By Critics & Guests</h2>
    <div className="guest-impressions__logos">
      {logos.map((src, idx) => (
        <img key={idx} src={src} alt="Critic Logo" className="guest-impressions__logo" />
      ))}
    </div>
  </section>
);
export default GuestImpressions;