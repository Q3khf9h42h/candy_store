import React from 'react';
import Cart from './Cart';

const Header = ({ cartCount }) => {
  return (
    <header>
      <h1>Candy Store</h1>
      <Cart cartCount={cartCount} />
    </header>
  );
};

export default Header;
