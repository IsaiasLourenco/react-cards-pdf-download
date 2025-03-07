import React from 'react';
import './button.css';

const Button = ({ Text, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {Text}
    </button>
  );
};

export default Button;
