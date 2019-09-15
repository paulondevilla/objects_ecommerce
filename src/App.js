import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { StripeProvider } from 'react-stripe-elements';

import { default as Header } from './components/header/header.container';
import Loader from './components/loader/loader.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import useStripe from './hooks/use-stripe.hook';

import './App.styles.scss';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CartPage = lazy(() => import('./pages/cart/cart.container'));

function App() {
  const [stripe] = useStripe();

  return (
    <StripeProvider stripe={stripe}>
      <div className="app">
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/cart" component={CartPage} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
    </StripeProvider>
  );
}

export default App;
