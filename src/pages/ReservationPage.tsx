// src/pages/ReservationPage.tsx
import React from 'react';
import ReservationHero from '../components/Reservation/ReservationHero';
import ReservationForm from '../components/Reservation/ReservationForm';
import ContactInfo from '../components/Reservation/ContactInfo';
import PreviewMenu from '../components/Reservation/PreviewMenu';

const ReservationPage: React.FC = () => (
  <>
    <ReservationHero />
    <ReservationForm />
    <ContactInfo />
    <PreviewMenu />
  </>
);

export default ReservationPage;
