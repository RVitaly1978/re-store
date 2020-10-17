import React from 'react';
import {  Switch, Route } from 'react-router-dom';

import ShopHeader from '../shop-header';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';

import './app.css';

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={5} total={210} />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/cart' component={CartPage} />
        <Route render={() => <div>404 Not Found</div>} />
      </Switch>
    </main>
  );
}

export default App;
