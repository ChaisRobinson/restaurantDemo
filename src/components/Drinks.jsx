// Drinks.jsx
import React, { useState } from 'react';
import restaurantMenu from '../models/restaurantMenu';

const Drinks = () => {
  const [selectedDrink, setSelectedDrink] = useState(null);

  const handleDrinkClick = (drink) => {
    setSelectedDrink(drink);
  };

  return (
    <div>
      <h2>Drinks</h2>
      {restaurantMenu.drinks.map((drink, index) => (
        <div key={index}>
          <h3 className="drink-name" onClick={() => handleDrinkClick(drink)}>{drink.name}</h3>
          <p>{drink.description}</p>
          {selectedDrink === drink && (
            <div>
              <p>Price: ${drink.price.toFixed(2)}</p>
              <img className="drink-image" src={drink.picture} alt={drink.name} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Drinks;