// src/components/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header/Header';
import styles from '@/css/MainLayout.module.css';

const MainLayout: React.FC = () => {
  return (
    <div className='grid fullHeight'>

        {/* Header component that contains the navigation and logo */}
        <Header />

        {/* Main content area where child routes will be rendered */}
      <main className={styles.main}>
        {/* Outlet sẽ render các route con của MainLayout */}
        <Outlet />
      </main>

      <footer className={styles.footer}>
        © 2025 – Le 68 Bistro & Café
      </footer>
    </div>
  );
};

export default MainLayout;
