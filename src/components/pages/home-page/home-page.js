import React from 'react';

import ShoppingCartTable from '../../shopping-cart-table/shopping-cart-table';
import BookList from '../../book-list';

import './home-page.css';

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
}

export default HomePage;
