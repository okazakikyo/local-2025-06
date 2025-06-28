// src/components/Menu/CategoryGrid.tsx
import React from 'react';
import CategoryCard from './CategoryCard';

export interface Category {
  key: string;
  title: string;
  imageUrl: string;
}

interface CategoryGridProps {
  categories: Category[];
  onSelectCategory: (key: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onSelectCategory }) => (
  <section className="category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem', padding: '2rem 1rem' }}>
    {categories.map(cat => (
      <CategoryCard
        key={cat.key}
        title={cat.title}
        imageUrl={cat.imageUrl}
        onSelect={() => onSelectCategory(cat.key)}
      />
    ))}
  </section>
);

export default CategoryGrid;