import React from 'react';

import { default as CartItem } from '../../components/cart-item/cart-item.container';

import './cart.styles.scss';

const CartPage = ({ cartItems, cartTotal }) => {
  return (
    <section className="cart">
      <header className="cart-header">
        <h1>Shopping Cart</h1>
      </header>

      <div className="cart-items-container">
        <header className="cart-items-header">
          <div className="header-block">Product</div>
          <div className="header-block">Qty</div>
          <div className="header-block">Price</div>
        </header>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <div className="cart-items-total">
        <div className="title">
          Subtotal: <span className="amount">${cartTotal}</span>
        </div>
        <div className="title">
          Shipping: <span className="amount">Free Shipping</span>
        </div>
        <div className="title total">
          Total: <span className="amount">${cartTotal}</span>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
