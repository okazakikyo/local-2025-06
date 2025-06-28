
// src/components/Home/Recommendations.tsx
import React from 'react';
import Card from '../common/Card';

const recommendations = [
  { id: 'c1', title: 'Truffle Pasta', imageUrl: '/images/pasta.jpg' },
  { id: 'c2', title: 'Seafood Risotto', imageUrl: '/images/risotto.jpg' },
];

const Recommendations: React.FC = () => (
  <section className="recommendations">
    <h2>Chef’s Recommendations</h2>
    <div className="recommendations__list">
      {recommendations.map(item => (
        <Card key={item.id} title={item.title} imageUrl={item.imageUrl} />
      ))}
    </div>
  </section>
);
export default Recommendations;