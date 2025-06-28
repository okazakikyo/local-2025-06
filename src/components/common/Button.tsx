// src/components/common/Button.tsx

import React from 'react';

// Button variants
export const BUTTON_VARIANTS = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
  outline: 'btn--outline',
} as const;

type ButtonVariant = keyof typeof BUTTON_VARIANTS;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Visual variant of the button */
  variant?: ButtonVariant;
  /** Full width button */
  fullWidth?: boolean;
};

/**
 * Button component
 * - Supports variants: primary, secondary, outline
 * - Extracted styles via CSS classes
 * - Forwards other native button attributes (type, disabled, onClick, etc.)
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...rest
}) => {
  const variantClass = BUTTON_VARIANTS[variant] || '';
  const widthClass = fullWidth ? 'btn--full-width' : '';

  return (
    <button
      className={`btn ${variantClass} ${widthClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
