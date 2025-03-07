import React from "react";
import './card.css';

const Card = ({ children, color, showCardColor }) => {
  return (
    <div className='card' style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  color: 'bisque',
};

export default Card;
