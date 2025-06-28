// src/components/About/Recognitions.tsx
import React from 'react';

const recognitionImgs = ['/images/recognition1.jpg', '/images/recognition2.jpg'];

const Recognitions: React.FC = () => (
  <section className="recognitions">
    <h2>Recognized By Critics</h2>
    <div className="recognitions__list">
      {recognitionImgs.map((src, idx) => (
        <img key={idx} src={src} alt="Recognition" />
      ))}
    </div>
  </section>
);
export default Recognitions;