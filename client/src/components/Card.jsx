import React from 'react';

const Card = ({ image, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" />
      <p>{description}</p>
      <a href={link}>Link</a>
    </div>
  );
};

export default Card;
