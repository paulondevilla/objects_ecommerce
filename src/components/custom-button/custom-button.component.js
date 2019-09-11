import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, ...otherButtonProps }) => {
  return (
    <button
      className={`custom-button ${inverted ? 'inverted' : ''}`}
      {...otherButtonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
