import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ variant = 'primary', href, children, onClick, className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center font-label font-medium transition-all rounded-full active:scale-[0.98]";
  
  const variants = {
    primary: "bg-[#115238] text-white hover:shadow-xl hover:bg-[#2e6a4f]",
    ghost: "border border-[#115238] text-[#115238] hover:bg-[#115238]/5",
    text: "text-primary hover:underline underline-offset-4",
  };

  const sizes = "px-8 py-4 text-base";
  
  const combinedClassName = `${baseStyles} ${variants[variant]} ${variant !== 'text' ? sizes : ''} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('#')) {
      return (
        <a href={href} className={combinedClassName}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
