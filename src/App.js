import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Candy from './components/Candy';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleBuy = (quantity) => {
    setCartCount(cartCount + quantity);
  };

  const candyData = [
    {
      name: 'ECLAIRES',
      description: 'Delicious candy description 1.',
      price: 1.99,
    },
    {
      name: 'PARLE',
      description: 'Yummy candy description 2.',
      price: 2.49,
    },
    // Add more candy data here
  ];

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <div className="candy-container">
        {candyData.map((candy, index) => (
          <Candy key={index} candy={candy} onBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
};

export default App;
