'use client';

import { ReactNode } from 'react';
import { baseStyles, disabledStyles, sizeStyles } from '@/components/common/button/styles';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

/* button types*/
type ButtonProps = {
  size?: 'sm' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  children: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  size = 'lg',
  disabled = false,
  type = 'button',
  onClick,
  children,
  className,
  ...props
}: ButtonProps) {
  // Combine styles into final className
  const buttonStyles = twMerge(
    clsx(baseStyles, disabled && disabledStyles, sizeStyles[size], className),
  );

  return (
    <button
      className={buttonStyles}
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
