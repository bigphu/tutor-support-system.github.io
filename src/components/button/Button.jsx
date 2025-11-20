import React from 'react'

import './Button.css';

const Button = ({ type, children, ...props }) => {
  // Decide the class based on the 'type' prop
  let className = 'text-medium large-3 medium-3 small-3';

  if (type === 'ghost') {
    className += ' button-ghost text-primary';
  } else {
    className += ' button-default text-light';
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;