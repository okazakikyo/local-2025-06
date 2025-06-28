// src/components/About/Rewards.tsx
import React from 'react';

const achievements = ['Best Bistro 2023', 'Top Chef Award'];

const Rewards: React.FC = () => (
  <section className="rewards">
    <h2>Rewards & Achievements</h2>
    <ul>
      {achievements.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  </section>
);
export default Rewards;