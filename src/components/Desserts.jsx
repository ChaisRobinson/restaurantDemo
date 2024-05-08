// Desserts.jsx
import React, { useState } from 'react';
import restaurantMenu from '../models/restaurantMenu';

const Desserts = () => {
  const [selectedDessert, setSelectedDessert] = useState(null);

  const handleDessertClick = (dessert) => {
    setSelectedDessert(dessert);
  };

  return (
    <div>
      <h2>Desserts</h2>
      {restaurantMenu.desserts.map((dessert, index) => (
        <div key={index}>
          <h3 className='dessert-name' onClick={() => handleDessertClick(dessert)}>{dessert.name}</h3>
          <p>{dessert.description}</p>
          {selectedDessert === dessert && (
            <div>
              <p>Price: ${dessert.price.toFixed(2)}</p>
              <img className="dessert-image" src={dessert.picture} alt={dessert.name} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Desserts;