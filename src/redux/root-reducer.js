import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import headerReducer from './header/header.reducer';
import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  header: headerReducer,
  shop: shopReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
