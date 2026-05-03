import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`
      bg-white rounded-[24px] overflow-hidden 
      ${hover ? 'transition-all duration-300 hover:-translate-y-2' : ''}
      blog-card-shadow ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;
