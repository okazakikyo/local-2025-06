// src/components/About/ChefProfile.tsx
import React from 'react';
import Card from '../common/Card';

const ChefProfile: React.FC = () => (
  <section className="chef-profile">
    <Card
      imageUrl="/images/chef.jpg"
      title="Cooking With Love"
    >
      <p>Our head chef brings passion to every dish.</p>
    </Card>
  </section>
);
export default ChefProfile;