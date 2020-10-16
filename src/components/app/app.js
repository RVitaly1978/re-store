import React from 'react';
import {  Switch, Route, Link } from 'react-router-dom';

import ShopHeader from '../shop-header';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';

import './app.css';

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={5} total={210} />
      <ul className='row'>
        <li className='btn btn-secondary'><Link to='/'>home</Link></li>
        <li className='btn btn-secondary'><Link to='/cart'>cart</Link></li>
      </ul>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/cart' component={CartPage} />
        <Route render={() => <div>404 Not Found</div>} />
      </Switch>
    </main>
  );
}

export default App;
