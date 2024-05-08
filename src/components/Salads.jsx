// Salads.jsx
import React, { useState } from 'react';
import restaurantMenu from '../models/restaurantMenu';

const Salads = () => {
  const [selectedSalad, setSelectedSalad] = useState(null);

  const handleSaladClick = (salad) => {
    setSelectedSalad(salad);
  };

  return (
    <div>
      <h2>Salads</h2>
      {restaurantMenu.salads.map((salad, index) => (
        <div key={index}>
          <h3 className='salad-name' onClick={() => handleSaladClick(salad)}>{salad.name}</h3>
          <p>{salad.description}</p>
          {selectedSalad === salad && (
            <div>
              <p>Price: ${salad.price.toFixed(2)}</p>
              <img className="salad-image" src={salad.picture} alt={salad.name} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Salads;
