// Entrees.jsx
import React, { useState } from 'react';
import restaurantMenu from '../models/restaurantMenu';

const Entrees = () => {
  const [selectedEntree, setSelectedEntree] = useState(null);

  const handleEntreeClick = (entree) => {
    setSelectedEntree(entree);
  };

  return (
    <div>
      <h2>Entrees</h2>
      {restaurantMenu.entrees.map((entree, index) => (
        <div key={index}>
          <h3 className='entree-name' onClick={() => handleEntreeClick(entree)}>{entree.name}</h3>
          <p>{entree.description}</p>
          {selectedEntree === entree && (
            <div>
              <p>Price: ${entree.price.toFixed(2)}</p>
              <img className="entree-image" src={entree.picture} alt={entree.name} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Entrees;