import React from 'react';

import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import CartPage from './cart.component';

const CartPageContainer = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return <CartPage cartItems={cartItems} cartTotal={cartTotal} />;
};

export default CartPageContainer;
