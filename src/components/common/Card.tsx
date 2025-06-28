// src/components/common/Card.tsx

import React from 'react';

export interface CardProps {
  /** Optional image URL displayed at top */
  imageUrl?: string;
  /** Card title text */
  title?: string;
  /** Main content of the card */
  children: React.ReactNode;
  /** Optional footer content (e.g., actions, links) */
  footer?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card component
 * - Displays optional image, title, body and footer.
 * - Use for displaying grouped content in a structured container.
 */
const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  children,
  footer,
  className = '',
}) => {
  return (
    <div className={`card ${className}`.trim()}>
      {imageUrl && (
        <div className="card__image-container">
          <img src={imageUrl} alt={title || 'Card image'} className="card__image" />
        </div>
      )}

      {(title || children) && (
        <div className="card__body">
          {title && <h3 className="card__title">{title}</h3>}
          <div className="card__content">{children}</div>
        </div>
      )}

      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
};

export default Card;
