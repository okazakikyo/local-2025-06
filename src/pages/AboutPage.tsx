// src/pages/AboutPage.tsx
import React from 'react';
import AboutHero from '../components/About/AboutHero';
import OurStory from '../components/About/OurStory';
import Rewards from '../components/About/Rewards';
import ChefProfile from '../components/About/ChefProfile';
import Recognitions from '../components/About/Recognitions';
import Quote from '../components/About/Quote';

const AboutPage: React.FC = () => (
  <>
    <AboutHero />
    <OurStory />
    <Rewards />
    <ChefProfile />
    <Recognitions />
    <Quote />
  </>
);

export default AboutPage;