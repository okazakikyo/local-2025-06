// src/components/Menu/CategoryCard.tsx
import React from 'react';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  onSelect: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl, onSelect }) => (
  <div className="category-card" onClick={onSelect} style={{ cursor: 'pointer' }}>
    <img src={imageUrl} alt={title} className="category-card__image" />
    <h3 className="category-card__title">{title}</h3>
  </div>
);

export default CategoryCard;