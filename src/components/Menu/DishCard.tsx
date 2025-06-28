// src/components/Menu/DishCard.tsx
import React from 'react';

interface DishCardProps {
  name: string;
  price: string;
  imageUrl?: string;
}

const DishCard: React.FC<DishCardProps> = ({ name, price, imageUrl }) => (
  <div className="dish-card">
    {imageUrl && <img src={imageUrl} alt={name} className="dish-card__image" />}
    <div className="dish-card__info">
      <h4 className="dish-card__name">{name}</h4>
      <p className="dish-card__price">{price}</p>
    </div>
  </div>
);

export default DishCard;
