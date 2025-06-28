
// src/components/Menu/SectionImage.tsx
import React from 'react';

interface SectionImageProps {
  src: string;
  alt?: string;
}

const SectionImage: React.FC<SectionImageProps> = ({ src, alt = '' }) => (
  <div className="section-image">
    <img src={src} alt={alt} style={{ width: '100%', borderRadius: '8px' }} />
  </div>
);

export default SectionImage;

