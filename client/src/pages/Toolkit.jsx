import React from 'react';
import AppbarTwo from '../components/AppbarTwo.jsx';
import Card from '../components/Card';

export default function Toolkit() {
  const cards = [
    {
      id: 1,
      image: 'image1.jpg',
      description: 'Card 1 description',
      link: '/card1',
    },
    {
      id: 2,
      image: 'image2.jpg',
      description: 'Card 2 description',
      link: '/card2',
    },
    {
      id: 3,
      image: 'image3.jpg',
      description: 'Card 3 description',
      link: '/card3',
    },
  ];

  return (
    <div>
      <AppbarTwo />
      <h2>Recommended for You</h2>
      <div className="card-row">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
      <h2>Viewed By Others</h2>
      {/* Add the section for "Viewed By Others" here */}
    </div>
  );
}
