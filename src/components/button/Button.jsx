import React from 'react'

import './Button.css';

const Button = ({ type, children, ...props }) => {
  // Decide the class based on the 'type' prop
  const className = type === 'ghost' ? 'button-ghost' : 'button-default';

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;