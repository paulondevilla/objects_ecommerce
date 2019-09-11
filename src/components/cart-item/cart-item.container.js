import React from 'react';

import { useDispatch } from 'react-redux';
import {
  addItem,
  removeItem,
  clearItemFromCart
} from '../../redux/cart/cart.actions';

import CartItem from './cart-item.component';

const CartItemContainer = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <CartItem
      addItem={cartItem => dispatch(addItem(cartItem))}
      removeItem={cartItem => dispatch(removeItem(cartItem))}
      clearItemFromCart={cartItem => dispatch(clearItemFromCart(cartItem))}
      cartItem={cartItem}
    />
  );
};

export default CartItemContainer;
