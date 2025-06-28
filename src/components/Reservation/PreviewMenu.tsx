// src/components/Reservation/PreviewMenu.tsx
import React from 'react';

const menuItems = ['Bruschetta', 'Lobster Bisque', 'Ribeye Steak'];

const PreviewMenu: React.FC = () => (
  <section className="preview-menu">
    <h2>Savor The Essence Of Le68</h2>
    <ul>
      {menuItems.map((dish, idx) => <li key={idx}>{dish}</li>)}
    </ul>
  </section>
);
export default PreviewMenu;
