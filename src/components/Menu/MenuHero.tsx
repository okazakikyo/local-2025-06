// src/components/Menu/MenuHero.tsx
import React from 'react';
import SearchBar from './SearchBar';

const MenuHero: React.FC = () => (
  <section className="menu-hero" style={{
    background: 'url(/images/menu-hero.jpg) center/cover no-repeat',
    padding: '4rem 1rem',
    textAlign: 'center',
    color: '#fff',
  }}>
    <h1 className="menu-hero__title">Our Menu</h1>
    <p className="menu-hero__subtitle">Explore flavors crafted with passion</p>
    <SearchBar />
  </section>
);

export default MenuHero;