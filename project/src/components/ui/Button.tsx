import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2',
    fullWidth && 'w-full',
    disabled && 'opacity-60 cursor-not-allowed',
    {
      'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-btn hover:shadow-md': 
        variant === 'primary',
      'bg-white text-primary-500 border border-primary-500 hover:bg-primary-50 focus:ring-primary-500': 
        variant === 'secondary',
      'bg-accent-500 text-gray-900 hover:bg-accent-600 focus:ring-accent-500 shadow-btn hover:shadow-md': 
        variant === 'accent',
      'bg-transparent text-gray-700 hover:text-primary-500 hover:bg-gray-50 border border-gray-200': 
        variant === 'outline',
      'bg-transparent text-primary-500 hover:text-primary-600 hover:bg-primary-50': 
        variant === 'text',
      'text-sm px-4 py-2': size === 'sm',
      'text-base px-6 py-3': size === 'md',
      'text-lg px-8 py-4': size === 'lg',
    },
    className
  );

  if (href) {
    return (
      <Link to={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}