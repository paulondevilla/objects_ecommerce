export const addItem = (cartItems, itemToAdd) => {
  const isInCart = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if (isInCart) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1)
    return clearItemFromCart(cartItems, itemToRemove);

  return cartItems.map(cartItem =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearItemFromCart = (cartItems, itemToClear) =>
  cartItems.filter(cartItem => cartItem.id !== itemToClear.id);
