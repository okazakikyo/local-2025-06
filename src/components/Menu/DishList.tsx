// src/components/Menu/DishList.tsx
import React from 'react';
import DishCard from './DishCard';

interface Dish {
  id: string;
  name: string;
  price: string;
  imageUrl?: string;
}

interface DishListProps {
  dishes: Dish[];
}

const DishList: React.FC<DishListProps> = ({ dishes }) => (
  <div className="dish-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1rem' }}>
    {dishes.map(d => (
      <DishCard key={d.id} name={d.name} price={d.price} imageUrl={d.imageUrl} />
    ))}
  </div>
);

export default DishList;