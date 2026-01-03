import React from 'react';
import { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 border border-transparent shadow-[0_0_15px_rgba(255,255,255,0.3)]",
    secondary: "bg-neutral-900 text-white border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800",
    outline: "bg-transparent text-white border border-neutral-700 hover:border-white/50",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200/20"></span>
      )}
      
      {/* Button Content */}
      <span className="relative flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
      
      {/* Beam effect for secondary/outline */}
      {(variant === 'secondary' || variant === 'outline') && (
         <div className="absolute inset-0 rounded-md ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-300" />
      )}
    </button>
  );
};