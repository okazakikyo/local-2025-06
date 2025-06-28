// src/pages/MenuPage.tsx
import React, { useState } from 'react';
import MenuHero from '../components/Menu/MenuHero';
import CategoryGrid, { Category } from '../components/Menu/CategoryGrid';
import CategorySection from '../components/Menu/CategorySection';
import BackToTopButton from '../components/Menu/BackToTopButton';

// Sample data
const categories: Category[] = [
  { key: 'appetizers', title: 'Appetizers', imageUrl: '/images/appetizers.jpg' },
  { key: 'mains', title: 'Main Courses', imageUrl: '/images/mains.jpg' },
  { key: 'desserts', title: 'Desserts', imageUrl: '/images/desserts.jpg' },
];

const sampleDishes = {
  appetizers: [
    { id: 'a1', name: 'Bruschetta', price: '$8', imageUrl: '/images/bruschetta.jpg' },
  ],
  mains: [
    { id: 'm1', name: 'Steak Frites', price: '$24', imageUrl: '/images/steak.jpg' },
  ],
  desserts: [
    { id: 'd1', name: 'Tiramisu', price: '$10', imageUrl: '/images/tiramisu.jpg' },
  ],
};

const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (key: string) => {
    setSelectedCategory(prev => (prev === key ? null : key));
  };

  return (
    <>
      <MenuHero />
      <CategoryGrid categories={categories} onSelectCategory={handleSelectCategory} />

      {categories.map(cat => (
        selectedCategory === cat.key && (
          <CategorySection
            key={cat.key}
            title={cat.title}
            imageUrl={cat.imageUrl}
            dishes={sampleDishes[cat.key as keyof typeof sampleDishes]}
          />
        )
      ))}

      <BackToTopButton />
    </>
  );
};

export default MenuPage;
