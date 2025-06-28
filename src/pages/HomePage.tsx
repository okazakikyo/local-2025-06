// src/pages/HomePage.tsx
import React from 'react';
import Hero from '../components/Home/Hero';
import StorySection from '../components/Home/StorySection';
import Ambience from '../components/Home/Ambience';
import Recommendations from '../components/Home/Recommendations';
import GuestImpressions from '../components/Home/GuestImpressions';


const HomePage: React.FC = () => (
  <>
    <Hero />
    <StorySection />
    <Ambience />
    <Recommendations />
    <GuestImpressions />
  </>
);

export default HomePage;
