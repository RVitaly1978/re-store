import React from 'react';
import {  Switch, Route, Link } from 'react-router-dom';

import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';

import './app.css';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/cart'>cart</Link></li>
      </ul>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/cart' component={CartPage} />
        <Route render={() => <div>404 Not Found</div>} />
      </Switch>
    </div>
  );
}

export default App;
