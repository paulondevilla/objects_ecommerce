import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ cartItem, addItem, removeItem, clearItemFromCart }) => {
  return (
    <div className="cart-item">
      <div className="item-image-container">
        <img src={cartItem.imageUrl} alt="cart item" />
        <span className="name">{cartItem.name}</span>
      </div>

      <div className="item-quantity-container">
        <div onClick={() => removeItem(cartItem)} className="arrow">
          <i className="fas fa-minus-circle" />
        </div>
        <span className="quantity">{cartItem.quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">
          <i className="fas fa-plus-circle" />
        </div>
      </div>

      <span className="price">$ {cartItem.quantity * cartItem.price}</span>

      <div
        onClick={() => clearItemFromCart(cartItem)}
        className="remove-button">
        <i className="far fa-trash-alt" />
      </div>
    </div>
  );
};

export default CartItem;
