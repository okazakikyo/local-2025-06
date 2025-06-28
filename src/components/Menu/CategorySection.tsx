// src/components/Menu/CategorySection.tsx
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import SectionImage from './SectionImage';
import DishList from './DishList';

interface CategorySectionProps {
  title: string;
  imageUrl: string;
  dishes: Array<{ id: string; name: string; price: string; imageUrl?: string }>;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, imageUrl, dishes }) => (
  <section className="category-section" style={{ display: 'flex', flexWrap: 'wrap', padding: '2rem 1rem', gap: '1rem' }}>
    <div style={{ flex: '1 1 300px' }}>
      <SectionImage src={imageUrl} alt={title} />
    </div>
    <div style={{ flex: '2 1 500px' }}>
      <SectionTitle title={`- ${title} -`} />
      <DishList dishes={dishes} />
    </div>
  </section>
);

export default CategorySection;
