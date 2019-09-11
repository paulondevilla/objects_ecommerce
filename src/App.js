import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { default as Header } from './components/header/header.container';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { default as CartPage } from './pages/cart/cart.container';

import './App.styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="pages-container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
