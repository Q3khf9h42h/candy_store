import React from 'react';

const Candy = ({ candy, onBuy }) => {
  return (
    <div className="candy">
      <h2>{candy.name}</h2>
      <p>{candy.description}</p>
      <p>Price: ${candy.price}</p>
      <div className="buy-buttons">
        <button onClick={() => onBuy(1)}>Buy 1</button>
        <button onClick={() => onBuy(2)}>Buy 2</button>
        <button onClick={() => onBuy(3)}>Buy 3</button>
      </div>
    </div>
  );
};

export default Candy;
