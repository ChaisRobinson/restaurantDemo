// Appetizers.jsx
import React, { useState } from 'react';
import restaurantMenu from '../models/restaurantMenu';



const Appetizers = () => {
  const [selectedAppetizer, setSelectedAppetizer] = useState(null);

  const handleAppetizerClick = (appetizer) => {
    setSelectedAppetizer(appetizer);
  };

  return (
    <div>
      <h2>Appetizers</h2>
      {restaurantMenu.appetizers.map((appetizer, index) => (
        <div key={index}>
          <h3 className='appetizer-name' onClick={() => handleAppetizerClick(appetizer)}>{appetizer.name}</h3>
          <p>{appetizer.description}</p>
          {selectedAppetizer === appetizer && (
            <div>
              <p>Price: ${appetizer.price.toFixed(2)}</p>
              <img
                className="appetizer-image"
                src={appetizer.picture}//require?
                alt={appetizer.name}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Appetizers;
