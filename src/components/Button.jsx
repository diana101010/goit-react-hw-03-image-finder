import React from 'react';
//import './Button.css'; // Ensure to include styles

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
